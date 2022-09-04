import ItemCount from "./ItemCount";
import Spinner from "react-bootstrap/Spinner";
/* ------------------- onAdd function alert for Buy button ------------------ */
const onAdd = (quantity) => {
  alert("You have selected " + quantity + " items.");
};

/* ---------------------------- Comienzo del ItemDetail --------------------------- */

const GetItem = ({ item= []}) => {
  console.log(item);
  return (
    <>
      {item.length === 0 
        ? 
        (
          <div className="loading">
            <Spinner animation="border" variant="light" />
          </div>
        ) : ( 
        <div className="detailContainer">
          <div className="detail">
            <img src={item.image} alt="COMPASS OF LIFE - NECKLACE" className="detailImage" />
            <div className="content">
              <h1 className="productTitle">{item.name}</h1>
              <span className="productDescription" >{item.description}</span>
              <div className="price">
                <span>{item.price}</span>
                <span>stock: {item.stock}</span>
              </div>
              <ItemCount stock={item.stock} initial={1} onAdd={onAdd} />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default GetItem;
