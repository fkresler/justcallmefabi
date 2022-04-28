import * as React from 'react';
import { Header } from './Header';
import { Footer } from './Footer';

const backgroundGradientStyle = {
  display: 'block',
  minHeight: '100vh',
  marginTop: 'calc(var(--headersize)*-1)',
  paddingTop: 'var(--headersize)',
  background:
    'linear-gradient(0deg, var(--background-dark) 0%, var(--background-light) 100%)',
};

const contentStyle = {
  display: 'block',
  maxWidth: '75rem',
  margin: '0 auto',
  padding: '2rem',
};

export const Layout: React.FC = ({ children }) => (
  <>
    <Header />
    <main style={backgroundGradientStyle}>
      <div style={contentStyle}>{children}</div>
    </main>
    <Footer />
  </>
);

export default Layout;
