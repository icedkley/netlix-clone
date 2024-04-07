import { useEffect, useState } from "react";
import { Movie } from "./Movie";
import { Pages } from "./Pages";

("./Movie.jsx");
function App() {
  const [movies, setMovies] = useState([]);

  const url =
    "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc";
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
        console.log(json);
        return setMovies(json.results);
      })
      .catch((err) => console.error("error:" + err));
  }, []);

  return (
    <div>
      <h1>Popular Movies</h1>
      {movies.map((movie) => (
        <Movie movie={movie} />
      ))}
      <Pages></Pages>
    </div>
  );
}

export default App;
