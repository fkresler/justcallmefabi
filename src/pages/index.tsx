import * as React from 'react';
import { PageProps, navigate } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import { Layout } from '../components/Layout';
import { Section } from '../components/Section';

const imageStyle = {
  position: 'relative' as const,
  objectFit: 'cover' as const,
  width: '20rem',
  height: '20rem',
  borderRadius: '50%',
};

const IndexPage: React.FC<PageProps> = ({ location }) => {
  const { hash } = location;

  React.useEffect(() => {
    navigate(hash);
  }, [hash]);

  return (
    <Layout>
      <Section id="start">
        <h3>Hey there, I'm Fabi!</h3>
        <h1>Frontend developer</h1>
        <StaticImage
          style={imageStyle}
          src="../images/itsme.jpeg"
          alt="Handsome developer he/him"
        />
        <h2>
          I am primarily a frontend developer who is also capable of doing
          backend development and constantly learning and improving in other
          subjects like UX/UI, video and music editing
        </h2>
      </Section>
      <Section id="capabilities">
        <h2>Capabilities</h2>
        <h3>
          Here will be more info about the things I can do and services I can
          provide soon
        </h3>
        <h3>
          Maybe I will also include some of the tools and libraries I feel using
          comfortably
        </h3>
      </Section>
      <Section id="projects">
        <h2>Projects</h2>
        <h3>
          Here I will provide more information about projects I have been
          involved in or I have been working on soon!
        </h3>
      </Section>
      <Section id="contact">
        <h2>Contact</h2>
        <h3>Here I plan to include a section on how you can contact me!</h3>
      </Section>
    </Layout>
  );
};

export default IndexPage;
