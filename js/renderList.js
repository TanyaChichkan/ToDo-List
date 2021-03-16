import {taskList} from './tasks.js';
import {Storage} from './storage.js';


class RenderList{

    
    constructor(){
        this.listWrapper = document.querySelector('.list-wrapper');
        this.notificText = this.listWrapper.querySelector('.empty-list');
        this.tasks = Storage.getFromLocalStorage();
    }

    markUpCheck(){
        console.log(this.tasks);
        if(this.tasks.length){
            this.listWrapper.innerHTML="";
            this.createListItems();
            this.renderList();
        }else {
            this.renderText();
        }
    }

    createListItems(){
        console.log();
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
            list.innerHTML=this.createListItems();
        }else{
            list.innerHTML=this.createListItems();
        }
    }

    createList(){
        let list = document.createElement('ul');
            list.classList.add('list');
            this.listWrapper.append(list);

    }

    renderText(){
        this.listWrapper.innerHTML = `<p class="empty-list">No tasks in your list yet</p>`
    }
};

export default RenderList;