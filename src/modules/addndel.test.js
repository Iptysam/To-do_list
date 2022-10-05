const mockTasks = require('../__mock__/localStorage.js');
const Mocktest = require('./mocktask.js');

const testlist = new Mocktest('task1', 1, false);
const testlist2 = new Mocktest('task2', 2, false);

test('add items to list test', () => {
  expect(Mocktest.addList(testlist.getItems()).length).toBe(mockTasks.length);
  expect(Mocktest.addList(testlist2.getItems()).length).toBe(mockTasks.length);
});

test('delete items to list test', () => {
  expect(Mocktest.deleteList(testlist.getItems()).length).toBe(mockTasks.length);
  expect(Mocktest.deleteList(testlist2.getItems()).length).toBe(mockTasks.length);
});
