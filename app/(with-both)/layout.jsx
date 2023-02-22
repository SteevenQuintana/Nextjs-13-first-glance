// import Counter from "./Counter";

const PostsLayout = ({ children }) => {
  return (
    <div>
      {/* <Counter /> */}
      <marquee style={{ color: "#09f", backgroundColor: "white" }}>
        Aprendiendo con @midudev 💖🖤🪐🌎🍾
      </marquee>
      {children}
    </div>
  );
};

export default PostsLayout;
