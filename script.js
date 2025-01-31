const addBookContainer = document.querySelector(".addButton-container");
const newBookButton = addBookContainer.querySelector(`button`);
const dialog = document.querySelector(`dialog`);
const closeButton = document.querySelector(`.close-button-container`).querySelector(`button`);

const bookTitle = document.querySelector(`.title-container`).querySelector(`input`);
const bookAuthor = document.querySelector(`.author-container`).querySelector(`input`);
const bookPages = document.querySelector(`.pages-container`).querySelector(`input`);

const bookContainer = document.querySelector(`.grid-container`);


function showModal() {
    dialog.showModal();
}

function closeModal() {
    dialog.close();
}

newBookButton.addEventListener(`click`, showModal);
closeButton.addEventListener(`click`, closeModal);

const myLibrary = [];

function Book(title, author, pages, readStatus) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.readStatus = readStatus;
}

function addBookToLibrary() {
    let bookReadStatus = document.querySelector(`.radio-container input:checked`);
    myLibrary.unshift(new Book(`${bookTitle.value}`, `${bookAuthor.value}`, `${bookPages.value}`, `${bookReadStatus.value}`));
}

const submitButton = document.querySelector(`button[type="submit"]`);

submitButton.addEventListener(`click`, () => {
    addBookToLibrary();
    closeModal();
})

const form = document.querySelector(`.form-dialog`);
form.addEventListener(`submit`, (event) => {
    event.preventDefault();
    showLibrary();
})

function clearContainer() {
    if (myLibrary.length > 1) {
        const duplicateArticles = bookContainer.querySelectorAll(`article`);
        duplicateArticles.forEach(item => item.remove());
    }
}

function showLibrary() {

    clearContainer();

    myLibrary.forEach((item) => {
        const generatedArticle = document.createElement(`article`);
        generatedArticle.classList.add(`generated-article`);
        bookContainer.appendChild(generatedArticle);

        const generatedButtons = document.createElement(`div`);
        generatedButtons.classList.add(`generated-buttons`);
        generatedArticle.appendChild(generatedButtons);

        const readButton = document.createElement(`button`);
        readButton.classList.add(`read-button`);
        generatedButtons.appendChild(readButton);

        const deleteButton = document.createElement(`button`);
        deleteButton.classList.add(`delete-button`);
        generatedButtons.appendChild(deleteButton);

        const generatedTitle = document.createElement(`h2`);
        generatedTitle.classList.add(`generated-title`);
        generatedArticle.appendChild(generatedTitle);

        const generatedAuthor = document.createElement(`p`);
        generatedAuthor.classList.add(`generated-author`);
        generatedArticle.appendChild(generatedAuthor);


        generatedTitle.textContent = item["title"];
        generatedAuthor.textContent = item["author"];
    })
}


