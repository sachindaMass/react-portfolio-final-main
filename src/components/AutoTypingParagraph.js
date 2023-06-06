import React, { useEffect, useState } from 'react';

const AutoTypingParagraph = ({ text, typingSpeed, onFinish }) => {
  const [displayText, setDisplayText] = useState('');
  let charIndex = 0;

  useEffect(() => {
    const typeNextCharacter = () => {
      if (charIndex < text.length) {
        setDisplayText((prevText) => prevText + text[charIndex]);
        charIndex++;
        setTimeout(typeNextCharacter, typingSpeed);
      } else {
        onFinish();
      }
    };

    typeNextCharacter();
  }, [text, typingSpeed, onFinish]);

  return <p>{displayText}</p>;
};

export default AutoTypingParagraph;
