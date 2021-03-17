import {Storage} from './storage.js';


export class RenderList{

    constructor(){
        this.listWrapper = document.querySelector('.list-wrapper');
        this.notificText = this.listWrapper.querySelector('.empty-list');
        this.tasks = Storage.getFromLocalStorage();
    }

    markUpCheck(){
        if(this.tasks.length){
            this.listWrapper.textContent='';
            this.createListItems();
            this.renderList();
        }else {
            this.renderText();
        }
    }

    createListItems(){
        const markUp =  this.tasks.map(({title,creationDate,expirationDate})=>{
                return `<li class="list-item">
                        <p class="list-text">${title}</p>
                        <p class="list-text">Start date: ${creationDate}</p>
                        <p class="list-text">Finish date: ${expirationDate}</p>
                        </li>`
            }); 
        return markUp.join(" ");
    }

    renderList(){
        if(this.tasks.length){
            this.createList();
            let list = document.querySelector('.list');
            list.insertAdjacentHTML("beforeend",this.createListItems());
        }else{
            list.insertAdjacentHTML("beforeend",this.createListItems());
        }
    }

    createList(){
        let list = document.createElement('ul');
            list.classList.add('list');
            this.listWrapper.append(list);
    }

    renderText(){
        this.listWrapper.insertAdjacentHTML(
            'beforeend',
            `<p class="empty-list">No tasks in your list yet</p>`
        );
    }
};

