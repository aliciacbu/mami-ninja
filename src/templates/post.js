import React from 'react'
import { graphql, Link } from 'gatsby'
import Helmet from 'react-helmet'
import urljoin from 'url-join'
import useClipboard from 'react-use-clipboard'

import Layout from '../components/Layout'
import Suggested from '../components/Suggested'
import SEO from '../components/SEO'
import Disqus from '../components/Disqus'
import Tags from '../components/Tags'

import config from '../utils/config'

export default function PostTemplate({ data, pageContext, ...props }) {
  const post = data.markdownRemark
  const { previous, next, coverPicture } = pageContext
  const { slug, tags } = post.frontmatter
  const url = urljoin('https://mami.ninja', slug)
  const discussUrl = `https://twitter.com/search?q=${encodeURIComponent(url)}`
  const [isCopiedToClipboard, setCopiedToClipboard] = useClipboard(url, {
    successDuration: 1000,
  })

  return (
    <Layout>
      <Helmet title={`${post.frontmatter.title} | ${config.siteTitle}`} />
      <SEO
        postPath={post.fields.slug}
        postNode={post}
        coverPicture={coverPicture}
        postSEO
      />
      <div className="container medium">
        <article>
          <header className="article-header">
            <div className="container">
              <h1>{post.frontmatter.title}</h1>
              <time>{post.frontmatter.date}</time>
              {tags && <Tags tags={tags} />}
            </div>
          </header>
          <div dangerouslySetInnerHTML={{ __html: post.html }} />
        </article>
        <Suggested previous={previous} next={next} />
        <div id="comments">
          <h2>
            Deja tu comentario:
          </h2>
          <Disqus postNode={post} />
        </div>
      </div>
    </Layout>
  )
}

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      excerpt
      fields {
        slug
      }
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        tags
        banner
        slug
      }
    }
  }
`
