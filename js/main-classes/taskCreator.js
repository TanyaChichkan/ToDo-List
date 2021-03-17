import { Form } from './form.js';

export class TaskCreator extends Form {
  constructor() {
    super();
    this.form = document.querySelector('.form-task');
    this.input = this.form.querySelector('.form-input');
    this.idValue = 0;
    this.setListeners();
  }

  makeTask() {
    const task = {};
    task.id = this.idValue++;
    task.title = this.inputValidation(this.input.value);
    task.creationDate = this.dateCheck('creationDateForm');
    task.expirationDate = this.dateCheck('expirationDateForm');
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
