import React, { useState, useEffect } from "react";

import Formulario from "./components/Formulario";
import ListadoImagenes from "./components/ListadoImagenes";

function App() {
  const [busqueda, setBusqueda] = useState("");
  const [imagenes, setImagenes] = useState([]);

  useEffect(() => {
    const consulta = async () => {
      if (busqueda === "") return;

      const imagenesPorPagina = 30;
      const key = "9662990-d97bb9f883d3f12a5e353abf2";
      const url = `https://pixabay.com/api/?key=${key}&q=${busqueda}&per_page=${imagenesPorPagina}`;

      const respuesta = await fetch(url);
      const data = await respuesta.json();

      setImagenes(data.hits);
    };

    consulta();
  }, [busqueda]);

  return (
    <div className="container">
      <div className="jumbotron">
        <p className="lead text-center">Buscador de Imágenes</p>
        <Formulario setBusqueda={setBusqueda} />
      </div>
      <ListadoImagenes imagenes={imagenes} />
    </div>
  );
}

export default App;
