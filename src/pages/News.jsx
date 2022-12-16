//import Blog from "../components/Blog/Index";
import React from "react";
export function News() {
  const posts = [
    { id: 1, 
      title: "Hello World",
     content: "Welcome to learning React!" },
    {
      id: 2,
      title: "Installation",
      content: "You can install React from npm.",
    },
  ];
  const content = posts.map((post) => {
    <div key={post.id}>
      <h3>{post.title}</h3>
      <p>{post.content}</p>
    </div>;
  });

  return <>{content}</>;
}
