import { NavLink } from "react-router-dom";

export default function PolicyView() {
  // Static policy data
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
      <h1 className="mb-4">Our Policies</h1>
      {policies.map((policy) => (
        <div key={policy.id} className="card mb-3 shadow-sm">
          <div className="card-header fw-bold">{policy.title}</div>
          <div className="card-body">
            <p>{policy.content}</p>
          </div>
        </div>
      ))}

      <NavLink to="/" className="btn btn-primary mt-3">
        Back to Home
      </NavLink>
    </div>
  );
}
