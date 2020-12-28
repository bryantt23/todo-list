/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is not neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/uuid/dist/esm-browser/regex.js":
/*!*****************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/regex.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i);\n\n//# sourceURL=webpack://todo-list/./node_modules/uuid/dist/esm-browser/regex.js?");

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/rng.js":
/*!***************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/rng.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => /* binding */ rng\n/* harmony export */ });\n// Unique ID creation requires a high quality random # generator. In the browser we therefore\n// require the crypto API and do not support built-in fallback to lower quality random number\n// generators (like Math.random()).\nvar getRandomValues;\nvar rnds8 = new Uint8Array(16);\nfunction rng() {\n  // lazy load so that environments that need to polyfill have a chance to do so\n  if (!getRandomValues) {\n    // getRandomValues needs to be invoked in a context where \"this\" is a Crypto implementation. Also,\n    // find the complete implementation of crypto (msCrypto) on IE11.\n    getRandomValues = typeof crypto !== 'undefined' && crypto.getRandomValues && crypto.getRandomValues.bind(crypto) || typeof msCrypto !== 'undefined' && typeof msCrypto.getRandomValues === 'function' && msCrypto.getRandomValues.bind(msCrypto);\n\n    if (!getRandomValues) {\n      throw new Error('crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported');\n    }\n  }\n\n  return getRandomValues(rnds8);\n}\n\n//# sourceURL=webpack://todo-list/./node_modules/uuid/dist/esm-browser/rng.js?");

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/stringify.js":
/*!*********************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/stringify.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var _validate_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./validate.js */ \"./node_modules/uuid/dist/esm-browser/validate.js\");\n\n/**\n * Convert array of 16 byte values to UUID string format of the form:\n * XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX\n */\n\nvar byteToHex = [];\n\nfor (var i = 0; i < 256; ++i) {\n  byteToHex.push((i + 0x100).toString(16).substr(1));\n}\n\nfunction stringify(arr) {\n  var offset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;\n  // Note: Be careful editing this code!  It's been tuned for performance\n  // and works in ways you may not expect. See https://github.com/uuidjs/uuid/pull/434\n  var uuid = (byteToHex[arr[offset + 0]] + byteToHex[arr[offset + 1]] + byteToHex[arr[offset + 2]] + byteToHex[arr[offset + 3]] + '-' + byteToHex[arr[offset + 4]] + byteToHex[arr[offset + 5]] + '-' + byteToHex[arr[offset + 6]] + byteToHex[arr[offset + 7]] + '-' + byteToHex[arr[offset + 8]] + byteToHex[arr[offset + 9]] + '-' + byteToHex[arr[offset + 10]] + byteToHex[arr[offset + 11]] + byteToHex[arr[offset + 12]] + byteToHex[arr[offset + 13]] + byteToHex[arr[offset + 14]] + byteToHex[arr[offset + 15]]).toLowerCase(); // Consistency check for valid UUID.  If this throws, it's likely due to one\n  // of the following:\n  // - One or more input array values don't map to a hex octet (leading to\n  // \"undefined\" in the uuid)\n  // - Invalid input values for the RFC `version` or `variant` fields\n\n  if (!(0,_validate_js__WEBPACK_IMPORTED_MODULE_0__.default)(uuid)) {\n    throw TypeError('Stringified UUID is invalid');\n  }\n\n  return uuid;\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (stringify);\n\n//# sourceURL=webpack://todo-list/./node_modules/uuid/dist/esm-browser/stringify.js?");

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/v1.js":
/*!**************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/v1.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var _rng_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./rng.js */ \"./node_modules/uuid/dist/esm-browser/rng.js\");\n/* harmony import */ var _stringify_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./stringify.js */ \"./node_modules/uuid/dist/esm-browser/stringify.js\");\n\n // **`v1()` - Generate time-based UUID**\n//\n// Inspired by https://github.com/LiosK/UUID.js\n// and http://docs.python.org/library/uuid.html\n\nvar _nodeId;\n\nvar _clockseq; // Previous uuid creation time\n\n\nvar _lastMSecs = 0;\nvar _lastNSecs = 0; // See https://github.com/uuidjs/uuid for API details\n\nfunction v1(options, buf, offset) {\n  var i = buf && offset || 0;\n  var b = buf || new Array(16);\n  options = options || {};\n  var node = options.node || _nodeId;\n  var clockseq = options.clockseq !== undefined ? options.clockseq : _clockseq; // node and clockseq need to be initialized to random values if they're not\n  // specified.  We do this lazily to minimize issues related to insufficient\n  // system entropy.  See #189\n\n  if (node == null || clockseq == null) {\n    var seedBytes = options.random || (options.rng || _rng_js__WEBPACK_IMPORTED_MODULE_0__.default)();\n\n    if (node == null) {\n      // Per 4.5, create and 48-bit node id, (47 random bits + multicast bit = 1)\n      node = _nodeId = [seedBytes[0] | 0x01, seedBytes[1], seedBytes[2], seedBytes[3], seedBytes[4], seedBytes[5]];\n    }\n\n    if (clockseq == null) {\n      // Per 4.2.2, randomize (14 bit) clockseq\n      clockseq = _clockseq = (seedBytes[6] << 8 | seedBytes[7]) & 0x3fff;\n    }\n  } // UUID timestamps are 100 nano-second units since the Gregorian epoch,\n  // (1582-10-15 00:00).  JSNumbers aren't precise enough for this, so\n  // time is handled internally as 'msecs' (integer milliseconds) and 'nsecs'\n  // (100-nanoseconds offset from msecs) since unix epoch, 1970-01-01 00:00.\n\n\n  var msecs = options.msecs !== undefined ? options.msecs : Date.now(); // Per 4.2.1.2, use count of uuid's generated during the current clock\n  // cycle to simulate higher resolution clock\n\n  var nsecs = options.nsecs !== undefined ? options.nsecs : _lastNSecs + 1; // Time since last uuid creation (in msecs)\n\n  var dt = msecs - _lastMSecs + (nsecs - _lastNSecs) / 10000; // Per 4.2.1.2, Bump clockseq on clock regression\n\n  if (dt < 0 && options.clockseq === undefined) {\n    clockseq = clockseq + 1 & 0x3fff;\n  } // Reset nsecs if clock regresses (new clockseq) or we've moved onto a new\n  // time interval\n\n\n  if ((dt < 0 || msecs > _lastMSecs) && options.nsecs === undefined) {\n    nsecs = 0;\n  } // Per 4.2.1.2 Throw error if too many uuids are requested\n\n\n  if (nsecs >= 10000) {\n    throw new Error(\"uuid.v1(): Can't create more than 10M uuids/sec\");\n  }\n\n  _lastMSecs = msecs;\n  _lastNSecs = nsecs;\n  _clockseq = clockseq; // Per 4.1.4 - Convert from unix epoch to Gregorian epoch\n\n  msecs += 12219292800000; // `time_low`\n\n  var tl = ((msecs & 0xfffffff) * 10000 + nsecs) % 0x100000000;\n  b[i++] = tl >>> 24 & 0xff;\n  b[i++] = tl >>> 16 & 0xff;\n  b[i++] = tl >>> 8 & 0xff;\n  b[i++] = tl & 0xff; // `time_mid`\n\n  var tmh = msecs / 0x100000000 * 10000 & 0xfffffff;\n  b[i++] = tmh >>> 8 & 0xff;\n  b[i++] = tmh & 0xff; // `time_high_and_version`\n\n  b[i++] = tmh >>> 24 & 0xf | 0x10; // include version\n\n  b[i++] = tmh >>> 16 & 0xff; // `clock_seq_hi_and_reserved` (Per 4.2.2 - include variant)\n\n  b[i++] = clockseq >>> 8 | 0x80; // `clock_seq_low`\n\n  b[i++] = clockseq & 0xff; // `node`\n\n  for (var n = 0; n < 6; ++n) {\n    b[i + n] = node[n];\n  }\n\n  return buf || (0,_stringify_js__WEBPACK_IMPORTED_MODULE_1__.default)(b);\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (v1);\n\n//# sourceURL=webpack://todo-list/./node_modules/uuid/dist/esm-browser/v1.js?");

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/validate.js":
/*!********************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/validate.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var _regex_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./regex.js */ \"./node_modules/uuid/dist/esm-browser/regex.js\");\n\n\nfunction validate(uuid) {\n  return typeof uuid === 'string' && _regex_js__WEBPACK_IMPORTED_MODULE_0__.default.test(uuid);\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (validate);\n\n//# sourceURL=webpack://todo-list/./node_modules/uuid/dist/esm-browser/validate.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _todos_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todos.js */ \"./src/todos.js\");\n\r\n\r\nconst contentId = document.querySelector('#content');\r\nconst todosContainer = document.createElement('div');\r\ntodosContainer.id = 'todosContainer';\r\n\r\nlet categorySelected = 'all';\r\nlet todosObj = {};\r\n\r\nfunction updateTodosObject() {\r\n  todosObj = _todos_js__WEBPACK_IMPORTED_MODULE_0__.getTodos();\r\n}\r\n\r\nfunction clearChildrenNodes(parentNode) {\r\n  if (parentNode.hasChildNodes()) {\r\n    while (parentNode.firstChild) {\r\n      parentNode.removeChild(parentNode.firstChild);\r\n    }\r\n  }\r\n}\r\n\r\nfunction renderTodos() {\r\n  clearChildrenNodes(todosContainer);\r\n\r\n  const h3 = document.createElement('h3');\r\n  h3.textContent =\r\n    'Category selected is: ' +\r\n    categorySelected.charAt(0).toUpperCase() +\r\n    categorySelected.slice(1);\r\n\r\n  todosContainer.appendChild(h3);\r\n\r\n  for (const [key, value] of Object.entries(todosObj)) {\r\n    const { title, isComplete, category, description } = value;\r\n    if (categorySelected !== 'all') {\r\n      if (categorySelected !== category) continue;\r\n    }\r\n    const p = document.createElement('p');\r\n    p.id = key;\r\n    p.textContent = `Title: ${title}, Category: ${category}, Description: ${description}, Is complete: ${isComplete}`;\r\n\r\n    const editButton = document.createElement('button');\r\n    editButton.textContent = 'Edit this todo';\r\n    editButton.id = key;\r\n    editButton.setAttribute('class', 'edit-button');\r\n\r\n    const deleteButton = document.createElement('button');\r\n    deleteButton.textContent = 'Delete this todo';\r\n    deleteButton.id = key;\r\n    deleteButton.setAttribute('class', 'delete-button');\r\n    todosContainer.appendChild(p);\r\n    todosContainer.appendChild(deleteButton);\r\n    todosContainer.appendChild(editButton);\r\n  }\r\n  contentId.appendChild(todosContainer);\r\n  addEventListeners();\r\n}\r\n\r\n// https://www.techiedelight.com/dynamically-create-drop-down-list-javascript/\r\nfunction generateCategoryDropdown(addingTodo = false) {\r\n  let categories = _todos_js__WEBPACK_IMPORTED_MODULE_0__.getCategories();\r\n\r\n  if (!addingTodo) {\r\n    if (categories[0] !== 'all') categories.unshift('all');\r\n  } else {\r\n    categories = categories.filter(\r\n      category => category.toLocaleLowerCase() != 'all'\r\n    );\r\n  }\r\n\r\n  const select = document.createElement('select');\r\n  select.name = 'category';\r\n  select.id = 'category';\r\n\r\n  for (const category of categories) {\r\n    const option = document.createElement('option');\r\n    option.value = category;\r\n    option.text = category.charAt(0).toUpperCase() + category.slice(1);\r\n    select.appendChild(option);\r\n  }\r\n\r\n  const label = document.createElement('label');\r\n  label.innerHTML = 'Choose your category: ';\r\n  label.htmlFor = 'categories';\r\n\r\n  contentId.appendChild(label).appendChild(select);\r\n}\r\n\r\nfunction generateAddTodoButton() {\r\n  const addTodoButton = document.createElement('button');\r\n  addTodoButton.textContent = 'Add a todo';\r\n  addTodoButton.id = 'add-a-todo';\r\n  contentId.appendChild(addTodoButton);\r\n}\r\n\r\nfunction clearTodoForm() {\r\n  clearChildrenNodes(contentId);\r\n}\r\n\r\nfunction createLabelAppendToForm(textContent, id, form) {\r\n  let label = document.createElement('label');\r\n  label.textContent = textContent;\r\n  let input = document.createElement('input');\r\n  input.type = 'text';\r\n  input.id = id;\r\n\r\n  form.appendChild(label);\r\n  form.appendChild(input);\r\n  form.appendChild(document.createElement('br'));\r\n}\r\n\r\nfunction addTodoForm(editingId) {\r\n  clearChildrenNodes(contentId);\r\n\r\n  const form = document.createElement('form');\r\n  form.id = 'add-todo-form';\r\n\r\n  createLabelAppendToForm('Title', 'title', form);\r\n\r\n  generateCategoryDropdown(true);\r\n\r\n  createLabelAppendToForm('Description', 'description', form);\r\n\r\n  contentId.appendChild(form);\r\n\r\n  let label = document.createElement('label');\r\n  label.textContent = 'Is complete';\r\n  let input = document.createElement('input');\r\n  input.type = 'checkbox';\r\n  input.id = 'is-complete';\r\n\r\n  form.appendChild(label);\r\n  form.appendChild(input);\r\n  form.appendChild(document.createElement('br'));\r\n\r\n  const addTodoButton = document.createElement('button');\r\n  addTodoButton.textContent = 'Add todo';\r\n  addTodoButton.id = 'add-todo';\r\n  form.appendChild(addTodoButton);\r\n\r\n  const cancelAddingTodoButton = document.createElement('button');\r\n  cancelAddingTodoButton.textContent = 'Cancel adding new todo';\r\n  cancelAddingTodoButton.id = 'cancel-adding-new-todo';\r\n  form.appendChild(cancelAddingTodoButton);\r\n\r\n  contentId.appendChild(form);\r\n\r\n  addToDoFormEventListeners(editingId);\r\n  const select = document.querySelector('#category');\r\n  categorySelected = select.value;\r\n}\r\n\r\nfunction addEventListeners() {\r\n  const deleteButtons = document.querySelectorAll('.delete-button');\r\n  deleteButtons.forEach(deleteButton =>\r\n    deleteButton.addEventListener('click', e => {\r\n      const id = e.target.id;\r\n      _todos_js__WEBPACK_IMPORTED_MODULE_0__.deleteTodo(id);\r\n      updateTodosObject();\r\n      renderTodos();\r\n    })\r\n  );\r\n\r\n  const editButtons = document.querySelectorAll('.edit-button');\r\n\r\n  editButtons.forEach(editButton =>\r\n    editButton.addEventListener('click', e => {\r\n      const id = e.target.id;\r\n      const todoToEdit = todosObj[id];\r\n      const { title, description, category, isComplete } = todoToEdit;\r\n      addTodoForm(id);\r\n\r\n      document.querySelector('#title').value = title;\r\n      document.querySelector('#description').value = description;\r\n      document.querySelector('#is-complete').checked = isComplete;\r\n      document.querySelector('#category').value = category;\r\n      categorySelected = category;\r\n    })\r\n  );\r\n\r\n  const select = document.querySelector('#category');\r\n  select.addEventListener('change', e => {\r\n    categorySelected = e.target.value;\r\n    updateTodosObject();\r\n    renderTodos();\r\n  });\r\n\r\n  const addTodoButton = document.querySelector('#add-a-todo');\r\n  addTodoButton.addEventListener('click', () => {\r\n    addTodoForm();\r\n  });\r\n}\r\n\r\nfunction addToDoFormEventListeners(editingId) {\r\n  const select = document.querySelector('#category');\r\n  select.addEventListener('change', e => {\r\n    categorySelected = e.target.value;\r\n  });\r\n\r\n  const addTodoButton = document.querySelector('#add-todo');\r\n  addTodoButton.addEventListener('click', e => {\r\n    e.preventDefault();\r\n    const title = document.querySelector('#title').value;\r\n    if (title === '') return;\r\n    const description = document.querySelector('#description').value;\r\n\r\n    const isComplete = document.querySelector('#is-complete').checked;\r\n    console.log(title + description + isComplete);\r\n    let category = categorySelected;\r\n    if (editingId) {\r\n      let id = editingId;\r\n      _todos_js__WEBPACK_IMPORTED_MODULE_0__.editTodo({ id, description, title, category, isComplete });\r\n    } else {\r\n      _todos_js__WEBPACK_IMPORTED_MODULE_0__.createTodo({ title, isComplete, category, description });\r\n    }\r\n    categorySelected = 'all';\r\n    clearTodoForm();\r\n    showAllTodos();\r\n  });\r\n\r\n  const cancelAddingTodo = document.querySelector('#cancel-adding-new-todo');\r\n  cancelAddingTodo.addEventListener('click', e => {\r\n    e.preventDefault();\r\n    categorySelected = 'all';\r\n    clearTodoForm();\r\n    showAllTodos();\r\n  });\r\n}\r\n\r\nfunction showAllTodos() {\r\n  updateTodosObject();\r\n  generateCategoryDropdown();\r\n  generateAddTodoButton();\r\n  renderTodos();\r\n}\r\n\r\nshowAllTodos();\r\n\n\n//# sourceURL=webpack://todo-list/./src/index.js?");

