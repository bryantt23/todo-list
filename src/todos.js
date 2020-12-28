import { v1 as uuidv1 } from 'uuid';

const todosObj = {};
const x = { title: 'climb', category: 'physical' };
const todosArray = [
  createTodo({ title: 'climb', category: 'physical', isComplete: true }),
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

todosArray.forEach(todo => createTodo(todo));

const addTodo = todo => {
  const id = uuidv1();
  todosObj[id] = todo;
};

//todo
export function createTodo(todo) {
  const {
    title,
    description = 'add description later',
    isComplete = false,
    category = 'misc'
  } = todo;

  //TODO: maybe send message or just do nothing
  if (!title) {
    return;
  }

  const normalizedTodo = {
    title,
    description,
    isComplete,
    category
  };

  addTodo(normalizedTodo);

  return normalizedTodo;
}

// {
//   return { title, description, dueDate, category };
// }

export const getTodos = () => {
  console.log('get todos :' + JSON.stringify(todosObj));
  return todosObj;
};

// console.log(todos);
