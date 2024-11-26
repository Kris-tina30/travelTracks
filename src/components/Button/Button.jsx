import React from 'react';
import css from './Button.module.css';

const Button = ({
  text,
  onClick,
  className = css.button,
  extraClass = '',
  ariaLabel = 'button',
}) => {
  return (
    <button
      type="button"
      className={`${className} ${extraClass}`.trim()}
      aria-label={ariaLabel}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;
