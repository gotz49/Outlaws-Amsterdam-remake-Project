import React from "react";
import { useCartContext } from "../../context/CartContext";

export default function ItemCart({ product }) {
	const { removeProduct } = useCartContext();
	return (
		<div className="itemCart">
			<img src={product.image} alt={product.name} />
			<div>
				<p>Product: {product.name}</p>
				<p>Quantity: {product.qty}</p>
				<p>Price: USD {product.price}</p>
				<p>TOTAL: USD {product.qty * product.price}</p>
				<button onClick={() => removeProduct(product.id)}>Remove</button>
			</div>
		</div>
	);
}
