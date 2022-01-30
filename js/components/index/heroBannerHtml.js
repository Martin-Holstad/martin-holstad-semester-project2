import { baseUrl } from "../../settings/baseUrl.js"

export function heroBannerHtml(heroBanner) {

  const heroBannerContainer = document.querySelector(".hero-banner-container")

  heroBannerContainer.innerHTML += `
                                   <div class="hero-banner" style="background-image: url('${baseUrl + heroBanner.hero_banner.url}')">
                                   <div class="hero-banner-content text-center">
                                   <h1>Lorem ipsum dolor sit amet consectetur adipiscing elit</h1>
                                   </div>
                                   <a href="shoes.html"><div class="hero-banner-button text-center">Check it out</div></a>
                                   </div>
                                   `
}