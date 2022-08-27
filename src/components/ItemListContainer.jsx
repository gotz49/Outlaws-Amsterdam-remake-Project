import Item from "./Item";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";

const ItemListContainer = (props) => {
  return (
    <div className="ItemListContainer">
      <Container>
        <Row>
          <Item />
        </Row>
      </Container>
    </div>
  );
};

export default ItemListContainer;
