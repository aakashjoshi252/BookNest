import { useForm, ValidationError } from "@formspree/react";

export default function Contact() {
  const [state, handleSubmit] = useForm("mblzlyqg");

  if (state.succeeded) {
    return (
      <div className="container my-5 text-center">
        <h2 className="text-success"> Thanks for contacting us!</h2>
        <p>We’ll get back to you shortly.</p>
      </div>
    );
  }

  return (
    <div className="container my-5">
      <h1 className="mb-4 text-center">Contact Us</h1>
      <form onSubmit={handleSubmit} className="card shadow p-4 mx-auto" style={{maxWidth: "600px"}}>
        {/* username */}
        <div className="mb-3">
          <label htmlFor="username" className="form-label fw-bold">
            Name 
          </label>
          <input
            id="username"
            type="username"
            name="username"
            className="form-control"
            placeholder="Enter your username"
            required
          />
          <ValidationError prefix="username" field="username" errors={state.errors} />
        </div>
        
        {/* Email */}
        <div className="mb-3">
          <label htmlFor="email" className="form-label fw-bold">
            Email Address
          </label>
          <input
            id="email"
            type="email"
            name="email"
            className="form-control"
            placeholder="Enter your email"
            required
          />
          <ValidationError prefix="Email" field="email" errors={state.errors} />
        </div>

        {/* Message */}
        <div className="mb-3">
          <label htmlFor="message" className="form-label fw-bold">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            className="form-control"
            rows="5"
            placeholder="Write your message..."
            required
          ></textarea>
          <ValidationError prefix="Message" field="message" errors={state.errors} />
        </div>

        {/* Submit button */}
        <button
          type="submit"
          className="btn btn-primary w-100"
          disabled={state.submitting}
        >
          {state.submitting ? "Sending..." : "Send Message"}
        </button>
      </form>
    </div>
  );
}
