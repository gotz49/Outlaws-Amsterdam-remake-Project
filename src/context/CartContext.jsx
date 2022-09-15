import React, { useState, useContext } from "react";
const CartContext = React.createContext([]);
export const useCartContext = () => useContext(CartContext);

const CartProvider = ({ children }) => {
	const [cart, setCart] = useState([]);

	// function para agregar items al carrito
	const addProduct = (item, newQty) => {
		const { qty = 0 } = cart.find((prod) => prod.id === item.id) || {};
		const newCart = cart.filter((prod) => prod.id !== item.id);
		setCart([...newCart, { ...item, qty: qty + newQty }]);
	};

	console.log("Cart: ", cart);

	// functino para limpiar todo el carrito
	const clearCart = () => setCart([]);

	// function para buscar un item en el carrito
	const isInCart = (id) => {
		return cart.find((product) => product.id === id) ? true : false;
	};

	// function para remover un producto del carrito
	const removeProduct = (id) =>
		setCart(cart.filter((product) => product.id !== id));
	// function para saber el costo total del carrito
	const totalPrice = () => {
		return cart.reduce((prev, act) => prev + act.qty * act.price, 0);
	};
	// function para saber cuantos productos hay en el carrito
	const totalProducts = () => {
		cart.reduce((accum, currentProduct) => accum + currentProduct.qty, 0);
	};

	return (
		<CartContext.Provider
			value={{
				clearCart,
				isInCart,
				removeProduct,
				addProduct,
				totalPrice,
				totalProducts,
				cart,
			}}
		>
			{children}
		</CartContext.Provider>
	);
};

export default CartProvider;
