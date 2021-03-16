import TaskCreator from "./taskCreator.js";


class FormModal extends TaskCreator{
    constructor(){
        super();
        this.form= document.querySelector('.modal-form');
        this.input = this.form.querySelector('input[name="taskName"]');
        this.startDateInput = this.form.querySelector('input[name="startDate"]');
        this.endDateInput = this.form.querySelector('input[name="expDate"]');
        // this.taskTextInput.value = this.;
    }

    createTask(){
        this.newTask.id=this.idValue++;
        this.newTask.title = this.input.value;
        this.newTask.creationDate =  this.startDateInput.value;
        this.newTask.expirationDate = this.endDateInput.value;
        return this.newTask;
    }









    // this.form.addEventListener('submit',e=>{
    //     this.getValue();
    // })
};


export default FormModal;