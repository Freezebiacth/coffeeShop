import React from 'react';
import '../styles/News.css';
import ProductCard from '../components/ProductCard';
import colombianImg from "../assets/ColombiaCoffee.webp"
import ethiopianImg from "../assets/EthiopianCoffee.webp"
import frenchImg from "../assets/FrenchCoffee.jpg"

export default function News() {
  return (
    <div className='menu'>
      <h1 className='menuTitle'>DISCOUNT</h1>
      <div className="product-list">
        <ProductCard
          name="Colombian Coffee"
          image={colombianImg}
          price={12.99}
          discountedPrice={9.99}
        />

        <ProductCard
          name="Ethiopian Coffee"
          image={ethiopianImg}
          price={14.99}
          discountedPrice={11.99}
        />

        <ProductCard
          name="French Roast"
          image={frenchImg}
          price={11.99}
          discountedPrice={8.99}
        />
      </div>
    </div>
  )
}