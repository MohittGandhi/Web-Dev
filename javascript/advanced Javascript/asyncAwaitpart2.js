function fetchPostData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Post Data fetched");
    }, 2000);
  });
}

function fetchCommentData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Comment data fetched");
    }, 3000);
  });
}

async function getBlogData() {
  try {
    console.log("fetching blog data");
    const blogdata = await fetchPostData();
    const blogcmt = await fetchCommentData();
    console.log(blogdata, blogcmt);
    console.log("fetch complete");
  } catch (error) {
    console.log(error);
  }
}

getBlogData();
