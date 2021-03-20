import { listWrapper } from '../constants/constants.js';
import { MarkUpCreator } from '../utils-classes/markUpCreator.js';
import { FormModal } from './formModal.js';

export class Modal extends FormModal {
  constructor() {
    super();
    this.setSelectors();
    this.setListeners();
  }

  setSelectors() {
    this.openButton = document.querySelector('.add-button');
    this.modal = document.querySelector('.overlay');
    this.saveButton = document.querySelector(".button[data-name='save']");
    
  }

  setListeners() {
    this.openButton.addEventListener('click', (e) => this.openModalHandler(e));
    this.modal.addEventListener('click', (e) => this.buttonsClickHandler(e));
    window.addEventListener('keydown', (e) => this.closeModalByEscape(e));
    listWrapper.addEventListener('click', (e) => this.openModalHandler(e))
  }

  openModalHandler(e) {
    if(e.target.dataset.name === "task-edit" || e.target.dataset.name === "open-modal")
    this.modal.classList.toggle('is-open');

    if(e.target.dataset.name === "task-edit"){
      this.saveButton.textContent = "Update";

      const indexItem = Number(e.target.dataset.index);
      const task = this.findTask(indexItem);
      this.task={...task};
      
    }
    
  }

  closeModal() {
    this.modal.classList.remove('is-open');
  }

  buttonsClickHandler(e) {
    if (e.target.dataset.name === 'cancel') {
      this.closeModal();
      this.saveButton.textContent = "Save";
      this.resetForm();
    }

    if (e.target.dataset.name === 'save') {
      e.preventDefault();

      if(this.saveButton.textContent === "Save"){
        const newTask = this.createTask();
        this.addNewTask(newTask);
        this.resetForm();
        this.closeModal();
      }

      if(this.saveButton.textContent === "Update"){
        e.preventDefault();
        const updatedTasks = this.updateTask(this.task);
        this.resetForm();
        this.closeModal();
        
        MarkUpCreator.renderListItems(updatedTasks);
        this.saveButton.textContent = "Save";
      }
    }

    if (e.target.dataset.name === 'modal-closer') {
      this.closeModal();
    }
  }

  closeModalByEscape(e) {
    if (e.code === 'Escape') {
      this.closeModal();
    }
  }

 

}
