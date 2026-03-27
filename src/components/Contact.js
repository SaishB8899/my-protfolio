import { useEffect, useState } from "react";

const initialForm = {
  name: "",
  email: "",
  message: ""
};

function Contact() {
  const [formData, setFormData] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") {
      return undefined;
    }

    if (!isSubmitted) {
      return undefined;
    }

    const timer = window.setTimeout(() => {
      setIsSubmitted(false);
    }, 4000);

    return () => window.clearTimeout(timer);
  }, [isSubmitted]);

  const validate = () => {
    const nextErrors = {};

    if (!formData.name.trim()) {
      nextErrors.name = "Please enter your name.";
    }

    if (!formData.email.trim()) {
      nextErrors.email = "Please enter your email.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      nextErrors.email = "Please enter a valid email address.";
    }

    if (!formData.message.trim()) {
      nextErrors.message = "Please enter your message.";
    } else if (formData.message.trim().length < 10) {
      nextErrors.message = "Message should be at least 10 characters.";
    }

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((current) => ({
      ...current,
      [name]: value
    }));

    setErrors((current) => ({
      ...current,
      [name]: ""
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!validate()) {
      return;
    }

    setIsSubmitted(true);
    setFormData(initialForm);
  };

  return (
    <section className="section" id="contact">
      <div className="container">
        <div className="section-heading" data-reveal style={{ "--delay": "0.05s" }}>
          <p className="section-tag">Contact</p>
          <h2>Open to opportunities where I can learn, contribute, and grow as a Java Developer.</h2>
        </div>

        <div className="contact-layout">
          <article className="contact-panel glass-panel" data-reveal style={{ "--delay": "0.12s" }}>
            <h3>Let&apos;s work together</h3>
            <p>
              I am actively looking for entry-level roles, internships, and opportunities that align with
              Java development, software support, and web technology.
            </p>

            <div className="contact-highlights">
              <span>Backend development</span>
              <span>Problem solving</span>
              <span>Team collaboration</span>
            </div>
          </article>

          <form
            className="contact-form glass-panel"
            onSubmit={handleSubmit}
            noValidate
            data-reveal
            style={{ "--delay": "0.2s" }}
          >
            <label htmlFor="name">Name</label>
            <input
              id="name"
              name="name"
              type="text"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your name"
              autoComplete="name"
              aria-invalid={Boolean(errors.name)}
              aria-describedby={errors.name ? "name-error" : undefined}
            />
            {errors.name ? (
              <span className="form-error" id="name-error">
                {errors.name}
              </span>
            ) : null}

            <label htmlFor="email">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="your@email.com"
              autoComplete="email"
              aria-invalid={Boolean(errors.email)}
              aria-describedby={errors.email ? "email-error" : undefined}
            />
            {errors.email ? (
              <span className="form-error" id="email-error">
                {errors.email}
              </span>
            ) : null}

            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              placeholder="Tell me about the opportunity or project"
              aria-invalid={Boolean(errors.message)}
              aria-describedby={errors.message ? "message-error" : undefined}
            />
            {errors.message ? (
              <span className="form-error" id="message-error">
                {errors.message}
              </span>
            ) : null}

            <button className="button button-primary" type="submit">
              Send Message
            </button>

            {isSubmitted ? (
              <p className="form-success">Thank you. Your message has been recorded successfully.</p>
            ) : null}
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
