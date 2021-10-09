import * as React from 'react';
import { graphql } from 'gatsby';
import { Layout } from '../components/Layout';
import { CardContainer } from '../components/CardContainer';
import { BlogEntry } from '../components/BlogEntry';

const BlogPage: React.FC<{ data: GatsbyTypes.BlogContentQuery }> = ({
  data,
}) => {
  const posts = data.allMarkdownRemark.edges;
  return (
    <Layout>
      <CardContainer>
        {posts.map(({ node }) => (
          <BlogEntry node={node} />
        ))}
      </CardContainer>
    </Layout>
  );
};

export default BlogPage;

export const pageQuery = graphql`
  query BlogContent {
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
