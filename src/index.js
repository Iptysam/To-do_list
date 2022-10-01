import './style.css';

import Tasklist, { addListItem, list } from './modules/script.js';

const enterKey = document.getElementById('enter-key');
const clearButton = document.querySelector('.list-clear');

document.addEventListener('DOMContentLoaded', () => {
  Tasklist.createList();
});

addListItem.addEventListener('keypress', (event) => {
  if (event.key === 'Enter') {
    Tasklist.addToList();
    Tasklist.createList();
    addListItem.value = '';
  }
});

enterKey.addEventListener('click', () => {
  Tasklist.addToList();
  Tasklist.createList();
  document.querySelector('.input-text').value = '';
});

document.addEventListener('click', (event) => {
  if (event.target.classList.contains('to-do')) {
    event.target.parentElement.classList.add('back');
  }
});

clearButton.addEventListener('click', () => {
  
  Tasklist.createList();
  window.location.reload();
});
