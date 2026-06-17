function EmptyState({ title = 'No matching issues', message = 'Try adjusting the search or filters.' }) {
  return (
    <div className="empty-state">
      <div className="empty-state__icon" aria-hidden="true">
        BN
      </div>
      <h3>{title}</h3>
      <p>{message}</p>
    </div>
  );
}

export default EmptyState;
