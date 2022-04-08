import * as React from 'react';
import { FaGithub, FaXing } from 'react-icons/fa';
import { ExternalLink } from './Link';

const additionalsWrapperStyle = {
  listStyle: 'none',
  display: 'flex',
  gap: '1rem',
  alignItems: 'center',
};

export const Additionals: React.FC<{
  layout?: 'flex-start' | 'center' | 'flex-end';
}> = ({ layout = 'center' }) => (
  <ul
    style={{
      ...additionalsWrapperStyle,
      justifyContent: layout,
    }}
  >
    <li>
      <ExternalLink to="https://github.com/fkresler/">
        <FaGithub />
      </ExternalLink>
    </li>
    <li>
      <ExternalLink to="https://www.xing.com/profile/Fabian_Kresler/cv">
        <FaXing />
      </ExternalLink>
    </li>
  </ul>
);
