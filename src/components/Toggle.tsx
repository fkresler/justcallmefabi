import * as React from 'react';
import {
  container,
  checkbox,
  wrapper,
  handle,
  handleActive,
  handleContent,
  handleContentActive,
  background,
} from './Toggle.module.css';

export interface IToggle {
  label: string;
  isActive: boolean;
  onToggle: (newIsActive: boolean) => void;
}

export const Toggle: React.FC<IToggle> = ({ label, isActive, onToggle }) => {
  const handleToggle = () => onToggle(!isActive);

  const handleClassNames = isActive ? [handle, handleActive].join(' ') : handle;

  const handleContentClassNames = isActive
    ? [handleContent, handleContentActive].join(' ')
    : handleContent;

  return (
    <label className={container} htmlFor={label}>
      <input
        type="checkbox"
        className={checkbox}
        checked={isActive}
        name={label}
        id={label}
        onClick={handleToggle}
      />
      <span className={wrapper}>
        <span className={handleClassNames}>
          <span className={handleContentClassNames} />
        </span>
        <span className={background} />
      </span>
    </label>
  );
};

export default Toggle;
