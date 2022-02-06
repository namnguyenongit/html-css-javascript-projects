'use strict'

const newTodo = document.querySelector("input[name='todo']")
const todoList = document.querySelector('.todo-list')

const todoData = [
  {
    name: 'Learn JavaScript',
    completed: false,
  },
]

const init = () => {
  renderTodo(todoData)
}

const handleSubmit = (e) => {
  e.preventDefault()
  // add new todo to todoData
  if (newTodo.value === '') {
    return
  }
  todoData.push({
    name: newTodo.value,
    completed: false,
  })
  newTodo.value = ''
  renderTodo(todoData)
}

// delete a todo from todoData
const deleteTodo = (todoIndex) => {
  console.log('click: ', todoIndex)
  todoData.splice(todoIndex, 1)
  renderTodo(todoData)
}

// toggle class completed
const toggleCompleted = (todoIndex) => {
  console.log('click: ', todoIndex)
  todoData[todoIndex].completed = !todoData[todoIndex].completed
  renderTodo(todoData)
}

// make todo-name lined through base on completed
const lineThroughTodo = (todoIndex) => {
  if (todoData[todoIndex].completed) {
    return 'line-through'
  } else {
    return 'none'
  }
}

// return completed if todo is completed
const completedTodo = (todoIndex) => {
  if (todoData[todoIndex].completed) {
    return 'completed'
  } else {
    return 'doing'
  }
}

// render a list of todo into todoList element
const renderTodo = (todoData) => {
  todoList.innerHTML = ''
  todoData.forEach((todo, index) => {
    const newTodo = document.createElement('li')
    newTodo.classList.add('todo')
    // if todo is completed, add style line through
    newTodo.style.textDecoration = lineThroughTodo(index)
    // set class completed if todo is completed
    newTodo.classList.add(completedTodo(index))
    newTodo.innerHTML = `
      <span class="todo-name" onclick='toggleCompleted(${index})'>${todo.name}</span>
      <button class="todo-delete" onclick='deleteTodo(${index})'>
      <ion-icon name="trash-bin-outline"></ion-icon></button>
    `
    todoList.appendChild(newTodo)
  })
}

init()
