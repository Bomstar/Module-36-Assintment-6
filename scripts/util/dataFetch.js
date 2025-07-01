import { getidCall } from "./idCall.js";

const loading = getidCall("loading");

// All post data is fetched from the API and logged to the console.

export async function dataLoader(getAllPosts, searchValue = "") {
  loading.style.display = "flex";
  try {
    const res = await fetch(
      `https://openapi.programming-hero.com/api/retro-forum/posts${
        searchValue ? `?category=${searchValue}` : ""
      }`
    );
    const data = await res.json();
    setTimeout(() => {
      loading.style.display = "none";
      getAllPosts(data);
    }, 2000);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

// This function fetches all Latest Posts from the API and displays them on the page.

const loading2 = getidCall("loading2");

export async function lpDataLoader(getLatestPosts) {
  loading2.style.display = "flex";
  try {
    const res = await fetch(
      "https://openapi.programming-hero.com/api/retro-forum/latest-posts"
    );
    const data = await res.json();
    setTimeout(() => {
      loading2.style.display = "none";
      getLatestPosts(data);
    }, 2000);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}
