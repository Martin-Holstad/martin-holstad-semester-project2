import { baseUrl } from "../../../../js/settings/baseUrl.js"
import { featuredShoesHtml } from "./featuredShoesHtml.js"

export async function getFeaturedShoes() {

  try {
    const response = await fetch(baseUrl + "/products")
    const featuredShoes = await response.json();

    featuredShoesHtml(featuredShoes)

  } catch (error) {
    console.log(error)
  }
}