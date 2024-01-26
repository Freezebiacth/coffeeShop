import React from 'react';
import '../styles/Home.css';

export default function Home() {
  return (
    <>
      <div className="home">
        <div className="headerContainer">
          <h1>
          𝐅𝐫𝐞𝐞𝐳𝐞 𝐂𝐚𝐟𝐞
          </h1>
        </div>
      </div>
      <div className="descriptionContainer">
        <img
          src="https://xbloom.com/cdn/shop/articles/new.png?v=1651787658&width=1100" // add background picture
          alt="Coffee Cup"
        />
        <p className="descriptionText">
          <p>
          Welcome to Freeze Cafe, where every sip is an escape. Nestled in the heart of the city, our cozy coffee haven invites you to unwind and savor the moment. Immerse yourself in the rich aroma of freshly brewed coffee as you enjoy our carefully crafted brews. From classic espresso to indulgent lattes, our menu caters to all tastes. The modern yet welcoming ambiance makes Freeze Cafe the perfect spot for a quick caffeine fix, a catch-up with friends, or a moment of solo reflection. Join us for a delightful blend of community, creativity, and, of course, exceptional coffee at Freeze Cafe – your urban retreat.
          </p>
        </p>
      </div>
    </>
  );
}
