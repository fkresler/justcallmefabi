import * as React from 'react';
import { Card } from './Card';
import { InternalLink } from './Link';

type BlogEntryDefinition = Pick<GatsbyTypes.MarkdownRemark, 'excerpt'> & {
  readonly fields: GatsbyTypes.Maybe<Pick<GatsbyTypes.Fields, 'slug'>>;
  readonly frontmatter: GatsbyTypes.Maybe<
    Pick<GatsbyTypes.Frontmatter, 'date' | 'title' | 'description'>
  >;
};

export const BlogEntry: React.FC<{ node: BlogEntryDefinition }> = ({
  node,
}) => {
  const title = node.frontmatter?.title || node.fields?.slug;

  if (!node.fields?.slug) {
    return null;
  }

  return (
    <Card>
      <InternalLink to={node.fields.slug}>
        <article key={node.fields.slug}>
          <header>
            {node.fields.slug && <h3>{title}</h3>}
            {node.frontmatter?.date && <small>{node.frontmatter.date}</small>}
          </header>
          {node.frontmatter?.description && (
            <section>
              <p
                dangerouslySetInnerHTML={{
                  __html:
                    node.frontmatter.description || (node.excerpt as string),
                }}
              />
            </section>
          )}
        </article>
      </InternalLink>
    </Card>
  );
};

export default BlogEntry;
