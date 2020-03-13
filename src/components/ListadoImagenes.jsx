import React from "react";

import Imagen from "./Imagen";

const ListadoImagenes = ({ imagenes }) => {
  return (
    <div className="card-columns">
      {imagenes.map(img => (
        <Imagen key={img.id} img={img} />
      ))}
    </div>
  );
};

export default ListadoImagenes;
