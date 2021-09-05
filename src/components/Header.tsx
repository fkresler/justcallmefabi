import React from 'react';
import { Link } from 'gatsby';

const headerStyle = {
  zIndex: 10,
  width: '100%',
  padding: '1rem',
  position: 'sticky' as const,
  top: '0',
  backgroundColor: '#6a0136',
};

const widthWrapper = {
  margin: '0 auto',
  display: 'flex',
  alignItems: 'baseline',
  justifyContent: 'space-between',
  maxWidth: '70rem',
};

const mainNavigationStyle = {
  color: '#fff',
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
  color: '#fff',
  padding: '0.75rem',
};

export const Header: React.FC = () => (
  <header style={headerStyle}>
    <div style={widthWrapper}>
      <Link to="/" style={mainNavigationStyle}>
        Fabian Kresler!
      </Link>
      <ul style={navigationStyle}>
        <li>
          <Link to="/blog" style={navigationLink}>
            Blogging
          </Link>
        </li>
        <li>
          <Link to="/about" style={navigationLink}>
            About
          </Link>
        </li>
        <li>
          <Link to="/contact" style={navigationLink}>
            Contact
          </Link>
        </li>
      </ul>
    </div>
  </header>
);

export default Header;
