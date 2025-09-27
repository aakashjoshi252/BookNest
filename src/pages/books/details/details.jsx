import { useState, useEffect } from "react";
import { useParams,NavLink } from "react-router-dom";
import { api } from "../../../api/api";
import RelatedBooks from "../details/ReletedBooks"; // New component for related books

export default function BooksDetails() {
  const [data, setData] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const { id } = useParams();

  useEffect(() => {
    if (id) fetchBook();
  }, [id]);

  const fetchBook = async () => {
    try {
      const response = await api.get(`/books/${id}`);
      setData(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleAddToCart = () => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const exists = cart.find((item) => item.id === data.id);
    const newCart = exists
      ? cart.map((item) =>
          item.id === data.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        )
      : [...cart, { ...data, quantity }];
    localStorage.setItem("cart", JSON.stringify(newCart));
    alert("Book added to cart!");
  };

  const handleAddToWishlist = () => {
    const wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
    const exists = wishlist.find((item) => item.id === data.id);
    if (!exists) {
      wishlist.push(data);
      localStorage.setItem("wishlist", JSON.stringify(wishlist));
      alert("Book added to wishlist!");
    } else {
      alert("Book is already in your wishlist.");
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
    <div className="container mt-5">
      <div className="row g-4">
        {/* Book Image */}
        <div className="col-lg-5 col-md-6 text-center">
          <img
            src={data.cover}
            alt={data.title}
            className="img-fluid rounded shadow-sm mb-3"
            style={{ maxHeight: "400px", objectFit: "cover", width: "100%" }}
          />
        </div>

        {/* Book Details */}
        <div className="col-lg-7 col-md-6">
          <h2 className="fw-bold mb-2">{data.title}</h2>
          <p className="text-muted mb-3">Author: {data.author}</p>

          <div className="mb-3 d-flex align-items-center gap-2">
            <span className="h4 text-success fw-bold">₹{data.price}</span>
            {data.originalPrice && (
              <span className="text-muted">
                <s>₹{data.originalPrice}</s>
              </span>
            )}
          </div>

          <div className="mb-4">
            {[...Array(5)].map((_, i) => (
              <i
                key={i}
                className={`bi ${
                  i < Math.floor(data.rating)
                    ? "bi-star-fill text-warning"
                    : "bi-star text-muted"
                }`}
              />
            ))}
            <span className="ms-2">({data.rating} / 5)</span>
          </div>

          <p className="mb-4">{data.description}</p>

          {/* Quantity */}
          <div className="mb-4 d-flex align-items-center gap-3">
            <h5 className="mb-0">Quantity:</h5>
            <input
              type="number"
              className="form-control w-auto"
              value={quantity}
              min={1}
              onChange={(e) =>
                setQuantity(Math.max(1, Number(e.target.value)))
              }
            />
          </div>

          {/* Action Buttons */}
          <div className="mb-4 d-flex flex-wrap gap-2">
            <NavLink to={`/books/details/addtocart/${data.id}`} className="bi bi-cart-plus me-1 btn btn-primary btn-lg me-2 mb-2 custom-cart-btn">Add to Cart</NavLink>
              <NavLink to="/addtocart" className="bi bi-heart me-1 btn btn-outline-secondary btn-lg mb-2 custom-wishlist-btn">Add to Wishlist</NavLink>
          </div>

          {/* Key Features */}
          {data.features?.length > 0 && (
            <div className="mt-4">
              <h5>Key Features:</h5>
              <ul className="list-group list-group-flush">
                {data.features.map((feature, idx) => (
                  <li key={idx} className="list-group-item px-0">
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Book Summary Video */}
        {data.videoSummary && (
          <div className="col-12 mt-5">
            <div className="card shadow-lg border-0 rounded-4 p-3">
              <h4 className="mb-3 text-primary fw-bold d-flex align-items-center gap-2">
                <i className="bi bi-play-circle-fill"></i> Book Summary
              </h4>
              <div className="ratio ratio-16x9 rounded">
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
        <RelatedBooks currentBookId={data.id} />
      </div>
    </div>
  );
}


