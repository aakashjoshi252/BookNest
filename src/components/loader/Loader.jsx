export default function Loader({ cards = 3 }) {
  return (
    <div className="container my-5">
      {/* Title skeleton */}
      <div className="placeholder-glow mb-4">
        <span className="placeholder col-6 placeholder-wave"></span>
      </div>

      {/* Card-like skeletons */}
      <div className="row g-4">
        {Array.from({ length: cards }).map((_, i) => (
          <div className="col-md-4" key={i}>
            <div className="card p-3">
              <div className="placeholder-glow mb-3">
                <span
                  className="placeholder col-12 placeholder-wave"
                  style={{ height: "180px", borderRadius: "0.5rem" }}
                ></span>
              </div>
              <div className="placeholder-glow mb-2">
                <span className="placeholder col-8 placeholder-wave"></span>
              </div>
              <div className="placeholder-glow mb-2">
                <span className="placeholder col-6 placeholder-wave"></span>
              </div>
              <div className="placeholder-glow">
                <span className="placeholder col-4 placeholder-wave"></span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
