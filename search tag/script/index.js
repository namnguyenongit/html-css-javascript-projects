const tagsCover = document.querySelector('.tags-cover')
const input = document.querySelector('.input')

const tagList = []

const render = () => {
  const html = tagList
    .map((tag, id) => {
      return `<div class="tag">
          ${tag.name} 
          <span
            class="remove"
            onclick="removeTag(${id})">
            &times;
          </span>
        </div>`
    })
    .join('')
  tagsCover.innerHTML = html
}

const addTag = (e, event) => {
  if (event.key === 'Enter' && e.value !== '') {
    tagList.push({ name: e.value })
    input.value = ''
    render()
  }
}

const removeTag = (id) => {
  tagList.splice(id, 1)
  render()
}

const removeAll = () => {
  while (tagList.length > 0) tagList.pop()
  render()
}
