const mockTasks = require('../__mock__/localStorage.js');

module.exports = class Mocktest {
  constructor(description, index = 0, complete = false) {
    this.description = description;
    this.index = index;
    this.complete = complete;
  }

  addList(items) {
    mockTasks.push(items);
    return mockTasks;
  }

  deleteList(index) {
    mockTasks.splice(index, 1);
    return mockTasks;
  }

  getItems() {
    const task = {
      description: this.description,
      index: this.index,
      complete: this.complete,
    };
    return task;
  }
}
