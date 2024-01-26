import React from 'react';
import '../styles/News.css';
import ProductCard from '../components/ProductCard';
import civetPic from "../assets/civetpic.jpg"
import affogatoPic from "../assets/affogatopic.jpg"
import macchiatoPic from "../assets/macchiatopic.jpg"


export default function News() {
  return (
    <div className='menu'>
      <h1 className='menuTitle'>𝙊𝙪𝙧 𝙎𝙥𝙚𝙘𝙞𝙖𝙡𝙩𝙮</h1>
      <div className="product-list">
        <ProductCard
          name="𝐂𝐢𝐯𝐞𝐭 𝐂𝐨𝐟𝐟𝐞𝐞"
          image={civetPic}
          price={14}
          discountedPrice={11.99}
        />

        <ProductCard
          name="𝐀𝐟𝐟𝐨𝐠𝐚𝐭𝐨"
          image={affogatoPic}
          price={10}
          discountedPrice={8}
        />

        <ProductCard
          name="𝐌𝐚𝐜𝐜𝐡𝐢𝐚𝐭𝐨"
          image={macchiatoPic}
          price={8}
          discountedPrice={6.99}
        />
      </div>
    </div>
  )
}