import { TaskCreator } from './js/main-classes/taskCreator.js';
import { Modal } from './js/main-classes/modal.js';
import { RenderList } from './js/main-classes/renderList.js';

document.addEventListener('DOMContentLoaded', handler);

const modal = new Modal();

const task = new TaskCreator();

function handler() {
    const list = new RenderList();
    list.markUpCheck();
}

