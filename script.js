const myLibrary = [];

function Book(title, author, pages, published, notes) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.published = published;
    this.notes = notes;
};

// placeholder books
const book1 = new Book("Babel", "R.F. Kuang", 544, 2022, "Such an amazing book.");
const book2 = new Book("Living in Data", "Jer Thorp", 300, 2021, "A great read, and other platitudes.");
const book3 = new Book("Left Hand of Darkness", "Ursula K. Le Guinn", 341, 1969, "Read and see for yourself.");
myLibrary.push(book1, book2, book3);

// dialog event handlers
const newBookButton = document.querySelector('.new-book-button');
newBookButton.addEventListener("click", () => dialog.showModal());
const form = document.querySelector('#book-info-form');
const dialog = document.querySelector('.dialog');
dialog.addEventListener("submit", (event) => {
    event.preventDefault();
    addBookToLibrary();
    console.log(myLibrary);
    buildNewBookElement();
    form.reset();
});

const saveButton = document.querySelector('.save-button');
saveButton.addEventListener("click", () => { dialog.close() });


// TODO: use this stuff to create a new book object

const titleInput = form.elements['title'].value;
const authorInput = form.elements['author'].value;
const pagesInput = parseInt(form.elements['pages'].value);
const pubYearInput = parseInt(form.elements['pub-year'].value);
const notesInput = form.elements['notes'].value;
const newBook = new Book(titleInput, authorInput, pagesInput, pubYearInput, notesInput);


// TODO: trigger this on 'save' event
function addBookToLibrary() {
    myLibrary.push(newBook);
    console.log(myLibrary);
}; 

// Book UI
function buildNewBookElement() {
    // TODO: some way to grab our book from the library array


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
    titleElement.textContent = `Title: ${newBook.title}`;

    // author
    const authorElement = document.createElement('p');
    authorElement.classList.add('author');
    bookElement.appendChild(authorElement);
    authorElement.textContent = `Author: ${newBook.author}`;

    // year published
    const pubYearElement = document.createElement('p');
    pubYearElement.classList.add('pub-year');
    bookElement.appendChild(pubYearElement);
    pubYearElement.textContent = `Year Published: ${newBook.published}`

    //pages
    const pagesElement = document.createElement('p');
    pagesElement.classList.add('pages');
    bookElement.appendChild(pagesElement);
    pagesElement.textContent = `Number of pages: ${newBook.pages}`;

    // note
    const newNotesElement = document.createElement('li');
    newNotesElement.setAttribute('id', 'notes');
    newBookInfoElement.appendChild(newNotesElement);
    newNotesElement.textContent = `Notes: ${newBook.notes}`;

    // delete
    const deleteBtn = document.createElement('button');
    deleteBtn.classList.add('button delete-button');
    bookElement.appendChild(deleteBtn);
    deleteBtn.textContent = "Delete";
};




// BELOW IS SUBJECT TO REVISION



const deleteBtn = document.querySelector('.deleteBtn');

