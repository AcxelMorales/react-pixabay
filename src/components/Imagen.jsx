import React from "react";

const Imagen = ({ img }) => {
  const { largeImageURL, likes, previewURL, tags, views } = img;

  return (
    <div className="card">
      <img src={previewURL} alt={tags} className="card-img-top" />
      <div className="card-body">
        <p className="card-text">{likes} Me Gusta</p>
        <p className="card-text">{views} Vistas</p>
      </div>
      <div className="card-footer">
          <a href={largeImageURL} target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-block">Ver Imágen</a>
      </div>
    </div>
  );
};

export default Imagen;
