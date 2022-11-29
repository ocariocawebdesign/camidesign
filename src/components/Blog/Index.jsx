import { MainBox } from "./style";
import { useEffect, useState } from "react";
import axios from "axios";
import parse from "html-react-parser";

const url = "https://threeeyes.online/ctrenascer/wp-json/wp/v2/posts/";

export default function Content() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get(`${url}`).then((result) => {
      console.log(result.data);
      setPosts(result.data);
    }, []);
  });

  return (
    <>
      {posts.map((dados) => {
        return (
          <>
            <div key={dados.id}>
              <div className="container">
                <MainBox>
                  <div className="box-content">
                    <h1>{dados.title.rendered}</h1>
                    <p className="">{parse(`${dados.content.rendered}`)}</p>
                    <p>Data:{dados.date}</p>
                  </div>
                </MainBox>
              </div>
            </div>
          </>
        );
      })}
    </>
  );
}
