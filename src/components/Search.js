import React, { useState } from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { useFlexSearch } from 'react-use-flexsearch'
import * as queryString from 'query-string'

import Posts from './Posts'

export default function Search({ posts, location, navigate }) {
  const { search } = queryString.parse(location.search)
  const [query, setQuery] = useState(search || '')
  const { localSearchPages } = useStaticQuery(graphql`
    query {
      localSearchPages {
        index
        store
      }
    }
  `)

  const results = useFlexSearch(
    query,
    localSearchPages.index,
    JSON.parse(localSearchPages.store)
  )

  return (
    <>
      <input
        id="search"
        type="search"
        placeholder="Busca entre todas las entradas..."
        value={query}
        onChange={(e) => {
          navigate(e.target.value ? `/blog/?search=${e.target.value}` : '')
          setQuery(e.target.value)
        }}
      />
      <section>
        {query ? (
          results.length > 0 ? (
            <Posts data={results} withDate narrow />
          ) : (
            <p>Ups! No se ha encontrado nada con esta búsqueda.</p>
          )
        ) : (
          <Posts data={posts} showYears withDate narrow />
        )}
      </section>
    </>
  )
}
