import { task } from './addnew.js'

export const contentChange = () => {
    const content = document.querySelectorAll('#label');
    content.forEach((e) => {
        e.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                const newDescription = e.target.innerText;
                e.preventDefault();
                task[e.target.parentNode.parentNode.id].description = newDescription;
                localStorage.setItem('task', JSON.stringify(task));
                component();
            }
        });
    });
};