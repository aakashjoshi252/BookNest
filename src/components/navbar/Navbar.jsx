import { MdCastForEducation } from "react-icons/md";
import { NavLink, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { api } from "../../api/api";

export default function Navbar() {
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  // Initialize user state from localStorage
  const [user, setUser] = useState(() => {
    const storedUser = localStorage.getItem("user");
    return storedUser ? JSON.parse(storedUser) : null;
  });

  // Fetch full user data on mount if logged in
  useEffect(() => {
    if (!user) return;
    async function fetchUser() {
      try {
        const response = await api.get(`/users/${user}`);
        setData(response.data);
        // console.log("navbar vala console",response.data.user)
      } catch (error) {
        console.log(error);
      }
    }
    fetchUser();
  }, [user]);
  // Listen to localStorage changes in other tabs
  useEffect(() => {
    const handleStorageChange = () => {
      const storedUser = localStorage.getItem("user");
      setUser(storedUser ? JSON.parse(storedUser) : null);
    };
    window.addEventListener("storage", handleStorageChange);
    return () => window.removeEventListener("storage", handleStorageChange);
  }, []);

  // Logout function
  const handleLogout = () => {
    localStorage.removeItem("user");
    setUser(null);
    navigate("/login");
  };
  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark bg-dark shadow-sm sticky-top"
      style={{ zIndex: 1020 }}
    >
      <div className="container">
        <NavLink className="navbar-brand fw-bold" to="/">
          RESTRO  <MdCastForEducation />
        </NavLink>

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation" >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <NavLink className="nav-link" to="/">
                Home
              </NavLink>
            </li>
            {!user ? (
              <>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/about">
                    About
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="btn btn-outline-light ms-2" to="/login">
                    Login
                  </NavLink>
                </li>
              </>
            ) : (
              <>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/books">
                    Books
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="btn btn-success ms-2" to="/userProfile">
                    {data.username} {/* display name if object, else string */}
                  </NavLink>
                </li>
                <li className="nav-item">
                  <button className="btn btn-danger ms-2" onClick={handleLogout}>
                    Logout
                  </button>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}
