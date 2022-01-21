const tagsCover = document.querySelector('.tags-cover')
const input = document.querySelector('.input')

const tagList = new Set()

const render = () => {
  let html = ''
  for (let value of tagList.values()) {
    html += `<div class="tag">
          ${value}
          <span
            class="remove delete-${value}">
            &times;
          </span>
        </div>`
  }
  tagsCover.innerHTML = html
}

const listen = () => {
  for (let value of tagList.values()) {
    document
      .querySelector(`.delete-${value}`)
      .addEventListener('click', (event) => {
        tagList.delete(event.target.classList[1].substring(7))
        render()
        listen()
      })
  }
}

render()
listen()

const addTag = (e, event) => {
  if (event.key === 'Enter' && e.value !== '') {
    tagList.add(e.value)
    input.value = ''
    render()
    listen()
  }
}

const removeAll = () => {
  tagList.clear()
  render()
}
