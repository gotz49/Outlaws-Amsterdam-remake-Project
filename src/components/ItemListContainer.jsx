import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import ItemList from "./ItemList"
import CustomFetch from "../utils/CustomFetch";
import { data } from "../utils/data"
import { useEffect, useState } from "react";

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    CustomFetch(data)
      .then(res => setProducts(res))
      .catch(err => console.log(err))
  }, []);



  return (
    <div>
      <Container>
        <Row>
          
          <ItemList items={products}/>

        </Row>
      </Container>
    </div>
  );
};

export default ItemListContainer;
