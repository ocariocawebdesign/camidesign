import { useEffect, useState } from "react";
import axios from "axios";
import parse from "html-react-parser";
import "./styles.css";

const url = "https://threeeyes.online/cami/wp-json/wp/v2/posts/";

export default function Blog() {
  const [posts, setPosts] = useState([]);
  //const [autor, setAutor] = useState("");
  useEffect(() => {
    axios.get(`${url}`).then((result) => {
      //console.log(result.data);
      setPosts(result.data);
    }, []);
  });

  const postsListSelection = posts.slice(0, 5);
  return (
    <>
      <div className="container">
        <h1 className="newstitle">news</h1>

        {postsListSelection.map((dados) => {
          console.log(dados);

          return (
            <>
              <div className="blog-posts">
                <div className="box-content-posts">
                  <div key={dados.id}>
                    <h1
                      style={{
                        fontWeight: "bolder",
                        textAlign: "left",
                        lineHeight: "1.2",
                        letterSpacing: "-0.06em",
                        fontSize: "3rem",
                        color: "#333",
                        opacity: "1",
                      }}
                    >
                      {dados.title.rendered}
                    </h1>
                    <p className="">{parse(`${dados.content.rendered}`)}</p>
                    {/*} <p>Data:{dados.date}</p>*/}
                    {/* <p>Autor:{autor}</p>*/}
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
}
