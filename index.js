import { TaskCreator } from './js/main-classes/taskCreator.js';
import { Modal } from './js/main-classes/modal.js';
import { RenderList } from './js/main-classes/renderList.js';

window.addEventListener('load', handler);

const modal = new Modal();

function handler() {
  const list = new RenderList();
  list.markUpCheck();

  const task = new TaskCreator();
}
