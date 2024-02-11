const myLibrary = [];

function Book(title, author, pages, published, notes) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.published = published;
    this.notes = notes;
};

// Placeholder Books
const book1 = new Book("Babel", "R.F. Kuang", 544, 2022, "Such an amazing book.");
const book2 = new Book("Living in Data", "Jer Thorp", 300, 2021, "A great read, and other platitudes.");
const book3 = new Book("Left Hand of Darkness", "Ursula K. Le Guinn", 341, 1969, "Read and see for yourself.");
myLibrary.push(book1, book2, book3);


const newBookButton = document.querySelector('.new-book-button');
newBookButton.addEventListener("click", () => dialog.showModal());

const dialog = document.querySelector('.dialog');


const form = document.querySelector('#addBook');
const saveBtn = document.querySelector('.saveBtn');
const deleteBtn = document.querySelector('.deleteBtn');
const titleInput = form.elements['title'].value;
const authorInput = form.elements['author'].value;
const pagesInput = form.elements['pages'].value;
const readInput = form.elements['read'].checked;
const notesInput = form.elements['notes'].value;


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
    
    // book shelf
    const shelf = document.querySelector('.shelf');

    // book
    const bookElement = document.createElement('div');
    bookElement.classList.add('book');
    shelf.appendChild(bookElement);

    //title
    const titleElement = document.createElement('p');
    titleElement.classList.add('title');
    bookElement.appendChild(titleElement);
    titleElement.textContent = `Title: ${Book.title}`;

    // author
    const authorElement = document.createElement('p');
    authorElement.classList.add('author');
    bookElement.appendChild(authorElement);
    authorElement.textContent = `Author: ${Book.author}`;

    // year published
    const pubYearElement = document.createElement('p');
    pubYearElement.classList.add('pub-year');
    bookElement.appendChild(pubYearElement);
    pubYearElement.textContent = `Year Published: ${Book.publihsed}`

    //pages
    const pagesElement = document.createElement('p');
    pagesElement.classList.add('pages');
    bookElement.appendChild(pagesElement);
    pagesElement.textContent = `Number of pages: ${Book.pages}`;

    // note
    const newNotesElement = document.createElement('li');
    newNotesElement.setAttribute('id', 'notes');
    newBookInfoElement.appendChild(newNotesElement);
    newNotesElement.textContent = `Notes: ${Book.notes}`;

    // delete
    const deleteBtn = document.createElement('button');
    deleteBtn.classList.add('button delete-button');
    bookElement.appendChild(deleteBtn);
    deleteBtn.textContent = "Delete";
};