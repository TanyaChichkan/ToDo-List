import { TaskCreator } from './js/taskCreator.js';
import { Modal } from './js/modal.js';
import { FormModal } from './js/formModal.js';
import { RenderList } from './js/renderList.js';

window.addEventListener('load', handler);

const modal = new Modal();

function handler() {
    const list = new RenderList();
    list.markUpCheck();
    console.log(new TaskCreator ());
}

