import { task } from './addnew.js';
import storageContainer from './htmldisplay.js';


const deleteBin = () => {
    const trashBin = document.querySelectorAll('#trashbin');
    trashBin.forEach((e) => {
        e.addEventListener('click', () => {
            const index = e.parentNode.parentNode.id;
            e.parentNode.parentNode.remove();
            task.splice(index, 1);
            localStorage.setItem('task', JSON.stringify(task));
            storageContainer();
            window.location.reload();
        });
    });
};

export default deleteBin;