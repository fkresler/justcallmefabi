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

export const ExternalLink: React.FC<{
  to: string;
  style?: React.CSSProperties;
}> = ({ to, style, children }) => (
  <a href={to} style={style} target="_blank" rel="noreferrer">
    {children}
  </a>
);

export default InternalLink;
