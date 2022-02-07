const toastList = document.querySelector('.toast-section')

const showSuccess = () => {
  const toast = document.createElement('div')
  toast.classList.add('toast', 'success', 'show')
  toast.innerHTML = `Successfully added to cart`
  toastList.appendChild(toast)
  setTimeout(() => {
    toast.remove()
  }, 6000)
}

const showError = () => {
  const toast = document.createElement('div')
  toast.classList.add('toast', 'error', 'show')
  toast.innerHTML = `Error, something went wrong`
  toastList.appendChild(toast)
  setTimeout(() => {
    toast.remove()
  }, 6000)
}

const showWarning = () => {
  const toast = document.createElement('div')
  toast.classList.add('toast', 'warning', 'show')
  toast.innerHTML = `Warning, something might have gone wrong`
  toastList.appendChild(toast)
  setTimeout(() => {
    toast.remove()
  }, 6000)
}
