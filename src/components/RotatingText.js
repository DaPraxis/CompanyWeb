// src/components/RotatingText.js
import { backgrounds } from 'polished';
import React, { useEffect, useState } from 'react';

const RotatingText = ({ words, interval }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % words.length);
        setFade(true);
      }, 300); // Duration of the fade out
    }, interval);

    return () => clearInterval(timer);
  }, [words, interval]);

  useEffect(() => {
    const styleSheet = document.styleSheets[0];
    const keyframes = `
      @keyframes glow {
        0% {
    textShadow:'-3px 0 black, 0 3px black, 3px 0 black, 0 -3px black, 0 1px 10px green, 0 1px 10px blue, 0 1px 10px indigo, 0 1px 10px teal
        }
        80% {
          text-shadow: -3px 0 black, 0 3px black, 3px 0 black, 0 -3px black, 40px 7px 2px green, 30px 7px 2px blue, 20px 7px 2px indigo, 10px 7px 2px teal;
        }
        100% {
        textShadow:'-3px 0 black, 0 3px black, 3px 0 black, 0 -3px black, 0 1px 10px green, 0 1px 10px blue, 0 1px 10px indigo, 0 1px 10px teal
        }
      }
    `;
    styleSheet.insertRule(keyframes, styleSheet.cssRules.length);
  }, []);

  return (
    <span style={{ ...styles.text, opacity: fade ? 1 : 0 }}>
      {'<\\'+words[currentIndex]+'>'}
    </span>
  );
};

const styles = {
  text: {
    transition: 'opacity 0.5s', // Duration of the fade transition
    animation: 'glow 4s infinite',
    color: 'white', // Ensure the text color contrasts well with the glow
    fontSize:'28px'
  },
};

export default RotatingText;
