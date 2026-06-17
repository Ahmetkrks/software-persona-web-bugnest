export const issueFields = [
  'id',
  'title',
  'description',
  'type',
  'priority',
  'status',
  'assignedTo',
  'createdAt',
  'updatedAt'
];

export const issueTypes = ['Bug', 'Feature', 'UI', 'Performance'];

export const issuePriorities = ['Low', 'Medium', 'High', 'Critical'];

export const issueStatuses = ['Open', 'In Review', 'Resolved'];

export const emptyIssueForm = {
  title: '',
  description: '',
  type: 'Bug',
  priority: 'Medium',
  status: 'Open',
  assignedTo: ''
};

export const createIssue = (formData) => {
  const now = new Date().toISOString();

  return {
    id: crypto.randomUUID(),
    title: formData.title.trim(),
    description: formData.description.trim(),
    type: formData.type,
    priority: formData.priority,
    status: formData.status,
    assignedTo: formData.assignedTo.trim() || 'Unassigned',
    createdAt: now,
    updatedAt: now
  };
};

export const sampleIssues = [
  {
    id: 'sample-login-error',
    title: 'Login form returns unclear validation message',
    description: 'Users see a generic error when the password field is empty on submit.',
    type: 'Bug',
    priority: 'High',
    status: 'Open',
    assignedTo: 'Frontend Team',
    createdAt: '2026-06-12T09:20:00.000Z',
    updatedAt: '2026-06-12T09:20:00.000Z'
  },
  {
    id: 'sample-dark-mode',
    title: 'Add dark mode preference',
    description: 'Create a feature request to store and apply a dark theme preference.',
    type: 'Feature',
    priority: 'Medium',
    status: 'In Review',
    assignedTo: 'Product Team',
    createdAt: '2026-06-13T13:45:00.000Z',
    updatedAt: '2026-06-14T08:30:00.000Z'
  },
  {
    id: 'sample-dashboard-speed',
    title: 'Dashboard cards load slowly with long lists',
    description: 'Investigate rendering performance when projects contain many issues.',
    type: 'Performance',
    priority: 'Critical',
    status: 'Resolved',
    assignedTo: 'Ahmet Karakose',
    createdAt: '2026-06-10T11:10:00.000Z',
    updatedAt: '2026-06-15T16:05:00.000Z'
  }
];
