import TaskCreator from "./taskCreator.js";


class FormModal extends TaskCreator{
    constructor(){
        super();
        this.modalForm = document.querySelector('.modal-form');
        this.taskTextInput = this.modalForm.querySelector('input[name="taskName"]');
        this.startDateInput = this.modalForm.querySelector('input[name="startDate"]');
        this.endDateInput = this.modalForm.querySelector('input[name="expDate"]');
    }

    getValue(){
        console.log(this.input.value);
        console.log(this.taskTextInput);
        this.taskTextInput.value = this.input.value;
    }



    // this.form.addEventListener('submit',e=>{
    //     this.getValue();
    // })
};


export default FormModal;