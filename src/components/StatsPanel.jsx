const statItems = [
  { label: 'Total', key: 'total' },
  { label: 'Open', key: 'open' },
  { label: 'In Review', key: 'inReview' },
  { label: 'Resolved', key: 'resolved' },
  { label: 'Critical', key: 'critical' }
];

function StatsPanel({ stats }) {
  return (
    <section className="stats-panel" aria-label="Issue statistics">
      {statItems.map((item) => (
        <div className="stat-card" key={item.key}>
          <span>{item.label}</span>
          <strong>{stats[item.key]}</strong>
        </div>
      ))}
    </section>
  );
}

export default StatsPanel;
