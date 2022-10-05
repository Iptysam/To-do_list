const mockTasks = require('../__mock__/localStorage.js');
const Mocktest = require('./mocktask.js');

const testlist = new Mocktest('task1', 1, false);
const testlist2 = new Mocktest('task2', 2, false);

test('add items to list test', () => {
  expect(testlist.addList(testlist.getItems()).length).toBe(mockTasks.length);
  expect(testlist.addList(testlist2.getItems()).length).toBe(mockTasks.length);
});
