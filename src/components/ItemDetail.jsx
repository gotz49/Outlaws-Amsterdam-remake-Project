import ItemCount from "./ItemCount";
import Spinner from "react-bootstrap/Spinner";
import { useState } from "react";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useCartContext } from "../context/CartContext";

/* ---------------------------- Comienzo del ItemDetail --------------------------- */
const GetItem = ({ item }) => {
	const [itemCount, setItemCount] = useState(0);
	const { AddItemToCart } = useCartContext();

	const onAdd = (qty) => {
		toast.success("Agregaste " + qty + " items al carrito", {
			theme: "dark",
			position: "top-center",
			autoClose: 2500,
			hideProgressBar: false,
			closeOnClick: true,
			pauseOnHover: true,
			draggable: true,
			progress: undefined,
		});

		setItemCount(qty);
		AddItemToCart(item, qty, item.stock);
	};

	return (
		<>
			{item.name ? (
				<div className="detailContainer">
					<div className="detail">
						<img
							src={item.image}
							alt="COMPASS OF LIFE - NECKLACE"
							className="detailImage"
						/>
						<div className="content">
							<h1 className="productTitle">{item.name}</h1>
							<span className="productDescription">{item.description}</span>
							<div className="moreDetails">
								<span>{item.material}</span>
								<span>{item.guaranty}</span>
								<span>Weight: {item.weight}</span>
							</div>
							<div className="price">
								<span>USD {item.price}</span>
								<span>stock: {item.stock}</span>
							</div>
							<section className="AddCart">
								{itemCount === 0 ? (
									<ItemCount
										stock={item.stock}
										initial={itemCount}
										onAdd={onAdd}
									/>
								) : (
									<Link
										to="/Cart"
										className="CheckoutBtn"
										style={{ textDecoration: "none" }}
									>
										Checkout
									</Link>
								)}
							</section>
						</div>
					</div>
					<ToastContainer
						position="top-center"
						autoClose={2500}
						hideProgressBar={false}
						newestOnTop={false}
						closeOnClick
						rtl={false}
						pauseOnFocusLoss
						draggable
						pauseOnHover
					/>
				</div>
			) : (
				<div className="loading">
					<Spinner animation="border" variant="warning" />
				</div>
			)}
		</>
	);
};

export default GetItem;
