import * as React from 'react';

const cardContainerStyles = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fill, minmax(400px, 1fr))',
  gap: '2rem',
};

export const CardContainer: React.FC = ({ children }) => (
  <div style={cardContainerStyles}>{children}</div>
);

export default CardContainer;
