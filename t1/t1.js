// array for todo list

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
  const content = `<li>
  <input type="checkbox" id="todo-${i.id}" ${i.completed ? 'checked' : ''}>
  <label for="todo-${i.id}">${i.task}</label>
</li>`;
  document.getElementById('list').insertAdjacentHTML('beforeend', content);
}
