import {taskList} from './tasks.js';
import {Storage} from './storage.js';
import {RenderList} from './renderList.js';
import {Handlers} from './handlers.js';

export class TaskCreator{
    constructor(){
        this.form = document.querySelector('.form-task');
        this.input = this.form.querySelector('.form-input');
        this.newTask={};
        this.idValue=0;
    }

    makeTask(){
        const task = {...this.newTask};
        task.id=this.idValue++;
        task.title = this.inputValidation(this.input.value);
        task.creationDate = this.setTimingStart();
        task.expirationDate = this.setTimingFinish();
        return task;
    }

    inputValidation(value){
       return Handlers.regExprForInput(value);
    }

    setTimingStart(value=""){
        const date = value ? value : new Date();
        const dayOfMonth = this.dateFormatting(date.getDate());
        const month = this.dateFormatting(date.getMonth()+1);
        const year = date.getFullYear();
        const result = `${dayOfMonth}-${month}-${year}`;
        return result;
    }

    setTimingFinish(){
        const date = new Date();
        const expDate = date.setDate(date.getDate()+1);
        const expDateFormatted = this.setTimingStart(new Date(expDate))
        return expDateFormatted;
    }

    dateFormatting(value){
       return  value < 10 ? String(value).padStart(2,"0") : value;
    }

    submitForm(){
        this.form.addEventListener('submit',(e)=>this.formSubmitHandler(e));
    }

    formSubmitHandler(e){
        e.preventDefault();
        this.addNewTask(this.makeTask());
        this.resetForm();
    }

    resetForm(){
        this.form.reset();
    }

    addNewTask(task){
        const tasks = Storage.getFromLocalStorage();
        let updatedTasks;
        
        tasks ? 
            updatedTasks = [...tasks,task] :
            updatedTasks = [...taskList.tasks,task]; 
            
        taskList.tasks = [...updatedTasks];

        Storage.setToLocalStorage(taskList.tasks);

        const list = new RenderList();
        list.markUpCheck();
    }
};


