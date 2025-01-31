const input = document.querySelector('.tasks__input');
const tasksList = document.querySelector('.tasks__list');
const task = document.querySelector('.task');
const tasksControl = document.querySelector('.tasks__control');

const addTodo = () => {
   tasksList.innerHTML += `<div class="task">
    <div class="task__title">
   ${input.value}
   </div>
   <a href="#" class="task__remove">&times;</a>
   </div>`;
   input.value = '';
};

tasksControl.addEventListener('submit', ev => {
   ev.preventDefault();
  
      if(input.value.trim() !== '') {
        addTodo();
      }
   }
)

tasksList.addEventListener('click', ev => {

    if (ev.target.classList.contains('task__remove')) {
      ev.target.parentNode.remove();
   }
})