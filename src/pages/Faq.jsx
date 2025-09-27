import { NavLink } from "react-router-dom";

export default function FaqPage() {
  const faqs = [
    {
      id: 1,
      question: "How can I create an account?",
      answer:
        "Click on the 'Sign Up' button on the top-right corner and fill in your details to create a new account.",
    },
    {
      id: 2,
      question: "How do I reset my password?",
      answer:
        "Go to the login page and click 'Forgot Password'. Follow the instructions to reset your password.",
    },
    {
      id: 3,
      question: "Can I return a book after purchase?",
      answer:
        "Yes, you can request a return within 7 days of purchase by contacting our support team.",
    },
    {
      id: 4,
      question: "How do I contact customer support?",
      answer:
        "You can contact us via the 'Contact Us' page or email us at support@example.com.",
    },
  ];

  return (
    <div className="container my-5">
      <h1 className="mb-4 text-center">Frequently Asked Questions</h1>

      <div className="accordion" id="faqAccordion">
        {faqs.map((faq) => (
          <div className="accordion-item shadow-sm mb-2" key={faq.id}>
            <h2 className="accordion-header" id={`heading${faq.id}`}>
              <button
                className="accordion-button collapsed fw-semibold"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target={`#collapse${faq.id}`}
                aria-expanded="false"
                aria-controls={`collapse${faq.id}`}
              >
                {faq.question}
              </button>
            </h2>
            <div
              id={`collapse${faq.id}`}
              className="accordion-collapse collapse"
              aria-labelledby={`heading${faq.id}`}
              data-bs-parent="#faqAccordion"
            >
              <div className="accordion-body">{faq.answer}</div>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-4">
        <NavLink to="/" className="btn btn-primary">
          Back to Home
        </NavLink>
      </div>

      <style>{`
        .accordion-button {
          transition: background-color 0.3s, color 0.3s;
        }
        .accordion-button:hover {
          background-color: #f8f9fa;
        }
        .accordion-item {
          border-radius: 0.5rem;
          overflow: hidden;
        }
      `}</style>
    </div>
  );
}
