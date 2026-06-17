import { issueStatuses } from '../interfaces/issueModel.js';

const formatDate = (dateValue) =>
  new Intl.DateTimeFormat('en', {
    month: 'short',
    day: 'numeric',
    year: 'numeric'
  }).format(new Date(dateValue));

function IssueCard({ issue, onEdit, onDelete, onStatusChange, t }) {
  const priorityClass = issue.priority.toLowerCase();

  return (
    <article className={`issue-card issue-card--${priorityClass}`}>
      <div className="issue-card__header">
        <div>
          <span className="type-label">{t.options[issue.type]}</span>
          <h3>{issue.title}</h3>
        </div>
        <span className={`badge priority-${issue.priority.toLowerCase()}`}>{t.options[issue.priority]}</span>
      </div>

      <p className="issue-card__description">{issue.description}</p>

      <div className="issue-card__meta">
        <span>{t.card.assigned}: {issue.assignedTo}</span>
        <span>{t.card.created} {formatDate(issue.createdAt)}</span>
        <span>{t.card.updated} {formatDate(issue.updatedAt)}</span>
      </div>

      <div className="issue-card__footer">
        <label className="status-select">
          {t.card.status}
          <select value={issue.status} onChange={(event) => onStatusChange(issue.id, event.target.value)}>
            {issueStatuses.map((status) => (
              <option key={status} value={status}>
                {t.options[status]}
              </option>
            ))}
          </select>
        </label>
        <span className={`badge status-${issue.status.toLowerCase().replaceAll(' ', '-')}`}>{t.options[issue.status]}</span>
      </div>

      <div className="card-actions">
        <button className="button button--secondary" type="button" onClick={() => onEdit(issue)}>
          {t.card.edit}
        </button>
        <button className="button button--danger" type="button" onClick={() => onDelete(issue.id)}>
          {t.card.delete}
        </button>
      </div>
    </article>
  );
}

export default IssueCard;
