import React from "react";
import { Link } from "react-router-dom";
import { useCartContext } from "../../context/CartContext";
import ItemCart from "./ItemCart";
import "./ItemCart.css";

export default function Cart() {
	const { cartItems, TotalPrice } = useCartContext();

	//return temprano para carrito vacio
	if (cartItems.length === 0) {
		return (
			<section className="CartPageContainer">
				<div className="Empty">
					<h1>YOUR CART IS EMPTY</h1>
					<p>Spend USD100 more and get free shipping!</p>
					<Link to="/" style={{ textDecoration: "none" }}>
						<button>shop our products</button>
					</Link>
				</div>
			</section>
		);
	}

	return (
		<>
			<section className="CartPageContainer">
				<div className="ItemCart">
					<aside className="CartHeader">
						<h1>CART</h1>
						{TotalPrice < 100 ? (
							<p>Spend USD {100 - TotalPrice} more and get free shipping!</p>
						) : (
							<p>Free Shipping!</p>
						)}
					</aside>
					<article className="CartItemListHeaders">
						<span className="TableProd">Product</span>
						<span className="TableHeadItem"></span>
						<span className="TableQty">Quantity</span>
						<span className="TableSubt">Subtotal</span>
					</article>
					<div className="CartWrapper"></div>
					<div>
						{cartItems.map((product) => (
							<ItemCart key={product.id} product={product} />
						))}
						<div className="CartWrapper"></div>
						<p className="TotalCart">TOTAL: USD {TotalPrice}</p>
						<button className="checkoutCart">CHECKOUT</button>
					</div>
				</div>
			</section>
		</>
	);
}
