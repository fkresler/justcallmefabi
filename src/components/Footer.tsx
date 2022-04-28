import React from 'react';
import { Additionals } from './Additionals';

const footerStyle = {
  padding: '3rem',
  textAlign: 'center' as const,
  borderTop: '1px solid var(--border-color)',
  backgroundColor: 'var(--background-dark)',
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
