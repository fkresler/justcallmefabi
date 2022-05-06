import * as React from 'react';
import { FaStream } from 'react-icons/fa';
import {
  headerWrapper,
  fullNavWrapper,
  fullNavWrapperOpen,
  mobileNav,
} from './Header.module.css';
import { MainLogo } from './MainLogo';
import { ThemeSelect } from './ThemeSelect';
import { Navigation } from './Navigation';

export const Header: React.FC = () => {
  const [isFullNavOpen, setIsFullNavOpen] = React.useState<boolean>(false);

  const toggleFullNav = () => {
    setIsFullNavOpen(!isFullNavOpen);
  };

  const fullNavClasses = isFullNavOpen
    ? [fullNavWrapper, fullNavWrapperOpen].join(' ')
    : fullNavWrapper;

  return (
    <>
      <header className={headerWrapper}>
        <MainLogo />
        <ThemeSelect />
        <Navigation />
        <div className={mobileNav}>
          <FaStream onClick={toggleFullNav} />
        </div>
      </header>
      <div className={fullNavClasses}>
        <Navigation direction="vertical" />
      </div>
    </>
  );
};

export default Header;
