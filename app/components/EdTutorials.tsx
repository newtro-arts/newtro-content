import React from "react";
import ContentEmbed from "./ContentEmbed";

const EdTutorials = () => {
  return (
    <div className="w-full text-green-fourth mx-4">
      <h5 className="uppercase pragmatica-text text-2xl lg:text-4xl mb-4">
        Top Picks for You
      </h5>
      <div className="grid lg:grid-flow-col grid-cols-1 gap-y-4 lg:grid-cols-7">
        <ContentEmbed
          url="https://www.youtube.com/embed/-S5LwV1EMQM?si=rMpW-BO_Fj6Fi_V9"
          title="Cómo registrar tu Basename"
          thumbnail="/vid1.png"
          descripcion="En este vídeo te mostramos cómo registrar tu Basename en la red de Base."
          imgAuthor="/lucasoxx.png"
          nameAuthor="Lucasoxx"
          date="Oct 12, 2024"
        />
        <ContentEmbed
          url="https://www.youtube.com/embed/I7_NW0aFnBA?si=MeR6FwPA7QVSVmZ3"
          title="Cómo crear tu wallet en Coinbase"
          thumbnail="/vid2.png"
          descripcion="En este vídeo te explicamos cómo crearte una Coinbase Wallet, una wallet self-custodial que nace de Coinbase y que tiene varias blockchains integradas, como Ethereum y Bitcoin."
          imgAuthor="/logo-green.jpeg"
          nameAuthor="Bulls"
          date="Oct 10, 2024"
        />
      </div>
    </div>
  );
};

export default EdTutorials;
