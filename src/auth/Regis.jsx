import { NavLink, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { regisSchema } from "../schema/Index";
import { useEffect, useState } from "react";
import { api } from "../api/api";

const initialValue = {
  username: "",
  password: "",
  mobile: "",
  address: "",
  address2: "",
  city: "",
  state: "",
  zip: "",
  email: "",
  checkbox: false,
};

export default function Regis() {
  const navigate = useNavigate();

  // Fetch states
  const [states, setStates] = useState([]);
  const handleStates = async () => {
    try {
      const response = await api.get("/states" || "https://690afcd61a446bb9cc24ba03.mockapi.io/states");
      setStates(response.data);
    } catch (error) {
      console.error("Error fetching states:", error);
    }
  };
  useEffect(() => {
    handleStates();
  }, []);

  // Submit handler
  async function handleSendData(values, { resetForm }) {
    try {
      const response = await api.post("/users"|| "https://690afcd61a446bb9cc24ba03.mockapi.io/users", values);
      console.log("✅ User registered:", response.data);

      alert("🎉 Registration successful! Please login.");
      resetForm();
      navigate("/login");
    } catch (error) {
      console.error("Error during registration:", error);
      alert("⚠️ Something went wrong, please try again.");
    }
  }

  // Formik setup
  const formik = useFormik({
    initialValues: initialValue,
    onSubmit: handleSendData,
    validationSchema: regisSchema,
  });

  return (
    <div className="container my-5">
      <div className="row justify-content-center">
        <div className="col-lg-8">
          <div className="card shadow-lg border-0 rounded-4">
            {/* Header */}
            <div
              className="card-header text-white text-center py-3"
              style={{ background: "linear-gradient(90deg,#0d6efd,#6610f2)" }}
            >
              <h4 className="mb-0 fw-bold">Create Your Account</h4>
              <p className="mb-0 small">Join us and get started today</p>
            </div>

            {/* Body */}
            <div className="card-body p-4">
              <form onSubmit={formik.handleSubmit} className="row g-3">
                {/* Username */}
                <div className="col-md-6">
                  <label htmlFor="username" className="form-label fw-semibold">
                    Username
                  </label>
                  <input
                    type="text"
                    id="username"
                    name="username"
                    className={`form-control ${
                      formik.errors.username && formik.touched.username
                        ? "is-invalid"
                        : ""
                    }`}
                    placeholder="Enter your username"
                    value={formik.values.username}
                    onChange={formik.handleChange}
                  />
                  {formik.errors.username && formik.touched.username && (
                    <div className="invalid-feedback">
                      {formik.errors.username}
                    </div>
                  )}
                </div>

                {/* Email */}
                <div className="col-md-6">
                  <label htmlFor="email" className="form-label fw-semibold">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className={`form-control ${
                      formik.errors.email && formik.touched.email
                        ? "is-invalid"
                        : ""
                    }`}
                    placeholder="Enter your email"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                  />
                  {formik.errors.email && formik.touched.email && (
                    <div className="invalid-feedback">
                      {formik.errors.email}
                    </div>
                  )}
                </div>

                {/* Mobile */}
                <div className="col-md-6">
                  <label htmlFor="mobile" className="form-label fw-semibold">
                    Mobile
                  </label>
                  <input
                    type="text"
                    id="mobile"
                    name="mobile"
                    className={`form-control ${
                      formik.errors.mobile && formik.touched.mobile
                        ? "is-invalid"
                        : ""
                    }`}
                    placeholder="Enter your mobile number"
                    value={formik.values.mobile}
                    onChange={formik.handleChange}
                  />
                  {formik.errors.mobile && formik.touched.mobile && (
                    <div className="invalid-feedback">
                      {formik.errors.mobile}
                    </div>
                  )}
                </div>

                {/* Password */}
                <div className="col-md-6">
                  <label htmlFor="password" className="form-label fw-semibold">
                    Password
                  </label>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    className={`form-control ${
                      formik.errors.password && formik.touched.password
                        ? "is-invalid"
                        : ""
                    }`}
                    placeholder="Enter your password"
                    value={formik.values.password}
                    onChange={formik.handleChange}
                  />
                  {formik.errors.password && formik.touched.password && (
                    <div className="invalid-feedback">
                      {formik.errors.password}
                    </div>
                  )}
                </div>

                {/* Address */}
                <div className="col-12">
                  <label htmlFor="address" className="form-label fw-semibold">
                    Address
                  </label>
                  <input
                    type="text"
                    id="address"
                    name="address"
                    className="form-control"
                    placeholder="1234 Main St"
                    value={formik.values.address}
                    onChange={formik.handleChange}
                  />
                </div>

                {/* Address 2 */}
                <div className="col-12">
                  <label htmlFor="address2" className="form-label fw-semibold">
                    Address 2
                  </label>
                  <input
                    type="text"
                    id="address2"
                    name="address2"
                    className="form-control"
                    placeholder="Apartment, studio, or floor"
                    value={formik.values.address2}
                    onChange={formik.handleChange}
                  />
                </div>

                {/* City */}
                <div className="col-md-6">
                  <label htmlFor="city" className="form-label fw-semibold">
                    City
                  </label>
                  <input
                    type="text"
                    id="city"
                    name="city"
                    className="form-control"
                    value={formik.values.city}
                    onChange={formik.handleChange}
                  />
                </div>

                {/* State */}
                <div className="col-md-4">
                  <label htmlFor="state" className="form-label fw-semibold">
                    State
                  </label>
                  <select
                    id="state"
                    name="state"
                    className="form-select"
                    value={formik.values.state}
                    onChange={formik.handleChange}
                  >
                    <option value="">Choose...</option>
                    {states.map((element, index) => (
                      <option key={index} value={element.code}>
                        {element.state}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Zip */}
                <div className="col-md-2">
                  <label htmlFor="zip" className="form-label fw-semibold">
                    Zip
                  </label>
                  <input
                    type="text"
                    id="zip"
                    name="zip"
                    className="form-control"
                    value={formik.values.zip}
                    onChange={formik.handleChange}
                  />
                </div>

                {/* Checkbox */}
                <div className="col-12">
                  <div className="form-check">
                    <input
                      type="checkbox"
                      id="gridCheck"
                      name="checkbox"
                      className="form-check-input"
                      checked={formik.values.checkbox}
                      onChange={formik.handleChange}
                    />
                    <label className="form-check-label" htmlFor="gridCheck">
                      Remember me
                    </label>
                  </div>
                </div>

                {/* Buttons */}
                <div className="d-flex justify-content-between align-items-center mt-3">
                  <button
                    type="submit"
                    className="btn btn-primary btn-lg px-4 rounded-3 fw-semibold"
                  >
                    Sign Up
                  </button>
                  <button
                    type="button"
                    onClick={formik.handleReset}
                    className="btn btn-outline-secondary btn-lg px-4 rounded-3 fw-semibold"
                  >
                    Reset
                  </button>
                </div>
              </form>
            </div>

            {/* Footer */}
            <div className="card-footer text-center py-3 bg-light">
              <p className="mb-0">
                Already have an account?{" "}
                <NavLink to="/login" className="fw-bold text-primary">
                  Login here
                </NavLink>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
