import Store from './store.js';

class Status {
    static isCompleted = (el) => {
      const tasks = Store.getTasks();
      const checkedValue = el.checked;
      const li = el.parentElement;
      const todoList = document.getElementById('todo-list');
      const id = Array.prototype.indexOf.call(todoList.children, li);

      tasks.forEach((task) => {
        if (task.index === id) {
          task.completed = checkedValue;
          li.childNodes[1].classList.toggle('completed');
        }
      });

      localStorage.setItem('tasks', JSON.stringify(tasks));
    };

    static clearCompleted = () => {
      let tasks = Store.getTasks();
      tasks = tasks.filter((item) => !item.completed);
      localStorage.setItem('tasks', JSON.stringify(tasks));
    }
}
export default Status;