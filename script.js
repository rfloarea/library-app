const myLibrary = [];

function Book(title, author, pages, published, notes) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.published = published;
    this.notes = notes;
};

// placeholder books
// display these in UI on window load
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
    // form.reset();
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
function addBookToLibrary(newBook) {
    myLibrary.push(newBook);
    console.log(myLibrary);
}; 

// Book UI
function buildNewBookElement() {
    // TODO: some way to grab our book from the library array

    // helper function
    function createElementWith(type, className, textContent) {
        const element = document.createElement(type);
        element.classList.add(className);
        bookElement.append(element);
        element.textContent = textContent;
        return element;
    }
    // book shelf
    const bookShelf = document.querySelector('.book-shelf');

    // book
    const bookElement = document.createElement('div');
    bookElement.classList.add('book');
    bookShelf.appendChild(bookElement);

    //title
    const titleElement = createElementWith(`p`, `title`, `Title: ${newBook.title}`)

    // author
    const authorElement = createElementWith(`p`, `author`, `Author: ${newBook.author}`)

    // year published
    const pubYearElement = createElementWith(`p`, `pub-year`, `Year Published: ${newBook.published}`)

    //pages
    const pagesElement = createElementWith('p', `pages`, `Number of pages: ${newBook.pages}`);

    // note
    const notesElement = createElementWith(`p`, `notes`, `Notes: ${newBook.notes}`);

    // delete
    const deleteBtn = createElementWith(`button`, `button`, `Delete`);

};