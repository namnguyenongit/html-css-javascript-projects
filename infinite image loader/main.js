const loader = document.querySelector('.loader')

const wait = (seconds) =>
  new Promise((resolve) => setTimeout(resolve, seconds * 1000))

// promisify image.src
const loadImage = (src) =>
  new Promise((resolve, reject) => {
    const img = document.createElement('img')
    img.onload = () => {
      loader.appendChild(img)
      currentImage = img
      resolve()
    }
    img.onerror = () => reject(new Error(`Could not load image at ${src}`))
    img.src = src
  })

let currentImage

async function infiniteLoad() {
  try {
    while (true) {
      const id = Math.floor(Math.random() * 1000)
      console.log(`Loading image ${id}`)
      await loadImage(`https://picsum.photos/id/${id}/500`)
      console.log('loaded')
      await wait(2)
      currentImage.remove()
    }
  } catch (err) {
    console.error(err)
    loader.innerHTML =
      '<h1>The image id does not exist, try reload the page</h1>'
  }
}

infiniteLoad()
