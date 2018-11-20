import './scss/styles.scss'

import { addNewTask, list } from './todoActions'
import LocalStorege from './LocalStorege'

const input = document.getElementById('taskname')
const addBtn = document.getElementById('addtask')

let inputValue

const init = (() => {
  LocalStorege.getItems().forEach(({value, id, check}) => {
    addNewTask(value, list, id, check)
  })
})()

input.addEventListener('input', ({target}) => inputValue = target.value)
input.addEventListener('keypress', e => {
  if(e.keyCode === 13){
    let {value, id, check} = addNewTask(inputValue, list)
    LocalStorege.addItem(value, id, check)
    input.value = ''
  }
})
addBtn.addEventListener('click', () => {
  let {value, id, check} = addNewTask(inputValue, list)
  LocalStorege.addItem(value, id, check)
  input.value = ''
})