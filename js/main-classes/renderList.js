import { Storage } from '../utils-classes/storage.js';
import { MarkUpCreator } from '../utils-classes/markUpCreator.js';
import { listWrapper } from '../constants/constants.js';

export class RenderList {
  constructor() {
    this.notificText = listWrapper.querySelector('.empty-list');
    this.tasks = Storage.getFromLocalStorage();
  }

  markUpCheck() {
    if (this.tasks.length) {
      listWrapper.innerHTML = '';
      MarkUpCreator.createListItems(this.tasks);
      this.renderList();
    } else {
      this.renderText();
    }
  }

  renderList() {
    if (this.tasks.length) {
      MarkUpCreator.createList();
      const list = document.querySelector('.list');
      list.insertAdjacentHTML('beforeend', MarkUpCreator.createListItems(this.tasks));
    } else {
      list.insertAdjacentHTML('beforeend', MarkUpCreator.createListItems(this.tasks));
    }
  }

  renderText() {
    listWrapper.insertAdjacentHTML(
      'beforeend',
      `<p class="empty-list">No tasks in your list yet</p>`
    );
  }
}
