import CartIcon from "../../img/Cart-icon.png";
import { Link } from "react-router-dom";
import { useCartContext } from "../../context/CartContext";

const CartWidget = ({ product }) => {
	const { totalProducts } = useCartContext();
	return (
		<Link to="/Cart" style={{ textDecoration: "none", color: "#bababa" }}>
			<div className="shoppingCart">
				<img src={CartIcon} alt="CartIcon" className="CartIcon" />
				<div>
					{totalProducts() ? (
						<p className="badge">{totalProducts()}</p>
					) : (
						<span></span>
					)}
				</div>
			</div>
		</Link>
	);
};

export default CartWidget;
