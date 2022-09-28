import { Link } from "react-router-dom";
import { useCartContext } from "../../context/CartContext";
import {
	doc,
	serverTimestamp,
	collection,
	setDoc,
	updateDoc,
	increment,
} from "firebase/firestore";
import { db } from "../../utils/firebaseConfig";
import ItemCart from "./ItemCart";
import "./ItemCart.css";

export default function Cart() {
	const { cartItems, TotalPrice, DeleteCart } = useCartContext();

	// // CreateOrder function
	const CreateOrder = () => {
		let itemsForDB = cartItems.map((item) => ({
			id: item.id,
			title: item.name,
			price: item.price,
			qty: item.qty,
		}));

		let order = {
			buyer: {
				name: "Alex Turner",
				email: "yellamosalohcin@email.com",
				phone: "50 1231 1234 1234",
			},
			date: serverTimestamp(),
			items: itemsForDB,
			total: TotalPrice,
		};

		// CreateOrder in Firestore
		const CreateOrderInFirestore = async () => {
			const newOrderRef = doc(collection(db, "orders"));
			await setDoc(newOrderRef, order);
			return newOrderRef;
		};

		CreateOrderInFirestore()
			.then((res) => {
				alert("Your order has been created! " + res.id);
				//stock decrement
				cartItems.forEach(async (item) => {
					const itemRef = doc(db, "Products", item.id);
					await updateDoc(itemRef, {
						stock: increment(-item.qty),
					});
				});
				DeleteCart();
			})
			.catch((err) => console.log(err));

	};

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
						<button className="checkoutCart" onClick={CreateOrder}>
							create purchase order
						</button>
					</div>
				</div>
			</section>
		</>
	);
}