/***/ }),

/***/ "./src/todos.js":
/*!**********************!*\
  !*** ./src/todos.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getCategories\": () => /* binding */ getCategories,\n/* harmony export */   \"editTodo\": () => /* binding */ editTodo,\n/* harmony export */   \"createTodo\": () => /* binding */ createTodo,\n/* harmony export */   \"getTodos\": () => /* binding */ getTodos,\n/* harmony export */   \"deleteTodo\": () => /* binding */ deleteTodo\n/* harmony export */ });\n/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! uuid */ \"./node_modules/uuid/dist/esm-browser/v1.js\");\n\r\n\r\nlet todosObj = {};\r\n\r\nconst categories = ['physical', 'mental', 'social', 'misc'];\r\n\r\nconst todosArrayBackup = [\r\n  { title: 'code', category: 'mental', description: 'the odin project' },\r\n  { title: 'climb', category: 'physical', isComplete: true },\r\n  { title: 'eat', category: 'physical' },\r\n  { title: 'rest', category: 'physical' },\r\n  { title: 'hang with friends', category: 'social' },\r\n  { title: 'watch Youtube', description: 'watch dog videos' },\r\n  { title: 'meditate' },\r\n  { title: 'sleep', description: 'in bed' }\r\n];\r\n\r\nconst getCategories = () => {\r\n  return categories;\r\n};\r\n\r\nconst addTodo = todo => {\r\n  const id = (0,uuid__WEBPACK_IMPORTED_MODULE_0__.default)();\r\n  todosObj[id] = todo;\r\n};\r\n\r\nconst editTodo = todo => {\r\n  const { id, description, title, category, isComplete } = todo;\r\n  todosObj[id] = { description, title, category, isComplete };\r\n};\r\n\r\nfunction createTodo(todo) {\r\n  const {\r\n    title,\r\n    isComplete = false,\r\n    category = 'misc',\r\n    description = 'Add description later'\r\n  } = todo;\r\n\r\n  //TODO: maybe send message or just do nothing\r\n  if (!title) {\r\n    return;\r\n  }\r\n\r\n  const normalizedTodo = {\r\n    title,\r\n    isComplete,\r\n    category,\r\n    description\r\n  };\r\n\r\n  addTodo(normalizedTodo);\r\n\r\n  return normalizedTodo;\r\n}\r\n\r\nconst getTodos = () => {\r\n  updateLocalStorage();\r\n  return todosObj;\r\n};\r\n\r\nconst deleteTodo = id => {\r\n  delete todosObj[id];\r\n};\r\n\r\nfunction updateLocalStorage() {\r\n  localStorage.setItem('todos', JSON.stringify(todosObj));\r\n}\r\n\r\nfunction init() {\r\n  const localStorageTodos = localStorage.getItem('todos');\r\n  if (localStorageTodos) {\r\n    todosObj = JSON.parse(localStorageTodos);\r\n  } else {\r\n    const todosArr = todosArrayBackup;\r\n    todosArr.forEach(todo => createTodo(todo));\r\n  }\r\n}\r\n\r\ninit();\r\n\n\n//# sourceURL=webpack://todo-list/./src/todos.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./src/index.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;