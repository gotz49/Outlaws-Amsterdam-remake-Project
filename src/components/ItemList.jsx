import Item from "./Item";
import Spinner from 'react-bootstrap/Spinner';


/* ---------------------------- Comienzo del ItemList --------------------------- */
const ItemList = ({ items = [] }) => {
  return (
    <>
      {items.length === 0 
        ? ( 
          <div className="loading">
            <Spinner animation="border" variant="light" />
          </div>
        ) 
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
