import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { api } from "../../../api/api";
import Books from "../Books";

export default function BooksDetails() {
  const [data, setData] = useState(null);
  const { id } = useParams(); // get book ID from route

  useEffect(() => {
    if (id) {
      handleFetch();
    }
  }, [id]);

  const handleFetch = async () => {
    try {
      const response = await api.get(`/books/${id}`);
      setData(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  if (!data) {
    return (
      <div className="text-center mt-5">
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="container mt-5">
        <div className="row">
          {/* Book Images */}
          <div className="col-md-6 mb-4">
            <img
              src={data.cover}
              alt={data.title}
              className="img-fluid rounded mb-3 shadow-sm"
              style={{ maxHeight: "400px", objectFit: "cover", width: "100%" }}
            />
          </div>

          {/* Book Details */}
          <div className="col-md-6">
            <h2 className="fw-bold mb-2">{data.title}</h2>
            <p className="text-muted mb-3">Author: {data.author}</p>

            <div className="mb-3">
              <span className="h4 text-success me-2">${data.price}</span>
              {data.originalPrice && (
                <span className="text-muted">
                  <s>${data.originalPrice}</s>
                </span>
              )}
            </div>

            <div className="mb-3">
              {[...Array(5)].map((_, i) => (
                <i
                  key={i}
                  className={`bi ${i < Math.floor(data.rating)
                      ? "bi-star-fill text-warning"
                      : "bi-star text-muted"
                    }`}
                />
              ))}
              <span className="ms-2">({data.rating} / 5)</span>
            </div>

            <p className="mb-4">{data.description}</p>

            <div className="mb-4">
              <h5>Quantity:</h5>
              <input
                type="number"
                className="form-control"
                defaultValue={1}
                min={1}
                style={{ width: 100 }}
              />
            </div>

            <div className="mb-4">
              <button className="btn btn-primary btn-lg me-2 mb-2">
                <i className="bi bi-cart-plus me-1" /> Add to Cart
              </button>
              <button className="btn btn-outline-secondary btn-lg mb-2">
                <i className="bi bi-heart me-1" /> Add to Wishlist
              </button>
            </div>

            <div className="mt-4">
              <h5>Key Features:</h5>
              <ul>
                {data.features?.map((feature, idx) => (
                  <li key={idx}>{feature}</li>
                ))}
              </ul>
            </div>


          </div>
          {/* Book Summary Video */}
          {data.videoSummary && (
            <div className="mt-5">
              <div className="card shadow-lg border-0 rounded-4 p-3 animate-summary">
                <h4 className="mb-3 text-primary fw-bold d-flex align-items-center">
                  <i className="bi bi-play-circle-fill me-2"></i> Book Summary
                </h4>
                <div className="ratio ratio-16x9">
                  <iframe
                    src={`https://www.youtube.com/embed/${data.videoSummary}`}
                    title={`${data.title} summary`}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="rounded"
                  ></iframe>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Related Books */}
        <div className="mt-5">
          <Books />
        </div>
      </div>
    </>
  );
}
