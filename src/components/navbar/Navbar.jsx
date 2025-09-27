import { MdCastForEducation } from "react-icons/md";
import { NavLink, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { api } from "../../api/api";
import { MdDarkMode } from "react-icons/md";
import { CiLight } from "react-icons/ci";



export default function Navbar() {
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  // Initialize user state from localStorage
  const [user, setUser] = useState(() => {
    const storedUser = localStorage.getItem("user");
    return storedUser ? JSON.parse(storedUser) : null;
  });

  // Dark mode state
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  // Apply dark mode classes to body
  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("bg-dark", "text-light");
      document.body.classList.remove("bg-light", "text-dark");
    } else {
      document.body.classList.add("bg-light", "text-dark");
      document.body.classList.remove("bg-dark", "text-light");
    }
    localStorage.setItem("theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  // Fetch full user data on mount if logged in
  useEffect(() => {
    if (!user) return;
    async function fetchUser() {
      try {
        const response = await api.get(`/users/${user}`);
        setData(response.data);
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
      className={`navbar navbar-expand-lg shadow-sm sticky-top ${
        darkMode ? "navbar-dark bg-dark" : "navbar-light bg-light"
      }`}
      style={{ zIndex: 1020 }}
    >
      <div className="container">
        <NavLink className="navbar-brand fw-bold" to="/">
          RESTRO <MdCastForEducation />
        </NavLink>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto align-items-lg-center">
            <li className="nav-item">
              <NavLink className="nav-link" to="/">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/contact">
                Contact
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
                  <NavLink
                    className={`btn ${
                      darkMode ? "btn-outline-light" : "btn-outline-dark"
                    } ms-2`}
                    to="/login"
                  >
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
                    {data.username}
                  </NavLink>
                </li>
                <li className="nav-item">
                  <button className="btn btn-danger ms-2" onClick={handleLogout}>
                    Logout
                  </button>
                </li>
              </>
            )}

            {/* 🌙 Dark Mode Toggle */}
            <li className="nav-item ms-3">
              <button
                className={`btn ${darkMode ? "btn-warning" : "btn-dark"}`}
                onClick={() => setDarkMode(!darkMode)}
              >
                {darkMode ?<CiLight />: <MdDarkMode/>
}
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
