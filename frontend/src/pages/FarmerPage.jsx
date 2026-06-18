import PageHero from "../components/PageHero.jsx";
import { assets } from "../content.js";

const programs = [
  ["Every 15 Days", "Orientation programs are conducted regularly across different regions to ensure continuous learning and support."],
  ["Expert-Led Sessions", "All programs are led by experienced veterinarians and technical experts with deep industry knowledge."],
  ["Practical Knowledge", "Focus on modern livestock management practices that can be immediately applied on farms."],
];

const benefits = [
  ["Improved Productivity", "Learn techniques to maximize livestock output and farm efficiency."],
  ["Risk Reduction", "Understand how to minimize operational and health risks in livestock farming."],
  ["Modern Practices", "Adopt scientifically proven methods for sustainable farming."],
];

function FarmerPage() {
  return (
    <>
      <PageHero
        title="Farmer Support"
        subtitle="Empowering farmers with knowledge and technical expertise for sustainable livestock management"
      />

      <section className="page-wrap section-pad centered compact-section">
        <h2>Beyond Quality Feed</h2>
        <p>
          We believe that empowering farmers with knowledge is just as important as providing quality feed.
          Our support programs help farmers adopt modern livestock management practices, improve productivity,
          and reduce operational risks.
        </p>
      </section>

      <section className="page-wrap split section-pad support-list">
        <div>
          <h2>Regular Training Programs</h2>
          {programs.map(([title, text]) => (
            <article key={title}>
              <span className="soft-icon">+</span>
              <div>
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
            </article>
          ))}
        </div>
        <img className="rounded-image hover-image" src={assets.farmStory} alt="Farmer support training" />
      </section>

      <section className="dark-band">
        <div className="page-wrap">
          <h2>Program Benefits</h2>
          <p>What farmers gain from our support programs</p>
          <div className="benefit-grid">
            {benefits.map(([title, text]) => (
              <article className="hover-card" key={title}>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="page-wrap section-pad centered subsidy-card hover-card">
        <span className="soft-icon">+</span>
        <h2>Agricultural Subsidies Support</h2>
        <p>
          We assist farmers in understanding and accessing available government subsidies and agricultural
          support programs. Our team provides guidance on application processes, eligibility criteria,
          and documentation requirements.
        </p>
      </section>
    </>
  );
}

export default FarmerPage;
