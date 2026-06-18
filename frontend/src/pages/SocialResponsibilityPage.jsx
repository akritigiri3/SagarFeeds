import PageHero from "../components/PageHero.jsx";

const commitments = [
  ["Economic Development", "Creating jobs and supporting rural economies through our network."],
  ["Social Welfare", "Active participation in health and community development programs."],
  ["Sustainable Impact", "Long-term commitment to Nepal's agricultural and social development."],
];

function SocialResponsibilityPage() {
  return (
    <>
      <PageHero
        title="Social Responsibility"
        subtitle="Making a positive impact beyond business, committed to community well-being and social development"
      />

      <section className="page-wrap section-pad centered compact-section">
        <span className="large-line-icon">+</span>
        <h2>Beyond Business</h2>
        <p>
          We are committed to giving back to the community and supporting social well-being.
          Our efforts go beyond business as we strive to make a positive social impact throughout Nepal.
        </p>
      </section>

      <section className="dark-band">
        <div className="page-wrap">
          <h2>Our Commitment to Communities</h2>
          <p>We believe in creating shared value - growing our business while contributing positively to society.</p>
          <div className="benefit-grid">
            {commitments.map(([title, text]) => (
              <article className="hover-card" key={title}>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="page-wrap section-pad centered compact-section">
        <h2>Building a Better Tomorrow</h2>
        <p>
          Our social responsibility initiatives are integral to who we are as a company. We continue to
          expand our community engagement efforts, working hand-in-hand with local communities to create
          lasting positive change across Nepal.
        </p>
      </section>
    </>
  );
}

export default SocialResponsibilityPage;
