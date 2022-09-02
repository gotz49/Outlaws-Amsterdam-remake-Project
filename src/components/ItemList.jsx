import Item from "./Item";

/* ---------------------------- Comienzo del ItemList --------------------------- */
const ItemList = ({ items = [] }) => {
  return (
    <>
      {items.length === 0 
      ? ( <p className="loading"> Loading... </p>) 
      : (
        items.map((item) => (
          <Item
            key={item.id}
            name={item.name}
            image={item.image}
            price={item.price}
            stock={item.stock}
            description={item.description}
          />
        ))
      )}
    </>
  );
};

export default ItemList;
