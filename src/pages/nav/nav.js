import React from 'react'
import { Link } from 'react-router-dom'
import './style.scss'

const Nav = () => {
  return (
    <nav className="nav">
      <Link className="nav__link" to="/" data-link-alt="Discover Switzerland">
        <span>Discover Switzerland</span>
      </Link>
      <Link className="nav__link" to="/cities" data-link-alt="Cities">
        <span>Cities</span>
      </Link>
    </nav>
  )
}

export default Nav
