import * as React from 'react';
import { Link } from 'gatsby';

const linkStyle = {
  color: '#fff',
  textDecoration: 'none',
  lineHeight: '1.6',
};

export const InternalLink: React.FC<React.ComponentProps<typeof Link>> = ({
  style,
  to,
  children,
}) => (
  <Link
    to={to}
    style={{
      ...linkStyle,
      ...style,
    }}
  >
    {children}
  </Link>
);

export default InternalLink;
