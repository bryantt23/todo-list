import { v1 as uuidv1 } from 'uuid';

let todosObj = {};

const categories = ['physical', 'mental', 'social', 'misc'];

const todosArrayBackup = [
  { title: 'code', category: 'mental', description: 'the odin project' },
  { title: 'climb', category: 'physical', isComplete: true },
  { title: 'eat', category: 'physical' },
  { title: 'rest', category: 'physical' },
  { title: 'hang with friends', category: 'social' },
  { title: 'watch Youtube', description: 'watch dog videos' },
  { title: 'meditate' },
  { title: 'sleep', description: 'in bed' }
];

export const getCategories = () => {
  return categories;
};

const addTodo = todo => {
  const id = uuidv1();
  todosObj[id] = todo;
};

export const editTodo = todo => {
  const { id, description, title, category, isComplete } = todo;
  todosObj[id] = { description, title, category, isComplete };
};

export function createTodo(todo) {
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
  updateLocalStorage();
  return todosObj;
};

export const deleteTodo = id => {
  delete todosObj[id];
};

function updateLocalStorage() {
  localStorage.setItem('todos', JSON.stringify(todosObj));
}

function init() {
  const localStorageTodos = localStorage.getItem('todos');
  if (localStorageTodos) {
    todosObj = JSON.parse(localStorageTodos);
  } else {
    const todosArr = todosArrayBackup;
    todosArr.forEach(todo => createTodo(todo));
  }
}

init();
