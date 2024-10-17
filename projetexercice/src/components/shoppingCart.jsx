import React from 'react';
import "./css/shoppingCart.css";

const ShoppingCart = ({ cartItems, clearCart, removeFromCart, onClose }) => {

    const total = cartItems.reduce((acc, item) => acc + item.price, 0);

    return (
        <div className="shopping-cart">
            <span className="close-cart" onClick={onClose}>✖</span> 
            <h2>Your Shopping Cart</h2>
            {cartItems.length === 0 ? (
                <p>Your cart is empty.</p>
            ) : (
                <>
                    {cartItems.map((item) => (
                        <div className="cart-item" key={item.id}>
                            <img src={item.image} alt={item.name} />
                            <div>
                                <h3>{item.name}</h3>
                                <p>Price: {item.price}€</p>
                                <button onClick={() => removeFromCart(item.id)}>Remove</button>
                            </div>
                        </div>
                    ))}
                    <h3>Total: {total}€</h3>
                    <button className="clear-cart" onClick={clearCart}>Clear Cart</button>
                </>
            )}
        </div>
    );
};

export default ShoppingCart;
