function StatCard({ value, label }) {
  return (
    <article className="stat-card hover-card">
      <span className="line-icon" aria-hidden="true">/</span>
      <strong>{value}</strong>
      <span>{label}</span>
    </article>
  );
}

export default StatCard;
