import React from 'react';
import { MainLogo } from './MainLogo';
import { ThemeSelect } from './ThemeSelect';
import { Navigation } from './Navigation';

const headerStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  zIndex: 10,
  height: 'var(--headersize)',
  padding: '0 2rem',
  position: 'sticky' as const,
  top: '0',
  backgroundColor: 'rgba(var(--accent), 0.8)',
  backdropFilter: 'blur(10px)',
};

export const Header: React.FC = () => (
  <header style={headerStyle}>
    <MainLogo />
    <ThemeSelect />
    <Navigation />
  </header>
);

export default Header;
