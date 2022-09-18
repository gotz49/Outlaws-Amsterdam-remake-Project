import { useEffect, useState } from "react";
import { useCartContext } from "../../context/CartContext";


export default function ItemCountCart({ product }) {
	const { removeProduct } = useCartContext();
	const [cantidad, setCantidad] = useState(product.qty);

	useEffect(() => {
		product.qty = cantidad;
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [cantidad]);

	function more() {
		if (cantidad !== product.stock) {
			setCantidad(cantidad + 1);
		} else {
			alert(`¡No puedes agregar más de ${product.stock} unidades!`);
		}
	}

	function less() {
		if (cantidad !== 1) {
			setCantidad(cantidad - 1);
		} else {
			alert(`¡No puedes agregar menos de 1 unidad!`);
		}
	}

	return (
		<>
			<div className="CartItemQty">
				{/* en este div agregar lógica para modificar qty desde carrito */}
				<div>
					<button onClick={less}> - </button>
					<span>{cantidad}</span>
					<button onClick={more}> + </button>
				</div>
				<div>
					<button onClick={() => removeProduct(product.id)} className="remove">
						Remove
					</button>
				</div>
			</div>
			<div className="Subtotal">
				<span>USD {cantidad * product.price}</span>
			</div>
		</>
	);
}
