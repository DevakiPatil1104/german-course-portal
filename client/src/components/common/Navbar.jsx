import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { SITE_NAME } from '../../utils/constants'

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/courses', label: 'Courses' },
  { to: '/about', label: 'About' },
  { to: '/faq', label: 'FAQ' },
  { to: '/contact', label: 'Contact' },
]

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-40 border-b-2 border-peach/60 bg-cream/90 backdrop-blur-md">
      <nav className="container mx-auto flex items-center justify-between px-4 py-3">
        <NavLink
          to="/"
          className="group flex items-center gap-2"
          onClick={() => setIsMenuOpen(false)}
        >
          <span className="text-xl font-bold gradient-text">
            {SITE_NAME}
          </span>
        </NavLink>

        {/* Desktop Navigation */}
        <ul className="hidden items-center gap-1 md:flex">
          {navLinks.map(({ to, label }) => (
            <li key={to}>
              <NavLink
                to={to}
                className={({ isActive }) =>
                  `px-4 py-2 text-sm font-semibold transition-all duration-200 ${
                    isActive ? 'nav-pill-active' : 'nav-pill-idle'
                  }`
                }
              >
                {label}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="rounded-xl p-2 transition hover:bg-peach/30 md:hidden"
          aria-label="Toggle menu"
        >
          <div className="flex flex-col gap-1">
            <span className="h-0.5 w-5 rounded-full bg-ink"></span>
            <span className="h-0.5 w-5 rounded-full bg-ink"></span>
            <span className="h-0.5 w-5 rounded-full bg-ink"></span>
          </div>
        </button>
      </nav>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="border-t border-peach/50 bg-cream md:hidden">
          <ul className="container mx-auto flex flex-col px-4 py-3">
            {navLinks.map(({ to, label }) => (
              <li key={to}>
                <NavLink
                  to={to}
                  onClick={() => setIsMenuOpen(false)}
                  className={({ isActive }) =>
                    `block rounded-xl px-4 py-3 text-sm font-medium transition-all duration-200 ${
                      isActive
                        ? 'bg-peach/50 text-ink'
                        : 'hover:bg-peach/30'
                    }`
                  }
                >
                  {label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  )
}

export default Navbar