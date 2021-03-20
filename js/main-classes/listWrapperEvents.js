import { Storage } from '../utils-classes/storage.js';
import { MarkUpCreator } from '../utils-classes/markUpCreator.js';
import {listWrapper} from '../constants/constants.js';

export class ListWrapper {
  constructor() {
    this.listWrapper = listWrapper;
    this.listWrapper.addEventListener('click', ({ target }) => this.handleClick(target));
  }
  
  handleClick(target) {
    const currentTasks = [...Storage.getFromLocalStorage()];
    const indexItem = Number(target.dataset.index);

    if (target.dataset.name === 'task-delete') {
      const arr = [...Storage.getFromLocalStorage()];

      const filteredArr = arr.filter((el, index) => index !== Number(target.dataset.index));
      Storage.setToLocalStorage(filteredArr);
      MarkUpCreator.renderListItems(filteredArr);
    }

    if (target.name === 'task-done' && target.checked) {
      this.markTaskDone(indexItem, currentTasks);
      target.parentNode.classList.add('is-done');
    }

    if (target.name === 'task-done' && !target.checked) {
      this.markTaskDone(indexItem, currentTasks);
      target.parentNode.classList.replace('is-done', 'list-item');
    }
  }

  markTaskDone(indexItem, tasks) {
    const editedTasks = tasks.map((el, index) => indexItem === index ? { ...el, done: !el.done } : el);
    Storage.setToLocalStorage(editedTasks);
  }
}
