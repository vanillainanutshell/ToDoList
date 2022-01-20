import { task } from './taskdescription.js';
// import valueCheck from './completed.js';

function component() {
    const taskContainer = document.getElementById('taskUl');
    taskContainer.innerHTML = '';
    for (let i = 0; i < task.length; i += 1) {
        const li = document.createElement('li');
        task[i].index = i;
        if (task[i].complete !== false) {
            li.innerHTML = `<div>
            <input id="${task[i].index} type="checkbox" class="task_check" name="task" checked>
            <label for="task" id="label">${task[i].description}</label>
            </div>
            <div><i class="far fa-trash-alt" id="trash"></i><i class="fas fa-ellipsis-v" id="three_dots"></i></div>`;
            li.classList.add('task_li');
            li.setAttribute('id', `${task[i].index}`);
            taskContainer.appendChild(li);
        } else {
            li.innerHTML = `<div>
            <input id="${task[i].index}" type="checkbox" class="task_check" name="task">
            <label for="task" id="label">${task[i].description}</label>
            </div>
            <div><i class="far fa-trash-alt" id="trash"></i><i class="fas fa-ellipsis-v" id="three_dots"></i></div>`;
            li.classList.add('task_li');
            li.setAttribute('id', `${task[i].index}`);
            taskContainer.appendChild(li);
        }
    }
    localStorage.setItem('task', JSON.stringify(task));
    // valueCheck();
}

export default component;