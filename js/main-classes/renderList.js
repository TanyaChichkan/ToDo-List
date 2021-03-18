import { Storage } from '../utils-classes/storage.js';
import { MarkUpCreator } from '../utils-classes/markUpCreator.js';
import { List } from './list.js';

export class RenderList extends List {
  constructor() {
    super();
  }

  markUpCheck() {
    if (this.tasks.length) {
      this.listWrapper.textContent = '';
      this.createListItems();
      this.renderList();
    } else {
      this.renderText();
    }
  }

  createListItems() {
    const taskArr = [...this.tasks];
    const markUp = taskArr.map(({ title, creationDate, expirationDate, done,className }, index) => {
      return `<li class="list-item" data-index=${index}>
                        <input type="checkbox" name="task-done" value="done" data-index=${index} />
                        <p class="list-text task-title">${title}</p>
                        <p class="list-text">Start date: ${creationDate}</p>
                        <p class="list-text">Finish date: ${expirationDate}</p>
                        </li>`;
    });
    return markUp.join(' ');
  }


  renderList() {
    if (this.tasks.length) {
      this.createList();
      const list = document.querySelector('.list');
      list.insertAdjacentHTML('beforeend', this.createListItems());
    } else {
      list.insertAdjacentHTML('beforeend', this.createListItems());
    }
  }

  createList() {
    let list = MarkUpCreator.createListElement();
    this.listWrapper.insertAdjacentElement('beforeend', list);
  }

  changeListItemsStyle(){
    if(this.allListItems){

    }
  }

  renderText() {
    this.listWrapper.insertAdjacentHTML(
      'beforeend',
      `<p class="empty-list">No tasks in your list yet</p>`
    );
  }
}
