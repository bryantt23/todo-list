import * as todo from './todos.js';

const contentId = document.querySelector('#content');
let todosObj = {};

function updateTodosObject() {
  todosObj = todo.getTodos();
}

//view
function renderTodos(categorySelected = 'all') {
  if (contentId.hasChildNodes()) {
    while (contentId.firstChild) {
      contentId.removeChild(contentId.firstChild);
    }
  }

  const h3 = document.createElement('h3');
  h3.textContent = 'Category selected is: ' + categorySelected;

  contentId.appendChild(h3);

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
    contentId.appendChild(p);
    contentId.appendChild(deleteButton);
  }
  addEventListeners();
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
}

// https://www.techiedelight.com/dynamically-create-drop-down-list-javascript/
function generateCategoryDropdown() {
  const todos = Object.values(todosObj);
  // https://stackoverflow.com/a/35092559
  let categories = [...new Set(todos.map(todo => todo.category))];

  categories.unshift('All');

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

  document.getElementById('container').appendChild(label).appendChild(select);
}

updateTodosObject();
generateCategoryDropdown();
// console.log(Object.entries(todos));
// renderTodos(Object.entries(todos));
renderTodos('all');
