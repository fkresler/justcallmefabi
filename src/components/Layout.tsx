import * as React from 'react';
import { Header } from './Header';
import { Footer } from './Footer';
import './layout.css';

const contentStyle = {
  display: 'block',
  maxWidth: '70rem',
  margin: '2rem auto',
};

export const Layout: React.FC = ({ children }) => (
  <>
    <Header />
    <main style={contentStyle}>{children}</main>
    <Footer />
  </>
);

export default Layout;
