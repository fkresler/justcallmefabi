import React from 'react';

const footerStyle = {
  padding: '3rem',
  backgroundColor: '#172A3A',
  color: '#fff',
  textAlign: 'center' as const,
};

export const Footer: React.FC = () => (
  <footer style={footerStyle}>© 2021-present Fabian Kresler</footer>
);

export default Footer;
