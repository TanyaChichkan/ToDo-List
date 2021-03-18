import { TaskCreator } from './js/main-classes/taskCreator.js';
import { Modal } from './js/main-classes/modal.js';
import { RenderList } from './js/main-classes/renderList.js';
import {ListWrapper} from './js/main-classes/listWrapper.js';

document.addEventListener('DOMContentLoaded', handler);


function handler() {
    const modal = new Modal();
    
    const task = new TaskCreator();
    const list = new RenderList();
    list.markUpCheck();
    const wrapper = new ListWrapper();
}

