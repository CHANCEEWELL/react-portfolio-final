import React from 'react';
import '../App.css';
// import { Button } from './Button';
import './HeroSection.css';
import './images/profile.jpeg/'
function HeroSection() {
  return (
    <div className='hero-container'>
    <embed type="image/jpg" src="profile.jpeg" width="300" height="200"></embed>
      <p>My name is <strong>Chance Ewell</strong>.</p>
      <br></br>
      <p> I'm currently doing a bootcamp through the University of Utah to become a full stack web developer. Throughout my studies, I've been learning HTML, CSS, JavaScript, Node.js, MongDB, React.js and many other languages. </p>
    </div>
  );
}

export default HeroSection;
