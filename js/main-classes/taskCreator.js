import { Form } from './form.js';
import { IdCreator } from '../utils-classes/idCreator.js';

export class TaskCreator extends Form {
  constructor() {
    super();
    this.form = document.querySelector('.form-task');
    this.input = this.form.querySelector('.form-input');
    this.setListeners();
  }

  makeTask() {
    const task = {};
    task.id = IdCreator.idCreate();
    task.title = this.inputValidation(this.input.value);
    task.creationDate = this.dateCheck('creationDateForm');
    task.expirationDate = this.dateCheck('expirationDateForm');
    task.done = false;
    return task;
  }

  setListeners() {
    this.form.addEventListener('submit', (e) => this.formSubmitHandler(e));
  }

  formSubmitHandler(e) {
    e.preventDefault();
    this.addNewTask(this.makeTask());
    this.resetForm();
  }
}
