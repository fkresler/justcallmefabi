import * as React from 'react';

const sectionStyle = {
  marginBottom: '5rem',
};

export const Section: React.FC<{ id: string }> = ({ id, children }) => (
  <section id={id} style={sectionStyle}>
    {children}
  </section>
);

export default Section;
