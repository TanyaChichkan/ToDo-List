import TaskCreator from "./taskCreator.js";
import FormModal from './formModal.js';

class Modal {
    constructor(){
        this.openButton = document.querySelector('.add-button');
        this.modal = document.querySelector('.overlay');
    }

    openModal(){
        this.openButton.addEventListener('click',e=>{
            this.modal.classList.toggle('is-open');
            new FormModal().getValue();
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

            if(e.target.dataset.name==="save"){
                e.preventDefault();
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