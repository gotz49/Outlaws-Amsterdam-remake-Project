import { useEffect, useState } from "react";
import { ItemList } from "./ItemList";
import Promesa from "../utils/promesa";
import Card from "react-bootstrap/Card";
import ItemCount from "./ItemCount";


/* ------------------- onAdd function alert for Buy button ------------------ */
const onAdd= (quantity) => {
	alert('Agregaste ' + quantity + ' elementos.')
}



/* ---------------------------- Comienzo del Item --------------------------- */
const Item = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    Promesa(ItemList)
      .then((result) => setProducts(result))
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      {products.map((item) => (

          <Card bg="dark" border="dark" style={{ width: "18rem" }}>
          <Card.Img variant="top" src={item.image} />
          <Card.Body className="productBody">
            <Card.Title className="productTitle">{item.name}</Card.Title>
            {/* <Card.Text className="productDescription">{item.description}</Card.Text> */}
            <div className="price">
              <span>{item.price}</span>
              {/* <span>stock: {item.stock}</span> */}
            </div>
            <ItemCount stock={item.stock} initial={0} onAdd={onAdd}/>
          </Card.Body>
        </Card>
        
      ))}
    </>
  );
};

export default Item;
