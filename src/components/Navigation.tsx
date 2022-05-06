import * as React from 'react';
import { InternalLink } from './Link';
import {
  navigationWrapper,
  navigationWrapperVertical,
  navigationItem,
  navigationItemVertical,
} from './Navigation.module.css';

export const NavigationLink: React.FC<{ to: string }> = ({ to, children }) => (
  <InternalLink to={to}>{children}</InternalLink>
);

export const Navigation: React.FC<{ direction?: 'horizontal' | 'vertical' }> =
  ({ direction = 'horizontal' }) => {
    let navigationWrapperClasses = navigationWrapper;
    let navigationItemClasses = navigationItem;

    if (direction === 'vertical') {
      navigationWrapperClasses = [
        navigationWrapper,
        navigationWrapperVertical,
      ].join(' ');
      navigationItemClasses = [navigationItem, navigationItemVertical].join(
        ' ',
      );
    }

    return (
      <ul className={navigationWrapperClasses}>
        <li className={navigationItemClasses}>
          <NavigationLink to="/#capabilities">Capabilities</NavigationLink>
        </li>
        <li className={navigationItemClasses}>
          <NavigationLink to="/#projects">Projects</NavigationLink>
        </li>
        <li className={navigationItemClasses}>
          <NavigationLink to="/#contact">Contact</NavigationLink>
        </li>
        <li className={navigationItemClasses}>
          <NavigationLink to="/blog">Blog</NavigationLink>
        </li>
      </ul>
    );
  };

export default Navigation;
