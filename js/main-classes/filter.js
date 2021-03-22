import { Storage } from '../utils-classes/storage.js';
import { MarkUpCreator } from '../utils-classes/markUpCreator.js';

export class Filter {
  constructor() {
    this.setSelectors();
    this.setListeners();
  }

  setSelectors() {
    this.filterIcon = document.querySelector('.filter-icon i');
    this.filterWrapper = document.querySelector('.filter-wrapper');
    this.input = document.querySelector('.search-input');
  }

  setListeners() {
    this.filterIcon.addEventListener('click', ({ target }) => this.handleClick(target));
    this.filterWrapper.addEventListener('click', ({ target }) => this.handleSort(target));
    this.input.addEventListener('input', ({ target }) => this.handleInput(target));
  }

  handleClick(target) {
    if (target.dataset.name === 'icon-filter');
    this.filterWrapper.classList.toggle('is-open');
  }

  handleInput(target) {
    const inputValue = target.value;
    const tasks = [...Storage.getFromLocalStorage()];
    const filteredTasks = tasks.filter((task) =>
      task.title.toLowerCase().includes(inputValue.toLowerCase())
    );
    MarkUpCreator.renderListItems(filteredTasks);
  }

  handleSort(target) {
    const tasks = [...Storage.getFromLocalStorage()];

    if (target.dataset.name === 'sort-date start') {
      const sortedArr = tasks.sort((a, b) => (a.creationDate > b.creationDate ? 1 : -1));
      MarkUpCreator.renderListItems(sortedArr);
    }

    if (target.dataset.name === 'sort-date finish') {
      const sortedArr = tasks.sort((a, b) => (a.expirationDate < b.expirationDate ? 1 : -1));
      MarkUpCreator.renderListItems(sortedArr);
    }

    if (target.dataset.name === 'sort-name asc') {
      const sortedArr = tasks.sort((a, b) => (a.title > b.title ? 1 : -1));
      MarkUpCreator.renderListItems(sortedArr);
    }

    if (target.dataset.name === 'sort-name dsc') {
      const sortedArr = tasks.sort((a, b) => (a.title < b.title ? 1 : -1));
      MarkUpCreator.renderListItems(sortedArr);
    }
  }
}
