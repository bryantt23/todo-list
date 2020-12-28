import { v1 as uuidv1 } from 'uuid';

let todosObj = {};

const todosArray = [
  { title: 'climb', category: 'physical', isComplete: true }
  // { title: 'eat', category: 'physical' },
  // { title: 'code', category: 'mental', description: 'the odin project' },
  // { title: 'rest', category: 'physical' },
  // { title: 'hang with friends', category: 'social' },
  // { title: 'watch Youtube', description: 'watch dog videos' },
  // { title: 'meditate' },
  // { title: 'sleep', description: 'in bed' }
];

const addTodo = todo => {
  const id = uuidv1();
  todosObj[id] = todo;
};

todosArray.forEach(todo => createTodo(todo));

//todo
export function createTodo(todo) {
  console.log(`createTodo ${JSON.stringify(todo)}`);
  const {
    title,
    isComplete = false,
    category = 'misc',
    description = 'Add description later'
  } = todo;

  //TODO: maybe send message or just do nothing
  if (!title) {
    return;
  }

  const normalizedTodo = {
    title,
    isComplete,
    category,
    description
  };

  addTodo(normalizedTodo);

  return normalizedTodo;
}

export const getTodos = () => {
  return todosObj;
};

export const deleteTodo = id => {
  delete todosObj[id];
};
