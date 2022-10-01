const list = JSON.parse(localStorage.getItem('listStorage')) || [];
const addListItem = document.getElementById('tasks');
const listContainer = document.querySelector('.todolist');
export const trashCan = document.querySelectorAll('.delete');

export default class Tasklist {
  constructor(description, complete, index) {
    this.description = description;
    this.complete = complete;
    this.index = index;
  }

  static createList = () => {
    const listContainer = document.querySelector('.todolist');
    const displayList = list.map((list, index) => `<li class="list-item " 
      id="${index}">
      <div class="inline">
      <input id="box-check" type=checkbox class="box-check" name="checkbox">
      </div>
      <input type="text" id="xx" class="to-do input-text" value="${list.description}" >
      <div class="ellipsis-container">
      <i class="fa-solid fa-ellipsis-vertical">
      </i><i class="fa-solid fa-trash-can icon delete"></i></div></li>`).join('');
    listContainer.innerHTML = displayList;
    const ellipsis = document.querySelectorAll('.fa-ellipsis-vertical');
    const removeItem = document.querySelectorAll('.delete');
    const checkBox = document.querySelectorAll('.box-check'); 

    removeItem.forEach((del, i) => {
      del.addEventListener('click', () => {
        Tasklist.deleteItem(i);
      });
    });
    const todo = document.querySelectorAll('.to-do');
    todo.forEach((item, index) => {
      item.addEventListener('change', () => {
        if (item.value) {
          list[index].description = item.value;
          localStorage.setItem('listStorage', JSON.stringify(list));
        }
      });
    });

    for (let i = 0; i < ellipsis.length; i += 1) {
      ellipsis[i].addEventListener('click', () => {
        removeItem[i].style.display = 'inline';
        ellipsis[i].style.display = 'none';
      });
    }

    checkBox.forEach((check, index) => {
        check.addEventListener('change', () => {
          if (check.checked === true) {
            list[index].complete = true;
          } else {
            list[index].complete = false;
          }
          localStorage.setItem('listStorage', JSON.stringify(list));
        });
      });
  };

  static addToList = () => {
    const listItem = new Tasklist(addListItem.value, false, list.length + 1);
    if (addListItem.value !== '') {
      list.push(listItem);
      localStorage.setItem('listStorage', JSON.stringify(list));
    }
  };

  static deleteItem = (index) => {
    list.splice(index, 1);
    list.forEach((e, i) => {
      e.index = i + 1;
    });
    localStorage.setItem('listStorage', JSON.stringify(list));
    Tasklist.createList();
  };
}

export { list, addListItem, listContainer };