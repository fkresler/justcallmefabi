import * as React from 'react';
import { Link } from 'gatsby';
import { Layout } from '../components/Layout';

const NotFoundPage: React.FC = () => (
  <Layout>
    <title>Not found</title>
    <h1>Page not found</h1>
    <p>
      Sorry we couldn’t find what you were looking for.
      <br />
      <br />
      <Link to="/">Go home</Link>.
    </p>
  </Layout>
);

export default NotFoundPage;
