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