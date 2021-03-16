import TaskCreator from "./taskCreator.js";
import FormModal from './formModal.js';

class Modal {
    constructor(){
        this.openButton = document.querySelector('.add-button');
        this.modal = document.querySelector('.overlay');
        this.saveButton = document.querySelector(".button[data-name='save']")
    }

    openModal(){
        this.openButton.addEventListener('click',e=>{
            this.modal.classList.toggle('is-open');
        });
    }

    closeModal(){
        this.modal.classList.remove('is-open');
    }

    closeModalByClick(){
        this.modal.addEventListener("click",e=>{
            
            if(e.target.dataset.name === "cancel"){
                this.closeModal();   
            }

            if(e.target.dataset.name === "save"){
                e.preventDefault();
                const newTask = new FormModal().createTask();
                new TaskCreator().addNewTask(newTask);
            }
        });
    }

    closeModalByEscape(){
        window.addEventListener("keydown",e=>{
            if(e.code ==="Escape"){
                this.closeModal();
            }
        })
    }

}


export default Modal;