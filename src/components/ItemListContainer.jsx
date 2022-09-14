import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import ItemList from "./ItemList";
import CustomFetch from "../utils/CustomFetch";
import { data } from "../utils/data";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    if (id) {
      CustomFetch(data.filter((item) => item.categoryId === parseInt(id)))
        .then((res) => setProducts(res))
        .catch((err) => console.log(err));
    } else {
      CustomFetch(data)
        .then((res) => setProducts(res))
        .catch((err) => console.log(err));
    }
  }, [id]);

  return (
    <div className="ItemListContainer">
      <Container>
        <Row>
          <ItemList items={products} />
        </Row>
      </Container>
    </div>
  );
};

export default ItemListContainer;
