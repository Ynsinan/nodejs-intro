const arguments = process.argv.slice(2);
const posts = [
  { title: "Post Başlık 1", detail: "Post Detay 1" },
  { title: "Post Başlık 2", detail: "Post Detay 2" },
  { title: "Post Başlık 3", detail: "Post Detay 3" },
];

const listPost = () => {
  posts.map((post) => {
    console.log(`${post.title} isimli başlık ve detayları: ${post.detail}`);
  });
};

const addPost = (newPost) => {
  const promise = new Promise((resolve, reject) => {
    posts.push(newPost);
    resolve(posts);
  });
  return promise;
};

const showPosts = async (title, detail) => {
  try {
    await addPost({ title: title, detail: detail });
    listPost();
  } catch (error) {
    console.log(error);
  }
};

showPosts(arguments[0],arguments[1]);
