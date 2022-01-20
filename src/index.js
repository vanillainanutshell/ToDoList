import './style.css';
import { input, storage, contentChange } from './scripts/taskdescription.js';
import { taskDelete, deleteBin } from './scripts/delete.js'
// import valueCheck from './scripts/completed.js';

contentChange();
deleteBin();
taskDelete();
input();
storage();
// valueCheck();