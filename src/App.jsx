import React, { useState, useEffect } from "react";

import Formulario from "./components/Formulario";
import ListadoImagenes from "./components/ListadoImagenes";

function App() {
  const [busqueda, setBusqueda] = useState("");
  const [imagenes, setImagenes] = useState([]);
  const [paginaActual, setPaginaActual] = useState(1);
  const [totalPaginas, setTotalPaginas] = useState(1);

  useEffect(() => {
    const consulta = async () => {
      if (busqueda === "") return;

      const imagenesPorPagina = 30;
      const key = "9662990-d97bb9f883d3f12a5e353abf2";
      const url = `https://pixabay.com/api/?key=${key}&q=${busqueda}&per_page=${imagenesPorPagina}&page=${paginaActual}`;

      const respuesta = await fetch(url);
      const data = await respuesta.json();

      setImagenes(data.hits);

      setTotalPaginas(Math.ceil(data.totalHits / imagenesPorPagina));

      const jumbotron = document.querySelector(".jumbotron");
      jumbotron.scrollIntoView('smooth');
    };

    consulta();
  }, [busqueda, paginaActual]);

  const anterior = () => {
    const nuevaPaginaActual = paginaActual - 1;
    if (nuevaPaginaActual === 0) return;
    setPaginaActual(nuevaPaginaActual);
  };

  const siguiente = () => {
    const nuevaPaginaActual = paginaActual + 1;
    if (nuevaPaginaActual > totalPaginas) return;
    setPaginaActual(nuevaPaginaActual);
  };

  return (
    <div className="container">
      <div className="jumbotron">
        <p className="lead text-center">Buscador de Imágenes</p>
        <Formulario setBusqueda={setBusqueda} />
      </div>
      <ListadoImagenes imagenes={imagenes} />
      <div className="mb-3 mt-3 text-center">
        {(paginaActual === 1) ? null :
          <button
            type="button"
            className="btn btn-info mr-2"
            onClick={anterior}>Anterior</button>}

        {(paginaActual === totalPaginas) ? null :
          <button
            type="button"
            className="btn btn-info"
            onClick={siguiente}>Siguiente</button>}
      </div>
    </div>
  );
}

export default App;
