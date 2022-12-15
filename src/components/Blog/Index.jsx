import { useEffect, useState } from "react";
import axios from "axios";
import parse from "html-react-parser";
//import "./styles.css";

//const url = "https://threeeyes.online/cami/wp-json/wp/v2/posts/";
const url = "https://threeeyes.online/cami/wp-json/wp/v2/posts";

export default function Blog() {
  const [posts, setPosts] = useState([]);
  const [totalPosts, SetTotalPosts] = useState(0);
  const [showPosts, SetShowPosts] = useState(1);

  //const [autor, setAutor] = useState("");

  useEffect(() => {
    axios
      .get(`${url}`)

      .then(
        (result) => {
          //console.log(result.data);
          //Posts que são impressos na tela
          setPosts(result.data.slice(0, 4));
          SetTotalPosts(result.data.length);
          console.log(result.data.length);
        },

        [showPosts]
      );
  });

  function showMorePosts() {
    //setIsLoader(true);
    /*if (totalPosts <= 2) {
      SetShowPosts(posts.slice(0, 4));*/
    //SetShowPosts(showPosts.slice(0, 2));
    //console.log("Mais posts");
    //setPosts(result.data.slice(0, 3));
  }

  //const postsListSelection = posts.slice(0, 5);
  return (
    <>
      <div className="container">
        <h1 className="newstitle">news</h1>

        {posts.map((dados) => {
          //console.log(dados);

          return (
            <>
              <div className="blog-posts">
                <div className="box-content-posts">
                  <div key={dados.id}>
                    <h1>{dados.title.rendered}</h1>
                    <p className="">{parse(`${dados.content.rendered}`)}</p>
                  </div>
                </div>
              </div>
            </>
          );
        })}
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
      </button>*/}
    </>
  );
}
