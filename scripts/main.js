import { dataLoader, lpDataLoader } from "./util/dataFetch.js";
import { getidCall } from "./util/idCall.js";

export const allPosts = getidCall("allPosts");
const searchButton = getidCall("searchButton");
const markAsRead = getidCall("markAsRead");

// serchButton is the button that triggers the search functionality.
searchButton.addEventListener("click", () => {
  allPosts.style.display = "none";
  const searchInput = getidCall("searchInput");
  const searchValue = searchInput.value.trim();
  console.log(searchValue);
  allPosts.innerHTML = "";
  markAsRead.innerHTML = "";

  dataLoader(getAllPosts, searchValue);
});

dataLoader(getAllPosts, "");

export function getAllPosts(data) {
  const posts = data.posts;
  console.log(posts);
  allPosts.style.display = "block";

  posts.forEach((post) => {
    allPosts.innerHTML += `<div class="flex gap-10 bg-[#797DFC1A] border-[#797DFC] border rounded-3xl p-10">
            <div>
              <div class="w-16 h-16 rounded-2xl  bg-white relative"> <span
                  class="absolute  w-4 h-4 -right-1 -top-1 border-2 border-white ${
                    post.isActive ? "bg-green-600" : "bg-red-600"
                  } rounded-full"></span><img class="w-full h-full object-cover rounded-2xl"
                  src="${post.image}" alt="">
              </div>
            </div>
            <div class="space-y-5 w-full">
              <div class="flex items-center gap-4 !mb-3 font-medium text-[#12132DCC]">
                <h4>#<span>${post.category}</span></h4>
                <h4>Author : <span>${post.author.name}</span></h4>
              </div>
              <h2 class="text-xl font-bold">${post.title}</h2>
              <p class="text-gray-500 max-w-md">${post.description}</p>
              <hr class="border-gray-300 border-b-2 border-t-0 border-dashed">
              <div class="flex items-center justify-between">
                <div class="flex items-center gap-5 text-gray-500 text-lg">
                  <h4 class="space-x-3"><span class="text-2xl"><i
                        class="fa-light fa-message-lines"></i></span>${
                          post.comment_count
                        }<span></span></h4>
                  <h4 class="space-x-3"><span class="text-xl"><i class="fa-light fa-eye"></i></span><span>${
                    post.view_count
                  }</span>
                  </h4>
                  <h4 class="space-x-3"><span class="text-2xl"><i class="fa-light fa-clock"></i></span><span>${
                    post.posted_time
                  } mins ago</span></h4>
                </div>
                <button onclick="markAsReadPosts('${post.title}', ${
      post.view_count
    })"
                  class="flex items-center cursor-pointer text-white text-lg justify-center w-8 h-8 rounded-full bg-[#10B981] pb-[2px]">
                  <i class="fa-solid fa-envelope-open"></i>
                </button>
              </div>
            </div>
          </div>`;
  });
  window.markAsReadPosts = markAsReadPosts;
}

function markAsReadPosts(title, viewCount) {
  const markAsReadCount = getidCall("markAsReadCount");
  markAsRead.innerHTML += `<div class="flex w-full items-center justify-between p-3 bg-white rounded-2xl">
                <h1 class="w-56">${title}</h1>
                <h4 class="space-x-3"><span class="text-xl"><i class="fa-light fa-eye"></i></span><span>${viewCount}</span>
              </div>`;
  // Update the count of marked as read posts
  markAsReadCount.textContent++;
}

// This function is called when the page loads to fetch and display Latest posts.
export const latestPosts = getidCall("latestPosts");

lpDataLoader(getLatestPosts);
export function getLatestPosts(data) {
  const latestPostsData = data;
  console.log(latestPostsData);

  latestPostsData.forEach((post) => {
    latestPosts.innerHTML += `<div class="bg-white space-y-5 p-5 rounded-xl border border-gray-300">
            <div class="aspect-video  bg-gray-500 rounded-xl  overflow-hidden">
              <img class="w-full h-full object-cover object-center " src="${
                post.cover_image
              }" alt="Post Title 1">
            </div>
            <div class="space-y-5">
             <div class="space-y-3">
              <h2 class=" text-gray-500 space-x-2"><span><i class="fa-light fa-calendar-range"></i> </span> <span> ${
                post.author.posted_date || "No publish date"
              }</span></h2>
              <h2 class="text-lg font-extrabold ">${
                post.title || "No title"
              }</h2>
              <p class="text-gray-500 pr-5">${
                post.description || "No description available."
              }</p>
             </div>
              <div class="flex items-center gap-4">
                <div class="w-10 h-10 rounded-full bg-gray-500 overflow-hidden"><img
                    class="w-full h-full object-cover object-center" src="${
                      post.profile_image || "./images/default-avatar.png"
                    }" alt="">
                </div>
                <div>
                  <h3 class="text-gray-400">${
                    post.author.name || "Unknown"
                  }</h3>
                  <h3 class="text-gray-400">${
                    post.author.designation || "Unknown"
                  }</h3>
                </div>
              </div>
            </div>
          </div>`;
  });
}
