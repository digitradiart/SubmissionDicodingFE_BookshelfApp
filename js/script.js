document.addEventListener('DOMContentLoaded', () => {
  bookForm.addEventListener('submit', handleFormSubmit);

  if (isStorageExist()) {
    loadDataFromStorage();
  } else {
    renderBooks();
  }
});

document.addEventListener('ondatasaved', () => {
  console.info('Data berhasil disimpan di localStorage.');
});

document.addEventListener('ondataloaded', () => {
  renderBooks(getCurrentFilter());
});

function handleFormSubmit(event) {
  event.preventDefault();
  const title = titleInput.value.trim();
  const author = authorInput.value.trim();
  const year = Number(yearInput.value);
  const isComplete = statusInput.checked;

  if (!title || !author || Number.isNaN(year) || year <= 0) {
    alert('Lengkapi judul, penulis, dan tahun buku yang valid.');
    return;
  }

  if (editingBookId) {
    const book = findBook(editingBookId);
    if (!book) {
      resetForm();
      return;
    }
    book.title = title;
    book.author = author;
    book.year = year;
    book.isComplete = isComplete;
    editingBookId = null;
  } else {
    const bookObject = composeBookObject(title, author, year, isComplete);
    books.push(bookObject);
  }

  updateDataToStorage();
  renderBooks(getCurrentFilter());
  resetForm();
}
