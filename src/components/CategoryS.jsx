import React from "react";
import Movie from "../components/Movie";
import tablet from "../assets/images/tablet.png";

function Category(props) {
  const { series } = props;

  return (
    <div className='category'>
      <h2>{series[0]?.Type}</h2>
      <div className='movies grid'>
        {series?.map((movie, index) => (
          <Movie key={index} movieName={movie.Title} src={movie.Poster} />
        )) || <Movie movieName={"No results!"} src={tablet} />}
      </div>
    </div>
  );
}

export default Category;
