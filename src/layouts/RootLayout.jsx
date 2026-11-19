import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar.jsx'
import Footer from '../components/Footer.jsx'

// ─────────────────────────────────────────────────────────────────────────
// SHARED SITE LAYOUT
// Renders the shared <Navbar /> above and <Footer /> below every routed
// page (via <Outlet />). This is the ONLY place Navbar/Footer should be
// rendered — individual pages (Home, About, Services, Pricing, Blog,
// Founder, Contact) must not import or render them themselves.
// ─────────────────────────────────────────────────────────────────────────
export default function RootLayout() {
  return (
    <div className="flex min-h-screen flex-col bg-bg">
      <Navbar />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
