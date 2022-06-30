"use strict";




const todoInput = document.querySelector('.todo-input');
const ulList = document.querySelector('ul');
const btnAdd = document.querySelector('.btn-add');
const Info  =  document.querySelector('.info')
const clear = document.querySelector('.clear')
const showDiv = document.querySelector('.show');
const showInput = document.querySelector('.show-input')
const cancel = document.querySelector('.cancel')

const showInfo = document.querySelector('.show-info')

const editTask = function(e,complete,edit,deleted,accept){
  
  const completeEl = function(e){
    e.target.closest('li').classList.toggle('completed')
    e.target.classList.toggle('completed')
    
  }

  const deletedEl = function(e){
    e.target.closest('li').remove()
    showDiv.style.display ="none"
    checkTasks()
    
  }

  const editEl = function(e){
    
    const edited = e.target.closest('li')
    
    
   
    showInput.value = edited.firstChild.textContent
    showDiv.style.display = "flex"
    console.log(e.target.closest('li'));
    const smth = function(){
      edited.firstChild.textContent = showInput.value
    }
    accept.addEventListener('click',smth)
  }

  const cancelShow = function(){
    showDiv.style.display ="none"
  }

 
    
    cancel.addEventListener('click',cancelShow)
    complete.addEventListener('click',completeEl)
    edit.addEventListener('click',editEl)
    deleted.addEventListener('click',deletedEl)
    
}
const checkTasks = function(){
  const all = ulList.querySelectorAll('li')
 
  if(all.length ==0){
    Info.textContent ="There are no tasks in the list."
  }else if(all.length>0){
    Info.textContent = ""
    
  }
}

    const addTask = function(e){

      const tasks = function(e){
        
        const li = document.createElement('li');
      li.textContent = todoInput.value;
      ulList.append(li);
      todoInput.value =""
      
      liElements(e,li)
        checkTasks()
      }
    
    if(todoInput.value ==""){
      Info.textContent ="Please enter the new content of the task"
    }else{
      return tasks(e)
    }

    

}


const liElements = function(e,li){
  const complete = document.createElement('button');
  complete.classList.add('complete');
  complete.innerHTML  = `<i class="fas fa-check" ></i>`

  const edit = document.createElement('button');
  edit.classList.add('edit');
  edit.textContent = "EDIT"

  const deleted = document.createElement('button')
  deleted.classList.add('delete')
  deleted.innerHTML = `<i class="fas fa-times" ></i>`
 
  
  const div = document.createElement('div');
  div.classList.add('tools');
  div.append(complete,edit,deleted);
const accept = document.querySelector('.accept')
li.append(div)

editTask(e,complete,edit,deleted,accept)
  
}


const clearTasks = function(){
  Array.from(ulList.children).forEach(element => {
    element.remove()
  });
  checkTasks()
  showDiv.style.display ="none"
  
}



clear.addEventListener('click',clearTasks)
btnAdd.addEventListener('click',addTask)