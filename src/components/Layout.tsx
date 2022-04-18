import * as React from 'react';
import { Header } from './Header';
import { Footer } from './Footer';

const backgroundStyle = {
  display: 'block',
  marginTop: 'calc(var(--headersize)*-1)',
  paddingTop: 'var(--headersize)',
  background:
    'linear-gradient(0deg, var(--backgrounddark) 0%, var(--backgroundlight) 100%)',
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
    <main style={backgroundStyle}>
      <div style={contentStyle}>{children}</div>
    </main>
    <Footer />
  </>
);

export default Layout;
