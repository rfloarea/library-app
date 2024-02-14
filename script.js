const myLibrary = [];

// our book object constructor
function Book(title, author, pages, published, notes) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.published = published;
    this.notes = notes;
};

// placeholder books
// TODO: display these in UI on window load
const book1 = new Book("Babel", "R.F. Kuang", 544, 2022, "Such an amazing book.");
const book2 = new Book("Living in Data", "Jer Thorp", 300, 2021, "A great read, and other platitudes.");
const book3 = new Book("Left Hand of Darkness", "Ursula K. Le Guinn", 341, 1969, "Read and see for yourself.");
myLibrary.push(book1, book2, book3);

// dialog event handlers
const newBookButton = document.querySelector('.new-book-button');
newBookButton.addEventListener("click", () => dialog.showModal());
const saveButton = document.querySelector('.save-button');
saveButton.addEventListener("click", () => { dialog.close() });
const form = document.querySelector('#book-info-form');
const dialog = document.querySelector('.dialog');
dialog.addEventListener("submit", (event) => {
    event.preventDefault();
    addBookToLibrary();
    displayBook();
    form.reset();
});

function addBookToLibrary() {
    // user input feeds our object constructor
    const titleInput = form.elements['title'].value;
    const authorInput = form.elements['author'].value;
    const pagesInput = form.elements['pages'].value;
    const pubYearInput = form.elements['pub-year'].value;
    const notesInput = form.elements['notes'].value;
    const newBook = new Book(titleInput, authorInput, pagesInput, pubYearInput, notesInput);
    myLibrary.push(newBook);
    console.log(newBook);
    console.table(myLibrary);
}; 

// Book UI
function displayBook() {

    // retrieve our newest book from our library
    const book = myLibrary[myLibrary.length - 1];
    console.log(book);

    // used to create our book element layout
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
    const titleElement = createElementWith(`p`, `title`, `Title: ${book.title}`)

    // author
    const authorElement = createElementWith(`p`, `author`, `Author: ${book.author}`)

    // year published
    const pubYearElement = createElementWith(`p`, `pub-year`, `Year Published: ${book.published}`)

    //pages
    const pagesElement = createElementWith('p', `pages`, `Number of pages: ${book.pages}`);

    // note
    const notesElement = createElementWith(`p`, `notes`, `Notes: ${book.notes}`);

    // delete
    const deleteBtn = createElementWith(`button`, `button`, `Delete`);

    console.log(myLibrary);

};