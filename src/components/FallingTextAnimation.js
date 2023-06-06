import React, { useEffect } from 'react';
import './styles.css';

const FallingTextAnimation = () => {
  useEffect(() => {
    const text = "RIE is driven to provide excellent educational opportunities that are responsive to the needs of our students and empower them to meet and exceed challenges as active participants in shaping the future of our world.";
    const letters = text.split('');

    letters.forEach((letter, index) => {
      const delay = index * 100; // Adjust the delay between each letter
      const span = document.createElement('span');
      span.innerHTML = letter;
      span.style.animationDelay = `${delay}ms`;
      document.getElementById('fallingText').appendChild(span);
    });
  }, []);

  return (
    <p id="fallingText" className="falling-text"></p>
  );
};

export default FallingTextAnimation;
