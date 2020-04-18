import React from 'react';
import { graphql, Link } from 'gatsby';
import Seo from '../components/Seo';
import CopyToClipboard from 'react-copy-to-clipboard';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { ToastProvider, useToasts } from 'react-toast-notifications';
import Separator from '../components/Separator';
import { AfterHeader } from '../components/AfterHeader';
import { Hasura } from '../types/graphqlTypes';
type BlogProps = {
  data: { hasura: Hasura };
  pageContext: { previous: { slug: string; title: string }; next: { slug: string; title: string } };
  location: Location;
};
const BlogPost = ({ data, pageContext, location }: BlogProps): JSX.Element => {
  const { blog } = data?.hasura;
  if (!blog) return <div />;
  const { previous, next } = pageContext;
  const { addToast } = useToasts();
  const dateFormat = (date: Date) => {
    return new Date(date);
  };
  function createMarkup() {
    return { __html: blog && !!blog.content && !!blog.content.html ? blog.content.html : '' };
  }
  return (
    <>
      <Seo postTitle={blog.title} isRepeatable={true} postImage={blog?.image?.url} summary={blog.summary} slug={blog.slug} />
      <Header />
      <AfterHeader
        image={blog?.image?.urlSharp?.childImageSharp?.fluid}
        className="blog-single"
        hasTopSeparator={false}
        hasBottomSeparator={false}
      />
      <div className="blog-single section interior">
        <h1>{blog.title}</h1>
        <span className="date">
          {dateFormat(blog.publishedAt).toLocaleString('ro-RO', {
            timeZone: 'UTC',
            year: 'numeric',
            month: 'short',
            day: 'numeric',
          })}
        </span>
        <div className="blog-content" dangerouslySetInnerHTML={createMarkup()} />
        <div className="prev-next-buttons">
          {previous ? (
            <Link className="prev-button" to={`/noutati/${previous.slug}`}>
              <span>articole mai vechi</span>
              {previous.title}
            </Link>
          ) : (
            <a className="prev-button disabled">Nu mai sunt articole</a>
          )}
          {next ? (
            <Link className="next-button" to={`/noutati/${next.slug}`}>
              <span>articole mai noi</span>
              {next.title}
            </Link>
          ) : (
            <a className="next-button disabled">Nu mai sunt articole</a>
          )}
          <div className="read-more">
            <Separator color="snow" width="100px" top="2px" />
            <Link className="read-more" to="/noutati">
              Citeste si alte articole
            </Link>
          </div>
        </div>
        <Separator color="snow" width="100px" />
        <CopyToClipboard text={location.href}>
          <button
            className="share-button"
            onClick={() =>
              addToast('Link copiat în clipboard! ', {
                appearance: 'info',
                autoDismiss: true,
              })
            }>
            Distribuie
          </button>
        </CopyToClipboard>
      </div>
      <Footer />
    </>
  );
};
export default ({ data, pageContext, location }: BlogProps) => (
  <ToastProvider placement="bottom-right">
    <BlogPost pageContext={pageContext} data={data} location={location} />
  </ToastProvider>
);
export const pageQuery = graphql`
  query blogPostBySlug($slug: String!) {
    hasura {
      blog(where: { slug: $slug }) {
        title
        summary
        content {
          html
        }
        publishedAt
        slug
        image {
          url
          urlSharp {
            childImageSharp {
              fluid(maxHeight: 350, maxWidth: 770) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
      }
    }
  }
`;
