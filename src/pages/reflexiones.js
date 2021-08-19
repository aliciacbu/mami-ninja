import React, { useMemo } from 'react'
import { graphql } from 'gatsby'
import Helmet from 'react-helmet'

import Layout from '../components/Layout'
import Posts from '../components/Posts'
import SEO from '../components/SEO'

import { getSimplifiedPosts } from '../utils/helpers'
import config from '../utils/config'

export default function BlogIndex({ data }) {
  const posts = data.allMarkdownRemark.edges
  const simplifiedPosts = useMemo(() => getSimplifiedPosts(posts), [posts])

  return (
    <Layout>
      <Helmet title={`Reflexiones | ${config.siteTitle}`} />
      <SEO customDescription="Mi opinión personal" />
      <header>
        <div className="container text-center">
          <h1>Reflexiones</h1>
          <p className="subtitle">Mi opinión personal</p>
        </div>
      </header>
      <section>
        <div className="guides-section">
          <div className="container">
            <Posts data={simplifiedPosts} showYears withDate narrow />
          </div>
        </div>
      </section>
    </Layout>
  )
}

export const pageQuery = graphql`
  query JesusFreakQuery {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: {
        frontmatter: { categories: { in: "Reflexiones" } }
        isFuture: { eq: false }
        fields: { draft: { eq: false } }
      }
    ) {
      edges {
        node {
          id
          excerpt
          fields {
            slug
          }
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
            banner
          }
        }
      }
    }
  }
`
