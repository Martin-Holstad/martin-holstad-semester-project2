import { baseUrl } from "../../settings/baseUrl.js"

export function shoeDetailsHtml(shoeDetails) {

  const shoeDetailsContainer = document.querySelector(".shoe-details-container")

  const imageUrl = shoeDetails[0].image ? baseUrl + shoeDetails[0].image.url : shoeDetails[0].image_url

  console.log(shoeDetails)


  shoeDetailsContainer.innerHTML += `
                                      <div class="row g-0 g-lg-5">

                                      <div class="col-12 col-lg-6">
                                      <div>
                                      <img class="shoe-details-image" src="${imageUrl}" alt="${shoeDetails[0].title}">
                                      </div>
                                      </div>
                                      
                                      <div class="col-12 col-lg-6">
                                      <h2>${shoeDetails[0].title}</h2>
                                      <p>${shoeDetails[0].price} NOK</p>
                                      <p>Size</p>
                                      <div class="d-flex gap-2">
                                      <div>
                                      <select name="size" id="select-size">
                                      <option value="S">S</option>
                                      <option value="M">M</option>
                                      <option value="L">L</option>
                                      <option value="XL">XL</option>
                                      </select>
                                      </div>
                                      <div>
                                      <div class="shoe-details-add-to-cart-button">Add to cart<div>
                                      </div>
                                      </div>
                                      </div>
                                      </div>

                                      <div class="d-flex gap-4 mt-3">
                                      <div><i class="fas fa-check check-icon"></i> Free shipping</div>
                                      <div><i class="fas fa-check check-icon"></i> Free returns</div>
                                      </div>

                                      <div class="shoe-details-description-container">
                                      <p class="mt-4">Description</p>
                                      <hr>
                                      <p>${shoeDetails[0].description}</p>
                                      </div>

                                      </div>
                                      `
}



