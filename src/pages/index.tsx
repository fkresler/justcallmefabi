import * as React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import { Layout } from '../components/Layout';

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
};

const IndexPage: React.FC = () => (
  <Layout>
    <title>Just Call Me Fabi</title>
    <section style={sectionStyle}>
      <h3>Hey there, I'm Fabi!</h3>
      <h1>Frontend developer</h1>
      <StaticImage
        style={imageStyle}
        src="../images/itsme.jpeg"
        alt="Handsome developer he/him"
      />
      <h2>
        I am primarily a frontend developer who is also capable of doing backend
        development and constantly learning and improving in other subjects like
        UX/UI, video and music editing
      </h2>
    </section>
  </Layout>
);

export default IndexPage;
