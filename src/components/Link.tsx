import * as React from 'react';
import { Link } from 'gatsby';
import { IconContext } from 'react-icons';

const linkStyle = {
  color: '#fff',
  textDecoration: 'none',
  lineHeight: '1.6',
};

const iconStyle = {
  color: '#fff',
  size: '2rem',
};

export const InternalLink: React.FC<React.ComponentProps<typeof Link>> = ({
  style,
  to,
  children,
}) => (
  <IconContext.Provider value={iconStyle}>
    <Link
      to={to}
      style={{
        ...linkStyle,
        ...style,
      }}
    >
      {children}
    </Link>
  </IconContext.Provider>
);

export const ExternalLink: React.FC<{
  to: string;
  style?: React.CSSProperties;
}> = ({ to, style, children }) => (
  <IconContext.Provider value={iconStyle}>
    <a href={to} style={style} target="_blank" rel="noreferrer">
      {children}
    </a>
  </IconContext.Provider>
);

export default InternalLink;
