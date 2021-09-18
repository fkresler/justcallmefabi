import * as React from 'react';
import { Layout } from '../components/Layout';
import { InternalLink } from '../components/InternalLink';

const NotFoundPage: React.FC = () => (
  <Layout>
    <title>Not found</title>
    <h1>Page not found</h1>
    <p>
      Sorry we couldn’t find what you were looking for.
      <br />
      <br />
      <InternalLink to="/">Go home</InternalLink>.
    </p>
  </Layout>
);

export default NotFoundPage;
