import { Outlet } from 'react-router-dom'
import Navbar from '../components/common/Navbar'
import Footer from '../components/common/Footer'
import WhatsAppButton from '../components/common/WhatsAppButton'
import CourseFinder from '../components/common/courseFinder'
import ScrollToTop from '../components/common/ScrollToTop'

function MainLayout() {
  return (
    <div className="bg-page-glow flex min-h-screen flex-col">
      <ScrollToTop />
      <Navbar />
      <main className="flex-1">
        <Outlet />
      </main>
      <CourseFinder />
      <Footer />
      <WhatsAppButton />
    </div>
  )
}

export default MainLayout
