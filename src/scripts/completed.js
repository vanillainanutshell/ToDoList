import component from './htmldisplay.js';
import task from './taskdescription.js';

const valueCheck = () => {
    const check = document.querySelectorAll('.task_check');
    check.forEach((e) => {
        e.addEventListener('change', () => {
            if (e.checked) {
                task[e.id].complete = true;
                localStorage.setItem('task', JSON.stringify(task));
                component();
            } else {
                task[e.id].complete = false;
                localStorage.setItem('task', JSON.stringify(task));
                component();
            }
            window.location.reload();
        });
    });
};
export default valueCheck;