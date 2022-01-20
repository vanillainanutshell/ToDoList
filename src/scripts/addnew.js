import component from './htmldisplay.js';

export const task = [];

class ToDoList {
    constructor(index, description, complete = false) {
        this.index = index;
        this.description = description;
        this.complete = complete;
    }
}

const inputTask = document.getElementById('add_input');

export const input = () => {
    inputTask.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            let index = task.length - 1;
            index += 1;
            const taskObject = new ToDoList(index, inputTask.value, false);
            task.push(taskObject);
            localStorage.setItem('task', JSON.stringify(task));
            component();
            inputTask.value = '';
        }
    });
};
export const contentChange = () => {
    const content = document.querySelectorAll('#label');
    content.forEach((e) => {
        e.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                const newDescription = e.target.innerText;
                e.preventDefault();
                task[e.target.parentNode.parentNode.id].description = newDescription;
                localStorage.setItem('task', JSON.stringify(task));
                component();
            }
        });
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