import './styles/main.scss';
import todoIcom from './assets/todo-list.svg';
import UI from './modules/ui.js';
import Store from './modules/store.js';
import Status from './modules/status.js';

// Todo List Icon
const laughImg = document.getElementById('laughImg');
laughImg.src = todoIcom;

// Event: Display Tasks
document.addEventListener('DOMContentLoaded', UI.displaytasks);

// Event: Add a task
document.querySelector('#add-form').addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    // prevent default submit
    e.preventDefault();
    // get form values
    UI.getNewTask();
  }
});

// Event: Delete a task
document.querySelector('#todo-list').addEventListener('click', (e) => {
  // remove task from Store
  Store.removeTask(e.target);
  // remove task from UI
  UI.deleteTask(e.target);
});

// Event: edit a task
document.querySelector('#todo-list').addEventListener('click', (e) => {
  if (e.target.classList.contains('fa-pen-to-square')) {
    UI.editTask(e.target);
  }
});

// Check task as completed
document.querySelector('#todo-list').addEventListener('change', (e) => {
  if (e.target.classList.contains('checkbox')) {
    Status.isCompleted(e.target);
  }
});

// Event: update a task
document.querySelector('#todo-list').addEventListener('keypress', (e) => {
  // prevent default submit

  if (e.key === 'Enter' && e.target.classList.contains('edit-task')) {
    // prevent default submit
    e.preventDefault();
    // update to the store
    Store.updateTask(e.target);
    window.location.reload();
  }
});

// Remove all completed tasks
document.getElementById('jokBtn').addEventListener('click', () => {
  Status.clearCompleted();
  window.location.reload();
});