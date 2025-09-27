import { useState, useEffect } from "react";
import { api } from "../../api/api";

export default function UserProfile() {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const myData = localStorage.getItem("user");
    if (!myData) {
      setLoading(false);
      return;
    }

    const userId = JSON.parse(myData);

    async function fetchUser() {
      try {
        const response = await api.get(`/users/${userId}`);
        setData(response.data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }

    fetchUser();
  }, []);

  if (loading) {
    return (
      <div className="text-center my-5">
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  return (
    <div className="container my-5">
      <div className="card shadow rounded-4 p-4 bg-white">
        <div className="row align-items-center">
          {/* Profile Image */}
          <div className="col-md-4 text-center mb-4 mb-md-0">
            <div className="position-relative">
              <img
                src={
                  data.cover ||
                  "https://t4.ftcdn.net/jpg/02/44/43/69/360_F_244436923_vkMe10KKKiw5bjhZeRDT05moxWcPpdmb.jpg"
                }
                alt={data.username || "Profile"}
                className="rounded-circle img-fluid mb-3"
                style={{ width: "70%", height: "auto" }}
              />
              <button className="btn btn-primary position-relative overflow-hidden">
                Change Photo
                <input
                  type="file"
                  style={{
                    position: "absolute",
                    left: 0,
                    top: 0,
                    width: "100%",
                    height: "100%",
                    opacity: 0,
                    cursor: "pointer",
                  }}
                />
              </button>
            </div>
          </div>

          {/* Profile Info */}
          <div className="col-md-6">
            <h4 className="mb-3">{data.username || "User Name"}</h4>
            <div className="row mb-2">
              <div className="col-6"><strong>Username</strong></div>
              <div className="col-6">{data.username || "N/A"}</div>
            </div>
            <div className="row mb-2">
              <div className="col-6"><strong>Email</strong></div>
              <div className="col-6">{data.email || "N/A"}</div>
            </div>
            <div className="row mb-2">
              <div className="col-6"><strong>Phone</strong></div>
              <div className="col-6">{data.mobile || "N/A"}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
