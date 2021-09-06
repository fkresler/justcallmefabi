import * as React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

const sectionStyle = {
  display: 'block',
  position: 'relative' as const,
  width: '100%',
  maxWidth: '50rem',
  margin: '2rem auto',
};

const imageStyle = {
  position: 'relative' as const,
  objectFit: 'cover' as const,
  width: '20rem',
  height: '20rem',
  borderRadius: '50%',
  transform: 'translateX(-4rem)',
};

const bigTextStyle = {
  position: 'absolute' as const,
  fontSize: 'min(6rem, 15vw)',
  bottom: '1rem',
  left: '-5px',
  textShadow:
    'rgb(16 13 18 / 50%) 0px 0px 30px, rgb(16 13 18 / 50%) 0px 5px 15px, rgb(16 13 18 / 50%) 0px 1px 2px',
};

export const AboutMe: React.FC = () => (
  <section style={sectionStyle}>
    <StaticImage
      style={imageStyle}
      src="../images/itsme.jpeg"
      alt="Handsome developer he/him"
    />
    <h2 style={bigTextStyle}>Hey, I'm Fabi!</h2>
    <div>
      Hey there, welcome to my personal space! I am a german software engineer
      primarly working in frontend development
    </div>
  </section>
);

export default AboutMe;
