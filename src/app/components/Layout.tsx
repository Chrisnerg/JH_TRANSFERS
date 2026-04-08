import { useEffect, useState } from "react";
import { Outlet, Link, useLocation } from "react-router";
import { Phone, Mail, MessageCircle, Menu, X } from "lucide-react";
import { BrandLogo } from "./BrandLogo";

export function Layout() {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

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
        <div className="container mx-auto px-4 text-xs sm:text-sm">
          <div className="flex flex-wrap items-center justify-center sm:justify-between gap-2 sm:gap-4">
            <a href="tel:+27123456789" className="flex items-center gap-2 hover:text-teal-100">
              <Phone className="h-4 w-4" />
              <span>+27 (0) 12 345 6789</span>
            </a>

            <a href="https://wa.me/27123456789" className="flex items-center gap-2 hover:text-teal-100">
              <MessageCircle className="h-4 w-4" />
              <span>WhatsApp</span>
            </a>

            <a
              href="mailto:info@shuttleservice.co.za"
              className="w-full sm:w-auto flex items-center justify-center sm:justify-start gap-2 hover:text-teal-100"
            >
              <Mail className="h-4 w-4" />
              <span className="truncate">info@shuttleservice.co.za</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            <button
              className="md:hidden text-gray-700"
              type="button"
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileMenuOpen}
              onClick={() => setMobileMenuOpen((prev) => !prev)}
            >
              {mobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
            </button>

            <Link to="/" className="flex items-center" aria-label="Go to home page">
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

            <div className="md:hidden w-7" aria-hidden="true"></div>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden border-t border-gray-200 bg-white shadow-md">
            <nav className="container mx-auto px-4 py-4 flex flex-col gap-3">
              <Link
                to="/"
                className={`py-1 ${isActive("/") ? "text-teal-600 font-semibold" : "text-gray-700"}`}
              >
                Home
              </Link>
              <Link
                to="/services"
                className={`py-1 ${isActive("/services") ? "text-teal-600 font-semibold" : "text-gray-700"}`}
              >
                Services
              </Link>
              <Link
                to="/about"
                className={`py-1 ${isActive("/about") ? "text-teal-600 font-semibold" : "text-gray-700"}`}
              >
                About
              </Link>
              <Link
                to="/contact"
                className={`py-1 ${isActive("/contact") ? "text-teal-600 font-semibold" : "text-gray-700"}`}
              >
                Contact
              </Link>
              <Link
                to="/contact"
                className="mt-1 inline-flex justify-center bg-teal-600 text-white px-4 py-2 rounded-md hover:bg-teal-700 transition-colors"
              >
                Get a Quote
              </Link>
            </nav>
          </div>
        )}
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
