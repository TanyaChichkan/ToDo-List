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
    const tasks = Storage.getFromLocalStorage();
    let updatedTasks;
    tasks ? (updatedTasks = [...tasks, task]) : (updatedTasks = [...taskList.tasks, task]);
    taskList.tasks = [...updatedTasks];

    Storage.setToLocalStorage(taskList.tasks);

    const list = new RenderList();
    list.markUpCheck();
  }
}
