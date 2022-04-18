import * as React from 'react';
import { InternalLink } from './Link';

const mainNavigationStyle = {
  fontSize: '1.5rem',
  letterSpacing: '-1px',
  marginRight: '2rem',
  textDecoration: 'none',
};

export const MainLogo: React.FC = () => (
  <InternalLink to="/" style={mainNavigationStyle}>
    Fabi
  </InternalLink>
);

export default MainLogo;
