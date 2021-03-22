import { Storage } from '../utils-classes/storage.js';
import { MarkUpCreator } from '../utils-classes/markUpCreator.js';

export class ButtonsFilter {
  constructor() {
    this.setSelectors();
    this.setListeners();
  }

  setSelectors() {
    this.buttonsList = document.querySelector('.buttons-list');
  }

  setListeners() {
    this.buttonsList.addEventListener('click', ({ target }) => this.handleClick(target));
  }

  handleClick(target) {
    const tasks = [...Storage.getFromLocalStorage()];

    if (target.dataset.name === 'All') {
      MarkUpCreator.renderListItems(tasks);
    }

    if (target.dataset.name === 'Active') {
      const showActiveTasks = tasks.filter((task) => task.done);
      MarkUpCreator.renderListItems(showActiveTasks);
    }

    if (target.dataset.name === 'Completed') {
      const showNotCompletedTasks = tasks.filter((task) => !task.done);
      MarkUpCreator.renderListItems(showNotCompletedTasks);
    }

    if (target.dataset.name === 'Clear') {
      const showNotCompletedTasks = tasks.filter((task) => !task.done);
      Storage.setToLocalStorage(showNotCompletedTasks);
      MarkUpCreator.renderListItems(showNotCompletedTasks);
    }
  }
}
