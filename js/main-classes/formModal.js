import { Form } from './form.js';
import { IdCreator } from '../utils-classes/idCreator.js';

export class FormModal extends Form {
  constructor() {
    super();
    this.form = document.querySelector('.modal-form');
    this.input = this.form.querySelector('input[name="taskName"]');
    this.startDateInput = this.form.querySelector('input[name="startDate"]');
    this.endDateInput = this.form.querySelector('input[name="expDate"]');
    
  }

  createTask() {
    const newTask = {};
    newTask.id = IdCreator.idCreate();
    newTask.title = this.inputValidation(this.input.value);
    newTask.creationDate = this.dateCheck('creationDate');
    newTask.expirationDate = this.dateCheck('expirationDate');
    newTask.done = false;
    this.dateEdit(this.startDateInput.value);
    return newTask;
  }
}
