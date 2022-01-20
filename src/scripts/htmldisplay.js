import task from "./taskdescription";

function component() {
    const taskContainer = document.getElementById('taskUl');
    taskContainer.innerHTML = '';
    console.log(task);
    for (let i = 0; i < task.length; i += 1) {
        const li = document.createElement('li');
        li.innerHTML = `<div>
        <input type="checkbox" class="task_check" name="tasks">
        <label for="tasks" id="label">${tasks[i].description}</label>
        </div>
        <div><i class="fas fa-ellipsis-v" id="three_dots"></i></div>`;
        li.classList.add('tasks_li');
        li.setAttribute('id', `${tasks[i].index}`)
        li.setAttribute('draggable', 'true');
        taskContainer.appendChild(li);
    }
}

export default component;