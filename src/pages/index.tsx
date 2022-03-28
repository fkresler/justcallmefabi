import * as React from 'react';
import { Layout } from '../components/Layout';
import { AboutMe } from '../components/AboutMe';

const IndexPage: React.FC = () => (
  <Layout>
    <title>Just Call Me Fabi</title>
    <h1>Welcome to my personal space!</h1>
    <AboutMe />
  </Layout>
);

export default IndexPage;
