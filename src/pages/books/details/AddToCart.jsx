import { useState, useEffect } from "react";
import { useParams, NavLink } from "react-router-dom";
import { api } from "../../../api/api";
import { TbTrolley } from "react-icons/tb";
import { VscEmptyWindow } from "react-icons/vsc";

export default function AddToCart() {
  const [data, setData] = useState(null);
  const [cart, setCart] = useState([]);
  const { id } = useParams();

  // Load cart from localStorage
  useEffect(() => {
    const savedCart = localStorage.getItem("cart");
    if (savedCart) setCart(JSON.parse(savedCart));
  }, []);

  useEffect(() => {
    if (id) handleFetch();
  }, [id]);

  const handleFetch = async () => {
    try {
      const response = await api.get(`/books/${id}`);
      setData(response.data);

      setCart((prev) => {
        const exists = prev.find((item) => item.id === response.data.id);
        if (exists) return prev;
        const newCart = [...prev, { ...response.data, quantity: 1 }];
        localStorage.setItem("cart", JSON.stringify(newCart));
        return newCart;
      });
    } catch (error) {
      console.error(error);
    }
  };

  const handleQuantityChange = (id, action) => {
    const updatedCart = cart.map((item) =>
      item.id === id
        ? {
            ...item,
            quantity:
              action === "inc"
                ? item.quantity + 1
                : item.quantity > 1
                ? item.quantity - 1
                : 1,
          }
        : item
    );
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const handleRemove = (id) => {
    const updatedCart = cart.filter((item) => item.id !== id);
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const totalPrice = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

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
    <div className="container my-5">
      <h2 className="mb-4 text-center"><TbTrolley /> Your Cart</h2>

      {cart.length > 0 ? (
        <>
          <div className="row g-3">
            {cart.map((item) => (
              <div className="col-md-6" key={item.id}>
                <div className="card shadow-sm h-100 hover-shadow border-0">
                  <div className="row g-0 align-items-center">
                    <div className="col-4">
                      <img src={item.cover} alt={item.title} className="img-fluid rounded-start p-2" style={{ maxHeight: "150px", objectFit: "cover" }}/>
                    </div>
                    <div className="col-8">
                      <div className="card-body">
                        <h5 className="card-title fw-bold">{item.title}</h5>
                        <p className="card-text text-muted mb-2">By {item.author}</p>
                        <p className="card-text mb-2">
                          <span className="text-success fw-bold">₹{item.price}</span>{" "}
                          <small className="text-muted">x {item.quantity}</small>
                        </p>
                        <div className="d-flex align-items-center mb-2 gap-2">
                          <button className="btn btn-outline-secondary btn-sm" onClick={() => handleQuantityChange(item.id, "dec")}>-</button>
                          <span className="fw-bold">{item.quantity}</span>
                          <button className="btn btn-outline-secondary btn-sm" onClick={() => handleQuantityChange(item.id, "inc")}>+</button>
                        </div>
                        <div className="d-flex justify-content-between align-items-center mt-2">
                          <strong>Total: ₹{item.price * item.quantity}</strong>
                          <button className="btn btn-danger btn-sm" onClick={() => handleRemove(item.id)}>Remove</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="d-flex justify-content-between align-items-center mt-4 p-3 border rounded shadow-sm bg-light">
            <h4>Total: ₹{totalPrice}</h4>
            <NavLink to="/books/details/addtocart/checkout" className="btn btn-success btn-lg"> Proceed to Checkout </NavLink>
          </div>
        </>) : ( <p className="text-center fs-5 mt-5">
  Your cart is empty{<NavLink to="/" className="text-decoration-none"><VscEmptyWindow size={24} className="ms-2" /></NavLink>}
</p> )}
    </div>
  );
}
