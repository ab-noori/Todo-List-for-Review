// UI Class: Handle UI Tasks
import Task from './task.js';
import Store from './store.js';

class UI {
  static displaytasks = () => {
    const tasks = Store.getTasks();
    tasks.forEach((task) => UI.addTaskToList(task));
  }

  static getNewTask = () => {
    const newTask = document.querySelector('#new-task').value;

    // valitdate empty form
    if (newTask !== '') {
      // making object of Book class
      const task = new Task(newTask);

      // add book to UI
      UI.addTaskToList(task);

      // add book to store
      Store.addTask(task);

      // clear fields
      UI.clearFields();
    }
  }

  static addTaskToList = (task) => {
    const list = document.querySelector('#todo-list');

    const li = document.createElement('li');

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.classList.add('checkbox');
    if (task.completed) {
      checkbox.checked = true;
    }

    const span = document.createElement('span');
    span.textContent = task.description;

    const editBtn = document.createElement('span');
    editBtn.classList.add('edit');
    editBtn.innerHTML = '<i class="fa-solid fa-pen-to-square"></i>';

    const deleteBtn = document.createElement('span');
    deleteBtn.classList.add('delete');
    deleteBtn.innerHTML = '<i class="fa-solid fa-trash"></i>';

    li.appendChild(checkbox);
    li.appendChild(span);
    li.appendChild(editBtn);
    li.appendChild(deleteBtn);

    if (task.completed) {
      li.childNodes[1].classList.add('completed');
    }

    list.appendChild(li);
  }

  static editTask = (el) => {
    const orgValue = el.parentElement.parentElement.childNodes[1].textContent;
    const editForm = document.createElement('form');
    editForm.id = 'edit-form';
    el.parentElement.parentElement.childNodes[1].innerHTML = `

    <form id="edit-form">
        <input type="text" class="edit-task" value="${orgValue}">
    </form>

    `;

    el.parentElement.parentElement.classList.add('edit-highlight');

    if (el.classList.contains('fa-trash')) {
      el.parentElement.parentElement.remove();
    }
  }

  static deleteTask = (el) => {
    if (el.classList.contains('fa-trash')) {
      el.parentElement.parentElement.remove();
    }
  }

  static clearFields = () => {
    document.querySelector('#new-task').value = '';
  }
}

export default UI;