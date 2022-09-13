import React, { useState, useContext }from "react";
const CartContext = React.createContext([]);
export const useCartContext = () => useContext(CartContext);


const CartProvider = ({children}) => {
    const [cart, setCart] = useState([]);

    const addProduct = (item, newQty) => {
            const { qty = 0 } = cart.find(prod => prod.id === item.id) || {};
            const newCart = cart.filter(prod => prod.id !== item.id);
            setCart([...newCart, {...item, qty: qty + newQty}])
        }
        
    console.log('Cart: ', cart);

    const clearCart = () => setCart([]);

    const isInCart = (id) => {
        return cart.find(product => product.id === id) ? true : false;
    }

    const removeProduct = (id) => setCart(cart.filter(product => product.id !== id));


  return (
    <CartContext.Provider value={{
        clearCart,
        isInCart,
        removeProduct,
        addProduct
    }}>
        {children}
    </CartContext.Provider>

  )
}

export default CartProvider;