import React from "react";

import "../App.css";

const Imagen = ({ img }) => {
  const { largeImageURL, likes, previewURL, tags, views } = img;

  return (
    <div className="card">
      <img src={previewURL} alt={tags} className="card-img-top" />
      <div className="card-body">
        <p className="card-text">
          <span className="b-t">
            <span className="material-icons mr-1">thumb_up</span>{likes}
          </span> <span className="mt-1">Me Gusta</span>
        </p>
        <p className="card-text">
          <span className="o-t">
            <span className="material-icons mr-1">face</span>{views}
          </span> <span className="mt-1">Vistas</span>
        </p>
      </div>
      <div className="card-footer">
        <a href={largeImageURL} target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-block">Ver Imágen</a>
      </div>
    </div>
  );
};

export default Imagen;
