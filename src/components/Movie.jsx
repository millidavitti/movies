import React from "react";
import tablet from "../assets/images/tablet.png";

function Movie(props) {
  const { movieName, src } = props;
  return (
    <div className='movie-thumb'>
      <div className='movie-thumb'>
        <img src={src} alt='' />
        <h2>{movieName}</h2>
        <div className='overlay'></div>
      </div>
    </div>
  );
}

export default Movie;
