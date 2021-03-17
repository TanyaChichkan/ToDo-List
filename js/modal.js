import {FormModal} from './formModal.js';

export class Modal extends FormModal{
    constructor(){
        super();
        this.setSelectors();
        this.setListeners();
    }

    setSelectors(){
        this.openButton = document.querySelector('.add-button');
        this.modal = document.querySelector('.overlay');
        this.saveButton = document.querySelector(".button[data-name='save']");
    }

    setListeners(){
        this.openButton.addEventListener('click',()=>this.openModalHandler());
        this.modal.addEventListener("click",(e)=>this.buttonsClickHandler(e));
        window.addEventListener("keydown",(e)=>this.closeModalByEscape(e))
    }

    openModalHandler(){
        this.modal.classList.toggle('is-open');
    }

    closeModal(){
        this.modal.classList.remove('is-open');
    }

    buttonsClickHandler(e){
        if(e.target.dataset.name === "cancel"){
            this.closeModal();   
        }

        if(e.target.dataset.name === "save"){
            e.preventDefault();
            const newTask = this.createTask();
            this.addNewTask(newTask);
            this.resetForm();
            this.closeModal();
        }

        if(e.target.dataset.name === "modal-closer"){
            this.closeModal();  
        }
    }

    closeModalByEscape(e){
        if(e.code ==="Escape"){
            this.closeModal();
        }
       
    }
}


