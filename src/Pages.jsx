export function Pages({ onPageChange }) {
  return (
    <>
      {Array.from({ length: 10 }, (_, i) => (
        <button
          className="btn btn-light"
          key={i}
          onClick={() => onPageChange(i + 1)}
        >
          {i + 1}
        </button>
      ))}
    </>
  );
}
