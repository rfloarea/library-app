// this is a test change to the branch to see how it works

const myLibrary = [];

function Book(title, author, pages, read, notes) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.notes = notes;
};

// Placeholder Books
const book1 = new Book("Babel", "R.F. Kuang", 544, true, "Such an amazing book.");
const book2 = new Book("Living in Data", "Jer Thorp", 300, true, "A great read, and other platitudes.");
const book3 = new Book("Left Hand of Darkness", "Ursula K. Le Guinn", 341, true, "Read and see for yourself.");
myLibrary.push(book1, book2, book3);


const addBookBtn = document.querySelector('.addBookBtn');
const dialog = document.querySelector('.dialog');
const form = document.querySelector('#addBook');
const saveBtn = document.querySelector('.saveBtn');
const deleteBtn = document.querySelector('.deleteBtn');
const titleInput = form.elements['title'].value;
const authorInput = form.elements['author'].value;
const pagesInput = form.elements['pages'].value;
const readInput = form.elements['read'].checked;
const notesInput = form.elements['notes'].value;

addBookBtn.addEventListener("click", () => dialog.showModal());
dialog.addEventListener("submit", (event) => {
    event.preventDefault();
    addBookToLibrary();
    buildNewBookElement();
    form.reset();
});
saveBtn.addEventListener("click", () => { dialog.close() });

const newBook = new Book(titleInput, authorInput, pagesInput, readInput, notesInput);

function addBookToLibrary() {
    myLibrary.push(newBook);
    console.log(myLibrary);
};

// Book UI
function buildNewBookElement() {
    
    const Book = myLibrary[myLibrary.length - 1];
    console.log(Book);
    
    const shelves = document.querySelector('.shelves');

    const newBookElement = document.createElement('div');
    newBookElement.classList.add('book');
    shelves.appendChild(newBookElement);

    const newBookInfoElement = document.createElement('ul');
    newBookInfoElement.classList.add('bookInfo');
    newBookElement.appendChild(newBookInfoElement);

    const newTitleElement = document.createElement('li');
    newTitleElement.setAttribute('id', 'title');
    newBookInfoElement.appendChild(newTitleElement);
    newTitleElement.textContent = `Title: ${Book.title}`;

    const newAuthorElement = document.createElement('li');
    newAuthorElement.setAttribute('id', 'author');
    newBookInfoElement.appendChild(newAuthorElement);
    newAuthorElement.textContent = `Author: ${Book.author}`;

    const newPagesElement = document.createElement('li');
    newPagesElement.setAttribute('id', 'pages');
    newBookInfoElement.appendChild(newPagesElement);
    newPagesElement.textContent = `Number of pages: ${Book.pages}`;

    const newReadElement = document.createElement('li');
    newReadElement.setAttribute('id', 'read');
    newBookInfoElement.appendChild(newReadElement);
    newReadElement.textContent = `Have you read it? ${Book.read}`;

    const newNotesElement = document.createElement('li');
    newNotesElement.setAttribute('id', 'notes');
    newBookInfoElement.appendChild(newNotesElement);
    newNotesElement.textContent = `Notes: ${Book.notes}`;

    const newBookBtns = document.createElement('button');
    newBookBtns.classList.add('bookBtns');
    newBookElement.appendChild(newBookBtns);

    const newDeleteBtn = document.createElement('button');
    newDeleteBtn.classList.add('deleteBtn');
    newBookBtns.appendChild(newDeleteBtn);
    newDeleteBtn.textContent = "delete";
};