import task from './taskdescription.js';
import valueCheck from './completed.js';

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
            <div><i class="fas fa-ellipsis-v" id="three_dots"></i></div>`;
            li.classList.add('task_li');
            li.setAttribute('id', `${task[i].index}`)
            li.setAttribute('draggable', 'true');
            taskContainer.appendChild(li);

        } else {
            li.innerHTML = `<div>
            <input id="${task[i].index}" type="checkbox" class="task_check" name="task">
            <label for="task" id="label">${task[i].description}</label>
            </div>
            <div><i class="fas fa-ellipsis-v" id="three_dots"></i></div>`;
            li.classList.add('task_li');
            li.setAttribute('id', `${task[i].index}`);
            container.appendChild(li);
        }
    }
    valueCheck();
}

export default component;