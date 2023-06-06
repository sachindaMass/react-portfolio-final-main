import React, { useEffect } from 'react';
import './styles.css';

const RacingTextAnimation = () => {
  useEffect(() => {
    const items = Array.from(
      document.getElementsByClassName('racing-text-item')
    );

    items.forEach((item, index) => {
      const delay = index * 100; // Adjust the delay between each item
      item.style.animationDelay = `${delay}ms`;
    });
  }, []);

  return (
    <ul className="racing-text">
      <li className="racing-text-item">
        <b>Student Success:</b>&nbsp;&nbsp; Meeting student needs by creating an
        educational environment.
      </li>
      <br></br>
      <li className="racing-text-item">
        <b>Excellence:</b>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        &nbsp;&nbsp; Maintaining a high standard of integrity and performance.
      </li>
      <br></br>
      <li className="racing-text-item">
        <b>Collaboration:</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        Seeking input from all sources and respective industries.
      </li>
    </ul>
  );
};

export default RacingTextAnimation;
