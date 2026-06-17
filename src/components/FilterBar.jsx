import { issueStatuses, issueTypes } from '../interfaces/issueModel.js';

function FilterBar({ filters, setFilters, onClearFilters }) {
  const updateFilter = (field, value) => {
    setFilters((currentFilters) => ({ ...currentFilters, [field]: value }));
  };

  return (
    <section className="filter-bar">
      <label className="filter-bar__search">
        <span>Search</span>
        <input
          type="search"
          value={filters.search}
          onChange={(event) => updateFilter('search', event.target.value)}
          placeholder="Search title or description"
        />
      </label>

      <label>
        <span>Status</span>
        <select value={filters.status} onChange={(event) => updateFilter('status', event.target.value)}>
          <option value="All">All statuses</option>
          {issueStatuses.map((status) => (
            <option key={status} value={status}>
              {status}
            </option>
          ))}
        </select>
      </label>

      <label>
        <span>Type</span>
        <select value={filters.type} onChange={(event) => updateFilter('type', event.target.value)}>
          <option value="All">All types</option>
          {issueTypes.map((type) => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </select>
      </label>

      <button className="button button--ghost" type="button" onClick={onClearFilters}>
        Clear Filters
      </button>
    </section>
  );
}

export default FilterBar;
