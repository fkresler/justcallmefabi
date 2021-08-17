import React from 'react';

const footerStyle = {
  padding: '5rem',
  backgroundColor: '#172A3A',
  color: '#fff',
  textAlign: 'center' as const,
};

export const Footer: React.FC = () => (
  <footer style={footerStyle}>© 2021 Fabian Kresler</footer>
);

export default Footer;
