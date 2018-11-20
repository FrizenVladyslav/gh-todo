import LocalStorege from './LocalStorege'

export const list = document.querySelector('.todo')
let countCheckTask = document.querySelector('.header-selected') 

export function addNewTask(value, list, idItem, check = false){
  if(value.trim() !== ''){
    let id = idItem || Date.now()
    let li = document.createElement('li')
    let label = document.createElement('label')
    let checkbox = document.createElement('input')
    let deleteBtn = document.createElement('a')
    let icon = document.createElement('i')
    let span =  document.createElement('span')

    span.textContent = value
    icon.classList.add('material-icons')
    icon.classList.add('delete')
    icon.textContent = "delete_sweep"
    checkbox.type = 'checkbox'
    checkbox.checked = check
    label.appendChild(checkbox)
    label.appendChild(span)
    deleteBtn.classList.add('secondary-content')
    deleteBtn.appendChild(icon)
    deleteBtn.href = '#!'
    li.id = id
    li.classList.add('collection-item')
    li.appendChild(deleteBtn)
    li.appendChild(label)
    list.appendChild(li)
    if(check){
      label.classList.add('checkedtask')
      countCheckTask.textContent++
    }

    addListener(deleteBtn, checkbox, label, id)
    return {value, id, check}
  }
}

export function addListener(deleteBtn, checkbox, label, id){
  deleteBtn.addEventListener('click', ({target}) => deleteTask(target, id))
  checkbox.addEventListener('click', ({target}) => checkTask(target, label, id))
}

export function deleteTask(item, id){
  list.removeChild(item.parentNode.parentNode);
  LocalStorege.deleteItem(id)
}

export function checkTask(checkbox, label, id){
  if(checkbox.checked){
    label.classList.add('checkedtask')
    LocalStorege.setItem(id, true)
    countCheckTask.textContent++
  }else{
    label.classList.remove('checkedtask')
    LocalStorege.setItem(id, false)
    countCheckTask.textContent--
  }
}