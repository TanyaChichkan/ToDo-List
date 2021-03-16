
export class Storage{
   static setToLocalStorage(data){
        localStorage.setItem("tasks", JSON.stringify(data));
    }

    static getFromLocalStorage(){
        const data = localStorage.getItem("tasks");

        return data ? JSON.parse(data) :[];
          
    }
};

