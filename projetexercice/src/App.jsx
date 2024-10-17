import { useState } from 'react';
import { ProductCard } from './components/productCard';
import Header from './components/header';
import ShoppingCart from './components/shoppingCart';

export function App() {
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false); 

  const products = [
    {
      id: 1,
      name: "Nike Dunk Low",
      price: 129.99,
      description: "Nike Dunk Low",
      image: "NIKE+DUNK+LOW.png", 
    }, 
    {
      id: 2,
      name: "Nike Air Max Plus",
      price: 189.99,
      description: "Nike Air Max Plus",
      image: "AIR+MAX+PLUS.png",
    },
    {
      id: 3,
      name: "Nike V2K Run",
      price: 119.99,
      description: "Nike V2K Run",
      image: "W+NIKE+V2K+RUN.png",
    },
    {
      id: 4,
      name: "Nike Air Force 1 '07",
      price: 119.99,
      description: "Nike Air Force 1 '07",
      image: "W+AIR+FORCE+1+'07+FLYEASE.png",
    },
  ];

  const addToCart = (product) => {
    setCartItems([...cartItems, product]); 
  };

  const removeFromCart = (id) => {
  
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen); 
  };

  return (
    <div>
      <Header onCartToggle={toggleCart} /> 
      <div className="product-list">
        {products.map(product => (
          <ProductCard
            key={product.id}
            image={product.image}
            name={product.name}
            description={product.description}
            price={product.price}
            addToCart={addToCart} 
          />
        ))}
      </div>
      {isCartOpen && ( 
        <ShoppingCart 
          cartItems={cartItems} 
          clearCart={clearCart} 
          removeFromCart={removeFromCart} 
          onClose={toggleCart} 
        />
      )}
    </div>
  ); 
}

export default App;
