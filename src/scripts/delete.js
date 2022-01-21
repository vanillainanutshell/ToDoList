import { task } from './addnew.js';
import storageContainer from './htmldisplay.js';

export const taskDelete = () => {
  const clearButton = document.getElementById('clear');
  clearButton.addEventListener('click', () => {
    const result = task.filter((x) => x.complete === false);
    task.splice(0);
    task.push(...result);
    localStorage.setItem('task', JSON.stringify(task));
    storageContainer();
  });
};
export const deleteBin = () => {
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

// export { deleteBin, taskDelete };