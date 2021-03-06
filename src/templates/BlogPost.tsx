import * as React from 'react';
import { graphql } from 'gatsby';
import { InternalLink } from '../components/Link';

const BlogPostTemplate: React.FC<{ data: GatsbyTypes.BlogPostBySlugQuery }> = ({
  data,
}) => {
  const post = data.markdownRemark;
  const { previous, next } = data;

  return (
    <>
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
            {previous &&
              previous.fields?.slug &&
              previous.frontmatter?.title && (
                <InternalLink to={previous.fields.slug}>
                  ← {previous.frontmatter.title}
                </InternalLink>
              )}
          </li>
          <li>
            {next && next.fields?.slug && next.frontmatter?.title && (
              <InternalLink to={next.fields.slug}>
                {next.frontmatter.title} →
              </InternalLink>
            )}
          </li>
        </ul>
      </nav>
    </>
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
