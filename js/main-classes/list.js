import {Storage} from '../utils-classes/storage.js'

export class List{
    constructor() {
        this.listWrapper = document.querySelector('.list-wrapper');
        this.notificText = this.listWrapper.querySelector('.empty-list');
        this.tasks = Storage.getFromLocalStorage();
        this.listWrapper.addEventListener('click', ({ target }) => this.handlerTaskClick(target));
        this.allListItems = Array.from(this.listWrapper.querySelectorAll('.list-item'));
    }

    handlerTaskClick(target) {
        const currentTasks = [...this.tasks];
        const indexItem = Number(target.dataset.index);
    
        if (target.name === 'task-done' && target.checked) {
          this.markTaskDone(indexItem, currentTasks);
          target.parentNode.classList.add('is-done');
        }
    
        if (!target.checked) {
          this.markTaskDone(indexItem, currentTasks);
          target.parentNode.classList.remove('is-done');
        }
      }

     markTaskDone(indexItem, tasks) {
        const editedTasks = tasks.map((el, index) => {
          return indexItem === index ? { ...el, done: !el.done } : el;
        });
        this.tasks = [...editedTasks];
        Storage.setToLocalStorage(editedTasks);
        return this.tasks;
      }
}