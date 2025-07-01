import { getAllPosts } from "../main.js";
import { getidCall } from "./idCall.js";

const loading = getidCall("loading");
loading.style.display = "flex";

// All post data is fetched from the API and logged to the console.

export async function dataLoader(getAllPosts) {
  try {
    const response = await fetch(
      `https://openapi.programming-hero.com/api/retro-forum/posts
      `
    );
    const data = await response.json();
    setTimeout(() => {
      loading.style.display = "none";
      getAllPosts(data);
    }, 4000);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}
