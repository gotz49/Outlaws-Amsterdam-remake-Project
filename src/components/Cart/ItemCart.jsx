import React from "react";
import { useCartContext } from "../../context/CartContext";
import "./ItemCart.css";
import { useEffect, useState } from "react";

export default function ItemCart({ product }) {
	const { removeProduct } = useCartContext();
	let qtyCart = product.qty
	const [qtyItem, setQtyItem] = useState(0);

	useEffect(() => {
		setQtyItem(qtyCart);
	}, [qtyCart]);

  const qtyItemUp = () => {
		if (qtyItem < qtyCart) {
			setQtyItem(qtyItem + 1);
		}
	};


	return (
		<div className="CartItem">
			<div className="CartItemList">
				<img src={product.image} alt={product.name} className="CartItemImg" />
				<div className="CartItemInfo">
					<h2 className="CartItemName">{product.name}</h2>
					<div className="CartItemPriceList">
						<span className="Money">USD {product.price}</span>
					</div>
				</div>

				<div className="CartItemQty">
					{/* en este div agregar lógica para modificar qty desde carrito */}
					<div>
						<button onClick={(qtyItemUp())}> - </button>
						<span>{product.qty}</span>
						<button> + </button>
					</div>
					<div>
						<button
							onClick={() => removeProduct(product.id)}
							className="remove"
						>
							Remove
						</button>
					</div>
				</div>
				<div className="Subtotal">
					<span>USD {product.qty * product.price}</span>
				</div>
			</div>
		</div>
	);
}
