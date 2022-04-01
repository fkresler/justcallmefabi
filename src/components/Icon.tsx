import * as React from 'react';

export const LinkedIcon: React.FC<{ to: string }> = ({ children, to }) => (
  <a href={to} target="_blank" rel="noreferrer">
    {children}
  </a>
);
