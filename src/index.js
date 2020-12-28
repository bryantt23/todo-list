import * as todo from './todos.js';

// let categorySelected='all'

//view
function renderTodos(todos, categorySelected = 'all') {
  const contentId = document.querySelector('#content');

  if (contentId.hasChildNodes()) {
    while (contentId.firstChild) {
      contentId.removeChild(contentId.firstChild);
    }
  }

  const h3 = document.createElement('h3');
  h3.textContent = 'Category selected is: ' + categorySelected;

  contentId.appendChild(h3);

  for (const [key, value] of Object.entries(todos)) {
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
  console.log(deleteButtons);

  deleteButtons.forEach(deleteButton =>
    deleteButton.addEventListener('click', e => {
      const id = e.target.id;
      console.log(id);
      todo.deleteTodo(id);
      console.log(todo.getTodos());
      renderTodos(todo.getTodos());
    })
  );
}

let todos = todo.getTodos();
// console.log(Object.entries(todos));
// renderTodos(Object.entries(todos));
renderTodos(todos, 'all');
