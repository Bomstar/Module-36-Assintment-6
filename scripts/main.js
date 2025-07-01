import { getidCall } from "./util/idCall.js";
import { dataLoader } from "./util/dataFetch.js";

dataLoader(getAllPosts);
const allPosts = getidCall("allPosts");
export function getAllPosts(data) {
  const posts = data.posts;
  console.log(posts);

  posts.forEach((post) => {
    allPosts.innerHTML += `<div class="flex gap-10 bg-[#797DFC1A] border-[#797DFC] border rounded-3xl p-10">
            <div>
              <div class="w-16 h-16 rounded-2xl  bg-white relative"> <span
                  class="absolute w-4 h-4 -right-1 -top-1 border-2 border-white ${
                    post.isActive ? "bg-green-600" : "bg-red-600"
                  } rounded-full"></span><img
                  src="#" alt="">
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
                        class="fa-light fa-message-lines"></i></span>560<span></span></h4>
                  <h4 class="space-x-3"><span class="text-xl"><i class="fa-light fa-eye"></i></span><span>1,568</span>
                  </h4>
                  <h4 class="space-x-3"><span class="text-2xl"><i class="fa-light fa-clock"></i></span><span>5 mins
                      ago</span></h4>
                </div>
                <div
                  class="flex items-center cursor-pointer text-white text-lg justify-center w-8 h-8 rounded-full bg-[#10B981] pb-[2px]">
                  <i class="fa-solid fa-envelope-open"></i>
                </div>
              </div>
            </div>
          </div>`;
  });
}
