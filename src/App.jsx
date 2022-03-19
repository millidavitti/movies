import React, { useEffect, useState } from "react";
import "./style.css";
import Category from "./components/Category";
import CategoryS from "./components/CategoryS";

function App() {
  const [series, setSeries] = useState([]);
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState({
    search: "",
    id: "7298",
  });
  const [send, setSend] = useState(false);

  function getQuery(event) {
    const { target } = event;
    const { name, value } = target;
    setQuery((pre) => ({
      ...pre,
      [name]: value,
    }));
  }

  useEffect(() => {
    async function getMovieData(query) {
      const res = await fetch(
        `http://www.omdbapi.com/?i=tt3896198&apikey=7986c10e&s=${
          query || "Guy"
        }`
      );
      const movieData = await res.json();
      const serie = movieData?.Search.filter((data) => data.Type === "series");
      setSeries(serie);
      const movie = movieData?.Search.filter((data) => data.Type === "movie");
      setMovies(movie);

      return movies;
    }
    getMovieData(query.search);

    document.addEventListener("keydown", (event) => {
      const { key } = event;
      if (key === "Enter") {
        getMovieData();
        setSend((pre) => !pre);
      }
    });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [send]);
  console.log(movies, series, query);

  return (
    <main>
      <header>
        <div className='h1-wrap'>
          <h1>MyTestApp</h1>
        </div>
      </header>
      <section className='hero'>
        <h2>Watch something incredible.</h2>
      </section>
      <section className='content'>
        <div className='search'>
          <h2>Search</h2>
          <input type='text' onChange={getQuery} id='query' name='search' />
        </div>
        <Category movies={movies} />
        <CategoryS series={series} />
      </section>
    </main>
  );
}

export default App;
