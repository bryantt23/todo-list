import { v1 as uuidv1 } from 'uuid';

const todosObj = {};

const todosArray = [
  { title: 'climb', category: 'physical', isComplete: true },
  { title: 'eat', category: 'physical' },
  { title: 'code', category: 'mental' },
  { title: 'rest', category: 'physical' },
  { title: 'hang with friends', category: 'social' },
  { title: 'watch Youtube' },
  { title: 'meditate' },
  { title: 'sleep', description: 'in bed' }
];

todosArray.forEach(todo => createTodo(todo));

const addTodo = todo => {
  const id = uuidv1();
  todosObj[id] = todo;
};

//todo
export function createTodo(todo) {
  const { title, isComplete = false, category = 'misc' } = todo;

  //TODO: maybe send message or just do nothing
  if (!title) {
    return;
  }

  const normalizedTodo = {
    title,
    isComplete,
    category
  };

  addTodo(normalizedTodo);

  return normalizedTodo;
}

export const getTodos = () => {
  return todosObj;
};
