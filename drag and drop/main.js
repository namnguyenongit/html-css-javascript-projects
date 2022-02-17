const item = document.querySelector('#item')
const containers = document.querySelectorAll('.container')

const dragStart = (e) => {
  e.dataTransfer.setData('text/plain', e.target.id)
  e.dataTransfer.dropEffect = 'move'
  setTimeout(() => {
    e.target.classList.add('hide')
  })
}

const dragEnter = (e) => {
  e.preventDefault()
  e.target.classList.add('drag-over')
}

const dragOver = (e) => {
  e.preventDefault()
  e.target.classList.add('drag-over')
  e.dataTransfer.dropEffect = 'move'
}

const dragLeave = (e) => {
  e.target.classList.remove('drag-over')
}

const drop = (e) => {
  e.target.classList.remove('drag-over')
  const itemID = e.dataTransfer.getData('text/plain')
  const newItem = document.getElementById(itemID)
  e.target.appendChild(newItem)
  newItem.classList.remove('hide')
}

const dragEnd = (e) => {
  e.preventDefault()
  e.target.classList.remove('hide')
}

item.addEventListener('dragstart', dragStart)
item.addEventListener('dragend', dragEnd)

containers.forEach((container) => {
  container.addEventListener('dragenter', dragEnter)
  container.addEventListener('dragover', dragOver)
  container.addEventListener('dragleave', dragLeave)
  container.addEventListener('drop', drop)
})
