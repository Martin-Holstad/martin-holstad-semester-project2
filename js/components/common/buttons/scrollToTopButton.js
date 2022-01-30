export function scrollToTopButton() {

  const scrollToTopButtonContainer = document.querySelector(".scroll-to-top-button-container")

  scrollToTopButtonContainer.innerHTML = `<i class="fas fa-sort-up scroll-to-top-button"></i>`

  const scrollToTopButton = document.querySelector(".scroll-to-top-button")

  scrollToTopButton.onclick = function () {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }
}