import React from 'react';
import { graphql, Link } from 'gatsby';
import Seo from '../components/Seo';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { AfterHeader } from '../components/pages/Noutati/AfterHeader';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { ToastProvider, useToasts } from 'react-toast-notifications';
import Separator from '../components/Separator';

const BlogPost = ({ data }: any) => {
  const { blog } = data.hasura;
  const windowurl = window.location.href;
  const { addToast } = useToasts();

  return (
    <>
      <Seo postTitle={blog.title} isRepeatable={true} postImage={blog.image.url} summary={blog.summary} />
      <Header />
      <AfterHeader header={blog.image.urlSharp.childImageSharp.fluid} />
      <div className="blog-single section interior">
        <h1>{blog.title}</h1>
        <span className="date">
          {blog.publishedAt.toLocaleString('ro-RO', {
            timeZone: 'UTC',
            year: 'numeric',
            month: 'short',
            day: 'numeric',
          })}
        </span>
        <div className="blog-content" dangerouslySetInnerHTML={{ __html: blog.content.html }} />
        <div className="prev-next-buttons">
          <Link>
            <button className="prev-button"></button>
          </Link>
          <Link>
            <button className="next-button"></button>
          </Link>
          <Link>
            <button className="read-more">Citeste si alte articole</button>
          </Link>
        </div>
        <Separator color="snow" width="100px" />
        <CopyToClipboard text={windowurl}>
          <button
            className="share-button"
            onClick={() =>
              addToast('Lorem Ipsum Dolor !', {
                appearance: 'success',
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

export default ({ data }: any) => (
  <ToastProvider>
    <BlogPost data={data} />
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
