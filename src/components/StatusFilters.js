const StatusFilters = ({ status, onSelect }) => {
  return (
    <div>
      <select onChange={onSelect} value={status} className="filters">
        <option value="All">All</option>
        <option value="Uncompleted">Uncompleted</option>
        <option value="Completed">Completed</option>
      </select>
    </div>
  );
};

export default StatusFilters;

// <div onClick={onSelect} value={status} className="filters">
//   <button value="All">All</button>
//   <button value="Completed">Completed</button>
//   <button value="Uncompleted">Uncompleted</button>
// </div>
