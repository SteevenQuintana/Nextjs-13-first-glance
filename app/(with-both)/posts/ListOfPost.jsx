import Link from "next/link";
import LikeButton from "./LikeButton";

const fetchPosts = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
    next: {
      revalidate: 60,
    },
  });
  return await res.json();
};

const ListOfPosts = async () => {
  const posts = await fetchPosts();
  return posts.slice(0, 5).map((post) => (
    <article key={post.id}>
      <Link href={`posts/${post.id}`}>
        <h2 style={{ color: "#09f" }}>{post.title}</h2>
        <p>{post.body}</p>
        <LikeButton />
      </Link>
    </article>
  ));
};

export default ListOfPosts;
