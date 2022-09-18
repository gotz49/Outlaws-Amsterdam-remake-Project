import "./ItemCart.css";
import ItemCountCart from "./ItemCountCart";

export default function ItemCart({ product }) {

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
				<ItemCountCart product={product} />
			</div>
		</div>
	);
}
