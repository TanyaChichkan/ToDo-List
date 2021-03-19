import {Storage} from '../utils-classes/storage.js';
import {listWrapper} from '../constants/constants.js';
import {MarkUpCreator} from '../utils-classes/markUpCreator.js';


export class Filter{
    
    constructor(){
        this.setSelectors();
        this.setListeners();
    }

    setSelectors(){
        this.filterIcon = document.querySelector('.filter-icon i');
        this.filterWrapper = document.querySelector('.filter-wrapper');
        this.input = document.querySelector('.search-input');
    }
    
    setListeners(){
        this.filterIcon.addEventListener('click', ({target})=>this.handleClick(target));
        this.input.addEventListener('input',({target})=>this.handleInput(target));
    }

    handleClick(target){
        if(target.dataset.name === "icon-filter");
        this.filterWrapper.classList.toggle('is-open');
    }

    handleInput(target){
        const inputValue = target.value;
        const tasks = Storage.getFromLocalStorage();
        const filteredTasks = tasks.filter(task=>task.title.toLowerCase().includes(inputValue.toLowerCase()));
        listWrapper.innerHTML = MarkUpCreator.createListItems(filteredTasks);
    }
}