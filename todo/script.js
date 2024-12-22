const todoList=[{
    name:'make dinner',
    dueDate:'2024-12-20'
},
{
    name:'go to the gym',
    dueDate:'2024-12-19'
}];

renderTodoList();

function renderTodoList(){
    let todoHTML='';
    todoList.forEach((todoObject, index) => {
const { name, dueDate } = todoObject;
const html=`
<div>${name}</div>
<div>${dueDate}</div>
<button class="delete-todo js-delete-todo">Delete</button>
`;
todoHTML += html;
    });
    document.querySelector('.todo-grid-list').innerHTML=todoHTML;

    document.querySelectorAll('.js-delete-todo')
    .forEach((deleteObject,index)=>{
        deleteObject.addEventListener('click',()=>{
            todoList.splice(index,1);
            renderTodoList();
        });
    });
}
document.querySelector('.js-add-todo').addEventListener('click',()=>{
    addTodo();
});

function addTodo(){
    const inputName=document.querySelector('.js-input-name');
    const name=inputName.value;
    const dueInput=document.querySelector('.js-due-date');
    const dueDate=dueInput.value;
    todoList.push({
        name,
        dueDate,
    });
    inputName.value='';
   dueInput.value='';
    renderTodoList();


}