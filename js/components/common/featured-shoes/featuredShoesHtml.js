import { baseUrl } from "../../../../js/settings/baseUrl.js"

export function featuredShoesHtml(featuredShoes) {

  const featuredShoesContainer = document.querySelector(".featured-shoes-container");

  featuredShoes.forEach(function (shoe) {

    const imageUrl = shoe.image ? baseUrl + shoe.image.url : shoe.image_url

    if (shoe.featured) {

      featuredShoesContainer.innerHTML += `
                                          <div class="card">
                                          <a href="shoe-details.html?id=${shoe.id}">
                                          <img src="${imageUrl}" class="card-img-top" alt="${shoe.title}">
                                          <div class="card-body">
                                          <p class="card-title">${shoe.title}</p>
                                          <p class="shoe-card-description">${shoe.description}</p>
                                          <p class="card-price">Kr ${shoe.price},-</p>
                                          </div>
                                          </a>
                                          </div>
                                          `
    }
  })
}
