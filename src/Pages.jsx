export function Pages() {
  return (
    <>
      {Array.from({ length: 10 }, (_, i) => (
        <button key={i}>{i}</button>
      ))}
    </>
  );
}
