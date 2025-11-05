import { useFormik } from "formik";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { api } from "../api/api"; // axios instance

// Initial form values
let initialValue = {
  username: "",
  email: "",
  password: "",
};

export default function Login() {
  const navigate = useNavigate();

  // Save logged-in user ID to localStorage
  const handleSave = (data) => {
    localStorage.setItem("user", JSON.stringify(data.id));
  };

  // Handle login
  async function submitHandler(values, { resetForm }) {
    try {
      const response = await api.get("/users" || "https://690afcd61a446bb9cc24ba03.mockapi.io/users"); // fetch users
      const users = response.data;

      // Find user by username OR email + password
      const foundUser = users.find(
        (u) =>
          (u.email === values.email || u.username === values.username) &&
          u.password === values.password
      );

      if (foundUser) {
        alert(" Login Successful!");
        console.log("User found:", foundUser);

        handleSave(foundUser);
        navigate("/userProfile");
      } else {
        alert(" Invalid username/email or password");
      }

      resetForm();
    } catch (error) {
      console.error("Error during login:", error);
      alert(" Something went wrong. Please try again.");
    }
  }

  const formik = useFormik({
    initialValues: initialValue,
    onSubmit: submitHandler,
  });

  return (
    <>
      <div className="container d-flex justify-content-center align-items-center min-vh-100">
        <div
          className="card shadow-lg p-4 border-0 rounded-4 w-100"
          style={{ maxWidth: "500px" }}
        >
          {/* Heading */}
          <h2 className="text-center mb-3 fw-bold ">
            Welcome Back
          </h2>
          <p className="text-center text-muted mb-4">
            Please login to continue
          </p>

          {/* Login Form */}
          <form onSubmit={formik.handleSubmit} className="d-flex flex-column gap-3">
            {/* Username */}
            <div>
              <label htmlFor="username" className="form-label fw-semibold">
                Username
              </label>
              <input type="text" name="username" id="username" value={formik.values.username} onChange={formik.handleChange} className="form-control form-control-lg rounded-3" placeholder="Enter username" />
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="form-label fw-semibold">
                Email
              </label>
              <input type="email" name="email" id="email" value={formik.values.email} onChange={formik.handleChange}className="form-control form-control-lg rounded-3" placeholder="Enter email"/>
            </div>

            {/* Password */}
            <div>
              <label htmlFor="password" className="form-label fw-semibold"> Password </label>
            <input type="password"name="password" id="password" value={formik.values.password}onChange={formik.handleChange}className="form-control form-control-lg rounded-3"placeholder="Enter password" />
            </div>

            {/* Buttons */}
            <div className="d-flex justify-content-between mt-3">
              <button
                type="submit"
                className="btn btn-success px-4 rounded-3 fw-semibold"
              >
                Login
              </button>
              <button type="button" onClick={formik.handleReset} className="btn btn-outline-danger px-4 rounded-3 fw-semibold">Reset</button>
            </div>
          </form>

          {/* Register Link */}
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
  