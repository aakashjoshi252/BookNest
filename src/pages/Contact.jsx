import { useForm, ValidationError } from "@formspree/react";

export default function Contact() {
  const [state, handleSubmit] = useForm("mblzlyqg");

  if (state.succeeded) {
    return (
      <div className="container my-5 text-center">
        <div className="card shadow-lg p-5 border-0 rounded-4">
          <h2 className="text-success mb-3">🎉 Thanks for contacting us!</h2>
          <p className="text-muted">
            We’ll get back to you as soon as possible.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="container my-5">
      <h1 className="mb-4 text-center fw-bold text-primary">Contact Us</h1>
      <form
        onSubmit={handleSubmit}
        className="card shadow-lg p-4 mx-auto border-0 rounded-4"
        style={{ maxWidth: "600px" }}
      >
        {/* Name */}
        <div className="mb-3">
          <label htmlFor="username" className="form-label fw-semibold">
            Name
          </label>
          <input
            id="username"
            type="text"
            name="username"
            className="form-control form-control-lg rounded-3"
            placeholder="Enter your name"
            required
          />
          <ValidationError
            prefix="Name"
            field="username"
            errors={state.errors}
          />
        </div>

        {/* Email */}
        <div className="mb-3">
          <label htmlFor="email" className="form-label fw-semibold">
            Email Address
          </label>
          <input
            id="email"
            type="email"
            name="email"
            className="form-control form-control-lg rounded-3"
            placeholder="Enter your email"
            required
          />
          <ValidationError prefix="Email" field="email" errors={state.errors} />
        </div>

        {/* Message */}
        <div className="mb-3">
          <label htmlFor="message" className="form-label fw-semibold">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            className="form-control rounded-3"
            rows="5"
            placeholder="Write your message..."
            required
          ></textarea>
          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="btn btn-primary w-100 btn-lg rounded-3"
          disabled={state.submitting}
        >
          {state.submitting ? "Sending..." : "Send Message"}
        </button>
      </form>
    </div>
  );
}
