class TasksToDo {
  #tasks = [];

  get tasks() {
    return this.#tasks;
  }

  set tasks(arr) {
    return (this.#tasks = arr);
  }
}

export const taskList = new TasksToDo();
