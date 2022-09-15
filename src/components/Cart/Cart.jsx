import React from "react";
import { Link } from "react-router-dom";
import { useCartContext } from "../../context/CartContext";
import ItemCart from "./ItemCart";

export default function Cart() {
	const { cart, totalPrice } = useCartContext();

	//return temprano para carrito vacio
	if (cart.length === 0) {
		return (
			<>
				<p>YOUR CART IS EMPTY</p>
				<Link to="/" style={{ textDecoration: "none", color: "#bababa" }}>
					shop our products
				</Link>
			</>
		);
	}

	return (
		<>
			{cart.map((product) => (
				<ItemCart key={product.id} product={product} />
			))}
			<p>TOTAL: {totalPrice()}</p>
		</>
	);
}
