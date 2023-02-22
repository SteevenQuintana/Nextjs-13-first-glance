const fetchSinglePostComments = async (id) => {
  await new Promise((resolve) => setTimeout(resolve, 500));

  //   throw new Error("Error");

  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}/comments`,
    {
      next: {
        revalidate: 60,
      },
    }
  );
  return await res.json();
};

const Comments = async ({ params }) => {
  const { id } = params;
  const comments = await fetchSinglePostComments(id);

  return (
    <ul
      style={{ fontSize: "10px", backgroundColor: "#444", paddingLeft: "2rem" }}
    >
      {comments.map((comment) => (
        <li key={comment.id}>
          <h2>{comment.name}</h2>
          <img
            src={`https://api.dicebear.com/5.x/big-smile/svg?seed=${comment.name}`}
            alt={comment.name}
            width="100"
          />
          <p>{comment.body}</p>
        </li>
      ))}
    </ul>
  );
};

export default Comments;
