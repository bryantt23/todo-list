import * as todo from './todos.js';

const contentId = document.querySelector('#content');
const todosContainer = document.createElement('div');
todosContainer.id = 'todosContainer';

let categorySelected = 'all';
let todosObj = {};

function updateTodosObject() {
  todosObj = todo.getTodos();
}

function clearChildrenNodes(parentNode) {
  if (parentNode.hasChildNodes()) {
    while (parentNode.firstChild) {
      parentNode.removeChild(parentNode.firstChild);
    }
  }
}

function renderTodos() {
  clearChildrenNodes(todosContainer);

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

    const editButton = document.createElement('button');
    editButton.textContent = 'Edit this todo';
    editButton.id = key;
    editButton.setAttribute('class', 'edit-button');

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete this todo';
    deleteButton.id = key;
    deleteButton.setAttribute('class', 'delete-button');
    todosContainer.appendChild(p);
    todosContainer.appendChild(deleteButton);
    todosContainer.appendChild(editButton);
  }
  contentId.appendChild(todosContainer);
  addEventListeners();
}

// https://www.techiedelight.com/dynamically-create-drop-down-list-javascript/
function generateCategoryDropdown(addingTodo = false) {
  let categories = todo.getCategories();

  if (!addingTodo) {
    if (categories[0] !== 'all') categories.unshift('all');
  } else {
    categories = categories.filter(
      category => category.toLocaleLowerCase() != 'all'
    );
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
  clearChildrenNodes(contentId);
}

function createLabelAppendToForm(textContent, id, form) {
  let label = document.createElement('label');
  label.textContent = textContent;
  let input = document.createElement('input');
  input.type = 'text';
  input.id = id;

  form.appendChild(label);
  form.appendChild(input);
  form.appendChild(document.createElement('br'));
}

function addTodoForm(editingId) {
  clearChildrenNodes(contentId);

  const form = document.createElement('form');
  form.id = 'add-todo-form';

  createLabelAppendToForm('Title', 'title', form);

  generateCategoryDropdown(true);

  createLabelAppendToForm('Description', 'description', form);

  contentId.appendChild(form);

  let label = document.createElement('label');
  label.textContent = 'Is complete';
  let input = document.createElement('input');
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

  addToDoFormEventListeners(editingId);
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

  const editButtons = document.querySelectorAll('.edit-button');

  editButtons.forEach(editButton =>
    editButton.addEventListener('click', e => {
      const id = e.target.id;
      const todoToEdit = todosObj[id];
      const { title, description, category, isComplete } = todoToEdit;
      addTodoForm(id);

      document.querySelector('#title').value = title;
      document.querySelector('#description').value = description;
      document.querySelector('#is-complete').checked = isComplete;
      document.querySelector('#category').value = category;
      categorySelected = category;
    })
  );

  const select = document.querySelector('#category');
  select.addEventListener('change', e => {
    categorySelected = e.target.value;
    updateTodosObject();
    renderTodos();
  });

  const addTodoButton = document.querySelector('#add-a-todo');
  addTodoButton.addEventListener('click', () => {
    addTodoForm();
  });
}

function addToDoFormEventListeners(editingId) {
  const select = document.querySelector('#category');
  select.addEventListener('change', e => {
    categorySelected = e.target.value;
  });

  const addTodoButton = document.querySelector('#add-todo');
  addTodoButton.addEventListener('click', e => {
    e.preventDefault();
    const title = document.querySelector('#title').value;
    if (title === '') return;
    const description = document.querySelector('#description').value;

    const isComplete = document.querySelector('#is-complete').checked;
    console.log(title + description + isComplete);
    let category = categorySelected;
    if (editingId) {
      let id = editingId;
      todo.editTodo({ id, description, title, category, isComplete });
    } else {
      todo.createTodo({ title, isComplete, category, description });
    }
    categorySelected = 'all';
    clearTodoForm();
    showAllTodos();
  });

  const cancelAddingTodo = document.querySelector('#cancel-adding-new-todo');
  cancelAddingTodo.addEventListener('click', e => {
    e.preventDefault();
    categorySelected = 'all';
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
