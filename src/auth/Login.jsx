import { useFormik } from "formik";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { api } from "../api/api"; // axios instance

let initialValue = {
  username: "",
  email: "",
  password: "",
  confirmPassword: "",
};

export default function Login() {
  const navigate = useNavigate();

  // Save name to localStorage
  const handleSave = (data) => {
    localStorage.setItem("user", JSON.stringify(data.id));
  };

  // Function to check user
  async function submitHandler(values) {
    try {
      const response = await api.get("/users"); // fetch users
      const users = response.data;

      const foundUser = users.find(
        (u) =>
          (u.email === values.email || u.username === values.username) &&
          u.password === values.password
      );

      if (foundUser) {
        alert("Login Successful!");
        console.log("User found:", foundUser);

        handleSave(foundUser);
        navigate("/userProfile");
      } else {
        alert(" Invalid username/email or password");
      }

      handleReset();
    } catch (error) {
      console.error("Error during login:", error);
      alert(" Something went wrong. Please try again.");
    }
  }

  const { handleChange, handleReset, handleSubmit, values } = useFormik({
    initialValues: initialValue,
    onSubmit: submitHandler,
  });

  return (
    <>
      <div className="container d-flex justify-content-center align-items-center min-vh-100">
        <div
          className="card shadow-lg p-4 border-0 rounded-4"
          style={{ maxWidth: "500px" }}
        >
          <h2 className="text-center mb-4 fw-bold text-success">Welcome Back</h2>
          <p className="text-center text-muted mb-4">
            Please login to continue
          </p>

          <form onSubmit={handleSubmit} className="d-flex flex-column gap-3">
            {/* Username */}
            <div>
              <label htmlFor="username" className="form-label fw-semibold">
                Username
              </label>
              <input
                type="text"
                name="username"
                id="username"
                value={values.username}
                onChange={handleChange}
                className="form-control form-control-lg rounded-3"
                placeholder="Enter username"
              />
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="form-label fw-semibold">
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                value={values.email}
                onChange={handleChange}
                className="form-control form-control-lg rounded-3"
                placeholder="Enter email"
              />
            </div>

            {/* Password */}
            <div>
              <label htmlFor="password" className="form-label fw-semibold">
                Password
              </label>
              <input
                type="password"
                name="password"
                id="password"
                value={values.password}
                onChange={handleChange}
                className="form-control form-control-lg rounded-3"
                placeholder="Enter password"
              />
            </div>

            {/* Buttons */}
            <div className="d-flex justify-content-between mt-3">
              <button type="submit" className="btn btn-success px-4 rounded-3">
                Login
              </button>
              <button
                type="button"
                onClick={handleReset}
                className="btn btn-outline-warning px-4 rounded-3"
              >
                Reset
              </button>
            </div>
          </form>

          <div className="mt-4 text-center">
            <p className="mb-1 text-muted">Don’t have an account?</p>
            <NavLink to="/login/regis" className="fw-bold text-success">
              Create Account
            </NavLink>
          </div>
        </div>
      </div>
      <Outlet />
    </>
  );
}
