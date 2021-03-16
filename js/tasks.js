class TasksToDo{
    constructor(){
        this._tasks=[]
    }

    get tasks(){
        return this._tasks;
    }

    set tasks(arr){
       return this._tasks = arr;
    }

};


export const taskList =  new TasksToDo();

