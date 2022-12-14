const mockTasks = require('../__mock__/localStorage.js');

module.exports = class Mocktest {
  constructor(description, index = 0, complete = false) {
    this.description = description;
    this.index = index;
    this.complete = complete;
  }

  static addList(items) {
    mockTasks.push(items);
    return mockTasks;
  }

  static deleteList(index) {
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

  clearCompTask() {
    let task = {
      description: this.description,
      index: this.index,
      complete: this.complete,
    };
    const clearTask = (items) => items.filter((task) => !task.complete);
    task = clearTask;
    return task;
  }

  EditTest() {
    mockTasks[this.index].description = this.complete;
    return mockTasks[this.index];
  }

  IsStatusUpdate() {
    if (mockTasks[0].completed === this.complete) {
      mockTasks[0].completed = true;
    } else if (mockTasks[0].completed) {
      mockTasks[0].completed = this.complete;
    }
    return mockTasks[0].completed;
  }
};
