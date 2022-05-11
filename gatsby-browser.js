import './src/pages/reset.css';
import './src/pages/theme.css';

import * as React from 'react';
import { Layout } from './src/components/Layout';
import { ThemeProvider } from './src/components/ThemeProvider';

export const wrapPageElement = ({ element, props }) => {
  return <Layout {...props}>{element}</Layout>;
};

export const wrapRootElement = ({ element }) => (
  <ThemeProvider>{element}</ThemeProvider>
);
