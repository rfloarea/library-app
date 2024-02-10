// this is the array that will store all our book objects
const myLibrary = [];

const addBookBtn = document.querySelector('.addBookBtn');
const dialog = document.querySelector('.dialog');
const saveBtn = document.querySelector('.saveBtn');

addBookBtn.addEventListener("click", () => dialog.showModal());
saveBtn.addEventListener("click", () => dialog.close());

// book constructor to make the book objects
function Book(title, author, pages, read, notes) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.notes = notes;
};

// eventlistern on "add a book" opens a form
// submitting that form pushes that data into these values below
const newBook = Object.create(Book);
// this is dummy data
newBook.title = "Babel"; // form data from "title"
newBook.author = "R.F. Kuang"; // form data from "author"
newBook.pages = "500 pages"; // form data from "pages"
newBook.read = "I have read"; // form data from "read"
newBook.notes = "This book is amazing!"; // form data from "notes"

addBookToLibrary(newBook);
// then generate and display a new element at newBook's index
function addBookToLibrary() {
  myLibrary.push(newBook);
  console.log(myLibrary);
  // find list object in array

  // build a new element for that object
  const shelves = document.querySelector('.shelves');

  const newBookElement = document.createElement('div');
  newBookElement.classList.add('.book');
  shelves.appendChild(newBookElement);

  const newBookInfoElement = document.createElement('ul');
  newBookInfoElement.classList.add('.bookInfo');
  newBookElement.appendChild(newBookInfoElement);

  const newTitleElement = document.createElement('li');
  newBookInfoElement.appendChild(newTitleElement);
  newTitleElement.textContent = newBook.title;

  const newAuthorElement = document.createElement('li');
  newBookInfoElement.appendChild(newAuthorElement);
  newAuthorElement.textContent = newBook.author;

  const newPagesElement = document.createElement('li');
  newBookInfoElement.appendChild(newPagesElement);
  newPagesElement.textContent = newBook.pages;

  const newReadElement = document.createElement('li');
  newBookInfoElement.appendChild(newReadElement);
  newReadElement.textContent = newBook.read;

  const newNotesElement = document.createElement('li');
  newBookInfoElement.appendChild(newNotesElement);
  newNotesElement.textContent = newBook.notes;

  const newBookBtns = document.createElement('button');
  newBookBtns.classList.add('.bookBtns');
  newBookElement.appendChild(newBookBtns);

  const newEditBtn = document.createElement('button');
  newEditBtn.classList.add('.editBtn');
  newBookBtns.appendChild(newEditBtn);

  const newDeleteBtn = document.createElement('button');
  newDeleteBtn.classList.add('.deleteBtn');
  newBookBtns.appendChild(newDeleteBtn);
}