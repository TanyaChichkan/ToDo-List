import {taskList} from './js/tasks.js';
import TaskCreator from './js/taskCreator.js';
import Modal from './js/modal.js';
import FormModal from './js/formModal.js';


window.addEventListener("load",handler);

function handler(){
    const taskCreator = new TaskCreator();
    taskCreator.submitForm();

    const modal = new Modal();
    modal.openModal();
    modal.buttonsClick();
    modal.closeModalByEscape();

    const formModal = new FormModal();
    formModal.createTask();
}





