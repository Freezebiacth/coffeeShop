import React from 'react';
import '../styles/About.css';

export default function About() {
  return (
    <div className="about-container">
      <div className="about-content">
        <h1>About the Owner</h1>
        <img
          src="https://media.istockphoto.com/id/1343278328/photo/professional-asian-chinese-senior-man-barista-connoisseur-performing-coffee-cupping-tasting.jpg?s=612x612&w=0&k=20&c=HxYDQ9muhsy1Ih818MeM-5gRps-PAFhYwRnVO6pfNxM=" // add PHOTO
          alt="Your Name"
          className="profile-photo"
        />
        <p className='name'>
          NAME
        </p>
        <p className='ID'>STUDENT ID</p>
        <div className='text-container'>
          <p>
            DESCRIPTION
          </p>
        </div>
      </div>
    </div>
  );
}
