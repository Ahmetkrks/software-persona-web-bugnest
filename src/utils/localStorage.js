export const STORAGE_KEY = 'bugnest_issues';

export const loadIssues = (fallbackIssues = []) => {
  try {
    const savedIssues = localStorage.getItem(STORAGE_KEY);

    if (!savedIssues) {
      return fallbackIssues;
    }

    const parsedIssues = JSON.parse(savedIssues);
    return Array.isArray(parsedIssues) ? parsedIssues : fallbackIssues;
  } catch {
    return fallbackIssues;
  }
};

export const saveIssues = (issues) => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(issues));
};
