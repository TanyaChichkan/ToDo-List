import { RegExpHandlers } from '../utils-classes/handlers.js';
import { taskList } from '../utils-classes/tasks.js';
import { Storage } from '../utils-classes/storage.js';
import { RenderList } from './renderList.js';
import { DateMethods } from '../utils-classes/dateMethods.js';

export class Form extends DateMethods {
  inputValidation(value) {
    return RegExpHandlers.regExprForInput(value);
  }

  resetForm() {
    this.form.reset();
  }

  addNewTask(task) {
    const tasks = [...Storage.getFromLocalStorage()];
    let updatedTasks;
    tasks ? (updatedTasks = [...tasks, task]) : (updatedTasks = [...taskList.tasks, task]);
    taskList.tasks = [...updatedTasks];

    Storage.setToLocalStorage(taskList.tasks);

    const list = new RenderList();
    list.markUpCheck();
  }

  findTask(indexItem) {
    const tasks = [...Storage.getFromLocalStorage()];
    const editedTask = tasks.find((el, index) => {
      if (index === indexItem) {
        this.input.value = el.title;
        console.log(this.dateEdit(el.creationDate));
        this.startDateInput.value = this.dateEdit(el.creationDate);
        this.endDateInput.value = this.dateEdit(el.expirationDate);
        return el;
      }
    });
    console.log(editedTask);
    return editedTask;
  }

  updateTask(task) {
    const tasks = [...Storage.getFromLocalStorage()];
    const updatedTasks = tasks.map((el, index) => (el.id === task.id ? { ...task } : el));
    Storage.setToLocalStorage(updatedTasks);

    return updatedTasks;
  }
}
