import * as mdb from 'mdb-ui-kit';

export default {
  mdb,
};

const creatingElementsOfTable = () => {

    const toReadBody = document.querySelector('.table__to-read-body');
    const creatingTr = document.createElement('tr');
    toReadBody.append(creatingTr);

    const creatingTdTitle = document.createElement('td');
    const creatingTdAuthor = document.createElement('td');
    const creatingTdCategory = document.createElement('td');
    const creatingTdPriority = document.createElement('td');
    const removingTr = document.createElement('td');

    creatingTr.append(creatingTdTitle);
    creatingTr.append(creatingTdAuthor);
    creatingTr.append(creatingTdCategory);
    creatingTr.append(creatingTdPriority);
    creatingTr.append(removingTr);

    const titleOfBook = document.querySelector('.form__title');
    const authorOfBook = document.querySelector('.form__author');
    const categoryOfBook = document.querySelector('.form__category');
    const priorityOfBook = document.querySelector('.form__priority');

    creatingTdTitle.textContent = titleOfBook.value;
    creatingTdAuthor.textContent = authorOfBook.value;
    creatingTdCategory.textContent = categoryOfBook.value;
    creatingTdPriority.textContent = priorityOfBook.value;
    removingTr.textContent = "X";

    titleOfBook.value = "";
    authorOfBook.value = "";
    categoryOfBook.value = "";
    priorityOfBook.value = "";

    removingTr.addEventListener('click', (e) => {
        e.preventDefault();
        creatingTr.remove();
    });

};

const submit = document.querySelector('.form__submit');

submit.addEventListener('click', (e) => {
    e.preventDefault();
    creatingElementsOfTable();
});