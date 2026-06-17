const statItems = [
  { label: 'Total', key: 'total', tone: 'total' },
  { label: 'Open', key: 'open', tone: 'open' },
  { label: 'In Review', key: 'inReview', tone: 'review' },
  { label: 'Resolved', key: 'resolved', tone: 'resolved' },
  { label: 'Critical', key: 'critical', tone: 'critical' }
];

function StatsPanel({ stats }) {
  return (
    <section className="stats-panel" aria-label="Issue statistics">
      {statItems.map((item) => (
        <div className={`stat-card stat-card--${item.tone}`} key={item.key}>
          <span>{item.label}</span>
          <strong>{stats[item.key]}</strong>
        </div>
      ))}
    </section>
  );
}

export default StatsPanel;
