const STORAGE_KEY = 'BOOKSHELF_APPS';

let books = [];

function isStorageExist() {
  if (typeof Storage === 'undefined') {
    alert('Browser kamu tidak mendukung localStorage.');
    return false;
  }
  return true;
}

function saveData() {
  const parsed = JSON.stringify(books);
  localStorage.setItem(STORAGE_KEY, parsed);
  document.dispatchEvent(new Event('ondatasaved'));
}

function loadDataFromStorage() {
  const serializedData = localStorage.getItem(STORAGE_KEY);
  if (serializedData === null) {
    books = [];
    document.dispatchEvent(new Event('ondataloaded'));
    return;
  }

  const data = JSON.parse(serializedData);
  if (Array.isArray(data)) {
    books = data;
  }
  document.dispatchEvent(new Event('ondataloaded'));
}

function updateDataToStorage() {
  if (isStorageExist()) {
    saveData();
  }
}

function composeBookObject(title, author, year, isComplete) {
  return {
    id: +new Date(),
    title,
    author,
    year,
    isComplete,
  };
}

function findBook(bookId) {
  for (const book of books) {
    if (book.id === bookId) {
      return book;
    }
  }
  return null;
}

function findBookIndex(bookId) {
  for (let index = 0; index < books.length; index += 1) {
    if (books[index].id === bookId) {
      return index;
    }
  }
  return -1;
}
