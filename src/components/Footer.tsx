import React from 'react';

const footerStyle = {
  padding: '3rem',
  backgroundColor: '#172A3A',
  color: '#fff',
  textAlign: 'center' as const,
};

export const Footer: React.FC = () => {
  const currentFullYear = new Date().getFullYear();

  return (
    <footer style={footerStyle}>© 2021-{currentFullYear} Fabian Kresler</footer>
  );
};

export default Footer;
