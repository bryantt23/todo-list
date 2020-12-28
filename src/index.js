import * as todo from './todos.js';

//view
function renderTodos(todos, category = 'All') {
  // console.log(Object.entries(todos));
  const contentId = document.querySelector('#content');

  if (contentId.hasChildNodes()) {
    while (contentId.firstChild) {
      contentId.removeChild(contentId.firstChild);
    }
  }

  for (const [key, value] of Object.entries(todos)) {
    const { title, isComplete, category } = value;
    const p = document.createElement('p');
    p.id = key;
    p.textContent = `Title: ${title}, Category: ${category}, Is complete: ${isComplete}`;
    contentId.appendChild(p);
  }

  //TODO: display category
  // todos.forEach(todo => {
  //   const { title, description, dueDate, category } = todo;
  //   const p = document.createElement('p');
  //   p.id = todo.id;
  //   p.textContent = `Title: ${title}, Description: ${description}, Due Date: ${dueDate}, Category: ${category}`;
  //   contentId.appendChild(p);
  // });
}

/*
//view? or view model? controller?
function renderTodosInACategory(category) {
  const todosInACategory = todos.filter(todo => todo.category === category);
  // console.log(todosInACategory);
  renderTodos(todosInACategory, category);
}
// renderTodosInACategory('misc');
// renderTodosInACategory('physical');
// renderTodosInACategory('mental');

*/

const todos = todo.getTodos();
console.log(Object.entries(todos));
// renderTodos(Object.entries(todos));
renderTodos(todos);
