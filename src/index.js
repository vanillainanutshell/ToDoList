import './style.css';
import { input, storage } from './scripts/taskdescription.js';
import { taskDelete, deleteBin } from './scripts/delete.js'
// import contentChange from './scripts/taskdescription.js'
// import valueCheck from './scripts/completed.js';


deleteBin();
taskDelete();
input();
storage();
// valueCheck();
// contentChange();