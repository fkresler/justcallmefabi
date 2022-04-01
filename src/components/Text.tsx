import * as React from 'react';

const bigTextStyle = {
  position: 'absolute' as const,
  fontSize: 'min(6rem, 15vw)',
  bottom: '1rem',
  left: '-5px',
  textShadow:
    'rgb(16 13 18 / 50%) 0px 0px 30px, rgb(16 13 18 / 50%) 0px 5px 15px, rgb(16 13 18 / 50%) 0px 1px 2px',
};

export const BigText: React.FC = ({ children }) => (
  <div style={bigTextStyle}>{children}</div>
);
