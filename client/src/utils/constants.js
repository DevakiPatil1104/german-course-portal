export const SITE_NAME = 'German with Srushti'
export const SITE_URL = 'https://german-course-portal.vercel.app/'

export const CONTACT = {
  phone: '+91 70666 17585',
  email: 'srushti.kulkarni.pas09@gmail.com',
  whatsapp: '7066617585',
}

export const WHATSAPP_LINK = `https://wa.me/${CONTACT.whatsapp}?text=${encodeURIComponent(
  'Hi! I am interested in your German language courses.',
)}`

export const NAV_LINKS = [
  { to: '/', label: 'Home' },
  { to: '/courses', label: 'Courses' },
  { to: '/about', label: 'About' },
  { to: '/faq', label: 'FAQ' },
  { to: '/contact', label: 'Contact' },
]
