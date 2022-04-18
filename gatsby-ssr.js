import './src/pages/reset.css';
import './src/pages/theme.css';

import * as React from 'react';
import { ThemeProvider } from './src/components/ThemeProvider';

export const wrapRootElement = ({ element }) => (
  <ThemeProvider>{element}</ThemeProvider>
);
