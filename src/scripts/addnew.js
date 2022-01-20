import component from './htmldisplay.js'

// const checkBox = document.querySelector('.task_check');
// const check_label = document.getElementById('label');

export let task = [];

class ToDo {
    constructor(index, description, complete = false) {
        this.index = index;
        this.description = description;
        this.complete = complete;
    }
};

const inputTask = document.getElementById('add_input');

export const input = () => {
    inputTask.addEventListener('keypress', (e) => {
        if (e.key === 'enter') {
            let index = task.length - 1;
            index += 1;
            const taskObject = new ToDo(index, inputTask.value, false);
            localStorage.setItem('task', JSON.stringify(task));
            component();
            inputTask.value = '';
        }
    });
};

export const storage = () => {
    const storagedTasks = JSON.parse(localStorage.getItem('task'));
    if (storagedTasks == null) {
        localStorage.setItem('task', JSON.stringify([]));
    } else {
        task = storagedTasks;
        component();
    }
};