export default function Loader() {
  return (
    <div className="container my-5">
      {/* Title skeleton */}
      <div className="placeholder-glow mb-4">
        <span className="placeholder col-6"></span>
      </div>

      {/* Card-like skeletons */}
      <div className="row g-4">
        {[1, 2, 3].map((i) => (
          <div className="col-md-4" key={i}>
            <div className="card p-3">
              <div className="placeholder-glow mb-3">
                <span className="placeholder col-12" style={{ height: "180px" }}></span>
              </div>
              <div className="placeholder-glow mb-2">
                <span className="placeholder col-8"></span>
              </div>
              <div className="placeholder-glow mb-2">
                <span className="placeholder col-6"></span>
              </div>
              <div className="placeholder-glow">
                <span className="placeholder col-4"></span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
