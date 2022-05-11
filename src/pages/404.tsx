import * as React from 'react';
import { InternalLink } from '../components/Link';

const NotFoundPage: React.FC = () => (
  <>
    <title>Not found</title>
    <h1>Page not found</h1>
    <p>
      Sorry we couldn’t find what you were looking for.
      <br />
      <br />
      <InternalLink to="/">Go home</InternalLink>.
    </p>
  </>
);

export default NotFoundPage;
