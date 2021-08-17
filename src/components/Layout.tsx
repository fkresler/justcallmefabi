import React from 'react';
import { Header } from './Header';
import { Footer } from './Footer';
import './layout.css';

export const Layout: React.FC = ({ children }) => (
  <>
    <Header />
    <main>{children}</main>
    <Footer />
  </>
);

export default Layout;
