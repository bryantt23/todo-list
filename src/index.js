const todos = [
  createTodo('climb', (category = 'physical')),
  createTodo('eat'),
  createTodo('code', (category = 'mental')),
  createTodo('rest')
];

//todo
function createTodo(
  title,
  description = 'add description later',
  dueDate = 'add dueDate later',
  category = 'misc'
) {
  return { title, description, dueDate, category };
}

console.log(todos);

//view
function renderAllTodos(todos) {
  const contentId = document.querySelector('#content');

  if (contentId.hasChildNodes()) {
    while (contentId.firstChild) {
      contentId.removeChild(contentId.firstChild);
    }
  }

  todos.forEach(todo => {
    const { title, description, dueDate, category } = todo;
    const p = document.createElement('p');
    p.textContent = `Title: ${title}, Description: ${description}, Due Date: ${dueDate}, Category: ${category}`;
    contentId.appendChild(p);
  });
}

renderAllTodos(todos);
