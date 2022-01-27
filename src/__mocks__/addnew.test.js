/**
 * @jest-environment jsdom
 */

import { input, task, storage } from './addnew.js';
import component from './htmldisplay.js';
import { deleteBin } from './delete.js';

describe('Add task functionalities', () => {
  test('Create a new Object', () => {
    input();
    expect(task.length).toBeGreaterThanOrEqual(0);
  });

  test('Create DOM', () => {
    document.body.innerHTML = '<ul id="taskUl"></ul>';
    component();
    expect(task.length).toBeGreaterThanOrEqual(0);
  });
});

describe('Delete functions', () => {
  test('Delete test in position 1', () => {
    if (task.length > 0) {
      deleteBin();
      const trash = document.querySelector("li[id='0'] > div > i");
      trash.click();
    }
    const taskOnStorage = JSON.parse(localStorage.getItem('task'));
    expect(task).toHaveLength(taskOnStorage.length);
  });

  test('Delete test in position 2', () => {
    if (task.length > 0) {
      deleteBin();
      const trash = document.querySelector("li[id='1'] > div > i");
      trash.click();
    }
    const taskOnStorage = JSON.parse(localStorage.getItem('task'));
    expect(task).toHaveLength(taskOnStorage.length);
  });

  test('Delete last test', () => {
    if (task.length > 0) {
      deleteBin();
      const trash = document.querySelector("li[id='0'] > div > i");
      trash.click();
    }
    const taskOnStorage = JSON.parse(localStorage.getItem('task'));
    expect(task).toHaveLength(taskOnStorage.length);
  });
});

describe('Storage test', () => {
  test('Storage', () => {
    storage();
    const taskOnStorage = JSON.parse(localStorage.getItem('task'));
    expect(taskOnStorage.length).toBeGreaterThanOrEqual(0);
  });
});