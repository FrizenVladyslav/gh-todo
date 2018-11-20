export default class LocalStorege{
  static getItems(){
    const todoItems = JSON.parse(localStorage.getItem('todolist'));
    return todoItems || [];
  }

  static addItem(value, id, check = false){
    let todoItems = [...this.getItems(), {id, value, check}]
    localStorage.setItem('todolist', JSON.stringify(todoItems))
  }

  static setItem(id, check){
    let todoItems = [...this.getItems()].map(item => {
      if(item.id == id){
        item.check = check
      }
      return item
    })
    localStorage.setItem('todolist', JSON.stringify(todoItems))
  }

  static deleteItem(id){
    let todoItems = [...this.getItems()].filter(item => item.id != id)
    localStorage.setItem('todolist', JSON.stringify(todoItems))
  }
}