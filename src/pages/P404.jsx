import { NavLink } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="container d-flex flex-column justify-content-center align-items-center min-vh-100 text-center">
      <h1 className="display-1 fw-bold text-danger shadow-sm p-3 rounded">404</h1>
      <h2 className="mb-3">Page Not Found</h2>
      <p className="text-muted mb-4">
        Oops! The page you are looking for does not exist or has been moved.
      </p>

      <NavLink
        to="/"
        className="btn btn-primary btn-lg rounded-3 shadow-sm"
        style={{ transition: "transform 0.2s" }}
        onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
        onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
      >
        Go Back Home
      </NavLink>
    </div>
  );
}
