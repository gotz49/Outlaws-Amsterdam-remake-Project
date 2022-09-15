import Card from "react-bootstrap/Card";
// import ItemCount from "./ItemCount";
import { Link } from "react-router-dom";
/* ---------------------------- Comienzo del Item --------------------------- */

const Item = ({ id, name, image, price, stock, description }) => {
  return (
    <>
      <Card bg="black" border="dark" style={{ width: "18rem" }}>
        <Card.Img variant="top" src={image} />
        <Card.Body className="productBody">
          <Card.Title className="productTitle">{name}</Card.Title>
          <div className="price">
            <span>USD {price}</span>
            {/* <span>stock: {stock}</span> */}
          </div>
          <Link to={`/item/${id}`} style={{ textDecoration: "none" }}>
            <button className="addBtn"> Details </button>
          </Link>
        </Card.Body>
      </Card>
    </>
  );
};

export default Item;