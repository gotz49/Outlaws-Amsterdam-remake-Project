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
import "./CartForm.css"
import "./ItemCart.css";
import { useState } from "react";
import { useForm } from "react-hook-form";

export default function Cart() {
	const { cartItems, TotalPrice, DeleteCart } = useCartContext();
	const {
		register,
		handleSubmit,
		getValues,
		formState: { errors, isValid },
	} = useForm({
		mode: "onChange",
		defaultValues: {
			name: "",
			email: "",
			telephone: "",
		},
	});
	const [buyerData, setBuyerData] = useState({
		name: "",
		email: "",
		telephone: "",
	});

	// CreateOrder function
	const CreateOrder = () => {
		if (isValid) {
			let itemsForDB = cartItems.map((item) => ({
				id: item.id,
				title: item.name,
				price: item.price,
				qty: item.qty,
			}));

			let order = {
				buyer: {
					name: buyerData.name,
					email: buyerData.email,
					phone: buyerData.telephone,
				},
				date: serverTimestamp(),
				items: itemsForDB,
				total: TotalPrice,
			};
			CreateOrderInFirestore(order)
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
		} else {
			alert("please, complete the form before create order");
		}
	};

	// CreateOrder in Firestore
	const CreateOrderInFirestore = async (order) => {
		const newOrderRef = doc(collection(db, "orders"));
		await setDoc(newOrderRef, order);
		return newOrderRef;
	};

	// Contact Form

	//valid form data
	const ValidForm = () => {
		isValid ? (
			alert("correct contact information, continue with your purchase") 
		) : (
			alert("the form data is invalid") 
		);
	};

	const onSubmit = (data) => {
        const formValues = getValues();
		setBuyerData(formValues);
		console.log(buyerData);

	};

	const ContactForm = () => {
		return (
			<form onSubmit={handleSubmit(onSubmit)} className="CartForm">
				<div>
					<label>Name</label>
					<input
						type="text"
						name="name"
						className="FullName"
						placeholder="First and Last"
						{...register("name", {
							required: true,
						})}
					/>
				</div>
				{errors.name?.type === "required" && <p>Name is required</p>}

				<div>
					<label>Email</label>
					<input
						id="email"
						type="email"
						name="email"
						placeholder="example@email.com"
						{...register("email", {
							required: true,
						})}
					/>
				</div>
				{errors.email?.type === "required" && <p>Email is required</p>}

				<div>
					<label>Telephone</label>
					<input
						type="telephone"
						name="telephone"
						id="telephone"
						placeholder="095-555-555"
						{...register("telephone", {
							required: true,
						})}
					/>
				</div>
				{errors.telephone?.type === "required" && <p>Telephone is required</p>}

				<button type="submit" onClick={ValidForm}>
					check correct data
				</button>
			</form>
		);
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
						<div className="TotalContainer">
							<button className="RemoveAll" onClick={DeleteCart}>
								REMOVE ALL
							</button>
							<span className="TotalCart">TOTAL: USD {TotalPrice}</span>
						</div>
						<div className="CartWrapper"></div>
						<ContactForm />
						<div className="CartWrapper"></div>
						<button
							type="submit"
							className="checkoutCart"
							onClick={CreateOrder}
						>
							SEND ORDER
						</button>
					</div>
				</div>
			</section>
		</>
	);
}
