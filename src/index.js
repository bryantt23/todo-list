import * as todo from './todos.js';

// const addTodoForm = document.querySelector('#add-todo-form');
const contentId = document.querySelector('#content');
const todosContainer = document.createElement('div');
todosContainer.id = 'todosContainer';

let categorySelected = '';
let todosObj = {};

function updateTodosObject() {
  todosObj = todo.getTodos();
  console.log(todosObj);
}

//view
function renderTodos() {
  if (todosContainer.hasChildNodes()) {
    while (todosContainer.firstChild) {
      todosContainer.removeChild(todosContainer.firstChild);
    }
  }

  const h3 = document.createElement('h3');
  h3.textContent =
    'Category selected is: ' +
    categorySelected.charAt(0).toUpperCase() +
    categorySelected.slice(1);

  todosContainer.appendChild(h3);

  for (const [key, value] of Object.entries(todosObj)) {
    const { title, isComplete, category, description } = value;
    if (categorySelected !== 'all') {
      if (categorySelected !== category) continue;
    }
    const p = document.createElement('p');
    p.id = key;
    p.textContent = `Title: ${title}, Category: ${category}, Description: ${description}, Is complete: ${isComplete}`;

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete this todo';
    deleteButton.id = key;
    deleteButton.setAttribute('class', 'delete-button');
    todosContainer.appendChild(p);
    todosContainer.appendChild(deleteButton);
  }
  contentId.appendChild(todosContainer);
  addEventListeners();
}

// https://www.techiedelight.com/dynamically-create-drop-down-list-javascript/
function generateCategoryDropdown(addingTodo = false) {
  const todos = Object.values(todosObj);
  // https://stackoverflow.com/a/35092559
  let categories = [...new Set(todos.map(todo => todo.category))];

  if (!addingTodo) {
    categories.unshift('all');
  }

  const select = document.createElement('select');
  select.name = 'category';
  select.id = 'category';

  for (const category of categories) {
    const option = document.createElement('option');
    option.value = category;
    option.text = category.charAt(0).toUpperCase() + category.slice(1);
    select.appendChild(option);
  }

  const label = document.createElement('label');
  label.innerHTML = 'Choose your category: ';
  label.htmlFor = 'categories';

  contentId.appendChild(label).appendChild(select);
}

function generateAddTodoButton() {
  const addTodoButton = document.createElement('button');
  addTodoButton.textContent = 'Add a todo';
  addTodoButton.id = 'add-a-todo';
  contentId.appendChild(addTodoButton);
}

function clearTodoForm() {
  if (contentId.hasChildNodes()) {
    while (contentId.firstChild) {
      contentId.removeChild(contentId.firstChild);
    }
  }
}

function addTodoForm() {
  if (contentId.hasChildNodes()) {
    while (contentId.firstChild) {
      contentId.removeChild(contentId.firstChild);
    }
  }

  const form = document.createElement('form');
  form.id = 'add-todo-form';

  let label = document.createElement('label');
  label.textContent = 'Title';
  let input = document.createElement('input');
  input.type = 'text';
  input.id = 'title';

  form.appendChild(label);
  form.appendChild(input);
  form.appendChild(document.createElement('br'));

  generateCategoryDropdown(true);

  form.appendChild(label);
  form.appendChild(input);
  form.appendChild(document.createElement('br'));

  label = document.createElement('label');
  label.textContent = 'Description';
  input = document.createElement('input');
  input.type = 'text';
  input.id = 'description';

  form.appendChild(label);
  form.appendChild(input);
  form.appendChild(document.createElement('br'));

  contentId.appendChild(form);

  label = document.createElement('label');
  label.textContent = 'Is complete';
  input = document.createElement('input');
  input.type = 'checkbox';
  input.id = 'is-complete';

  form.appendChild(label);
  form.appendChild(input);
  form.appendChild(document.createElement('br'));

  const addTodoButton = document.createElement('button');
  addTodoButton.textContent = 'Add todo';
  addTodoButton.id = 'add-todo';
  form.appendChild(addTodoButton);

  const cancelAddingTodoButton = document.createElement('button');
  cancelAddingTodoButton.textContent = 'Cancel adding new todo';
  cancelAddingTodoButton.id = 'cancel-adding-new-todo';
  form.appendChild(cancelAddingTodoButton);

  contentId.appendChild(form);

  addToDoFormEventListeners();
  const select = document.querySelector('#category');
  categorySelected = select.value;
}

function addEventListeners() {
  const deleteButtons = document.querySelectorAll('.delete-button');

  deleteButtons.forEach(deleteButton =>
    deleteButton.addEventListener('click', e => {
      const id = e.target.id;
      todo.deleteTodo(id);
      updateTodosObject();
      renderTodos();
    })
  );

  // changeDropdownSelection([() => updateTodosObject, () => renderTodos]);
  const select = document.querySelector('#category');
  select.addEventListener('change', e => {
    // const result = document.querySelector('.result');
    console.log(e.target.value);
    categorySelected = e.target.value;
    updateTodosObject();
    renderTodos();
  });

  const addTodoButton = document.querySelector('#add-a-todo');
  addTodoButton.addEventListener('click', () => {
    // contentId.style = 'visibility:hidden';
    // todosContainer.style = 'visibility:hidden';
    // addTodoForm.style = 'visibility:visible';
    addTodoForm();
  });
}

// function changeDropdownSelection(callbackFunctions) {
//   const select = document.querySelector('#category');
//   select.addEventListener('change', e => {
//     categorySelected = e.target.value;
//   });
//   console.log(callbackFunctions);
//   for (const fn of callbackFunctions) {
//     fn();
//   }
// }

function addToDoFormEventListeners() {
  const select = document.querySelector('#category');
  select.addEventListener('change', e => {
    categorySelected = e.target.value;
  });

  // changeDropdownSelection();

  const addTodoButton = document.querySelector('#add-todo');
  addTodoButton.addEventListener('click', e => {
    e.preventDefault();
    console.log(categorySelected);
    const title = document.querySelector('#title').value;
    if (title === '') return;
    const description = document.querySelector('#description').value;

    const isComplete = document.querySelector('#is-complete').checked;
    console.log(title + description + isComplete);
    let category = categorySelected;
    todo.createTodo({ title, isComplete, category, description });

    clearTodoForm();
    showAllTodos();
    // const author = document.querySelector('#author').value;
    // if (title !== '' && author !== '') {
    //   addBookToLibrary(new Book(title, author));
    //   showBooksOnPage();
    // }
  });

  const cancelAddingTodo = document.querySelector('#cancel-adding-new-todo');
  cancelAddingTodo.addEventListener('click', e => {
    e.preventDefault();
    clearTodoForm();
    showAllTodos();
  });
}

function showAllTodos() {
  updateTodosObject();
  generateCategoryDropdown();
  generateAddTodoButton();
  renderTodos();
}

showAllTodos();

// addTodoForm();
