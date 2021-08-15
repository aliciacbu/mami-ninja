import React from 'react'
import { Link } from 'gatsby'

export default function Footer() {
  return (
    <footer className="footer flex">
      <section className="container">
        <nav className="footer-links">
          <Link to="/recursos">Recursos</Link>
          <Link to="/reflexiones">Reflexiones</Link>
          <a
            href="https://instagram.com/mami.ninja.ig"
            target="_blank"
            rel="noopener noreferrer"
          >
            Instagram
          </a>
          <Link to="/rss.xml">RSS</Link>
        </nav>
        <nav className="flex justify-center">Con ❤️</nav>
      </section>
    </footer>
  )
}
