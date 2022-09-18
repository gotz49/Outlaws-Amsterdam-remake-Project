import "./ItemCart.css";
import { useCartContext } from "../../context/CartContext";
import { ToastContainer, toast } from "react-toastify";


export default function ItemCart({ product }) {
	const { DeleteItemCart, AddItemToCart, RemoveItem } = useCartContext();

	const More = (quantity) => {
		if (product.qty === product.stock) {
			toast.error("You can't add a quantity greater than stock", {
				theme: "dark",
				position: "top-center",
				autoClose: 2500,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
				progress: undefined,
			});
		} else {
			AddItemToCart(product, quantity);
		}
	};

	return (
		<div className="CartItem">
			<div className="CartItemList">
				<img src={product.image} alt={product.name} className="CartItemImg" />
				<div className="CartItemInfo">
					<h2>{product.name}</h2>
					<div className="CartItemPriceList">
						<span className="Money">USD {product.price}</span>
					</div>
					<p>Stock: {product.stock}</p>
				</div>
				<div className="CartItemQty">
					{/* en este div agregar lógica para modificar qty desde carrito */}
					<div>
						<button onClick={() => DeleteItemCart(product)}> - </button>
						<span>{product.qty}</span>
						<button onClick={() => More(1)}> + </button>
					</div>
					<div>
						<button onClick={() => RemoveItem(product.id)} className="remove">
							Remove
						</button>
					</div>
				</div>
				<div className="Subtotal">
					<span>USD {product.qty * product.price}</span>
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
	);
}
