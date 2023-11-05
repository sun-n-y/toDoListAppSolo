const SingleItem = ({ item }) => {
  return (
    <div className="single-item">
      <input type="checkbox" />
      <h4>{item.name}</h4>
      <button type="button" className="btn-delete">
        delete
      </button>
    </div>
  );
};
export default SingleItem;
