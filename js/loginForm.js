import navigationMenu from "./components/common/navigation-menu/navigationMenu.js"
import displayMessage from "./components/common/display-message/displayMessage.js"
import { doLogin } from "./components/login-form/doLogin.js"

navigationMenu()

const loginForm = document.querySelector(".login-form")
const loginUsernameInput = document.querySelector(".login-form #username")
const loginUsernameError = document.querySelector(".login-username-error")
const loginPasswordInput = document.querySelector(".login-form #password")
const loginPasswordError = document.querySelector(".login-password-error")
const messageContainer = document.querySelector(".display-message-container")

loginForm.addEventListener("submit", submitForm)

function submitForm(event) {
  event.preventDefault();

  messageContainer.innerHTML = ""

  const loginUsernameValue = loginUsernameInput.value.trim()
  const loginPasswordVaule = loginPasswordInput.value.trim()

  if (loginUsernameValue.length === 0) {
    loginUsernameInput.style.borderColor = "red"
    loginUsernameError.style.display = "block"
  } else {
    loginUsernameInput.style.borderColor = "black"
    loginUsernameError.style.display = "none"
  }

  if (loginPasswordVaule.length === 0) {
    loginPasswordInput.style.borderColor = "red"
    loginPasswordError.style.display = "block"
  } else {
    loginPasswordInput.style.borderColor = "black"
    loginPasswordError.style.display = "none"
  }

  if (loginUsernameValue.length === 0 || loginPasswordVaule.length === 0) {
    return displayMessage("warning", "Need to fill out usernam and password", ".display-message-container")
  }

  doLogin(loginUsernameValue, loginPasswordVaule)
}