"use client";
import { useState } from "react";

const LikeButton = () => {
  const [like, setLike] = useState(false);
  return <button onClick={() => setLike(!like)}>{like ? "💖" : "🖤"}</button>;
};

export default LikeButton;
