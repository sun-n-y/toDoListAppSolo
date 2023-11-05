const SingleItem = ({ item, deleteItem }) => {
  return (
    <div className="single-item">
      <input type="checkbox" />
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
