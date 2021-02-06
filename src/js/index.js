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
    creatingTr.classList.add('table__to-read-body-tr');
    removingTrBtn.classList.add('removeBtn');

    creatingTr.append(creatingTdTitle);
    creatingTr.append(creatingTdAuthor);
    creatingTr.append(creatingTdCategory);
    creatingTr.append(creatingTdPriority);
    creatingTr.append(editBtn);
    creatingTr.append(removingTrBtn);

    creatingTdTitle.append(creatingInputTitle);
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

    const quantity = document.querySelector('.table__to-read-quantity');
    quantity.textContent = `Liczba książek: ${quantityOfTr.length}`;
    editBtn.addEventListener('click', () => {
        editElementOfTheTable();
    });

    removingTrBtn.addEventListener('click', () => {
        creatingTr.remove();
        const quantity = document.querySelector('.table__to-read-quantity');
        quantity.textContent = `Liczba książek: ${quantityOfTr.length}`;
    });

};

const submit = document.querySelector('.form__submit');
submit.addEventListener('click', (e) => {
    e.preventDefault();
    creatingElementsOfTable();
});

const creatingNewCategory = () => {
    const creatingNewCategoryInput = document.querySelector('.form__creating-category-input');
    const categories = document.querySelector('.form__category');
    const createOptionInSelect = document.createElement('option');

    createOptionInSelect.value = creatingNewCategoryInput.value;
    createOptionInSelect.textContent = creatingNewCategoryInput.value;
    categories.append(createOptionInSelect);
    creatingNewCategoryInput.value = '';
};

const creatingNewCategoryBtn = document.querySelector('.form__creating-category-btn');
creatingNewCategoryBtn.addEventListener('click', (e) => {
    e.preventDefault();
    creatingNewCategory();
});

const printTable = document.querySelector('.print');
printTable.addEventListener('click', () => {
    window.print();
});

const creatingNewTrReaded = document.querySelector('.table__readed');

creatingNewTrReaded.addEventListener('mouseenter', () => {
    const creatingNewTrReaded = document.createElement('tr');
    const tableReaded = document.querySelector('.table__readed-body');
    tableReaded.append(creatingNewTrReaded);
    creatingNewTrReaded.classList.add('clearEmpty');
});

const fill = document.querySelector('.table__to-read-body-tr')
// const fill = document.querySelector('.fill');
const empties = document.querySelectorAll('.clearEmpty');

// Fill listeners
fill.addEventListener('dragstart', dragStart);
fill.addEventListener('dragend', dragEnd);

// Loop through empty boxes and add listeners
for (const empty of empties) {
  empty.addEventListener('dragover', dragOver);
  empty.addEventListener('dragenter', dragEnter);
  empty.addEventListener('dragleave', dragLeave);
  empty.addEventListener('drop', dragDrop);
}

// Drag Functions

function dragStart() {
  this.className += ' hold';
  setTimeout(() => (this.className = 'invisible'), 0);
}

function dragEnd() {
  this.className = 'fill';
}

function dragOver(e) {
  e.preventDefault();
}

function dragEnter(e) {
  e.preventDefault();
  this.className += ' hovered';
}

function dragLeave() {
  this.className = 'empty';
}

function dragDrop() {
  this.className = 'empty';
  this.append(fill);
}