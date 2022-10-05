const mockTasks = require ('../__mock__/localStorage.js');
const mocktest = require ('./mocktask.js');
const testlist = new mocktest('task1', 1, false);
const testlist2 = new mockTest('task2', 2, false);

test('add items to list test', () => {   
expect(mocktest.addList(testlist.getItems()).length).toBe(mockTasks.length)
expect(mocktest.addList(testlist2.getItems()).length).toBe(mockTasks.length)
});

