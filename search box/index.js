const search = document.querySelector(".search")
const input = document.querySelector(".input")

const toggleHide = (event) => {
  if (
    event.target.classList.contains("search") ||
    event.target.classList.contains("search-icon")
  ) {
    if (input.classList.contains("hide")) {
      input.classList.remove("hide")
      input.focus()
    } else {
      input.classList.add("hide")
    }
  }
}

window.addEventListener("click", (event) => {
  if (!event.target.closest(".search")) {
    input.classList.add("hide")
  }
})
