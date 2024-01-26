import React from 'react';
import '../styles/Home.css';

export default function Home() {
  return (
    <>
      <div className="home">
        <div className="headerContainer">
          <h1>
            SHOP NAME
          </h1>
        </div>
      </div>
      <div className="descriptionContainer">
        <img
          src="https://insanelygoodrecipes.com/wp-content/uploads/2020/07/Cup-Of-Creamy-Coffee-500x375.png" // add background picture
          alt="Coffee Cup"
        />
        <p className="descriptionText">
          <p>
            DESCRIPTION
          </p>
        </p>
      </div>
    </>
  );
}
