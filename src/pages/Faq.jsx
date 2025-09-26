import { NavLink } from "react-router-dom";

export default function FaqPage() {
  // Static FAQ data
  const faqs = [
    {
      id: 1,
      question: "How can I create an account?",
      answer: "Click on the 'Sign Up' button on the top-right corner and fill in your details to create a new account.",
    },
    {
      id: 2,
      question: "How do I reset my password?",
      answer: "Go to the login page and click 'Forgot Password'. Follow the instructions to reset your password.",
    },
    {
      id: 3,
      question: "Can I return a book after purchase?",
      answer: "Yes, you can request a return within 7 days of purchase by contacting our support team.",
    },
    {
      id: 4,
      question: "How do I contact customer support?",
      answer: "You can contact us via the 'Contact Us' page or email us at support@example.com.",
    },
  ];

  return (
    <div className="container my-5">
      <h1 className="mb-4">Frequently Asked Questions</h1>

      <div className="accordion" id="faqAccordion">
        {faqs.map((faq) => (
          <div className="accordion-item" key={faq.id}>
            <h2 className="accordion-header" id={`heading${faq.id}`}>
              <button
                className="accordion-button collapsed"
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

      <NavLink to="/" className="btn btn-primary mt-4">
        Back to Home
      </NavLink>
    </div>
  );
}
