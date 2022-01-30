import { getFromCart } from "../../tools/storage.js"
import { removeFromCartButton } from "../cart/removeFromCartButton.js"
import displayMessage from "../common/display-message/displayMessage.js"

export function cartHtml() {

  const cartShoesContainer = document.querySelector(".cart-shoes-container")

  const cart = getFromCart()

  cartShoesContainer.innerHTML = ""

  if (cart.length === 0) {
    displayMessage("normal", "There is no shoes in your cart", ".cart-shoes-container")
  }

  cart.forEach(function (shoe) {

    cartShoesContainer.innerHTML += `
                                   <div class="row align-items-center">          
                                   <img class="col-md-3" src="${shoe.image}" alt="${shoe.title}">                        
                                   <div class="col-6 col-md-5">
                                   <h2 class="cart-shoe-header mt-4 mb-3 mt-md-0">${shoe.title}</h2>
                                   <p>Size: ${shoe.size}</p>
                                   <p class="cart-trash-icon" data-id="${shoe.id}"><i class="fas fa-trash-alt"></i> Remove</p>
                                   </div>
                                   <div class="col-3 col-md-1">
                                   <input class="text-center" type="text" value="1">
                                   </div>
                                   <div class="col-3 text-center">
                                   <p>${shoe.price} NOK</p>
                                   </div>
                                   </div>
                                   <hr>                      
                                   `
    removeFromCartButton()
  })
}
cartHtml()