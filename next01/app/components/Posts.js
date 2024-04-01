const fetchPosts = async () => {
  await new Promise((resolve, reject) => {
    setTimeout(() => {
      reject();
    }, 2000);
  });
  return "Here are my posts";
};

export default async function Posts() {
  const posts = await fetchPosts();

  return <div className="mt-6">{posts}</div>;
}
