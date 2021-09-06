import * as React from 'react';
import { graphql, Link } from 'gatsby';
import { Layout } from '../components/Layout';
import { Card } from '../components/Card';
import { AboutMe } from '../components/AboutMe';
import { ContentDataQuery } from '../../types/graphql-types';

const IndexPage: React.FC<{ data: ContentDataQuery }> = ({ data }) => {
  const posts = data.allMarkdownRemark.edges;

  return (
    <Layout>
      <title>Just Call Me Fabi</title>
      <h1>Welcome to my personal space!</h1>
      <AboutMe />
      {posts.map(({ node }) => {
        const title = node.frontmatter?.title || node.fields?.slug;
        return (
          <article key={node.fields?.slug}>
            <Card>
              <header>
                {node.fields?.slug && (
                  <h3>
                    <Link to={node.fields.slug}>{title}</Link>
                  </h3>
                )}
                {node.frontmatter?.date && (
                  <small>{node.frontmatter.date}</small>
                )}
              </header>
              {node.frontmatter?.description && (
                <section>
                  <p
                    dangerouslySetInnerHTML={{
                      __html:
                        node.frontmatter.description ||
                        (node.excerpt as string),
                    }}
                  />
                </section>
              )}
            </Card>
          </article>
        );
      })}
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
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
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
