import { getidCall } from "./idCall.js";
import { allPosts, latestPosts } from "../main.js";

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
    setTimeout(() => {
      loading.style.display = "none";
      allPosts.style.display = "block";
      allPosts.innerHTML =
        "<div class='text-center col-span-3 text-2xl font-bold text-gray-500'>Error fetching data. Please try again later.</div>";
      console.error("Error fetching data:", error);
    }, 2000);
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
    setTimeout(() => {
      loading2.style.display = "none";
      latestPosts.innerHTML =
        "<div class='text-center col-span-3 text-2xl font-bold text-gray-500'>Error fetching data. Please try again later.</div>";
      console.error("Error fetching data:", error);
    }, 2000);
  }
}
