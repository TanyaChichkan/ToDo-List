import {taskList} from './tasks.js';

class TaskCreator{
    constructor(){
        this.form = document.querySelector('.form-task');
        this.input = this.form.querySelector('.form-input');
        this.newTask={};
        this.idValue=0;
    }

    makeTask(){
        this.newTask.id=this.idValue++;
        this.newTask.title = this.input.value;
        this.newTask.creationDate = this.setTimingStart();
        this.newTask.expirationDate = this.setTimingFinish();
        return this.newTask;
    }

    setTimingStart(value=""){
        const date = value ? value : new Date();

        const dayOfMonth = this.dateFormatting(date.getDate());
        const month = this.dateFormatting(date.getMonth()+1);
        const year = date.getFullYear();
        const result = `${dayOfMonth}/${month}/${year}`;
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
        this.form.addEventListener('submit',e=>{
            e.preventDefault();
            this.addNewTask(this.makeTask());
            this.form.reset();
            this.newTask={};
        });
        
    }

    addNewTask(task){
        const updatedTasks = [...taskList.tasks,task]; 
        taskList.tasks = [...updatedTasks];
        console.log(taskList.tasks);
    }
};

const task = new TaskCreator();


// task.submitForm();
export default TaskCreator;