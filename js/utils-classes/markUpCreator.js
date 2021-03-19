import {listWrapper} from '../constants/constants.js';

export class MarkUpCreator {
  static createListElement() {
    let newListElement = document.createElement('ul');
    newListElement.classList.add('list');

    return newListElement;
  }

  static  createListItems(arr) {
    const markUp = arr.map(({ title, creationDate, expirationDate, done,className }, index) => {
      return `<li class=${done? 'is-done' : 'list-item'} data-index=${index}>
                        <input type="checkbox" name="task-done" value="done" data-index=${index} ${done && 'checked'} />
                        <p class="list-text task-title">${title}</p>
                        <p class="list-text">Start date: ${creationDate}</p>
                        <p class="list-text">Finish date: ${expirationDate}</p>
                        <p class="list-icon" data-name="task-delete" data-index=${index}>&#10006</p>
                        <p class="list-icon">&#9998</p>
                        </li>`;
    });
    return markUp.join(' ');
  }

  static createList() {
    let list = this.createListElement();
    listWrapper.insertAdjacentElement('beforeend', list);
    return list;
  }

  static  renderListItems(arr){
    const list = document.querySelector('.list');
    list.innerHTML = MarkUpCreator.createListItems(arr);
  }

}
