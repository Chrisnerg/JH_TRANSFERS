import { Outlet, Link, useLocation } from "react-router";
import { Phone, Mail, MessageCircle } from "lucide-react";
import { BrandLogo } from "./BrandLogo";

export function Layout() {
  const location = useLocation();

  const isActive = (path: string) => {
    if (path === "/") {
      return location.pathname === "/";
    }
    return location.pathname.startsWith(path);
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Top Bar */}
      <div className="bg-teal-600 text-white py-2">
        <div className="container mx-auto px-4 flex flex-wrap justify-between items-center text-sm">
          <div className="flex flex-wrap gap-4">
            <a href="tel:+27123456789" className="flex items-center gap-2 hover:text-teal-100">
              <Phone className="h-4 w-4" />
              <span>+27 (0) 12 345 6789</span>
            </a>
            <a href="https://wa.me/27123456789" className="flex items-center gap-2 hover:text-teal-100">
              <MessageCircle className="h-4 w-4" />
              <span>WhatsApp</span>
            </a>
            <a href="mailto:info@shuttleservice.co.za" className="flex items-center gap-2 hover:text-teal-100">
              <Mail className="h-4 w-4" />
              <span>info@shuttleservice.co.za</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            <Link to="/" className="flex items-center">
              <BrandLogo variant="full" />
            </Link>

            <nav className="hidden md:flex items-center gap-8">
              <Link
                to="/"
                className={`transition-colors ${
                  isActive("/") ? "text-teal-600 font-semibold" : "text-gray-700 hover:text-teal-600"
                }`}
              >
                Home
              </Link>
              <Link
                to="/services"
                className={`transition-colors ${
                  isActive("/services") ? "text-teal-600 font-semibold" : "text-gray-700 hover:text-teal-600"
                }`}
              >
                Services
              </Link>
              <Link
                to="/about"
                className={`transition-colors ${
                  isActive("/about") ? "text-teal-600 font-semibold" : "text-gray-700 hover:text-teal-600"
                }`}
              >
                About
              </Link>
              <Link
                to="/contact"
                className={`transition-colors ${
                  isActive("/contact") ? "text-teal-600 font-semibold" : "text-gray-700 hover:text-teal-600"
                }`}
              >
                Contact
              </Link>
              <Link
                to="/contact"
                className="bg-teal-600 text-white px-6 py-2 rounded-md hover:bg-teal-700 transition-colors"
              >
                Get a Quote
              </Link>
            </nav>

            {/* Mobile Menu Button */}
            <button className="md:hidden text-gray-700">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      <main className="flex-1">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white">
        <div className="container mx-auto px-4 py-12">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <BrandLogo tone="light" variant="icon" className="mb-4" />
              <h3 className="text-lg font-semibold mb-2 tracking-wide">JH TRANSFERS</h3>
              <p className="text-gray-400 text-sm">
                South Africa's premier airport shuttle and tour service provider. Safe, reliable, and professional
                transportation since 2010.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link to="/services" className="text-gray-400 hover:text-white">
                    Our Services
                  </Link>
                </li>
                <li>
                  <Link to="/about" className="text-gray-400 hover:text-white">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="text-gray-400 hover:text-white">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Services</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>Airport Transfers</li>
                <li>Corporate Transport</li>
                <li>Tour Services</li>
                <li>Long Distance Trips</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Get In Touch</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li className="flex items-center gap-2">
                  <Phone className="h-4 w-4" />
                  <span>+27 (0) 12 345 6789</span>
                </li>
                <li className="flex items-center gap-2">
                  <MessageCircle className="h-4 w-4" />
                  <span>+27 (0) 82 348 0989</span>
                </li>
                <li className="flex items-center gap-2">
                  <Mail className="h-4 w-4" />
                  <span>info@shuttleservice.co.za</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
            <p>&copy; 2026 JH TRANSFERS. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
