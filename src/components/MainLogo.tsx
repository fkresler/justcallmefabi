import * as React from 'react';
import { Button } from './Button';

export const MainLogo: React.FC<{ onClick: () => void }> = ({ onClick }) => (
  <Button internalTo="/" onClick={onClick}>
    Fabi
  </Button>
);

export default MainLogo;
