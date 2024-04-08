export function Header({ onTagClick }) {
  return (
    <div className=" d-flex flex-column align-items-center justify-content-between  p-5 ">
      <h1 className="m-5 fs-1 fw-bold">K-Movies</h1>

      <div className=" container d-flex align-items-center justify-content-center">
        <input
          type="text"
          className="h-100 w-75 p-1"
          placeholder="What are you looking for?"
        />
        <button className="btn btn-primary border-ra">Search</button>
      </div>

      <div className="d-flex gap-2 p-3">
        <button
          onClick={() => onTagClick("now_playing")}
          className="btn btn-outline-danger"
        >
          Playing Now
        </button>
        <button
          onClick={() => onTagClick("popular")}
          className="btn btn-outline-primary"
        >
          Popular
        </button>
        <button
          onClick={() => onTagClick("top_rated")}
          className="btn btn-outline-success"
        >
          Top Rated
        </button>
        <button
          onClick={() => onTagClick("upcoming")}
          className="btn btn-outline-secondary"
        >
          Upcoming
        </button>
      </div>
    </div>
  );
}
