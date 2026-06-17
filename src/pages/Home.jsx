import { useEffect, useState } from 'react';
import EmptyState from '../components/EmptyState.jsx';
import IssueCard from '../components/IssueCard.jsx';
import IssueForm from '../components/IssueForm.jsx';
import { createIssue, emptyIssueForm, sampleIssues } from '../interfaces/issueModel.js';
import { loadIssues, saveIssues } from '../utils/localStorage.js';

function Home() {
  const [issues, setIssues] = useState(() => loadIssues(sampleIssues));
  const [formData, setFormData] = useState(emptyIssueForm);
  const [editingIssueId, setEditingIssueId] = useState(null);

  useEffect(() => {
    saveIssues(issues);
  }, [issues]);

  const selectedIssue = issues.find((issue) => issue.id === editingIssueId);

  const handleSubmitIssue = (event) => {
    event.preventDefault();

    if (!formData.title.trim() || !formData.description.trim()) {
      return;
    }

    if (editingIssueId) {
      setIssues((currentIssues) =>
        currentIssues.map((issue) =>
          issue.id === editingIssueId
            ? {
                ...issue,
                ...formData,
                title: formData.title.trim(),
                description: formData.description.trim(),
                assignedTo: formData.assignedTo.trim() || 'Unassigned',
                updatedAt: new Date().toISOString()
              }
            : issue
        )
      );
      setEditingIssueId(null);
      setFormData(emptyIssueForm);
      return;
    }

    setIssues((currentIssues) => [createIssue(formData), ...currentIssues]);
    setFormData(emptyIssueForm);
  };

  const handleEditIssue = (issue) => {
    setEditingIssueId(issue.id);
    setFormData({
      title: issue.title,
      description: issue.description,
      type: issue.type,
      priority: issue.priority,
      status: issue.status,
      assignedTo: issue.assignedTo === 'Unassigned' ? '' : issue.assignedTo
    });
  };

  const handleCancelEdit = () => {
    setEditingIssueId(null);
    setFormData(emptyIssueForm);
  };

  const handleDeleteIssue = (issueId) => {
    setIssues((currentIssues) => currentIssues.filter((issue) => issue.id !== issueId));

    if (editingIssueId === issueId) {
      handleCancelEdit();
    }
  };

  const handleStatusChange = (issueId, status) => {
    setIssues((currentIssues) =>
      currentIssues.map((issue) =>
        issue.id === issueId ? { ...issue, status, updatedAt: new Date().toISOString() } : issue
      )
    );
  };

  return (
    <main className="dashboard">
      <section className="dashboard__intro">
        <div>
          <p className="eyebrow">Mini issue tracker</p>
          <h1>Track software feedback without the overhead.</h1>
        </div>
      </section>

      <section className="dashboard__layout">
        <IssueForm
          formData={formData}
          setFormData={setFormData}
          onSubmit={handleSubmitIssue}
          onCancel={handleCancelEdit}
          isEditing={Boolean(selectedIssue)}
        />

        <div className="issue-list">
          {issues.length === 0 ? (
            <EmptyState title="No issues yet" message="Add the first issue to start tracking project work." />
          ) : (
            issues.map((issue) => (
              <IssueCard
                key={issue.id}
                issue={issue}
                onEdit={handleEditIssue}
                onDelete={handleDeleteIssue}
                onStatusChange={handleStatusChange}
              />
            ))
          )}
        </div>
      </section>
    </main>
  );
}

export default Home;
