import * as todo from './todos.js';

/*
//view
function renderTodos(todos, category = 'All') {
  const contentId = document.querySelector('#content');

  if (contentId.hasChildNodes()) {
    while (contentId.firstChild) {
      contentId.removeChild(contentId.firstChild);
    }
  }

  //TODO: display category
  todos.forEach(todo => {
    const { title, description, dueDate, category } = todo;
    const p = document.createElement('p');
    p.textContent = `Title: ${title}, Description: ${description}, Due Date: ${dueDate}, Category: ${category}`;
    contentId.appendChild(p);
  });
}

//view? or view model? controller?
function renderTodosInACategory(category) {
  const todosInACategory = todos.filter(todo => todo.category === category);
  // console.log(todosInACategory);
  renderTodos(todosInACategory, category);
}

// renderTodos(todos);
// renderTodosInACategory('misc');
// renderTodosInACategory('physical');
// renderTodosInACategory('mental');

*/
todo.getTodos();
