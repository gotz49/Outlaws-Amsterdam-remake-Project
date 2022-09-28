import React, { useState, useContext, useEffect } from "react";
const CartContext = React.createContext([]);
export const useCartContext = () => useContext(CartContext);

const CartProvider = ({ children }) => {
	const [productsLength, setProductsLength] = useState(0);
	const [cartItems, setCartItems] = useState(() => {
		try {
			const ProductsLocalStorage = localStorage.getItem("CartProducts");
			return ProductsLocalStorage ? JSON.parse(ProductsLocalStorage) : [];
		} catch (error) {
			return [];
		}
	});

	useEffect(() => {
		localStorage.setItem("CartProducts", JSON.stringify(cartItems));
		setProductsLength(
			cartItems.reduce((prev, current) => prev + current.qty, 0)
		);
	}, [cartItems]);

	//funcion para agregar item al carrito
	const AddItemToCart = (product, qty) => {
		const inCart = cartItems.find(
			(productInCart) => productInCart.id === product.id
		);
		if (inCart) {
			setCartItems(
				cartItems.map((productInCart) => {
					if (productInCart.id === product.id) {
						return { ...inCart, qty: inCart.qty + qty };
					} else {
						return productInCart;
					}
				})
			);
		} else {
			setCartItems([...cartItems, { ...product, qty }]);
		}
	};

	// funcion para quitar item del carrito de a 1 cantidad
	const DeleteItemCart = (product) => {
		const inCart = cartItems.find(
			(productInCart) => productInCart.id === product.id
		);

		if (inCart.qty === 1) {
			setCartItems(
				cartItems.filter((productInCart) => productInCart.id !== product.id)
			);
		} else {
			setCartItems(
				cartItems.map((productInCart) => {
					if (productInCart.id === product.id) {
						return { ...inCart, qty: inCart.qty - 1 };
					} else {
						return productInCart;
					}
				})
			);
		}
	};

	// Cantida de productos en el carrito
	const TotalProductsInCart = productsLength;

	// Precio total del carrito
	const TotalPrice = cartItems.reduce(
		(prev, current) => prev + current.qty * current.price,
		0
	);

	const RemoveItem = (itemID) => {
		setCartItems(cartItems.filter((item) => item.id !== itemID));
	};

	const DeleteCart = () => {
		setCartItems([]);
	};

	return (
		<CartContext.Provider
			value={{
				cartItems,
				AddItemToCart,
				DeleteItemCart,
				TotalProductsInCart,
				TotalPrice,
				RemoveItem,
				DeleteCart,
			}}
		>
			{children}
		</CartContext.Provider>
	);
};

export default CartProvider;
