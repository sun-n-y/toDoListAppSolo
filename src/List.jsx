import SingleItem from './SingleItem';

const List = ({ items }) => {
  return (
    <div className="list">
      {items.map((item) => {
        return <SingleItem item={item} key={item.id} />;
      })}
    </div>
  );
};
export default List;
