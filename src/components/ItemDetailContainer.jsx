import { useEffect, useState } from "react";
import GetItem from "./ItemDetail";
import { useParams } from "react-router-dom";
import { firestoreOneFetch } from "../utils/firebaseConfig";

const ItemDetailContainer = () => {
	const [product, setProduct] = useState({});
	const { id } = useParams();

	useEffect(() => {
		firestoreOneFetch(id)
			.then((res) => setProduct(res))
			.catch((err) => console.log(err));
	}, [id]);

	return <GetItem item={product} />;
};

export default ItemDetailContainer;
