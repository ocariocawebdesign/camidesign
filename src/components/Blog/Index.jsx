/*import { useEffect, useState } from "react";
import axios from "axios";
import parse from "html-react-parser";
import "./styles.css";

//const url = "https://threeeyes.online/cami/wp-json/wp/v2/posts/";

export default function Blog() {
  const [posts, setPosts] = useState([]);
  const [totalPosts, SetTotalPosts] = useState(0);
  const [showPosts, SetShowPosts] = useState(0);

  //const [autor, setAutor] = useState("");
  const url = "https://threeeyes.online/cami/wp-json/wp/v2/posts";

  function getPosts() {
    axios
      .get(`${url}`)

      .then((result) => {
        //console.log(result.data);
        //Posts que são impressos na tela
        setPosts(result.data.slice(0, 4));
        //SetShowPosts(posts)
        SetTotalPosts(result.data.length);
        console.log(result.data.length);
      });
  }

  useEffect(() => {
    getPosts();
  }, []);

  //const postsListSelection = posts.slice(0, 5);
  return (
    <>
      <div className="container">
        <h1 className="newstitle">news</h1>
        <div className="">
          {posts.map((dados, index) => {
            console.log(index);

            return (
              <>
                <div key={posts.id}>
                  {dados.title.rendered}
                  {parse(`${dados.content.rendered}`)}
                </div>
              </>
            );
          })}
        </div>
      </div>
      {/*<button
        onClick={() => {
          if (posts.slice(0, 2) !== totalPosts) {
            console.log(`${posts}` + 1);
          } else {
            console.log("Igual");
          }
        }}
      >
        Mostrar mais
      </button>
    </>
  );
}*/

import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import parse from "html-react-parser";
import "./styles.css";

export default function Blog() {
  const url = "https://threeeyes.online/cami/wp-json/wp/v2/posts/";
  const [posts, setPosts] = useState([]);
  function getPosts() {
    axios
      .get(`${url}`)

      .then((result) => {
        console.log(result.data);
        setPosts(result.data);
        //Posts que são impressos na tela
        //setPosts(result.data.slice(0, 4));
        //SetShowPosts(posts)
        //SetTotalPosts(result.data.length);
        //console.log(result.data.length);
      });
  }

  useEffect(() => {
    getPosts();
  }, []);

  const content = posts.map((post, i) => {
    console.log(post);
    return (
      <div key={i}>
        <h3>{post.slug}</h3>
        {parse(`${post.content.rendered}`)}
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
