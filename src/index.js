import * as todo from './todos.js';

// const addTodoForm = document.querySelector('#add-todo-form');
const contentId = document.querySelector('#content');
const todosContainer = document.createElement('div');
todosContainer.id = 'todosContainer';

let categorySelected = 'all';
let todosObj = {};

function updateTodosObject() {
  todosObj = todo.getTodos();
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
function generateCategoryDropdown() {
  const todos = Object.values(todosObj);
  // https://stackoverflow.com/a/35092559
  let categories = [...new Set(todos.map(todo => todo.category))];

  categories.unshift('all');

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

function addTodoForm() {
  if (contentId.hasChildNodes()) {
    while (contentId.firstChild) {
      contentId.removeChild(contentId.firstChild);
    }
  }

  const br = document.createElement('br');
  const form = document.createElement('form');
  form.id = 'add-todo-form';

  let label = document.createElement('label');
  label.textContent = 'Title';
  let input = document.createElement('input');
  input.type = 'text';
  input.id = 'title';
  input.appendChild(br);
  form.appendChild(label);
  form.appendChild(input);

  label = document.createElement('label');
  label.textContent = 'Category';
  input = document.createElement('input');
  input.type = 'text';
  input.id = 'category';
  input.appendChild(br);
  form.appendChild(label);
  form.appendChild(input);

  label = document.createElement('label');
  label.textContent = 'Description';
  input = document.createElement('input');
  input.type = 'text';
  input.id = 'description';
  input.appendChild(br);
  form.appendChild(label);
  form.appendChild(input);

  contentId.appendChild(form);

  label = document.createElement('label');
  label.textContent = 'Is complete';
  input = document.createElement('input');
  input.type = 'text';
  input.id = 'is-complete';
  input.appendChild(br);
  form.appendChild(label);
  form.appendChild(input);

  const addTodoButton = document.createElement('button');
  addTodoButton.textContent = 'Add todo';
  addTodoButton.id = 'add-todo';
  form.appendChild(addTodoButton);

  const cancelAddingTodoButton = document.createElement('button');
  cancelAddingTodoButton.textContent = 'Cancel adding new todo';
  cancelAddingTodoButton.id = 'cancel-adding-new-todo';
  form.appendChild(cancelAddingTodoButton);

  contentId.appendChild(form);

  // <form style='visibility: hidden' id='add-todo-form'>
  //   <label>Title</label>
  //   <input type='text' id='title' />
  //   <br />
  //   <label>Category</label>
  //   <input type='text' id='category' />
  //   <br />
  //   <label>Description</label>
  //   <input type='text' id='description' />
  //   <br />
  //   <label>Is complete</label>
  //   <input type='text' id='is-complete' />
  //   <br />
  //   <button id='add-todo'>Add Todo</button>
  //   <button id='cancel-adding-new-todo'>Cancel adding new todo</button>
  // </form>;
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

updateTodosObject();
generateCategoryDropdown();
generateAddTodoButton();
// console.log(Object.entries(todos));
// renderTodos(Object.entries(todos));
renderTodos();
