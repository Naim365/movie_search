import React, { useEffect, useState } from "react";

import "./App.css";
import MovieCard from "./MovieCard";

const API_URL = "http://www.omdbapi.com?apikey=b6003d8a";

const App = () => {
  const [searchTitle, setSearchTitle] = useState("");
  const [movies, setMovies] = useState([]);

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    console.log(data);

    setMovies(data.Search);
  };

//   const movie2 = {
//     Title: "The Making of 'Working Title'",
//     Year: "1992",
//     imdbID: "tt2288099",
//     Type: "movie",
//     Poster:
//       "https://m.media-amazon.com/images/M/MV5BMTc3MjI1NzQ0NF5BMl5BanBnXkFtZTcwODg1MDI1Nw@@._V1_SX300.jpg",
//   };

  useEffect(() => {
    searchMovies("Batman");
  }, []);

  return (
    <div className="app">
      <h1>MovieApp</h1>
      <div className="search">
        <input
          type="search"
          value={searchTitle}
          placeholder="write movie name"
          onChange={(e) => setSearchTitle(e.target.value)}
        />
        <img
          src="https://png.pngtree.com/png-vector/20190129/ourlarge/pngtree-vector-find-icon-png-image_425880.jpg"
          alt="search"
          onClick={() => searchMovies(searchTitle)}
        />
      </div>

      {movies?.length > 0 ? (
        <div className="container">
            {
                movies.map((movie) => (
                    <MovieCard  movie={movie} />
                ))
            }
         
        </div>
      ) : (
        <div className="empty">
          <h2>No Movies found</h2>
        </div>
      )}
    </div>
  );
};

export default App;
