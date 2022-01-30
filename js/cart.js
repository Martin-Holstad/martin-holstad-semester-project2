import navigationMenu from "./components/common/navigation-menu/navigationMenu.js";
import { getFeaturedShoes } from "./components/common/featured-shoes/getFeaturedShoes.js"
import { cartCheckoutHtml } from "./components/cart/cartCheckoutHtml.js"
import { cartHtml } from "./components/cart/cartHtml.js"
import { scrollToTopButton } from "./components/common/buttons/scrollToTopButton.js"

navigationMenu()

cartHtml()
cartCheckoutHtml()
getFeaturedShoes()
scrollToTopButton()


