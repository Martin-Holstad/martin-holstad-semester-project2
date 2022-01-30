import { baseUrl } from "./settings/baseUrl.js"
import navigationMenu from "./components/common/navigation-menu/navigationMenu.js"
import { heroBannerHtml } from "./components/index/heroBannerHtml.js";
import { getFeaturedShoes } from "./components/common/featured-shoes/getFeaturedShoes.js"
import displayMessage from "./components/common/display-message/displayMessage.js"
import { scrollToTopButton } from "./components/common/buttons/scrollToTopButton.js"

navigationMenu()

const loader = document.querySelector(".loader")
const messageContainer = document.querySelector(".display-message-container")


async function getHeroBanner() {

  try {

    const response = await fetch(baseUrl + "/home")
    const heroBanner = await response.json();

    heroBannerHtml(heroBanner)
    getFeaturedShoes()
    scrollToTopButton()

  } catch (error) {
    console.log(error)
    displayMessage("error", "Oops... Something went wrong!", ".display-message-container")

  } finally {
    loader.style.display = "none"
  }
}
getHeroBanner()

