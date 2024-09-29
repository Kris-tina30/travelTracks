import React from 'react';
import css from './Button.module.css'; // Імпортуйте ваші стилі

const Button = ({ text, onClick, className = css.buttonRed, ariaLabel = 'button' }) => {
  return (
    <button type="button" className={className} aria-label={ariaLabel} onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
