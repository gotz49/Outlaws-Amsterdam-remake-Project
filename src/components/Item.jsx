import Card from "react-bootstrap/Card";
import ItemCount from "./ItemCount";

/* ---------------------------- Comienzo del Item --------------------------- */

const Item = ({ id, name, image, price, stock, description }) => {
  /* -- Alerta al agregar items al carro -- */
  const onAdd = (quantity) => {
    alert("You have selected " + quantity + " items.");
  };

  return (
    <>
      <Card bg="black" border="dark" style={{ width: "18rem" }}>
        <Card.Img variant="top" src={image} />
        <Card.Body className="productBody">
          <Card.Title className="productTitle">{name}</Card.Title>
          {/* <Card.Text className="productDescription">{description}</Card.Text> */}
          <div className="price">
            <span>{price}</span>
            {/* <span>stock: {stock}</span> */}
          </div>
          <ItemCount stock={stock} initial={0} onAdd={onAdd} />
        </Card.Body>
      </Card>
    </>
  );
};

export default Item;
