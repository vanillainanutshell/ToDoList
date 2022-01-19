import './style.css';

const taskList = [{

  description: 'Task 1',
  completed: false,
  index: 0,
},
{
  description: 'Task 2',
  completed: false,
  index: 1,
},
{
  description: 'Task 3',
  completed: false,
  index: 2,
},
{
  description: 'Task 4',
  completed: false,
  index: 3,
},
];
const generateTask = () => {
  const taskUl = document.getElementById('taskUl');
  for (let i = 0; i < taskList.length; i += 1) {
    const li = document.createElement('li');
    li.innerHTML = `
        <div>       
            <input type="checkbox" id="task" name="tasks">
            <label for="tasks">${taskList[i].description}</label>
        </div>
        <div><i class="fas fa-ellipsis-v"></i></i></div>`;
    taskUl.appendChild(li);
  }
};

window.onload = () => {
  generateTask();
};