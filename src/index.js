const x = { title: 'climb', category: 'physical' };
const todos = [
  createTodo({ title: 'climb', category: 'physical' }),
  createTodo({ title: 'eat', category: 'physical' }),
  createTodo({ title: 'code', category: 'mental' }),
  createTodo({ title: 'rest', category: 'physical' }),
  createTodo({ title: 'hang with friends', category: 'social' }),
  createTodo({ title: 'watch Youtube' }),
  createTodo({ title: 'meditate' }),
  createTodo({ title: 'sleep', description: 'in bed' })
  //   createTodo({ ...x }),
  //   createTodo('eat', (category = 'physical')),
  //   createTodo('code', (category = 'mental')),
  //   createTodo('rest', (category = 'physical')),
  //   createTodo('hang with friends', (category = 'social')),
  //   createTodo('watch Youtube'),
  //   createTodo('meditate')
];

//todo
function createTodo(todo) {
  const {
    title,
    description = 'add description later',
    dueDate = 'add dueDate later',
    category = 'misc'
  } = todo;

  const normalizedTodo = {
    title,
    description,
    dueDate,
    category
  };

  return normalizedTodo;
}

// {
//   return { title, description, dueDate, category };
// }

console.log(todos);

//view
function renderTodos(todos) {
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

//view? or view model? controller?
function renderTodosInACategory(category) {
  const todosInACategory = todos.filter(todo => todo.category === category);
  console.log(todosInACategory);
  renderTodos(todosInACategory);
}

// renderTodos(todos);
// renderTodosInACategory('misc');
// renderTodosInACategory('physical');
renderTodosInACategory('mental');
