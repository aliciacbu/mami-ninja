import React, { useMemo } from 'react'
import { Link, graphql } from 'gatsby'
import Helmet from 'react-helmet'

import Layout from '../components/Layout'
import Posts from '../components/Posts'
import Projects from '../components/Projects'
import SEO from '../components/SEO'

import { getSimplifiedPosts } from '../utils/helpers'
import config from '../utils/config'

import projects from '../data/projects'

import ninja from '../../content/images/ninja.png'

export default function BlogIndex({ data }) {
  const latest = data.latest.edges
  const simplifiedLatest = useMemo(() => getSimplifiedPosts(latest), [latest])

  const Section = ({ title, children, button, ...props }) => (
    <section {...props}>
      <h2>
        {title}
        {button && (
          <Link className="section-button" to="/blog">
            Ver todas
          </Link>
        )}
      </h2>
      {children}
    </section>
  )

  return (
    <Layout>
      <Helmet title={config.siteTitle} />
      <SEO />
      <section className="lead">
        <div className="container">
          <div className="copy">
            <h1>Hola!👋 Soy Mami Ninja!</h1>
            <p>
              Soy una mamá en constante aprendizaje. En este blog comparto todo lo que voy{' '}
              <Link to="/recursos">aprendiendo</Link> así como{' '} <Link to="/reflexiones">reflexiones personales</Link>.
            </p>
          </div>

          <div className="image">
            <img src={ninja} alt="Mami Ninja" />
          </div>
        </div>
      </section>
      <div className="container index">
        <Section title="Últimas entradas" button>
          <Posts data={simplifiedLatest} tags withDate />
        </Section>
      </div>
    </Layout>
  )
}

export const pageQuery = graphql`
query IndexQuery {
  latest: allMarkdownRemark(limit: 10, sort: {fields: [frontmatter___date], order: DESC}, filter: {frontmatter: {template: {eq: "post"}}, isFuture: {eq: false}, fields: {draft: {eq: false}}}) {
    edges {
      node {
        id
        fields {
          slug
        }
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
          tags
        }
      }
    }
  }
}
`
