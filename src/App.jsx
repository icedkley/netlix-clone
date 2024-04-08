import { useEffect, useState } from "react";
import { Movie } from "./Movie";
import { Pages } from "./Pages";
import { Header } from "./Header";

("./Movie.jsx");
function App() {
  const [movies, setMovies] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [movieList, setMovieList] = useState("popular");

  // const url = `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=${currentPage}&sort_by=popularity.desc`;
  const url = `https://api.themoviedb.org/3/movie/${movieList}?language=en-US&page=${currentPage}`;

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhZTY4MWJiMjYwMjcyZjEyN2IzNDM2MWI0ZWYzMTNmZCIsInN1YiI6IjY2MTBmMGNiYjMzOTAzMDE3YjZlN2E5MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.rIeIpp2tUXAihPJcueIbr0HLZda5PYiHkIxNDcUdr6Y",
    },
  };

  useEffect(() => {
    fetch(url, options)
      .then((res) => res.json())
      .then((json) => {
        return setMovies(json.results);
      })
      .catch((err) => console.error("error:" + err));
  }, [url]);

  function handlePageChange(page) {
    setCurrentPage(page);
    console.log("Button clicked: " + page);
  }

  function handleTagChange(tag) {
    setMovieList(tag);
    setCurrentPage(1);
  }

  return (
    <div>
      <div>
        <Header onTagClick={handleTagChange} />
        <h2>{movieList}</h2>
      </div>

      <div className="container">
        {movies.map((movie) => (
          <Movie movie={movie} />
        ))}
      </div>
      <Pages></Pages>
    </div>
  );
}

export default App;
