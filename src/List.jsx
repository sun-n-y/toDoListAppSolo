import SingleItem from './SingleItem';

const List = ({ items, deleteItem }) => {
  return (
    <div className="list">
      {items.map((item) => {
        return <SingleItem item={item} key={item.id} deleteItem={deleteItem} />;
      })}
    </div>
  );
};
export default List;
