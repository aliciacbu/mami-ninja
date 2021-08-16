import React from 'react'
import { Link } from 'gatsby'

export default function Suggested({ previous, next }) {
  return (
    <nav className="flex container suggested">
      {previous && (
        <Link to={previous.fields.slug} rel="prev">
          <span>Anterior</span>
          {previous.frontmatter.title}
        </Link>
      )}
      {next && (
        <Link to={next.fields.slug} rel="next">
          <span>Siguiente</span>
          {next.frontmatter.title}
        </Link>
      )}
    </nav>
  )
}
