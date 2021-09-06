import * as React from 'react';
import { Link, graphql } from 'gatsby';
import { Layout } from '../components/Layout';
import { BlogPostBySlugQuery } from '../../types/graphql-types';

const BlogPostTemplate: React.FC<{ data: BlogPostBySlugQuery }> = ({
  data,
}) => {
  const post = data.markdownRemark;
  const { previous, next } = data;

  return (
    <Layout>
      <article
        className="blog-post"
        itemScope
        itemType="http://schema.org/Article"
      >
        <header>
          {post?.frontmatter?.title && (
            <h1 itemProp="headline">{post.frontmatter.title}</h1>
          )}
          {post?.frontmatter?.date && <p>{post.frontmatter.date}</p>}
        </header>
        {post?.html && (
          <section
            dangerouslySetInnerHTML={{ __html: post.html }}
            itemProp="articleBody"
          />
        )}
      </article>
      <nav className="blog-post-nav">
        <ul
          style={{
            display: `flex`,
            flexWrap: `wrap`,
            justifyContent: `space-between`,
            listStyle: `none`,
            padding: 0,
          }}
        >
          <li>
            {previous && previous.fields?.slug && previous.frontmatter?.title && (
              <Link to={previous.fields.slug} rel="prev">
                ← {previous.frontmatter.title}
              </Link>
            )}
          </li>
          <li>
            {next && next.fields?.slug && next.frontmatter?.title && (
              <Link to={next.fields.slug} rel="next">
                {next.frontmatter.title} →
              </Link>
            )}
          </li>
        </ul>
      </nav>
    </Layout>
  );
};

export default BlogPostTemplate;

export const pageQuery = graphql`
  query BlogPostBySlug(
    $id: String!
    $previousPostId: String
    $nextPostId: String
  ) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(id: { eq: $id }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
      }
    }
    previous: markdownRemark(id: { eq: $previousPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
    next: markdownRemark(id: { eq: $nextPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
  }
`;
