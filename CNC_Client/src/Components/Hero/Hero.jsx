import React from 'react';
import {homeBg}  from '../../assets';

function Hero() {
  return (
    <div
      style={{
        backgroundImage: `url(${homeBg})`,
        backgroundSize: 'cover',
        height: '100vh',
        width: '100vw',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      
      <h1>Excellence is being carved out.</h1>
    </div>
  );
}

export default Hero;