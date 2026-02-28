import { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { companyInfo } from '../../data/siteData';

const navLinks = [
  { path: '/', label: 'Home' },
  { path: '/about', label: 'About Us' },
  {
    path: '/services',
    label: 'Services',
    children: [
      { path: '/services/seo-services', label: 'SEO Services' },
      { path: '/services/ppc-services', label: 'PPC Services' },
      { path: '/services/social-media-management', label: 'Social Media' },
      { path: '/services/web-designing', label: 'Web Design' },
      { path: '/services/guest-posting', label: 'Guest Posting' },
      { path: '/services/link-building', label: 'Link Building' },
      { path: '/services/keyword-ranking', label: 'Keyword Ranking' },
      { path: '/services/domain-authority', label: 'Domain Authority' },
    ],
  },
  { path: '/training', label: 'Training' },
  { path: '/portfolio', label: 'Portfolio' },
  { path: '/contact', label: 'Contact' },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileOpen(false);
    setActiveDropdown(null);
  }, [location]);

  useEffect(() => {
    document.body.style.overflow = isMobileOpen ? 'hidden' : '';
  }, [isMobileOpen]);

  return (
    <>
      {/* Top Bar */}
      <div className="bg-dark text-white text-sm hidden md:block">
        <div className="container-custom flex justify-between items-center py-2">
          <div className="flex items-center gap-6">
            <a href={`mailto:${companyInfo.email}`} className="flex items-center gap-2 hover:text-accent transition-colors">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
              {companyInfo.email}
            </a>
            <a href={`tel:${companyInfo.phone}`} className="flex items-center gap-2 hover:text-accent transition-colors">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
              {companyInfo.phone}
            </a>
          </div>
          <div className="flex items-center gap-4">
            {Object.entries(companyInfo.social).map(([platform, url]) => (
              <a key={platform} href={url} target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors capitalize">
                {platform}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-white shadow-sm'}`}>
        <div className="container-custom flex items-center justify-between h-[72px]">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 shrink-0">
            <img src="/logo-4.png" alt="iTech Manthra" className="h-10" />
            <span className="font-heading font-bold text-xl text-dark hidden sm:block">
              iTech <span className="text-primary">Manthra</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <div
                key={link.path}
                className="relative"
                onMouseEnter={() => link.children && setActiveDropdown(link.path)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <NavLink
                  to={link.path}
                  className={({ isActive }) =>
                    `px-4 py-2 rounded-lg text-[0.92rem] font-medium transition-all duration-200 flex items-center gap-1 ${
                      isActive ? 'text-primary bg-primary/5' : 'text-gray-700 hover:text-primary hover:bg-gray-50'
                    }`
                  }
                  end={link.path === '/'}
                >
                  {link.label}
                  {link.children && (
                    <svg className={`w-4 h-4 transition-transform ${activeDropdown === link.path ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  )}
                </NavLink>

                {/* Dropdown */}
                {link.children && activeDropdown === link.path && (
                  <div className="absolute top-full left-0 mt-1 w-56 bg-white rounded-xl shadow-2xl border border-gray-100 py-2 z-50 animate-in fade-in slide-in-from-top-2 duration-200">
                    {link.children.map((child) => (
                      <NavLink
                        key={child.path}
                        to={child.path}
                        className={({ isActive }) =>
                          `block px-4 py-2.5 text-sm transition-colors ${
                            isActive ? 'text-primary bg-primary/5 font-medium' : 'text-gray-600 hover:text-primary hover:bg-gray-50'
                          }`
                        }
                      >
                        {child.label}
                      </NavLink>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* CTA + Mobile Toggle */}
          <div className="flex items-center gap-3">
            <Link to="/contact" className="btn-primary hidden md:inline-flex text-sm !py-2.5 !px-5">
              Get A Quote
            </Link>
            <button
              onClick={() => setIsMobileOpen(!isMobileOpen)}
              className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors bg-transparent border-0"
              aria-label="Toggle menu"
            >
              <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMobileOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileOpen && (
          <div className="lg:hidden fixed inset-0 top-[72px] bg-white z-40 overflow-y-auto">
            <nav className="container-custom py-6 flex flex-col gap-1">
              {navLinks.map((link) => (
                <div key={link.path}>
                  {link.children ? (
                    <>
                      <button
                        onClick={() => setActiveDropdown(activeDropdown === link.path ? null : link.path)}
                        className="flex items-center justify-between w-full px-4 py-3 text-gray-700 font-medium rounded-lg hover:bg-gray-50 bg-transparent border-0 text-left"
                      >
                        {link.label}
                        <svg className={`w-5 h-5 transition-transform ${activeDropdown === link.path ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>
                      {activeDropdown === link.path && (
                        <div className="ml-4 flex flex-col gap-1 mt-1">
                          <NavLink to="/services" end className="px-4 py-2.5 text-sm text-gray-600 hover:text-primary rounded-lg hover:bg-gray-50">
                            All Services
                          </NavLink>
                          {link.children.map((child) => (
                            <NavLink
                              key={child.path}
                              to={child.path}
                              className="px-4 py-2.5 text-sm text-gray-600 hover:text-primary rounded-lg hover:bg-gray-50"
                            >
                              {child.label}
                            </NavLink>
                          ))}
                        </div>
                      )}
                    </>
                  ) : (
                    <NavLink
                      to={link.path}
                      className={({ isActive }) =>
                        `block px-4 py-3 rounded-lg font-medium ${isActive ? 'text-primary bg-primary/5' : 'text-gray-700 hover:bg-gray-50'}`
                      }
                      end={link.path === '/'}
                    >
                      {link.label}
                    </NavLink>
                  )}
                </div>
              ))}
              <Link to="/contact" className="btn-primary mt-4 justify-center">
                Get A Quote
              </Link>
            </nav>
          </div>
        )}
      </header>
    </>
  );
}
