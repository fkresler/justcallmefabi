import * as React from 'react';

const cardWrapperStyle = {
  display: 'block',
  borderRadius: '0.5rem',
  padding: '2rem',
  backgroundColor: '#172a3a',
  color: '#fff',
};

export const Card: React.FC = ({ children }) => (
  <div style={cardWrapperStyle}>{children}</div>
);

export default Card;
