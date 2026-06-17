import { issuePriorities, issueStatuses, issueTypes } from '../interfaces/issueModel.js';

function IssueForm({ formData, setFormData, onSubmit, onCancel, isEditing }) {
  const updateField = (field, value) => {
    setFormData((currentForm) => ({ ...currentForm, [field]: value }));
  };

  return (
    <form className="issue-form" onSubmit={onSubmit}>
      <div className="section-heading">
        <p className="eyebrow">{isEditing ? 'Edit record' : 'New record'}</p>
        <h2>{isEditing ? 'Update Issue' : 'Add Issue'}</h2>
      </div>

      <label>
        Title
        <input
          type="text"
          value={formData.title}
          onChange={(event) => updateField('title', event.target.value)}
          placeholder="Short issue title"
          required
        />
      </label>

      <label>
        Description
        <textarea
          value={formData.description}
          onChange={(event) => updateField('description', event.target.value)}
          placeholder="What happened, where, and why it matters"
          rows="5"
          required
        />
      </label>

      <div className="form-grid">
        <label>
          Type
          <select value={formData.type} onChange={(event) => updateField('type', event.target.value)}>
            {issueTypes.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </label>

        <label>
          Priority
          <select value={formData.priority} onChange={(event) => updateField('priority', event.target.value)}>
            {issuePriorities.map((priority) => (
              <option key={priority} value={priority}>
                {priority}
              </option>
            ))}
          </select>
        </label>
      </div>

      <div className="form-grid">
        <label>
          Status
          <select value={formData.status} onChange={(event) => updateField('status', event.target.value)}>
            {issueStatuses.map((status) => (
              <option key={status} value={status}>
                {status}
              </option>
            ))}
          </select>
        </label>

        <label>
          Assigned To
          <input
            type="text"
            value={formData.assignedTo}
            onChange={(event) => updateField('assignedTo', event.target.value)}
            placeholder="Team or person"
          />
        </label>
      </div>

      <div className="form-actions">
        <button className="button button--primary" type="submit">
          {isEditing ? 'Update Issue' : 'Add Issue'}
        </button>
        {isEditing && (
          <button className="button button--ghost" type="button" onClick={onCancel}>
            Cancel
          </button>
        )}
      </div>
    </form>
  );
}

export default IssueForm;
