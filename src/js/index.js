import * as mdb from 'mdb-ui-kit';

export default {
  mdb,
};

const creatingElementsOfTable = () => {

    const toReadBody = document.querySelector('.table__to-read-body');
    const creatingTr = document.createElement('tr');
    toReadBody.append(creatingTr);

    const tableToRead = document.querySelector('.table__to-read-body');
    const quantityOfTr = tableToRead.getElementsByTagName('tr');
    // quantityOfTr.length - 1;
    // console.log(quantityOfTr.value);

    const creatingTdTitle = document.createElement('td');
    const creatingTdAuthor = document.createElement('td');
    const creatingTdCategory = document.createElement('td');
    const creatingTdPriority = document.createElement('td');

    const creatingInputTitle = document.createElement('input');
    creatingInputTitle.readOnly = true;
    const creatingInputAuthor = document.createElement('input');
    creatingInputAuthor.readOnly = true;
    const creatingInputCategory = document.createElement('input');
    creatingInputCategory.readOnly = true;
    const creatingInputPriority = document.createElement('input');
    creatingInputPriority.readOnly = true;
    const editBtn = document.createElement('button');
    const removingTrBtn = document.createElement('button');

    creatingTdTitle.classList.add('title');
    editBtn.classList.add('editBtn');

    creatingTr.append(creatingTdTitle);
    creatingTr.append(creatingTdAuthor);
    creatingTr.append(creatingTdCategory);
    creatingTr.append(creatingTdPriority);
    creatingTr.append(editBtn);
    creatingTr.append(removingTrBtn);

    creatingTdTitle.append(creatingInputTitle);
    creatingTdAuthor.append(creatingInputAuthor);
    creatingTdCategory.append(creatingInputCategory);
    creatingTdPriority.append(creatingInputPriority);

    const titleOfBook = document.querySelector('.form__title');
    const authorOfBook = document.querySelector('.form__author');
    const categoryOfBook = document.querySelector('.form__category');
    const priorityOfBook = document.querySelector('.form__priority');

    creatingInputTitle.value = titleOfBook.value;
    creatingInputAuthor.value = authorOfBook.value;
    creatingInputCategory.value = categoryOfBook.value;
    creatingInputPriority.value = priorityOfBook.value;
    editBtn.textContent = 'Edytuj';
    removingTrBtn.textContent = 'Usuń';

    titleOfBook.value = '';
    authorOfBook.value = '';
    categoryOfBook.value = '';
    priorityOfBook.value = '';

    const editElementOfTheTable = () => {
        creatingInputTitle.toggleAttribute('readonly');
        creatingInputAuthor.toggleAttribute('readonly');
        creatingInputCategory.toggleAttribute('readonly');
        creatingInputPriority.toggleAttribute('readonly');

        if (creatingInputTitle.hasAttribute('readonly')) {
            editBtn.textContent = 'Edytuj';
        } else {
            editBtn.textContent = 'Zakończ';
        }
    };

    const quantity = document.querySelector('.table__to-read-body-quantity');
    quantity.textContent = `Liczba książek: ${quantityOfTr.length - 2}`;

    editBtn.addEventListener('click', () => {
        editElementOfTheTable();
    });

    removingTrBtn.addEventListener('click', () => {
        creatingTr.remove();
        const quantity = document.querySelector('.table__to-read-body-quantity');
        quantity.textContent = `Liczba książek: ${quantityOfTr.length - 2}`;
    });

};

const submit = document.querySelector('.form__submit');

submit.addEventListener('click', (e) => {
    e.preventDefault();
    creatingElementsOfTable();
});
