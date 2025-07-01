import { getAllPosts } from "../main.js";

// All post data is fetched from the API and logged to the console.

export async function dataLoader(getAllPosts) {
  try {
    const response = await fetch(
      "https://openapi.programming-hero.com/api/retro-forum/posts"
    );
    const data = await response.json();
    getAllPosts(data);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}
