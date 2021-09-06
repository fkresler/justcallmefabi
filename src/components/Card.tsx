import * as React from 'react';

const cardWrapperStyle = {
  display: 'block',
  borderRadius: '5px',
  padding: '0.5rem',
  backgroundColor: '#6a0136',
};

export const Card: React.FC = ({ children }) => (
  <div style={cardWrapperStyle}>{children}</div>
);

export default Card;
