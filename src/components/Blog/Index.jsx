import { useEffect, useState } from "react";
import axios from "axios";
import parse from "html-react-parser";
import { BlogPosts } from "./index";
//import { MainBox } from "../components/BlogPosts/style";

const url = "https://threeeyes.online/cami/wp-json/wp/v2/posts/";

export default function Blog() {
  const [posts, setPosts] = useState([]);
  const [autor, setAutor] = useState("");
  useEffect(() => {
    axios.get(`${url}`).then((result) => {
      console.log(result.data);
      setPosts(result.data);
    }, []);
  });

  return (
    <>
      <div className="container" style={{}}>
        <h1
          style={{
            fontWeight: "bolder",
            textAlign: "center",
            lineHeight: "1.2",
            letterSpacing: "-0.06em",
            fontSize: "5rem",
            color: "#333",
            opacity: "1",
          }}
        >
          news{" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="56"
            height="56"
            fill="#333"
            class="bi bi-calendar2-event"
            viewBox="0 0 16 16"
          >
            <path d="M11 7.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1z" />
            <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM2 2a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1H2z" />
            <path d="M2.5 4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5H3a.5.5 0 0 1-.5-.5V4z" />
          </svg>
        </h1>

        {posts.map((dados) => {
          return (
            <>
              <BlogPosts>
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
              </BlogPosts>
            </>
          );
        })}
      </div>
    </>
  );
}
