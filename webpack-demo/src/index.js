import _ from 'lodash';

let tasklist = [{

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
    }
];

const render = () => {
    tasklist = tasklist.sort((a, b) => a.index - b.index);
    console.log(tasklist);
};

window.onload = () => {
    render()
};

// for (let i = 0; i < taskList.length; i += 1) {
//     taskUl.innerHTML = `
//     <li>
//     </li>
// `;
// }
// class Task {
//     constructor(description, index, status) {
//       this.description = description;
//       this.completed = status;
//       this.index = index;
//     }
//   }