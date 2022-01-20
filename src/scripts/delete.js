import task from './taskdescription.js';
import component from './htmldisplay.js';

const taskDelete = () => {
    const clearButton = document.getElementById('clear');
    clearButton.addEventListener('click', () => {
        const deleted = task.filter((x) => x.complete === false);
        task.splice(0);
        task.push(...result);
        localStorage.setItem('task', JSON.stringify(task));
        component();
    });
};
const deleteBin = () => {
    const trashBin = document.querySelectorAll('#trashbin');
    trashBin.forEach((e) => {
        e.addEventListener('click', () => {
            const index = e.parentNode.parentNode.remove();
            task.splice(index, 1);
            localStorage.setItem('task', JSON.stringify(task));
            component();
            window.location.reload();

        });
    });
};