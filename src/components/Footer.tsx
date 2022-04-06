import React from 'react';
import { Additionals } from './Additionals';

const footerStyle = {
  padding: '3rem',
  backgroundColor: '#172A3A',
  color: '#fff',
  textAlign: 'center' as const,
};

export const Footer: React.FC = () => {
  const currentFullYear = new Date().getFullYear();

  return (
    <footer style={footerStyle}>
      <Additionals layout="flex-end" />
      <div>© 2021-{currentFullYear} Fabian Kresler</div>
    </footer>
  );
};

export default Footer;
