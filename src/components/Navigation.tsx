import * as React from 'react';
import { InternalLink } from './Link';

const navigationStyle = {
  listStyle: 'none',
  display: 'flex',
  justifyContent: 'space-between',
};

const navigationItemStyle = {
  padding: '0 1rem',
};

export const NavigationLink: React.FC<{ to: string }> = ({ to, children }) => (
  <InternalLink to={to}>{children}</InternalLink>
);

export const Navigation: React.FC = () => (
  <ul style={navigationStyle}>
    <li style={navigationItemStyle}>
      <NavigationLink to="/#capabilities">Capabilities</NavigationLink>
    </li>
    <li style={navigationItemStyle}>
      <NavigationLink to="/#projects">Projects</NavigationLink>
    </li>
    <li style={navigationItemStyle}>
      <NavigationLink to="/#contact">Contact</NavigationLink>
    </li>
    <li style={navigationItemStyle}>
      <NavigationLink to="/blog">Blog</NavigationLink>
    </li>
  </ul>
);

export default Navigation;
