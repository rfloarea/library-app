const myLibrary = [];

const addBookBtn = document.querySelector('.addBookBtn');
const dialog = document.querySelector('.dialog');
const form = document.querySelector('#addBook');
const saveBtn = document.querySelector('.saveBtn');

addBookBtn.addEventListener("click", () => dialog.showModal());
dialog.addEventListener("submit", (event) => {
    event.preventDefault();
    addNewBookToLibrary();
    buildNewBookElement();
    form.reset();
});
saveBtn.addEventListener("click", () => {
    dialog.close();
});

function Book(title, author, pages, read, notes) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.notes = notes;
};

function addNewBookToLibrary() {
    const form = document.querySelector('#addBook');

    const titleInput = form.elements['title'].value;
    const authorInput = form.elements['author'].value;
    const pagesInput = form.elements['pages'].value;
    const readInput = form.elements['read'].checked;
    const notesInput = form.elements['notes'].value;


    const newBook = new Book(titleInput, authorInput, pagesInput, readInput, notesInput);
    myLibrary.push(newBook);
    console.log(newBook);
    console.log(myLibrary);
};
    
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

    const newEditBtn = document.createElement('button');
    newEditBtn.classList.add('editBtn');
    newBookBtns.appendChild(newEditBtn);
    newEditBtn.textContent = "edit";

    const newDeleteBtn = document.createElement('button');
    newDeleteBtn.classList.add('deleteBtn');
    newBookBtns.appendChild(newDeleteBtn);
    newDeleteBtn.textContent = "delete";
};