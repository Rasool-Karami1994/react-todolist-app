const StatusFilters = ({ status, onSelect }) => {
  return (
    <div onClick={onSelect} value={status} className="filters">
      <button
        className={status === "All" ? "active-filter" : "filters-button"}
        value="All"
      >
        All
      </button>
      <button
        className={status === "Completed" ? "active-filter" : "filters-button"}
        value="Completed"
      >
        Completed
      </button>
      <button
        className={
          status === "Uncompleted" ? "active-filter" : "filters-button"
        }
        value="Uncompleted"
      >
        Uncompleted
      </button>
    </div>
  );
};

export default StatusFilters;
