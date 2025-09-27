import { NavLink } from "react-router-dom";

export default function PolicyView() {
  const policies = [
    {
      id: 1,
      title: "Privacy Policy",
      content:
        "We respect your privacy and are committed to protecting your personal information. We do not share your data with third parties without your consent.",
    },
    {
      id: 2,
      title: "Terms & Conditions",
      content:
        "By using our website, you agree to follow the terms and conditions. Any misuse of our services may result in account suspension or termination.",
    },
    {
      id: 3,
      title: "Refund Policy",
      content:
        "Refunds are available within 7 days of purchase. To request a refund, please contact our support team with your order details.",
    },
  ];

  return (
    <div className="container my-5">
      <h1 className="mb-4 text-center">Our Policies</h1>

      {policies.map((policy) => (
        <div
          key={policy.id}
          className="card mb-3 shadow-sm rounded-4 hover-scale"
          style={{ transition: "transform 0.3s" }}
        >
          <div className="card-header fw-bold bg-primary text-white">
            {policy.title}
          </div>
          <div className="card-body">
            <p className="mb-0">{policy.content}</p>
          </div>
        </div>
      ))}

      <div className="text-center mt-4">
        <NavLink to="/" className="btn btn-primary">
          Back to Home
        </NavLink>
      </div>

      <style>{`
        .hover-scale:hover {
          transform: translateY(-5px);
        }
      `}</style>
    </div>
  );
}
