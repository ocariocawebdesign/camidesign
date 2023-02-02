import React from "react";

export default function ButtonTranslator(props) {
 //https://www.youtube.com/watch?v=obUEByaiwtY  passar eventos por props

 
  return (
    <>
    
      <button  onClick={props.event} className="btn btn-ligth btn-sm">
      {props.text}
      </button>
      

      
    </>
  );
}
