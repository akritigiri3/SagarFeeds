import PageHero from "../components/PageHero.jsx";
import StatCard from "../components/StatCard.jsx";
import { achievements, assets } from "../content.js";

function AboutPage() {
  return (
    <>
      <PageHero
        title="About Sagar Feed"
        subtitle="A leading Nepal-based animal nutrition company dedicated to delivering high-quality feed solutions for the livestock and poultry industry."
      />

      <section className="page-wrap split section-pad">
        <div>
          <h2>Our Story</h2>
          <p>
            Established in 2065 B.S., Sagar Feed Pvt. Ltd. has consistently focused on improving
            farm productivity through scientifically balanced nutrition, advanced production systems,
            and farmer-centric support services.
          </p>
          <p>
            With years of experience and deep industry insight, Sagar Feed has grown into a trusted name
            across Nepal through quality, consistency, and innovation.
          </p>
        </div>
        <img className="rounded-image hover-image" src={assets.farmStory} alt="Farmer working with livestock" />
      </section>

      <section className="page-wrap mission-grid section-pad">
        <article className="hover-card">
          <span className="soft-icon">O</span>
          <h3>Our Mission</h3>
          <p>To deliver high-quality, scientifically formulated animal nutrition solutions that enhance livestock productivity and improve farmer livelihoods.</p>
        </article>
        <article className="hover-card">
          <span className="soft-icon">O</span>
          <h3>Our Vision</h3>
          <p>To become one of Nepal's leading and most trusted animal feed companies, recognized for quality, reliability, and meaningful contribution.</p>
        </article>
      </section>

      <section className="page-wrap section-pad centered">
        <h2>Our Achievements</h2>
        <p>Building a strong foundation for Nepal's agricultural future</p>
        <div className="achievement-grid">
          {achievements.map(([value, label]) => <StatCard key={label} value={value} label={label} />)}
        </div>
      </section>

      <section className="info-band">
        <div className="page-wrap">
          <h2>Advanced Production Infrastructure</h2>
          <p>Our robust manufacturing and logistics system ensures consistent quality and timely delivery across all regions.</p>
          <div className="band-stats">
            <span><strong>100 Tons</strong> Daily Production Capacity</span>
            <span><strong>10 +</strong> Transportation Services</span>
            <span><strong>12 +</strong> Transport Vehicles</span>
          </div>
        </div>
      </section>
    </>
  );
}

export default AboutPage;
