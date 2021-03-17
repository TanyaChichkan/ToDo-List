import { TaskCreator } from './taskCreator.js';

export class FormModal extends TaskCreator {
  constructor() {
    super();
    this.form = document.querySelector('.modal-form');
    this.input = this.form.querySelector('input[name="taskName"]');
    this.startDateInput = this.form.querySelector('input[name="startDate"]');
    this.endDateInput = this.form.querySelector('input[name="expDate"]');
  }

  createTask() {
    const newTask = { ...this.newTask };
    newTask.id = this.idValue++;
    newTask.title = this.inputValidation(this.input.value);
    newTask.creationDate = this.dateCheck('creationDate');
    newTask.expirationDate = this.dateCheck('expirationDate');

    this.dateEdit(this.startDateInput.value);
    return newTask;
  }

  dateCheck(value) {
    if (value === 'creationDate') {
      return this.startDateInput.value
        ? this.dateEdit(this.startDateInput.value)
        : this.setTimingStart();
    }

    if (value === 'expirationDate') {
      return this.endDateInput.value
        ? this.dateEdit(this.endDateInput.value)
        : this.setTimingFinish();
    }
  }

  dateEdit(value) {
    return value.split('-').reverse().join('-');
  }
}
