import * as React from 'react';
import { navigate } from 'gatsby';
import { normal, text } from './Button.module.css';

export interface IButton {
  internalTo?: string;
  variant?: 'text' | 'button';
  onClick?: () => void;
}

export const Button: React.FC<IButton> = ({
  internalTo,
  variant = 'button',
  onClick,
  children,
}) => {
  let buttonClassNames = normal;

  if (variant === 'text') {
    buttonClassNames = [normal, text].join(' ');
  }

  const computedOnClick = () => {
    if (onClick) {
      onClick();
    }
    if (internalTo) {
      navigate(internalTo);
    }
  };

  return (
    <button
      type="button"
      className={buttonClassNames}
      onClick={computedOnClick}
    >
      {children}
    </button>
  );
};
