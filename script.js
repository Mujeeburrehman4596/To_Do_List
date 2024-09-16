document.addEventListener('DOMContentLoaded', () => {
    const addBtn = document.getElementById('add-btn');
    const todoInput = document.getElementById('todo-input');
    const todoList = document.getElementById('todo-list');
  
    addBtn.addEventListener('click', () => {
      const taskText = todoInput.value.trim();
      if (taskText !== '') {
        addTask(taskText);
        todoInput.value = '';
      }
    });
  
    todoInput.addEventListener('keypress', (event) => {
      if (event.key === 'Enter') {
        addBtn.click();
      }
    });
  
    function addTask(taskText) {
      const listItem = document.createElement('li');
      listItem.className = 'list-group-item';
  
      const taskSpan = document.createElement('span');
      taskSpan.textContent = taskText;
  
      const deleteBtn = document.createElement('button');
      deleteBtn.className = 'btn btn-danger btn-sm';
      deleteBtn.textContent = 'Delete';
      deleteBtn.addEventListener('click', () => {
        todoList.removeChild(listItem);
      });
  
      listItem.appendChild(taskSpan);
      listItem.appendChild(deleteBtn);
      todoList.appendChild(listItem);
  
      listItem.addEventListener('click', () => {
        listItem.classList.toggle('clicked');
      });
    }
  });
  