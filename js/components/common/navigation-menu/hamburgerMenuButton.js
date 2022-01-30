
export function hamburgerMenuButton() {

  const hamburgerMenuButton = document.querySelector(".hamburger-menu-button")
  const hamburgerMenuContent = document.querySelector(".hamburger-menu-content")

  hamburgerMenuButton.onclick = function () {
    hamburgerMenuContent.classList.toggle("show")
  }
}