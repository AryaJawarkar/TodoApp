const todoForm = document.querySelector('.form-todo');
const todoInput = document.querySelector(".form-todo input[type = 'text']");
const todoList = document.querySelector('.todo-list');


todoForm.addEventListener('submit', (e) => {

    e.preventDefault();
    const newTodoText = todoInput.value;
    if (newTodoText ==="") {
        return
    }
    else{
    const newLi = document.createElement('li');
    newLiInnerHTML = ` 
    <span class="text">${newTodoText}</span>
    <div class="todo-buttons">
        <button class="todo-button done">Done</button>
        <button class="todo-button remove">Remove</button>
    </div>
`;
newLi.innerHTML=newLiInnerHTML;
todoList.append(newLi);
    todoInput.value="";
}
});


todoList.addEventListener('click',function(e){
  console.log(e.target.classList);
    if (e.target.classList.contains('remove')) {
    alert("Do you really want to delete ?????");
    e.target.parentNode.parentNode.remove();
  } 
    if (e.target.classList.contains('done')) {
        const liSpan = e.target.parentNode.previousElementSibling;  
    alert("Great !!!!!!!");
liSpan.style.textDecoration = "line-through";
  } 
})