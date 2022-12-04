import { useEffect, useState } from "react";
import axios from "axios";
import parse from "html-react-parser";
//import { MainBox } from "../components/BlogPosts/style";

const url = "https://threeeyes.online/ctrenascer/wp-json/wp/v2/posts/";

export default function Blog() {
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
                <div className="box-content">
                  <h1>{dados.title.rendered}</h1>
                  <p className="">{parse(`${dados.content.rendered}`)}</p>
                  <p>Data:{dados.date}</p>
                </div>
              </div>
            </div>
          </>
        );
      })}
    </>
  );
}
