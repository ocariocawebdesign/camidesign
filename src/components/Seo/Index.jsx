import React from "react";
import { Helmet } from "react-helmet-async";
//Como usar https://www.freecodecamp.org/news/react-helmet-examples/
export function Seo({ title, description, name, type }) {
  return (
    <div>
      <Helmet>
        {/* Standard metadata tags */}
        <title>CAMI STUDIO</title>{" "}
        <meta
          name="We are a team dedicated to the development of animations and websites for companies. We work animations, institutional sites, blogs seeking to meet the needs of our customers."
          content={description}
        />
        {/* End standard metadata tags */}
        {/* Facebook tags */}
        <meta property="og:type" content={type} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        {/* End Facebook tags */}
        {/* Twitter tags */}
        <meta name="twitter:creator" content={name} />
        <meta name="twitter:card" content={type} />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        {/* End Twitter tags */}
      </Helmet>
    </div>
  );
}
