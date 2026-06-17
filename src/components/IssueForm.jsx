import { issuePriorities, issueStatuses, issueTypes } from '../interfaces/issueModel.js';

function IssueForm({ formData, setFormData, onSubmit, onCancel, isEditing, t }) {
  const updateField = (field, value) => {
    setFormData((currentForm) => ({ ...currentForm, [field]: value }));
  };

  return (
    <form className="issue-form" onSubmit={onSubmit}>
      <div className="section-heading">
        <span className="section-heading__mark">{isEditing ? 'UP' : 'IN'}</span>
        <div>
          <p className="eyebrow">{isEditing ? t.form.editEyebrow : t.form.newEyebrow}</p>
          <h2>{isEditing ? t.form.updateTitle : t.form.addTitle}</h2>
        </div>
      </div>

      <label>
        {t.form.title}
        <input
          type="text"
          value={formData.title}
          onChange={(event) => updateField('title', event.target.value)}
          placeholder={t.form.titlePlaceholder}
          required
        />
      </label>

      <label>
        {t.form.description}
        <textarea
          value={formData.description}
          onChange={(event) => updateField('description', event.target.value)}
          placeholder={t.form.descriptionPlaceholder}
          rows="5"
          required
        />
      </label>

      <div className="form-grid">
        <label>
          {t.form.type}
          <select value={formData.type} onChange={(event) => updateField('type', event.target.value)}>
            {issueTypes.map((type) => (
              <option key={type} value={type}>
                {t.options[type]}
              </option>
            ))}
          </select>
        </label>

        <label>
          {t.form.priority}
          <select value={formData.priority} onChange={(event) => updateField('priority', event.target.value)}>
            {issuePriorities.map((priority) => (
              <option key={priority} value={priority}>
                {t.options[priority]}
              </option>
            ))}
          </select>
        </label>
      </div>

      <div className="form-grid">
        <label>
          {t.form.status}
          <select value={formData.status} onChange={(event) => updateField('status', event.target.value)}>
            {issueStatuses.map((status) => (
              <option key={status} value={status}>
                {t.options[status]}
              </option>
            ))}
          </select>
        </label>

        <label>
          {t.form.assignedTo}
          <input
            type="text"
            value={formData.assignedTo}
            onChange={(event) => updateField('assignedTo', event.target.value)}
            placeholder={t.form.assignedPlaceholder}
          />
        </label>
      </div>

      <div className="form-actions">
        <button className="button button--primary" type="submit">
          {isEditing ? t.form.updateTitle : t.form.addTitle}
        </button>
        {isEditing && (
          <button className="button button--ghost" type="button" onClick={onCancel}>
            {t.common.cancel}
          </button>
        )}
      </div>
    </form>
  );
}

export default IssueForm;
