import React from "react";
import { useState } from "react";

export default function Description() {
  //https://www.youtube.com/watch?v=obUEByaiwtY  passar eventos por props
  const [dados, setDados] = useState({
    descriptionCynthiaPt:
      "Criatividade e habilidades artísticas para desenvolver projetos de animação para diferentes plataformas, como redes sociais e sites.",
  });

  return (
    <>
      <div>
        <ButtonTranslator id="button-br" event={translate} text="PT" />
        <ButtonTranslator id="buttton-en" event={translate} text="EN" />
      </div>
      <p>{dados.descriptionCynthiaPt}</p>
      {console.log(dados.descriptionCynthiaPt)}
    </>
  );
}
