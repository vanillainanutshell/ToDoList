/* eslint-disable import/no-cycle */
import storageContainer from './htmldisplay.js';
import { task } from './addnew.js';

const valueCheck = () => {
    const check = document.querySelectorAll('.task_check');
    check.forEach((e) => {
        e.addEventListener('change', () => {
            if (e.checked) {
                task[e.id].complete = true;
                localStorage.setItem('task', JSON.stringify(task));
                storageContainer();
            } else {
                task[e.id].complete = false;
                localStorage.setItem('task', JSON.stringify(task));
                storageContainer();
            }
            window.location.reload();
        });
    });
};
export default valueCheck;