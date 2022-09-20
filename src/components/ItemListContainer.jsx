import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import ItemList from "./ItemList";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { firestoreFetch } from "../utils/firebaseConfig";

const ItemListContainer = () => {
	const [products, setProducts] = useState([]);

	const { id } = useParams();

	useEffect(() => {
		firestoreFetch(id).then((res) => setProducts(res));
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
