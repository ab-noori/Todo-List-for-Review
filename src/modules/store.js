// Store Class: Handle Storage

class Store {
    static getTasks = () => {
      let tasks;
      if (localStorage.getItem('tasks') === null) {
        tasks = [];
      } else {
        tasks = JSON.parse(localStorage.getItem('tasks'));
      }

      return tasks;
    }

    static addTask = (task) => {
      const tasks = Store.getTasks();
      task.index = (tasks.length) + 1;
      tasks.push(task);
      localStorage.setItem('tasks', JSON.stringify(tasks));
    }

    static updateTask = (el) => {
      const editedTask = el.value;
      const tasks = Store.getTasks();
      const li = el.parentElement.parentElement.parentElement;
      const todoList = document.getElementById('todo-list');
      const id = Array.prototype.indexOf.call(todoList.children, li);

      tasks.forEach((task) => {
        if (task.index === id) {
          task.description = editedTask;
        }
      });

      localStorage.setItem('tasks', JSON.stringify(tasks));
    }

    static removeTask = (el) => {
      const tasks = Store.getTasks();
      const li = el.parentElement.parentElement;
      const todoList = document.getElementById('todo-list');
      const id = Array.prototype.indexOf.call(todoList.children, li);

      tasks.forEach((task, i) => {
        if (task.index === id && el.classList.contains('fa-trash')) {
          tasks.splice(i, 1);
        }
      });

      tasks.forEach((task, i) => {
        task.index = i + 1;
      });

      localStorage.setItem('tasks', JSON.stringify(tasks));
    }
}

export default Store;