const mockTasks = require('../__mock__/localStorage.js');
const Mocktest = require('./mocktask.js');

const clearTaskStaus = new Mocktest('task1', 1, false);
const EditTask1 = new Mocktest('task111', 0, false);
const EditTask2 = new Mocktest('task222', 1, false);
const UpdateCompleteStaus1 = new Mocktest('task3', 0, false);
const UpdateCompleteStaus2 = new Mocktest('task4', 2, false);

describe('Test for Task Edit, Update, and Clear Complete Status', () => {
  test('Test for Clear All Completed Tasks', () => {
    expect(clearTaskStaus.clearCompTask(mockTasks).length).toBe(1);
  });

  test('Test for Edit Task', () => {
    expect(EditTask1.EditTest()).toEqual(mockTasks[0]);
    expect(EditTask2.EditTest()).toEqual(mockTasks[1]);
  });

  test('Test for Update Complete Task status', () => {
    expect(UpdateCompleteStaus1.IsStatusUpdate()).toEqual(mockTasks[0].completed);
    expect(UpdateCompleteStaus2.IsStatusUpdate()).toEqual(mockTasks[2].completed);
  });
});
