import { getFromCart } from "../../tools/storage.js";

export function cartCheckoutHtml() {

  const cart = getFromCart()

  const cartCheckoutContainer = document.querySelector(".checkout-container")

  let total = 0

  cart.forEach(function (shoe) {

    if (shoe.length === 0) {
      total = 0
    } else {
      total = total + shoe.price
    }
  })

  cartCheckoutContainer.innerHTML = ` 
                                    <div>
                                    <p class="checkout-header mb-5">Your order</p>
                                    <div class="d-flex justify-content-between">
                                    <p>Subtotal</p>
                                    <p>${total} NOK</p>
                                    </div>
                                    <div class="d-flex justify-content-between">
                                    <p>Shipping fee</p>
                                    <p>0.00 NOK</p>
                                    </div>
                                    <hr>
                                    <div class="d-flex justify-content-between">
                                    <p class="checkout-total-text">Total</p>
                                    <p class="checkout-total-price">${total} NOK</p>
                                    </div>
                                    <div class="checkout-button">Checkout</div>
                                    <div class="d-flex gap-4 justify-content-center mt-3">
                                    <div><i class="fas fa-check checkout-check-icon"></i> Free shipping</div>
                                    <div><i class="fas fa-check checkout-check-icon"></i> Free returns</div>
                                    </div>
                                    </div>
                                    `
}