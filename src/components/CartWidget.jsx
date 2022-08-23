import CartIcon from "../img/Cart-icon.png";

const CartWidget = () => {
	return (
		<div className="ShoppingCart">
			<img src={CartIcon} alt="CartIcon" className="CartIcon" />
			<h4>1</h4>
		</div>
	);
};

export default CartWidget;
