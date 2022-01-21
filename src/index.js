import './style.css';
import { input, storage } from './scripts/addnew.js';
import { taskDelete, deleteBin } from './scripts/delete.js';
import contentChange from './scripts/taskdescription.js';
import valueCheck from './scripts/completed.js';

input();
storage();
valueCheck();
contentChange();
deleteBin();
taskDelete();