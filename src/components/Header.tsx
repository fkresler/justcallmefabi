import * as React from 'react';
import { FaStream } from 'react-icons/fa';
import {
  headerWrapper,
  headerNavWrapper,
  fullNavWrapper,
  fullNavWrapperOpen,
  fullNavTrigger,
} from './Header.module.css';
import { MainLogo } from './MainLogo';
import { ThemeSelect } from './ThemeSelect';
import { Navigation } from './Navigation';

export const Header: React.FC = () => {
  const [isFullNavOpen, setIsFullNavOpen] = React.useState<boolean>(false);

  const toggleFullNav = () => {
    setIsFullNavOpen(!isFullNavOpen);
  };

  const closeFullNav = () => {
    setIsFullNavOpen(false);
  };

  const fullNavClasses = isFullNavOpen
    ? [fullNavWrapper, fullNavWrapperOpen].join(' ')
    : fullNavWrapper;

  return (
    <>
      <header className={headerWrapper}>
        <MainLogo onClick={closeFullNav} />
        <ThemeSelect />
        <nav className={headerNavWrapper}>
          <Navigation onNavigate={closeFullNav} />
        </nav>
        <div className={fullNavTrigger}>
          <FaStream onClick={toggleFullNav} />
        </div>
      </header>
      <nav className={fullNavClasses}>
        <Navigation direction="vertical" onNavigate={closeFullNav} />
      </nav>
    </>
  );
};

export default Header;
