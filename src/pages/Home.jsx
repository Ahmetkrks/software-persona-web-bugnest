import { useEffect, useState } from 'react';
import EmptyState from '../components/EmptyState.jsx';
import FilterBar from '../components/FilterBar.jsx';
import IssueCard from '../components/IssueCard.jsx';
import IssueForm from '../components/IssueForm.jsx';
import StatsPanel from '../components/StatsPanel.jsx';
import { createIssue, emptyIssueForm, sampleIssues } from '../interfaces/issueModel.js';
import { loadIssues, saveIssues } from '../utils/localStorage.js';

const initialFilters = {
  status: 'All',
  type: 'All',
  search: ''
};

function Home() {
  const [issues, setIssues] = useState(() => loadIssues(sampleIssues));
  const [formData, setFormData] = useState(emptyIssueForm);
  const [editingIssueId, setEditingIssueId] = useState(null);
  const [filters, setFilters] = useState(initialFilters);

  useEffect(() => {
    saveIssues(issues);
  }, [issues]);

  const selectedIssue = issues.find((issue) => issue.id === editingIssueId);
  const searchTerm = filters.search.trim().toLowerCase();
  const filteredIssues = issues.filter((issue) => {
    const matchesStatus = filters.status === 'All' || issue.status === filters.status;
    const matchesType = filters.type === 'All' || issue.type === filters.type;
    const matchesSearch =
      !searchTerm ||
      issue.title.toLowerCase().includes(searchTerm) ||
      issue.description.toLowerCase().includes(searchTerm);

    return matchesStatus && matchesType && matchesSearch;
  });
  const stats = {
    total: issues.length,
    open: issues.filter((issue) => issue.status === 'Open').length,
    inReview: issues.filter((issue) => issue.status === 'In Review').length,
    resolved: issues.filter((issue) => issue.status === 'Resolved').length,
    critical: issues.filter((issue) => issue.priority === 'Critical').length
  };
  const resultCountText = `${filteredIssues.length} ${filteredIssues.length === 1 ? 'record' : 'records'}`;

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
        <div className="dashboard__signal" aria-label="Current result count">
          <span>{resultCountText}</span>
          <strong>in view</strong>
        </div>
      </section>

      <section className="control-deck">
        <StatsPanel stats={stats} />
        <FilterBar filters={filters} setFilters={setFilters} onClearFilters={() => setFilters(initialFilters)} />
      </section>

      <section className="dashboard__layout">
        <aside className="compose-panel">
          <IssueForm
            formData={formData}
            setFormData={setFormData}
            onSubmit={handleSubmitIssue}
            onCancel={handleCancelEdit}
            isEditing={Boolean(selectedIssue)}
          />
        </aside>

        <section className="workbench">
          <div className="workbench__header">
            <div>
              <p className="eyebrow">Issue queue</p>
              <h2>Records that need attention</h2>
            </div>
            <span className="workbench__count">{resultCountText}</span>
          </div>

          <div className="issue-list">
            {filteredIssues.length === 0 ? (
              <EmptyState />
            ) : (
              filteredIssues.map((issue) => (
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
      </section>
    </main>
  );
}

export default Home;
