import { useState, memo } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleNavigation = (path: string) => {
    if (path.startsWith('#') && window.location.pathname === '/') {
      // If it's a hash link and we're on home page, scroll to section
      const element = document.querySelector(path);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else if (path.startsWith('#')) {
      // If it's a hash link but we're not on home page, go to home page first
      (window as any).navigateTo?.('/');
      setTimeout(() => {
        const element = document.querySelector(path);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      // Regular page navigation
      (window as any).navigateTo?.(path);
    }
    setIsMenuOpen(false);
  };

  return (
    <>
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm border-b border-gray-100">
        <div className="container-custom">
          <div className="flex items-center justify-between py-4">
            {/* Logo */}
            <div className="flex items-center">
              <img
                src="/assets/images/navodaya-logo.png"
                alt="Navodaya Chest Care Clinic"
                className="h-14 w-auto mr-3"
              />
              <div className="flex flex-col">
                <a href="#" className="text-xl font-montserrat font-bold text-teal-600">
                  Navodaya Chest Care
                </a>
                <span className="text-xs text-gray-500 hidden sm:block">Dr. Vishnudas Telbhare</span>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              <button 
                onClick={() => handleNavigation('/')}
                className="text-oxford-blue-1 hover:text-carolina-blue font-medium transition-colors duration-200"
              >
                Home
              </button>
              <button
                onClick={() => handleNavigation('/services')}
                className="text-oxford-blue-1 hover:text-carolina-blue font-medium transition-colors duration-200"
              >
                Services
              </button>
              <button 
                onClick={() => handleNavigation('/about')}
                className="text-oxford-blue-1 hover:text-carolina-blue font-medium transition-colors duration-200"
              >
                About Us
              </button>
              <button
                onClick={() => handleNavigation('/gallery')}
                className="text-oxford-blue-1 hover:text-carolina-blue font-medium transition-colors duration-200"
              >
                Gallery
              </button>
            </nav>

            {/* CTA Button */}
            <div className="hidden lg:flex items-center">
              <a
                href="https://wa.me/917507468918?text=Hi%20Navodaya%20Chest%20Care,%20I%20would%20like%20to%20book%20an%20appointment"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                Book Appointment
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="lg:hidden text-oxford-blue-1 hover:text-carolina-blue transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              <svg 
                className="w-6 h-6" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                {isMenuOpen ? (
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth="2" 
                    d="M6 18L18 6M6 6l12 12" 
                  />
                ) : (
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth="2" 
                    d="M4 6h16M4 12h16M4 18h16" 
                  />
                )}
              </svg>
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="lg:hidden border-t border-gray-100 bg-white/95 backdrop-blur-sm">
              <div className="py-4">
                <nav className="flex flex-col space-y-4">
                  <button 
                    onClick={() => handleNavigation('/')}
                    className="text-oxford-blue-1 hover:text-carolina-blue font-medium transition-colors text-left"
                  >
                    Home
                  </button>
                  <button
                    onClick={() => handleNavigation('/services')}
                    className="text-oxford-blue-1 hover:text-carolina-blue font-medium transition-colors text-left"
                  >
                    Services
                  </button>
                  <button 
                    onClick={() => handleNavigation('/about')}
                    className="text-oxford-blue-1 hover:text-carolina-blue font-medium transition-colors text-left"
                  >
                    About Us
                  </button>
                  <button
                    onClick={() => handleNavigation('/gallery')}
                    className="text-oxford-blue-1 hover:text-carolina-blue font-medium transition-colors text-left"
                  >
                    Gallery
                  </button>
                  <a
                    href="https://wa.me/917507468918?text=Hi%20Navodaya%20Chest%20Care,%20I%20would%20like%20to%20book%20an%20appointment"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary w-fit"
                  >
                    Book Appointment
                  </a>
                </nav>
              </div>
            </div>
          )}
        </div>
      </header>
    </>
  );
};

export default memo(Header);