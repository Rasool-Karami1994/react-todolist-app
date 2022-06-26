const StatusFilters = ({ status, onSelect }) => {
  return (
    <div onClick={onSelect} value={status} className="filters">
      <button value="All">All</button>
      <button value="Completed">Completed</button>
      <button value="Uncompleted">Uncompleted</button>
    </div>
  );
};

export default StatusFilters;
