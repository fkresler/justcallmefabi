import * as React from 'react';
import { Header } from './Header';
import { Footer } from './Footer';
import './layout.css';

const contentStyle = {
  display: 'block',
  maxWidth: '74rem',
  margin: '2rem auto',
  padding: '2rem',
};

export const Layout: React.FC = ({ children }) => (
  <>
    <Header />
    <main style={contentStyle}>{children}</main>
    <Footer />
  </>
);

export default Layout;
