import { TaskCreator } from './js/main-classes/taskCreator.js';
import { Modal } from './js/main-classes/modal.js';
import { RenderList } from './js/main-classes/renderList.js';
import {ListWrapper} from './js/main-classes/listWrapperEvents.js';
import {Filter} from './js/main-classes/filter.js';
import {ButtonsFilter} from './js/main-classes/buttonsFilter.js';

document.addEventListener('DOMContentLoaded', handler);


function handler() {

    const list = new RenderList();
    list.markUpCheck();
    
    const modal = new Modal();
    
    const task = new TaskCreator();
   
    const wrapper = new ListWrapper();
    const filterWrapper = new Filter();
    const buttonsFilter = new ButtonsFilter();
}

