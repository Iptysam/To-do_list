import './style.css';

const tasks = [
  {
    index: 1,
    description: 'Learn Javascript',
    completed: false,
  },
  {
    index: 2,
    description: 'Attend Meetings',
    completed: false,
  },
  {
    index: 3,
    description: 'Do exercises',
    completed: false,
  },
  {
    index: 4,
    description: 'Finish Projects',
    completed: true,
  },
];
const tasksLoad = () => {
  const sortedTasks = tasks.sort((a, b) => a.index - b.index);
  const useTasks = sortedTasks.map((tasks) => `
    <div class="lists_links">
      <div class="link_inputs" >
        <input type="checkbox" name="" id="${tasks.index}" ${tasks.completed ? 'checked' : ''} value="${tasks.completed}">
        <label for="">${tasks.description}</label>
      </div>
      <div class="dots3">
        <div class="dots"></div>
        <div class="dots"></div>
        <div class="dots"></div>
      </div>
    </div>
  `);

  document.getElementById('list').innerHTML = useTasks.join('');
};

document.addEventListener('DOMContentLoaded', tasksLoad());