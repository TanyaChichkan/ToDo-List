import {taskList} from './js/tasks.js';
import taskCreator from './js/taskCreator.js';
import modal from './js/modal.js';
import formModal from './js/formModal.js';

new taskCreator().submitForm();

new modal().openModal();
new modal().closeModalByClick();
new modal().closeModalByEscape();







