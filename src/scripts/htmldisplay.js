/* eslint-disable import/no-cycle */
import { task } from './addnew.js';
import valueCheck from './completed.js';

function storageContainer() {
    const taskContainer = document.getElementById('taskUl');
    taskContainer.innerHTML = '';
    for (let i = 0; i < task.length; i += 1) {
        const li = document.createElement('li');
        task[i].index = i;
        if (task[i].complete !== false) {
            li.innerHTML = `<div>
            <input id="${task[i].index}" type="checkbox" class="task_check" name="task" checked>
            <input type="text" class="check_true for="task" id="label" value="${task[i].description}" ></input>
            </div>
            <div><i class="far trashBin fa-trash-alt" id="trashbin"></i>`;
            li.classList.add('task_li');
            li.setAttribute('id', `${task[i].index}`);
            taskContainer.appendChild(li);
        } else {
            li.innerHTML = `<div>
            <input id="${task[i].index}" type="checkbox" class="task_check" name="task">
            <input type="text" class="check_true"  for="task" id="label" value="${task[i].description}"></input>
            </div>
            <div><i class="far trashBin fa-trash-alt" id="trashbin"></i>`;
            li.classList.add('task_li');
            li.setAttribute('id', `${task[i].index}`);
            taskContainer.appendChild(li);
        }
    }
    localStorage.setItem('task', JSON.stringify(task));
    valueCheck();
}

export default storageContainer;