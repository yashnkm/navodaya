import { useState, useEffect, Suspense, lazy } from 'react';

// Lazy load pages for code splitting
const HomePage = lazy(() => import('../pages/HomePage'));
const AboutPage = lazy(() => import('../pages/AboutPage'));
const ServicesPage = lazy(() => import('../pages/ServicesPage'));
const GalleryPage = lazy(() => import('../pages/GalleryPage'));
const TestimonialsPage = lazy(() => import('../pages/TestimonialsPage'));

const Router = () => {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(window.location.pathname);
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Function to navigate to different pages
  const navigate = (path: string) => {
    window.history.pushState({}, '', path);
    setCurrentPath(path);
  };

  // Make navigate function globally available
  useEffect(() => {
    (window as any).navigateTo = navigate;
  }, []);

  // Route rendering logic
  const renderPage = () => {
    switch (currentPath) {
      case '/about':
        return <AboutPage />;
      case '/services':
        return <ServicesPage />;
      case '/gallery':
        return <GalleryPage />;
      case '/testimonials':
        return <TestimonialsPage />;
      case '/':
      default:
        return <HomePage />;
    }
  };

  return (
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50/30 to-white">
        <div className="text-center">
          <div className="w-12 h-12 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600 font-medium">Loading...</p>
        </div>
      </div>
    }>
      {renderPage()}
    </Suspense>
  );
};

export default Router;