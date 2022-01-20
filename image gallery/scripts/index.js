const grid = document.querySelector(".grid")
const carousel = document.querySelector(".carousel")
const displayImage = document.querySelector("#displayImage")
const blur = document.querySelector(".blur")
let currentIndex = 0

const imagesList = [
  { link: "https://wallpaperaccess.com/full/1322976.jpg" },
  {
    link: "https://i0.wp.com/static1.srcdn.com/wordpress/wp-content/uploads/2021/03/Among-Us-Random-Name-Generator.jpg?w=750&ssl=1",
  },
  {
    link: "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimagesvc.meredithcorp.io%2Fv3%2Fmm%2Fimage%3Furl%3Dhttps%253A%252F%252Fstatic.onecms.io%252Fwp-content%252Fuploads%252Fsites%252F13%252F2015%252F04%252F05%252Ffeatured.jpg&q=85",
  },
  {
    link: "https://media.contentapi.ea.com/content/dam/eacom/lost-in-random/images/2021/08/lir-usp-in-engine-screen-twotown-royam-no-logo.jpg.adapt.crop191x100.628p.jpg",
  },
  {
    link: "https://aot-wpengine.netdna-ssl.com/wp-content/uploads/2014/04/animal_facts-e1396431549968.jpg",
  },
  {
    link: "https://trainghiemso.vn/wp-content/uploads/2021/09/lost-in-random-review-featured.jpg",
  },
  {
    link: "https://machinelearningmastery.com/wp-content/uploads/2018/07/How-to-Generate-Random-Numbers-in-Python.jpg",
  },
  {
    link: "http://images2.fanpop.com/images/photos/5900000/Randomness-random-5997130-1280-800.jpg",
  },
]

const setup = () => {
  const html = imagesList
    .map((image, index) => {
      return `<div class="grid-items" onclick="preview(${index})">
      <img src=${image.link}>
    </div>`
    })
    .join("")
  grid.innerHTML = html
}

const setCarouselImage = (index) => {
  const currentLink = imagesList[index].link
  displayImage.src = currentLink
}

const preview = (index) => {
  currentIndex = index
  setCarouselImage(currentIndex)
  carousel.classList.remove("hide")
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
  carousel.classList.add("hide")
}

setup()
