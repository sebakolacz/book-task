import * as mdb from 'mdb-ui-kit';

export default {
  mdb,
};

function creatingElementsOfTable() {

    var toReadBody = document.querySelector('.table__to-read-body');
    var creatingTr = document.createElement('tr');
    toReadBody.append(creatingTr);

    var tableToRead = document.querySelector('.table__to-read-body');
    var quantityOfTr = tableToRead.getElementsByTagName('tr');

    var creatingTdTitle = document.createElement('td');
    var creatingTdAuthor = document.createElement('td');
    var creatingTdCategory = document.createElement('td');
    var creatingTdPriority = document.createElement('td');

    var creatingInputTitle = document.createElement('input');
    creatingInputTitle.readOnly = true;
    var creatingInputAuthor = document.createElement('input');
    creatingInputAuthor.readOnly = true;
    var creatingInputCategory = document.createElement('input');
    creatingInputCategory.readOnly = true;
    var creatingInputPriority = document.createElement('input');
    creatingInputPriority.readOnly = true;
    var editBtn = document.createElement('button');
    var removingTrBtn = document.createElement('button');

    creatingTdTitle.classList.add('title');
    editBtn.classList.add('editBtn');
    creatingTr.classList.add('table__to-read-body-tr');
    removingTrBtn.classList.add('removeBtn');

    creatingTr.draggable = true;

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

    var titleOfBook = document.querySelector('.form__title');
    var authorOfBook = document.querySelector('.form__author');
    var categoryOfBook = document.querySelector('.form__category');
    var priorityOfBook = document.querySelector('.form__priority');

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

    function editElementOfTheTable() {
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

    var quantity = document.querySelector('.table__to-read-quantity');
    quantity.textContent = 'Liczba książek:' + quantityOfTr.length;
    editBtn.addEventListener('click', function() {
        editElementOfTheTable();
    });

    removingTrBtn.addEventListener('click', function() {
        creatingTr.remove();
        var quantity = document.querySelector('.table__to-read-quantity');
        quantity.textContent = 'Liczba książek:' + quantityOfTr.length;
    });

    // const counter = quantityOfTr.length;

    // console.log(`ob${counter}`);

    var ob = {
        title: creatingInputTitle.value,
        author: creatingInputAuthor.value,
        category: creatingInputCategory.value,
        priority: creatingInputPriority.value
    };


    localStorage.setItem('obj', JSON.stringify(ob));
    var retrievedObject = JSON.parse(localStorage.getItem("obj"));
    console.log(retrievedObject);

};

var submit = document.querySelector('.form__submit');
submit.addEventListener('click', function(e) {
    e.preventDefault();
    creatingElementsOfTable();
});

function creatingNewCategory() {
    var creatingNewCategoryInput = document.querySelector('.form__creating-category-input');
    var categories = document.querySelector('.form__category');
    var createOptionInSelect = document.createElement('option');

    createOptionInSelect.value = creatingNewCategoryInput.value;
    createOptionInSelect.textContent = creatingNewCategoryInput.value;
    categories.append(createOptionInSelect);
    creatingNewCategoryInput.value = '';
};

var creatingNewCategoryBtn = document.querySelector('.form__creating-category-btn');
creatingNewCategoryBtn.addEventListener('click', function(e) {
    e.preventDefault();
    creatingNewCategory();
});

var printTable = document.querySelector('.print');
printTable.addEventListener('click', function() {
    window.print();
});

var creatingNewTrReaded = document.querySelector('.table__readed');

creatingNewTrReaded.addEventListener('mouseenter', function() {
    var creatingNewTrReaded = document.createElement('tr');
    var tableReaded = document.querySelector('.table__readed-body');
    tableReaded.append(creatingNewTrReaded);
    creatingNewTrReaded.classList.add('clearEmpty');
});
