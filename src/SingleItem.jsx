const SingleItem = ({ item, deleteItem, checkItem }) => {
  return (
    <div className="single-item">
      <input
        type="checkbox"
        value={item.completed}
        onChange={() => checkItem(item.id)}
      />
      <h4>{item.name}</h4>
      <button
        type="button"
        className="btn-delete"
        onClick={() => deleteItem(item.id)}
      >
        delete
      </button>
    </div>
  );
};
export default SingleItem;
