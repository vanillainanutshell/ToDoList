/* eslint-disable import/no-cycle */
import { task } from './addnew.js';
import valueCheck from './completed.js';

function component() {
    const taskContainer = document.getElementById('taskUl');
    taskContainer.innerHTML = '';
    for (let i = 0; i < task.length; i += 1) {
        const li = document.createElement('li');
        task[i].index = i;
        if (task[i].complete !== false) {
            li.innerHTML = `<div>
            <input id="${task[i].index}" type="checkbox" class="task_check" name="task" checked>
            <label  class="check_true for="task" id="label">${task[i].description}</label>
            </div>
            <div><i class="far trashBin fa-trash-alt" id="trashbin"></i><i class="fas fa-ellipsis-v" id="three_dots"></i></div>`;
            li.classList.add('task_li');
            li.setAttribute('id', `${task[i].index}`);
            taskContainer.appendChild(li);
        } else {
            li.innerHTML = `<div>
            <input id="${task[i].index}" type="checkbox" class="task_check" name="task">
            <label class="check_true"  for="task" id="label">${task[i].description}</label>
            </div>
            <div><i class="far trashBin fa-trash-alt" id="trashbin"></i><i class="fas fa-ellipsis-v" id="three_dots"></i></div>`;
            li.classList.add('task_li');
            li.setAttribute('id', `${task[i].index}`);
            taskContainer.appendChild(li);
        }
    }
    localStorage.setItem('task', JSON.stringify(task));
    valueCheck();
}

export default component;