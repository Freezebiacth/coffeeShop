import React from 'react';
import '../styles/Navbar.css';

export default function Navbar() {
  return (
    <div className="navbar">
      <div>
        <a className="Active" href="/">Home</a>
        <a href="/news">News</a>
        <a href="/about">About</a>
      </div>
    </div>
  );
}
