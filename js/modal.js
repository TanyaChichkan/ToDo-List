import TaskCreator from "./taskCreator.js";
import FormModal from './formModal.js';

class Modal extends FormModal{
    constructor(){
        super();
        this.openButton = document.querySelector('.add-button');
        this.modal = document.querySelector('.overlay');
        this.saveButton = document.querySelector(".button[data-name='save']");
    }

    openModal(){
        this.openButton.addEventListener('click',()=>this.openModalHandler());
    }

    openModalHandler(){
        this.modal.classList.toggle('is-open');
    }

    closeModal(){
        this.modal.classList.remove('is-open');
    }

    buttonsClick(){
        this.modal.addEventListener("click",(e)=>this.buttonsClickHandler(e));
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

    closeModalByEscape(){
        window.addEventListener("keydown",e=>{
            if(e.code ==="Escape"){
                this.closeModal();
            }
        })
    }

}


export default Modal;