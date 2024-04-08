export function Movie({ movie }) {
  return (
    <div key={movie.id} className="col">
      <h3>
        <b>{movie.title}</b>
      </h3>
      <img
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
      />
    </div>
  );
}
