import { Storage } from '../utils-classes/storage.js';
import { MarkUpCreator } from '../utils-classes/markUpCreator.js';

export class RenderList {
  constructor() {
    this.listWrapper = document.querySelector('.list-wrapper');
    this.notificText = this.listWrapper.querySelector('.empty-list');
    this.tasks = Storage.getFromLocalStorage();
    this.listWrapper.addEventListener('click', ({ target }) => this.handlerTaskClick(target));
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
    const markUp = this.tasks.map(({ title, creationDate, expirationDate }, index) => {
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
      console.log('check');
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

  renderText() {
    this.listWrapper.insertAdjacentHTML(
      'beforeend',
      `<p class="empty-list">No tasks in your list yet</p>`
    );
  }

  handlerTaskClick(target) {
    console.log(target);

    const indexItem = Number(target.dataset.index);

    if (target.name === 'task-done' && target.checked) {
      this.markTaskDone(indexItem);
      target.parentNode.classList.add('is-done');
    }

    if (!target.checked) {
      this.markTaskDone(indexItem);
      target.parentNode.classList.remove('is-done');
    }
  }

  markTaskDone(indexItem) {
    const updatedTasks = Storage.getFromLocalStorage();
    const editedTasks = updatedTasks.map((el, index) => {
      return indexItem === index ? { ...el, done: !el.done } : el;
    });

    Storage.setToLocalStorage(editedTasks);
  }
}
