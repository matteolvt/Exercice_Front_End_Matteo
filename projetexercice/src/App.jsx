import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import { ProductCard } from './components/productCard';

export function App() {
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

  console.log(products);
  
  return (
    <div className="product-list">
      {products.map(product => (
        <ProductCard
          key={product.id}
          image={product.image}
          name={product.name}
          description={product.description}
          price={product.price}
        />
      ))}
    </div>
  ); 
}
