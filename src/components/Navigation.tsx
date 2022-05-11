import * as React from 'react';
import { Button } from './Button';
import {
  navigationWrapper,
  navigationWrapperVertical,
  navigationItem,
  navigationItemVertical,
} from './Navigation.module.css';

export const NavigationLink: React.FC<{ to: string; onClick?: () => void }> = ({
  to,
  onClick,
  children,
}) => (
  <Button variant="text" internalTo={to} onClick={onClick}>
    {children}
  </Button>
);

export interface INavigation {
  direction?: 'horizontal' | 'vertical';
  onNavigate?: () => void;
}

export const Navigation: React.FC<INavigation> = ({
  direction = 'horizontal',
  onNavigate,
}) => {
  let navigationWrapperClasses = navigationWrapper;
  let navigationItemClasses = navigationItem;

  if (direction === 'vertical') {
    navigationWrapperClasses = [
      navigationWrapper,
      navigationWrapperVertical,
    ].join(' ');
    navigationItemClasses = [navigationItem, navigationItemVertical].join(' ');
  }

  return (
    <ul className={navigationWrapperClasses}>
      <li className={navigationItemClasses}>
        <NavigationLink to="/#capabilities" onClick={onNavigate}>
          Capabilities
        </NavigationLink>
      </li>
      <li className={navigationItemClasses}>
        <NavigationLink to="/#projects" onClick={onNavigate}>
          Projects
        </NavigationLink>
      </li>
      <li className={navigationItemClasses}>
        <NavigationLink to="/#contact" onClick={onNavigate}>
          Contact
        </NavigationLink>
      </li>
      <li className={navigationItemClasses}>
        <NavigationLink to="/blog" onClick={onNavigate}>
          Blog
        </NavigationLink>
      </li>
    </ul>
  );
};

export default Navigation;
