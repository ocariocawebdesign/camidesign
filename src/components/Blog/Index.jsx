import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import parse from "html-react-parser";
import "./styles.css";
//https://github.com/alexgarces/react-typeform-embed
//https://developer.typeform.com/embed/react
export default function Blog() {
  const url = "https://threeeyes.online/cami/wp-json/wp/v2/posts/";
  const [posts, setPosts] = useState([]);
  function getPosts() {
    axios
      .get(`${url}`)

      .then((result) => {
        setPosts(result.data);
        console.log(result.data);

      });
  }

  useEffect(() => {
    getPosts();
  }, []);

  const content = posts.map((post, i) => {
    console.log(post);
    return (
    
        <div key={i}>
          <div className="container">
            <div className="blog-posts box-content-posts ">
              <span
                className="text-center"
                style={{
                  fontSize: "5rem",
                  lineHeight: "1.2",
                  letterSpacing: "-0.06em",
                  textTransform: "lowercase",
                  color: "#333",
                  opacity: "1",
                  fontWeight: "bolder",
                }}
              >
                {post.title.rendered}
              </span>
              {parse(`${post.content.rendered}`)}
            </div>
          </div>
        </div>
    
    );
  });

  return <>{content}</>;

  /*const posts = [
    { id: 1, title: "Hello World", content: "Welcome to learning React!" },
    {
      id: 2,
      title: "Installation",
      content: "You can install React from npm.",
    },
  ];
  const content = posts.map((post) => {
    console.log(post);
    return (
      <div key={post.id}>
        <h1>Teste</h1>
        <h3>{post.title}</h3>
        <p>{post.content}</p>
      </div>
    );
  });

  return <>{content}</>;
*/
}
