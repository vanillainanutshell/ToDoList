/* eslint-disable  import/no-mutable-exports */
/* eslint-disable import/no-cycle */
import storageContainer from './htmldisplay.js';

export let task = [];

class ToDoList {
    constructor(index, description, complete = false) {
        this.index = index;
        this.description = description;
        this.complete = complete;
    }
}

export const input = () => {
    let taskObj = new ToDoList(1, 'Test', false);
    task.push(taskObj);
    taskObj = new ToDoList(2, 'Test2', true);
    task.push(taskObj);
    taskObj = new ToDoList(2, 'Test3', true);
    task.push(taskObj);
    localStorage.setItem('task', JSON.stringify(task));
};


export const storage = () => {
    const storagedTask = JSON.parse(localStorage.getItem('task'));
    if (storagedTask == null) {
        localStorage.setItem('task', JSON.stringify([]));
    } else {
        task = storagedTask;
        storageContainer();
    }
};