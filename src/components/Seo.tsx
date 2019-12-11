import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import config from '../config'
type Props = {
  postTitle?: string
  summary?: string
  postImage?: string
  slug?: string
  isRepeatable?: boolean
}
const SEO = ({ postTitle, summary, postImage, slug, isRepeatable }: Props) => {
  const title = postTitle || config.title
  const description = summary || config.description
  const image = `${postImage}` || config.image
  const url = slug ? `${config.url}${slug}` : config.url

  return (
    <Helmet>
      <script type="text/javascript" src="https://cdn.polyfill.io/v2/polyfill.js?features=default,Symbol" />
      {postTitle ? <title>{`${postTitle} | ${config.title}`}</title> : <title>{`${config.title}`}</title>}
      {/* General tags */}
      <meta name="description" content={description} />
      <meta name="image" content={image} />
      {/* OpenGraph tags */}
      <meta property="og:url" content={url} />
      {isRepeatable ? <meta property="og:type" content="article" /> : null}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="fb:app_id" content={config.fbAppID} />
      {/* Twitter Card tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content={config.twitter} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <html lang="ro" />
    </Helmet>
  )
}
SEO.propTypes = {
  postTitle: PropTypes.string,
  summary: PropTypes.string,
  slug: PropTypes.string.isRequired,
  isRepeatable: PropTypes.bool,
  postImage: PropTypes.string,
}

export default SEO
