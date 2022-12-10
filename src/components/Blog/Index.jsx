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
      {posts.map((dados) => {

        
        {/*setAutor(dados.author);
        if (autor === 1) {
          console.log("Carlos");
        } else {
          console.log("Cynthia");
        } */}
       
        return (
          <>
            <BlogPosts>
              <div key={dados.id}>
                <h1>{dados.title.rendered}</h1>
                <p className="">{parse(`${dados.content.rendered}`)}</p>
                <p>Data:{dados.date}</p>
                <p>Autor:{autor}</p>
              </div>
            </BlogPosts>
          </>
        );
      })}
    </>
  );
}
