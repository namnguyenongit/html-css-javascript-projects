const board = document.querySelector('.board')

const box = document.createElement('div')
box.classList.add('box')

for (let i = 0; i < 200; i++) {
  board.appendChild(box.cloneNode(true))
}

const boxes = document.querySelectorAll('.box')
boxes.forEach((box) => {
  box.addEventListener('mouseover', () => {
    const color = '#' + Math.floor(Math.random() * 16777215).toString(16)
    box.style.backgroundColor = color
    box.style.boxShadow = `0 0 90px 1px ${color}`
  })
  box.addEventListener('mouseout', () => {
    setTimeout(() => {
      box.style.backgroundColor = '#1d1d1d'
      box.style.boxShadow = 'none'
      box.style.transition = 'all ease-out 2s'
    }, 1000)
  })
})
