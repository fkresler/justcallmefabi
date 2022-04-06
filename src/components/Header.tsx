import React from 'react';
import { InternalLink } from './Link';

const headerStyle = {
  zIndex: 10,
  width: '100%',
  padding: '1rem',
  position: 'sticky' as const,
  top: '0',
  backgroundColor: 'rgba(106, 1, 54, 0.8)',
  backdropFilter: 'blur(10px)',
};

const widthWrapper = {
  margin: '0 auto',
  display: 'flex',
  alignItems: 'baseline',
  justifyContent: 'space-between',
  maxWidth: '70rem',
};

const mainNavigationStyle = {
  fontSize: '1.5rem',
  letterSpacing: '-1px',
  marginRight: '2rem',
  textDecoration: 'none',
};

const navigationStyle = {
  listStyle: 'none',
  display: 'flex',
  justifyContent: 'space-between',
};

const navigationLink = {
  padding: '0.75rem 1.75rem',
};

const HeaderLink: React.FC<{ to: string }> = ({ to, children }) => (
  <InternalLink to={to} style={navigationLink}>
    {children}
  </InternalLink>
);

export const Header: React.FC = () => (
  <header style={headerStyle}>
    <div style={widthWrapper}>
      <InternalLink to="/" style={mainNavigationStyle}>
        Hey Fabi!
      </InternalLink>
      <ul style={navigationStyle}>
        <li>
          <HeaderLink to="/projects">Projects</HeaderLink>
        </li>
        <li>
          <HeaderLink to="/about">About</HeaderLink>
        </li>
        <li>
          <HeaderLink to="/contact">Contact</HeaderLink>
        </li>
      </ul>
    </div>
  </header>
);

export default Header;
