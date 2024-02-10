// this is the array that will store all our book objects
const myLibrary = [];

const addBookBtn = document.querySelector('.addBookBtn');
const dialog = document.querySelector('.dialog');
const saveBtn = document.querySelector('.saveBtn');

addBookBtn.addEventListener("click", () => dialog.showModal());
saveBtn.addEventListener("click", () => {
    getNewBookInputs();
    dialog.close();
});


// book constructor to make the book objects
function Book(title, author, pages, read, notes) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.notes = notes;
};

function getNewBookInputs() {
    const titleInput = document.querySelector('#title').value;
    const authorInput = document.querySelector('#author').value;
    const pagesInput = document.querySelector('#pages').value;
    const readInput = document.querySelector('#read').value;
    const notesInput = document.querySelector('#notes').value;
    const newBook = new Book(titleInput, authorInput, pagesInput, readInput, notesInput);
    myLibrary.push(newBook);
    console.log(newBook);
    console.log(myLibrary);

    buildNewBook(newBook);

    function buildNewBook() {
        
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
        newTitleElement.textContent = newBook.title;
    
        const newAuthorElement = document.createElement('li');
        newAuthorElement.setAttribute('id', 'author');
        newBookInfoElement.appendChild(newAuthorElement);
        newAuthorElement.textContent = newBook.author;
    
        const newPagesElement = document.createElement('li');
        newPagesElement.setAttribute('id', 'pages');
        newBookInfoElement.appendChild(newPagesElement);
        newPagesElement.textContent = newBook.pages;
    
        const newReadElement = document.createElement('li');
        newReadElement.setAttribute('id', 'read');
        newBookInfoElement.appendChild(newReadElement);
        newReadElement.textContent = newBook.read;
    
        const newNotesElement = document.createElement('li');
        newNotesElement.setAttribute('id', 'notes');
        newBookInfoElement.appendChild(newNotesElement);
        newNotesElement.textContent = newBook.notes;
    
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
    }
};