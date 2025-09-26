import { useState, useEffect } from "react";
import { MdOutlineShoppingCartCheckout } from "react-icons/md";
import { PiTrolleyDuotone } from "react-icons/pi";


export default function Checkout() {
  const [cart, setCart] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
    payment: "cod",
  });

  useEffect(() => {
    const savedCart = localStorage.getItem("cart");
    if (savedCart) setCart(JSON.parse(savedCart));
  }, []);

  const totalPrice = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.address) {
      alert("Please fill all the fields!");
      return;
    }

    const cartDetails = cart.map((item) => ({
      title: item.title,
      author: item.author,
      price: item.price,
      quantity: item.quantity,
      total: item.price * item.quantity,
    }));

    const formPayload = {
      ...formData,
      totalPrice,
      cart: JSON.stringify(cartDetails),
    };

    const form = document.createElement("form");
    form.action = "https://formspree.io/f/mrbybwkp"; 
    form.method = "POST";
    form.style.display = "none";

    Object.keys(formPayload).forEach((key) => {
      const input = document.createElement("input");
      input.name = key;
      input.value = formPayload[key];
      form.appendChild(input);
    });

    document.body.appendChild(form);
    form.submit();

    localStorage.removeItem("cart");
    setCart([]);
    alert("Order submitted successfully!");
  };

  if (cart.length === 0) {
    return (
      <div className="container my-5 text-center">
        <h2 className="mb-4"> <MdOutlineShoppingCartCheckout /> Checkout</h2>
        <p className="fs-5">Your cart is empty <PiTrolleyDuotone /></p>
      </div>
    );
  }

  return (
    <div className="container my-5">
      <h2 className="mb-5 text-center fw-bold"><MdOutlineShoppingCartCheckout /> Checkout</h2>
      <div className="row g-4">
        {/* Cart Summary */}
        <div className="col-lg-6">
          <div className="card shadow-sm p-3 border-0">
            <h4 className="mb-4 text-primary">Order Summary</h4>
            {cart.map((item) => (
              <div
                key={item.id}
                className="d-flex justify-content-between align-items-center mb-3 border-bottom pb-2 hover-shadow rounded p-2"
              >
                <div className="d-flex align-items-center gap-3">
                  <img src={item.cover} alt={item.title} width="60" className="rounded shadow-sm" />
                  <div>
                    <p className="mb-1 fw-bold">{item.title}</p>
                    <small className="text-muted">
                      {item.quantity} x ₹{item.price}
                    </small>
                  </div>
                </div>
                <span className="fw-bold text-success">₹{item.price * item.quantity}</span>
              </div>
            ))}
            <div className="d-flex justify-content-between mt-4 pt-3 border-top">
              <h5>Total</h5>
              <h5 className="text-success fw-bold">₹{totalPrice}</h5>
            </div>
          </div>
        </div>

        {/* Checkout Form */}
        <div className="col-lg-6">
          <div className="card shadow-sm p-4 border-0">
            <h4 className="mb-4 text-primary">Billing Details</h4>
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label className="form-label fw-semibold">Name</label>
                <input type="text" name="name" className="form-control shadow-sm" value={formData.name} onChange={handleChange} placeholder="Full Name" required />
              </div>
              <div className="mb-3">
                <label className="form-label fw-semibold">Email</label>
                <input type="email" name="email" className="form-control shadow-sm" value={formData.email} onChange={handleChange} placeholder="you@example.com" required />
              </div>
              <div className="mb-3">
                <label className="form-label fw-semibold">Address</label>
                <textarea name="address" className="form-control shadow-sm" rows="3" value={formData.address} onChange={handleChange} placeholder="Shipping Address" required ></textarea>
              </div>
              <div className="mb-4">
                <label className="form-label fw-semibold">Payment Method</label>
            <select name="payment" className="form-select shadow-sm" value={formData.payment} onChange={handleChange}>
                  <option value="cod">Cash on Delivery</option>
                  <option value="card">Credit / Debit Card</option>
                  <option value="upi">UPI</option>
                </select>
              </div>
              <button type="submit" className="btn btn-success w-100 fw-bold shadow-sm"> Place Order </button>
            </form>
          </div>
        </div>
      </div>

      <style>{`.hover-shadow:hover { box-shadow: 0 0.5rem 1rem rgba(0,0,0,0.15) !important transition: 0.3s} .card {border-radius: 1rem } h2, h4 { letter-spacing: 0.5px}`}</style>
    </div>
  );
}
