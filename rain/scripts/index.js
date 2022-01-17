const body = document.querySelector("body")
const amount = 50
const duration = []

let mouseX = -1
let mouseY = -1

function durationSetup() {
  let i = 0
  while (i < amount) {
    duration.push(Math.random() * 5 + 2)
    i++
  }
}

function rain() {
  let i = 0
  while (i < amount) {
    const drop = document.createElement("i")
    durationSetup()

    const size = 0.5 + Math.random() * 5
    const posX = Math.floor(Math.random() * window.innerWidth)
    const delay = Math.random() * -30

    drop.style.width = size + "px"
    drop.style.left = posX + "px"
    drop.style.animationDelay = delay + "s"
    drop.style.animationDuration = duration[i] + "s"

    body.appendChild(drop)
    i++
  }
}

const slowRain = (event) => {
  const dropList = document.querySelectorAll("i")
  mouseX = event.pageX
  mouseY = event.pageY
  let i = 0
  while (i < amount) {
    const dropLeft = dropList[i].offsetLeft
    if (dropLeft >= mouseX - 100 && dropLeft <= mouseX + 100) {
      const newDuration = 40
      dropList[i].style.animationDuration = newDuration + "s"
    } else if (dropList[i].style.animationDuration === "40s") {
      dropList[i].style.animationDuration = duration[i] + "s"
    }
    i++
  }
}

window.addEventListener("mousemove", (event) => slowRain(event))

rain()
