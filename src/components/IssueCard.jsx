import { issueStatuses } from '../interfaces/issueModel.js';

const formatDate = (dateValue) =>
  new Intl.DateTimeFormat('en', {
    month: 'short',
    day: 'numeric',
    year: 'numeric'
  }).format(new Date(dateValue));

function IssueCard({ issue, onEdit, onDelete, onStatusChange }) {
  return (
    <article className="issue-card">
      <div className="issue-card__header">
        <div>
          <span className="type-label">{issue.type}</span>
          <h3>{issue.title}</h3>
        </div>
        <span className={`badge priority-${issue.priority.toLowerCase()}`}>{issue.priority}</span>
      </div>

      <p className="issue-card__description">{issue.description}</p>

      <div className="issue-card__meta">
        <span>Assigned: {issue.assignedTo}</span>
        <span>Created: {formatDate(issue.createdAt)}</span>
        <span>Updated: {formatDate(issue.updatedAt)}</span>
      </div>

      <div className="issue-card__footer">
        <label className="status-select">
          Status
          <select value={issue.status} onChange={(event) => onStatusChange(issue.id, event.target.value)}>
            {issueStatuses.map((status) => (
              <option key={status} value={status}>
                {status}
              </option>
            ))}
          </select>
        </label>
        <span className={`badge status-${issue.status.toLowerCase().replaceAll(' ', '-')}`}>{issue.status}</span>
      </div>

      <div className="card-actions">
        <button className="button button--secondary" type="button" onClick={() => onEdit(issue)}>
          Edit
        </button>
        <button className="button button--danger" type="button" onClick={() => onDelete(issue.id)}>
          Delete
        </button>
      </div>
    </article>
  );
}

export default IssueCard;
