const INCOMPLETE_LIST_ID = "incompleteBookshelfList";
const COMPLETE_LIST_ID = "completedBookshelfList";

const bookForm = document.getElementById("book-form");
const titleInput = document.getElementById("title");
const authorInput = document.getElementById("author");
const yearInput = document.getElementById("year");
const statusInput = document.getElementById("isComplete");
const submitButton = document.getElementById("formSubmit");
const cancelButton = document.getElementById("formCancel");
const formHeader = document.getElementById("formTitle");
const searchInput = document.getElementById("searchBook");

let editingBookId = null;

function createBookCard(book) {
  const card = document.createElement("article");
  card.className = "book-card";
  card.setAttribute("data-bookid", book.id);
  card.setAttribute("data-testid", "bookItem");

  const statusLabel = book.isComplete
    ? "Selesai dibaca"
    : "Belum selesai dibaca";
  const moveLabel = book.isComplete
    ? "Pindahkan ke rak belum selesai"
    : "Tandai selesai dibaca";

  const title = document.createElement("h3");
  title.textContent = book.title;
  title.setAttribute("data-testid", "bookItemTitle");

  const author = document.createElement("p");
  author.className = "book-card__meta";
  author.textContent = `Penulis: ${book.author}`;
  author.setAttribute("data-testid", "bookItemAuthor");

  const year = document.createElement("p");
  year.className = "book-card__meta";
  year.textContent = `Tahun: ${book.year}`;
  year.setAttribute("data-testid", "bookItemYear");

  const status = document.createElement("p");
  status.className = "book-card__status";
  status.textContent = statusLabel;

  const actions = document.createElement("div");
  actions.className = "card-actions";

  actions.append(
    createActionButton(moveLabel, "move", "bookItemIsCompleteButton", () =>
      toggleCompletion(book.id),
    ),
    createActionButton("Edit", "edit", "bookItemEditButton", () =>
      startEditing(book.id),
    ),
    createActionButton("Hapus", "delete", "bookItemDeleteButton", () =>
      removeBook(book.id),
    ),
  );

  card.append(title, author, year, status, actions);
  return card;
}

function createActionButton(label, modifier, testId, handler) {
  const button = document.createElement("button");
  button.type = "button";
  button.className = modifier;
  button.setAttribute("data-testid", testId);
  button.textContent = label;
  button.addEventListener("click", handler);
  return button;
}

function toggleCompletion(bookId) {
  const parsedId = Number(bookId);
  const book = findBook(parsedId);
  if (!book) return;
  book.isComplete = !book.isComplete;
  updateDataToStorage();
  renderBooks(getCurrentFilter());
}

function removeBook(bookId) {
  const parsedId = Number(bookId);
  const index = findBookIndex(parsedId);
  if (index === -1) return;
  books.splice(index, 1);
  updateDataToStorage();
  renderBooks(getCurrentFilter());
  if (editingBookId === parsedId) {
    resetForm();
  }
}

function startEditing(bookId) {
  const parsedId = Number(bookId);
  const book = findBook(parsedId);
  if (!book) return;

  editingBookId = parsedId;
  formHeader.textContent = "Edit Buku";
  submitButton.textContent = "Perbarui buku";
  statusInput.checked = book.isComplete;
  titleInput.value = book.title;
  authorInput.value = book.author;
  yearInput.value = book.year;
}

function resetForm() {
  editingBookId = null;
  formHeader.textContent = "Tambah Buku Baru";
  submitButton.textContent = "Simpan buku";
  bookForm.reset();
}

function getCurrentFilter() {
  return searchInput?.value.trim() || "";
}

function renderBooks(filter = "") {
  const uncompletedList = document.getElementById(INCOMPLETE_LIST_ID);
  const completedList = document.getElementById(COMPLETE_LIST_ID);
  uncompletedList.innerHTML = "";
  completedList.innerHTML = "";

  const normalizedFilter = filter.trim().toLowerCase();
  const filteredBooks = normalizedFilter
    ? books.filter((book) =>
        book.title.toLowerCase().includes(normalizedFilter),
      )
    : books;

  const uncompletedBooks = filteredBooks.filter((book) => !book.isComplete);
  const completedBooks = filteredBooks.filter((book) => book.isComplete);

  document.getElementById("count-incomplete").textContent =
    uncompletedBooks.length;
  document.getElementById("count-complete").textContent = completedBooks.length;

  if (uncompletedBooks.length === 0) {
    uncompletedList.append(
      createEmptyState(
        "Belum ada buku di rak ini. Tambahkan buku baru terlebih dahulu.",
      ),
    );
  } else {
    uncompletedBooks.forEach((book) =>
      uncompletedList.append(createBookCard(book)),
    );
  }

  if (completedBooks.length === 0) {
    completedList.append(
      createEmptyState(
        "Rak masih kosong. Tandai buku selesai agar tampil di sini.",
      ),
    );
  } else {
    completedBooks.forEach((book) =>
      completedList.append(createBookCard(book)),
    );
  }
}

function createEmptyState(message) {
  const empty = document.createElement("div");
  empty.className = "empty-state";
  empty.textContent = message;
  return empty;
}

document.addEventListener("DOMContentLoaded", () => {
  searchInput?.addEventListener("input", () => renderBooks(getCurrentFilter()));
  cancelButton?.addEventListener("click", resetForm);
});
