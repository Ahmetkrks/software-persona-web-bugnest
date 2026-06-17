import { issueStatuses, issueTypes } from '../interfaces/issueModel.js';

function FilterBar({ filters, setFilters, onClearFilters, t }) {
  const updateFilter = (field, value) => {
    setFilters((currentFilters) => ({ ...currentFilters, [field]: value }));
  };

  return (
    <section className="filter-bar">
      <label className="filter-bar__search">
        <span>{t.filters.search}</span>
        <input
          type="search"
          value={filters.search}
          onChange={(event) => updateFilter('search', event.target.value)}
          placeholder={t.filters.searchPlaceholder}
        />
      </label>

      <label>
        <span>{t.filters.status}</span>
        <select value={filters.status} onChange={(event) => updateFilter('status', event.target.value)}>
          <option value="All">{t.filters.allStatuses}</option>
          {issueStatuses.map((status) => (
            <option key={status} value={status}>
              {t.options[status]}
            </option>
          ))}
        </select>
      </label>

      <label>
        <span>{t.filters.type}</span>
        <select value={filters.type} onChange={(event) => updateFilter('type', event.target.value)}>
          <option value="All">{t.filters.allTypes}</option>
          {issueTypes.map((type) => (
            <option key={type} value={type}>
              {t.options[type]}
            </option>
          ))}
        </select>
      </label>

      <button className="button button--ghost" type="button" onClick={onClearFilters}>
        {t.filters.clear}
      </button>
    </section>
  );
}

export default FilterBar;
