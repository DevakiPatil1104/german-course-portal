import { SITE_NAME, CONTACT } from '../../utils/constants'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer className="relative mt-16 overflow-hidden border-t-2 border-peach/50 bg-linear-to-r from-coral via-berry to-lavender text-white">
      <div className="pointer-events-none absolute inset-0 opacity-30">
        <div className="absolute -left-10 top-0 h-32 w-32 rounded-full bg-sunny blur-3xl" />
        <div className="absolute -right-10 bottom-0 h-40 w-40 rounded-full bg-sky blur-3xl" />
      </div>

      <div className="container relative mx-auto px-4 py-14">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <h3 className="text-2xl font-bold">{SITE_NAME}</h3>

            <p className="mt-4 text-sm leading-relaxed text-white/90">
              Helping students build confidence in German through structured,
              engaging, and learner-focused courses.
            </p>
          </div>

          <div>
            <h4 className="font-semibold uppercase tracking-wide text-white/95">Quick Links</h4>

            <ul className="mt-4 space-y-2 text-sm text-white/90">
              <li>
                <Link to="/" className="inline-block transition-all duration-200 hover:translate-x-1 hover:text-white">
                  Home
                </Link>
              </li>

              <li>
                <Link to="/courses" className="inline-block transition-all duration-200 hover:translate-x-1 hover:text-white">
                  Courses
                </Link>
              </li>

              <li>
                <Link to="/about" className="inline-block transition-all duration-200 hover:translate-x-1 hover:text-white">
                  About
                </Link>
              </li>

              <li>
                <Link to="/faq" className="inline-block transition-all duration-200 hover:translate-x-1 hover:text-white">
                  FAQ
                </Link>
              </li>

              <li>
                <Link to="/contact" className="inline-block transition-all duration-200 hover:translate-x-1 hover:text-white">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold uppercase tracking-wide text-white/95">
              Contact
            </h4>

            <div className="mt-4 space-y-2 text-sm text-white/90">
              <p>{CONTACT.phone}</p>
              <p>{CONTACT.email}</p>
              <p>WhatsApp Available</p>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-white/20 pt-6 text-center text-sm text-white/75">
          © {new Date().getFullYear()} {SITE_NAME}. All rights reserved.
        </div>
      </div>
    </footer>
  )
}

export default Footer


