// src/App.js
import React from 'react';
import './App.css';
import NavBar from './NavBar';

function App() {
  return (
    <div className="App">
      <NavBar />
      <section id="home">
        <h1>Home</h1>
        <p>Welcome to the home section.</p>
      </section>
      <section id="about">
        <h1>About</h1>
        <p>Welcome to the about section.</p>
      </section>
      <section id="services">
        <h1>Services</h1>
        <p>Welcome to the services section.</p>
      </section>
      <section id="contact">
        <h1>Contact</h1>
        <p>Welcome to the contact section.</p>
      </section>
    </div>
  );
}

export default App;
