//Open t2 folder in your IDE/editor. The assignment remains unchanged from the first, except that for this version, DOM methods are used to add the todo items.

//for attribute is added to <label> with htmlFor

// array for todo list
'use strict';

const todoList = [
  {
    id: 1,
    task: 'Learn HTML',
    completed: true,
  },
  {
    id: 2,
    task: 'Learn CSS',
    completed: true,
  },
  {
    id: 3,
    task: 'Learn JS',
    completed: false,
  },
  {
    id: 4,
    task: 'Learn TypeScript',
    completed: false,
  },
  {
    id: 5,
    task: 'Learn React',
    completed: false,
  },
];

// add your code here

for (const i of todoList) {
  const list = document.createElement('li');
  const label = document.createElement('label');
  const input = document.createElement('input');
  const span = document.createElement('span');
  input.setAttribute('type', 'checkbox');
  input.setAttribute('id', i.id);

  if (i.completed) {
    input.setAttribute('checked', 'checked');
  }
  label.htmlFor = i.id;
  label.textContent = i.task;
  list.appendChild(input);
  list.appendChild(label);
  document.getElementById('list').appendChild(list);
}
