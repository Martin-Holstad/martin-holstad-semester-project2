import displayMessage from "../common/display-message/displayMessage.js"

const form = document.querySelector(".contact-form")
const firstNameInput = document.querySelector("#contact-first-name-input")
const firstNameError = document.querySelector(".contact-first-name-error")
const lastNameInput = document.querySelector("#contact-last-name-input")
const lastNameError = document.querySelector(".contact-last-name-error")
const emailInput = document.querySelector("#contact-email-input")
const emailError = document.querySelector(".contac-email-error")
const subjectInput = document.querySelector("#contact-subject-input")
const subjectError = document.querySelector(".contact-subject-error")
const messageContainer = document.querySelector(".display-message-container")

export function contactForm() {

  form.addEventListener("submit", submitForm)

  function submitForm(event) {
    event.preventDefault()

    const firstNameValue = firstNameInput.value.trim()
    const lastNameValue = lastNameInput.value.trim()
    const emailValue = emailInput.value.trim()
    const subjectValue = subjectInput.value.trim()

    if (firstNameValue.length === 0) {
      firstNameInput.style.borderColor = "red"
      firstNameError.style.display = "block"
    } else {
      firstNameInput.style.borderColor = "green"
      firstNameError.style.display = "none"
    }

    if (lastNameValue.length === 0) {
      lastNameInput.style.borderColor = "red"
      lastNameError.style.display = "block"
    } else {
      lastNameInput.style.borderColor = "green"
      lastNameError.style.display = "none"
    }

    if (emailValue.length === 0) {
      emailInput.style.borderColor = "red"
      emailError.style.display = "block"
    } else {
      emailInput.style.borderColor = "green"
      emailError.style.display = "none"
    }

    if (subjectValue.length === 0) {
      subjectInput.style.borderColor = "red"
      subjectError.style.display = "block"
    } else {
      subjectInput.style.borderColor = "green"
      subjectError.style.display = "none"
    }

    if (firstNameValue.length === 0 || lastNameValue.length === 0 || emailValue.length === 0 || subjectValue.length === 0) {
      return displayMessage("warning", "Need to fill out all fields", ".display-message-container")
    }

    if (firstNameValue.length > 0 || lastNameValue.length > 0 || emailValue.length > 0 || subjectValue.length > 0) {
      return displayMessage("success", "Message sendt", ".display-message-container")
    }
  }
}