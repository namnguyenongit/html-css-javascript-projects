const grid = document.querySelector('.grid')
const carousel = document.querySelector('.carousel')
const displayImage = document.querySelector('#displayImage')
const blur = document.querySelector('.blur')
let currentIndex = 0

const imagesList = [
  { link: 'https://images.alphacoders.com/915/thumbbig-915758.webp' },
  {
    link: 'https://images3.alphacoders.com/852/thumbbig-852216.webp',
  },
  {
    link: 'https://images8.alphacoders.com/625/thumbbig-625703.webp',
  },
  {
    link: 'https://images3.alphacoders.com/675/thumbbig-675453.webp',
  },
  {
    link: 'https://images8.alphacoders.com/675/thumbbig-675452.webp',
  },
  {
    link: 'https://images8.alphacoders.com/693/thumbbig-693738.webp',
  },
  {
    link: 'https://images4.alphacoders.com/693/thumbbig-693780.webp',
  },
  {
    link: 'https://images8.alphacoders.com/824/thumbbig-824233.webp',
  },
]

const setup = () => {
  const html = imagesList
    .map((image, index) => {
      return `<div class="grid-items" onclick="preview(${index})">
      <img src=${image.link}>
    </div>`
    })
    .join('')
  grid.innerHTML = html
}

const setCarouselImage = (index) => {
  const currentLink = imagesList[index].link
  displayImage.src = currentLink
}

const preview = (index) => {
  currentIndex = index
  setCarouselImage(currentIndex)
  carousel.classList.remove('hide')
}

const next = () => {
  if (currentIndex == imagesList.length - 1) {
    currentIndex = 0
  } else currentIndex++
  setCarouselImage(currentIndex)
}

const previous = () => {
  if (currentIndex == 0) {
    currentIndex = imagesList.length - 1
  } else currentIndex--
  setCarouselImage(currentIndex)
}

const turnOff = () => {
  carousel.classList.add('hide')
}

setup()
