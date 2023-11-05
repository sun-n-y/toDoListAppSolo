import SingleItem from './SingleItem';

const List = ({ items, deleteItem, checkItem }) => {
  return (
    <div className="list">
      {items.map((item) => {
        return (
          <SingleItem
            item={item}
            key={item.id}
            deleteItem={deleteItem}
            checkItem={checkItem}
          />
        );
      })}
    </div>
  );
};
export default List;
