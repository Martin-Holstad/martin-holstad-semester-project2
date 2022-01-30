import { getFromCart, saveToCart } from "../../tools/storage.js"
import { cartHtml } from "../cart/cartHtml.js"
import { shoppingBagIcon } from "../common/navigation-menu/shoppingBagIcon.js"
import { cartCheckoutHtml } from "./cartCheckoutHtml.js"

export function removeFromCartButton() {

  let cartArray = getFromCart()

  const trashCans = document.querySelectorAll(".cart-trash-icon")

  trashCans.forEach(function (trashCan) {
    trashCan.addEventListener("click", removeShoe)
  })

  function removeShoe() {

    const removeThisShoe = this.dataset.id

    const newCartArray = cartArray.filter(function (cart) {

      if (parseInt(removeThisShoe) !== cart.id) {
        return true;
      }
    })

    cartArray = newCartArray
    saveToCart(cartArray)
    cartHtml()
    shoppingBagIcon()
    cartCheckoutHtml()
  }
}