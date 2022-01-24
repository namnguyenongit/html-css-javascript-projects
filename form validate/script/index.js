const name = document.querySelector('#name')
const email = document.querySelector('#email')
const password = document.querySelector('#password')
const confirm = document.querySelector('#confirm')

const validateForm = (event) => {
  event.preventDefault()
  if (!checkEmpty([name, email, password, confirm])) {
    checkNameLength(name)
    checkValidEmail(email)
    checkValidPassword(password)
    checkConfirmPassword(password, confirm)
  }
}

const showError = (input, message) => {
  const formControl = input.parentElement
  const error = formControl.querySelector('.require')
  error.innerText = message
}

const showSuccess = (input) => {
  const formControl = input.parentElement
  formControl.querySelector('.require').innerText = ''
}

const getFieldName = (input) => {
  return input.id.charAt(0).toUpperCase() + input.id.slice(1)
}

const checkEmpty = (inputArray) => {
  let isEmpty = false
  inputArray.forEach((input) => {
    if (input.value.trim() === '') {
      showError(input, `${getFieldName(input)} is required!`)
      isEmpty = true
    } else {
      showSuccess(input)
    }
  })
  return isEmpty
}

const checkConfirmPassword = (pass1, pass2) => {
  if (pass1.value !== pass2.value) {
    showError(pass2, 'Password not match!')
  } else {
    showSuccess(pass2)
  }
}

const checkNameLength = (input) => {
  if (input.value.length <= 3) {
    showError(input, 'Name must be at least 4 characters length!')
  } else {
    showSuccess(input)
  }
}

const checkValidPassword = (input) => {
  const re = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[~@$!%*#?&])[A-Za-z\d~@$!%*#?&]{8,}$/
  if (!re.test(input.value)) {
    showError(
      input,
      'Password must have at least 8 characters, at least 1 letter, 1 number and 1 special character!'
    )
  } else {
    showSuccess(input)
  }
}

const checkValidEmail = (input) => {
  const re =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
  if (!re.test(input.value)) {
    showError(input, 'Not a valid email address!')
  } else {
    showSuccess(input)
  }
}
