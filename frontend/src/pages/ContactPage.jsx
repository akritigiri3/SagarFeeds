import PageHero from "../components/PageHero.jsx";

const contactItems = [
  ["Head Office", "Jabdi Marga, Pakali", "Itahari 56705, Koshi, Nepal"],
  ["Phone", "025 582841", "9852025560", "9852048218"],
  ["WhatsApp", "9852025560"],
  ["Business Hours", "Sunday - Friday", "9:00 AM - 5:00 PM"],
];

function ContactPage() {
  return (
    <>
      <PageHero
        title="Contact Us"
        subtitle="Get in touch with us for inquiries, support, or partnership opportunities"
      />

      <section className="page-wrap contact-grid section-pad">
        {contactItems.map(([title, ...lines]) => (
          <article className="hover-card" key={title}>
            <span>+</span>
            <h2>{title}</h2>
            <p>{lines.map((line) => <span key={line}>{line}</span>)}</p>
          </article>
        ))}
      </section>

      <section className="page-wrap contact-form-section section-pad">
        <div className="contact-form-heading">
          <h2>Send Us a Message</h2>
          <p>Fill out the form below and our team will get back to you as soon as possible.</p>
        </div>
        <form className="contact-form hover-card" onSubmit={(event) => event.preventDefault()}>
          <label>
            Full Name
            <input type="text" name="name" placeholder="Enter your name" required />
          </label>
          <label>
            Phone Number
            <input type="tel" name="phone" placeholder="Enter your phone number" required />
          </label>
          <label>
            Email Address
            <input type="email" name="email" placeholder="Enter your email address" />
          </label>
          <label>
            Subject
            <input type="text" name="subject" placeholder="How can we help?" required />
          </label>
          <label className="full-field">
            Message
            <textarea name="message" rows="5" placeholder="Write your message" required />
          </label>
          <button className="button form-button" type="submit">Submit Message</button>
        </form>
      </section>
    </>
  );
}

export default ContactPage;
