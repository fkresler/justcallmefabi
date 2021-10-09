import * as React from 'react';
import { graphql } from 'gatsby';
import { Layout } from '../components/Layout';
import { AboutMe } from '../components/AboutMe';
import { CardContainer } from '../components/CardContainer';
import { BlogEntry } from '../components/BlogEntry';

const IndexPage: React.FC<{ data: GatsbyTypes.ContentDataQuery }> = ({
  data,
}) => {
  const posts = data.allMarkdownRemark.edges;

  return (
    <Layout>
      <title>Just Call Me Fabi</title>
      <h1>Welcome to my personal space!</h1>
      <AboutMe />
      <CardContainer>
        {posts.map(({ node }) => (
          <BlogEntry node={node} />
        ))}
      </CardContainer>
    </Layout>
  );
};

export default IndexPage;

export const pageQuery = graphql`
  query ContentData {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { published: { eq: true, ne: null } } }
    ) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
          }
        }
      }
    }
  }
`;
