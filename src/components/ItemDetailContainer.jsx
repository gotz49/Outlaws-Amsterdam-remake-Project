import CustomFetch from "../utils/CustomFetch";
import { data } from "../utils/data";
import { useEffect, useState } from "react";
import GetItem from "./ItemDetail";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
  const [product, setProduct] = useState({});
  const { id } = useParams();

  useEffect(() => {
    CustomFetch(data.find((item) => item.id === parseInt(id)))
      .then((res) => setProduct(res))
      .catch((err) => console.log(err));
  }, [id]);

  return <GetItem item={product} />;
};

export default ItemDetailContainer;
