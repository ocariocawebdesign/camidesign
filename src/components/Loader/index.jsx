import { Loader } from "./style";
import ImgLoader from "../../assets/logo.png";
import React, { useState, useEffect } from "react";


export function Loader() {
  const [isLoader, setIsLoader] = useState(true);
  setIsLoader(true);

  useEffect(() => {
    //Dados carregados, esconta o loader
    setIsLoader(false);
  }, []); //empty array as second argument.

  return (
    <>
      {isLoader && (
        <Loader>
          <img src={ImgLoader} alt="" width="80" height="80" />
        </Loader>
      )}
    </>
  );
}
