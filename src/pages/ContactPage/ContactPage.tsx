import "./ContactPage.css";
import { useForm, ValidationError } from '@formspree/react';

export const ContactPage = () => {
  const [state, handleSubmit] = useForm("mjgqvrvr");
  if (state.succeeded) {
      return     <div className="contact-success">
      <h2>Thank You!</h2>

      <p>
        Your request has been submitted successfully.
        Our team will contact you shortly.
      </p>
    </div>
  }


  return (
    <main className="contact">
      <section className="contact-hero">
        <div className="contact-hero__overlay">
          <div className="container">
            <h1>Contact Us</h1>

            <p>
           <h1>Contact Us</h1>

<p>
  Get in touch for wholesale pricing, bulk orders,
  and delivery of bottled water and water softening
  products across New York.
</p>
            </p>
          </div>
        </div>
      </section>

      <section className="contact-content">
        <div className="container contact-grid">
          <div className="contact-info">
            <h2>Get in Touch</h2>

            <p>
              Our team is ready to help with product
              information, pricing, and distribution
              opportunities.
            </p>

            <div className="contact-item">
              <h3>Email</h3>
              <p>kansupplyny@gmail.com</p>
            </div>

            <div className="contact-item">
              <h3>Phone</h3>
              <p>(646) 298-4288</p>
            </div>

            <div className="contact-item">
              <h3>Location</h3>
              <p>New York</p>
            </div>

            <div className="contact-item">
              <h3>Business Hours</h3>
              <p>Monday – Friday</p>
              <p>8:00 AM – 5:00 PM EST</p>
            </div>
          </div>


      <form
  className="contact-form"
  onSubmit={handleSubmit}
>
  <div className="form-row">
    <input
      type="text"
      name="firstName"
      placeholder="First Name *"
      required
    />


<input
  type="text"
  name="lastName"
  placeholder="Last Name *"
  required
/>


  </div>

<input
 type="text"
 name="company"
 placeholder="Company Name *"
 required
/>

  <div className="form-row">
    <input
      type="email"
      name="email"
      placeholder="Email *"
      required
    />


<input
  type="tel"
  name="phone"
  placeholder="Phone"
/>


  </div>

<ValidationError
 prefix="Email"
 field="email"
 errors={state.errors}
/>

  <div className="form-row">
    <select
      name="productInterest"
      required
      defaultValue=""
    >
      <option value="">
        Product Interest
      </option>

  <option value="Bottled Water">
    Bottled Water
  </option>

  <option value="Bulk Food Products">
    Bulk Food Products
  </option>

  <option value="Both">
    Both
  </option>
</select>

<input
  type="text"
  name="orderVolume"
  placeholder="Estimated Order Volume"
/>

  </div>

  <textarea
    name="message"
    rows={6}
    placeholder="Tell us about your requirements"
    required
  />

  <ValidationError
    prefix="Message"
    field="message"
    errors={state.errors}
  />

  <button
    type="submit"
    disabled={state.submitting}
  >
    {state.submitting
      ? "Sending..."
      : "Request Quote"}
  </button>
</form>


        </div>
      </section>

      <section className="contact-cta">
        <div className="container">
          <h2>Need Wholesale Pricing?</h2>

          <p>
            Our team will review your request and
            respond with product availability,
            freight estimates, and volume pricing.
          </p>
        </div>
      </section>
    </main>
  );
};