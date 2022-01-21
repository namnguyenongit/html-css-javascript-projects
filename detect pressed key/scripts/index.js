const preLoad = document.querySelector(".pre-load")
const keyName = document.querySelector(".keyName")
const keyNumber = document.querySelector(".keyNumber")
const keyCode = document.querySelector(".keyCode")
const bigNumber = document.querySelector(".key-code")

window.addEventListener("keyup", (event) => {
  preLoad.classList.add("hide")
  if (typeof event.which !== "undefined") {
    event.which === 32
      ? (keyName.innerHTML = "Space")
      : (keyName.innerHTML = event.key)
    keyNumber.innerHTML = event.which
    bigNumber.innerHTML = event.which
    keyCode.innerHTML = event.code
  }
})
