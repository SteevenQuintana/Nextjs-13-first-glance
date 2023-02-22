import Link from "next/link";

const fetchSinglePost = async (id) => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
    next: {
      revalidate: 60,
    },
  });
  return await res.json();
};

const Post = async ({ children, params }) => {
  const { id } = params;
  const post = await fetchSinglePost(id);

  return (
    <article>
      <h2 style={{ color: "#09f" }}>{post.title}</h2>
      <p>{post.body}</p>
      <Link href={`posts/${id}/comments`}>Ver comentarios</Link>
      {children}
    </article>
  );
};

export default Post;
