// this is the array that will store all our book objects
const myLibrary = [];

// book constructor to make the book objects
function Book(title, author, pages, read, notes) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.notes = notes;
};

// eventlistener on "add a book" opens a form
// submitting that form pushes that data into these values below
const newBook = Object.create(Book);
// this is dummy data
newBook.title = "Babel";
newBook.author = "R.F. Kuang";
newBook.pages = "500 pages";
newBook.read = "I have read";
newBook.notes = "This book is amazing!"

// then we add that newBook to our array
// then generate and display a new element at newBook's index
function addBookToLibrary(newBook) {
    myLibrary.push(newBook);
}

addBookToLibrary(newBook);
console.log(myLibrary);