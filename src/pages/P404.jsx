import { NavLink } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="container text-center my-5">
      <h1 className="display-1 fw-bold text-danger">404</h1>
      <h2 className="mb-3">Page Not Found</h2>
      <p className="text-muted">
        Oops! The page you are looking for does not exist or has been moved.
      </p>

      <NavLink to="/" className="btn btn-primary mt-3">
        Go Back Home
      </NavLink>
    </div>
  );
}
