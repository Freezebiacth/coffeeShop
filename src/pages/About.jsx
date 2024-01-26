import React from 'react';
import '../styles/About.css';

export default function About() {
  return (
    <div className="about-container">
      <div className="about-content">
        <h1>About the Owner</h1>
        <img
          src="https://ichef.bbci.co.uk/news/1024/branded_news/9634/production/_108125483_mediaitem108125481.jpg" // add PHOTO
          alt="Your Name"
          className="profile-photo"
        />
        <p className='name'>
          Thanat Ratt-ekkaphad
        </p>
        <p className='ID'>65011584</p>
        <div className='text-container'>
          <p>
          Meet Freeze, the charismatic maestro behind Freeze Cafe, a chic and vibrant coffee oasis in the heart of the city. With a keen eye for quality and a passion for crafting the perfect brew, Freeze has transformed the cafe into a haven for coffee enthusiasts and casual sippers alike. At Freeze Cafe, expect a warm welcome, expertly curated coffee blends, and an inviting atmosphere that reflects Freeze's commitment to creating a memorable coffee experience for all.
          </p>
        </div>
      </div>
    </div>
  );
}
