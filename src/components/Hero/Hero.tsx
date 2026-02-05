import { useEffect, useState, useRef } from 'react';
import gsap from 'gsap';

const Hero = () => {
  const [scrollY, setScrollY] = useState(0);

  // Refs for GSAP animations
  const heroRef = useRef<HTMLDivElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const descRef = useRef<HTMLParagraphElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // GSAP Animations - Fade in from bottom
  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power2.out' } });

      // Text elements fade in from bottom
      tl.fromTo(
        badgeRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.6 }
      );

      tl.fromTo(
        headingRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.7 },
        '-=0.3'
      );

      tl.fromTo(
        descRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.6 },
        '-=0.4'
      );

      tl.fromTo(
        buttonsRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.6 },
        '-=0.3'
      );

      tl.fromTo(
        statsRef.current?.children || [],
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.5, stagger: 0.1 },
        '-=0.3'
      );

      // Simple fade in for image
      tl.fromTo(
        imageRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 1 },
        0.2
      );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={heroRef} className="relative h-screen min-h-[600px] max-h-[900px] overflow-hidden">
      {/* Parallax Background */}
      <div
        className="absolute inset-0 z-0"
        style={{
          transform: `translateY(${scrollY * 0.5}px)`,
        }}
      >
        {/* Background Image with Overlay */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('/assets/images/hero-bg.jpg')`,
          }}
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-oxford-blue-1/95 via-oxford-blue-1/80 to-oxford-blue-1/60" />

        {/* Decorative Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div
            className="absolute top-20 right-20 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl"
            style={{ transform: `translateY(${scrollY * 0.2}px)` }}
          />
          <div
            className="absolute bottom-20 left-20 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl"
            style={{ transform: `translateY(${scrollY * 0.3}px)` }}
          />
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 h-full flex items-start pt-20 lg:pt-28">
        <div className="container-custom w-full">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left Section - Content */}
            <div
              className="text-white"
              style={{
                transform: `translateY(${scrollY * 0.1}px)`,
                opacity: 1 - scrollY / 800,
              }}
            >
              <div
                ref={badgeRef}
                className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-6 opacity-0"
              >
                <span className="w-2 h-2 bg-teal-400 rounded-full animate-pulse"></span>
                <span className="text-sm font-medium text-teal-300">Expert Respiratory Care</span>
              </div>

              <h1
                ref={headingRef}
                className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6 opacity-0"
              >
                Breathe Better,
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-400">
                  Live Better
                </span>
              </h1>

              <p
                ref={descRef}
                className="text-lg sm:text-xl text-gray-300 mb-8 max-w-xl leading-relaxed opacity-0"
              >
                Experience expert pulmonary care with Dr. Vishnudas Telbhare.
                17+ years of experience in asthma, COPD, sleep disorders, and critical care pulmonology.
              </p>

              {/* CTA Buttons */}
              <div ref={buttonsRef} className="flex flex-col sm:flex-row gap-4 mb-10 opacity-0">
                <a
                  href="#appointment"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-bold text-oxford-blue-1 bg-gradient-to-r from-teal-400 to-cyan-400 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 hover:scale-105"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  Book Consultation
                </a>
                <a
                  href="#service"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-bold text-white border-2 border-white/30 rounded-lg backdrop-blur-sm hover:bg-white/10 hover:border-white/50 transition-all duration-300"
                >
                  Explore Services
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>

              {/* Stats Row - Fixed Alignment */}
              <div ref={statsRef} className="grid grid-cols-3 gap-6 max-w-md">
                <div className="text-center opacity-0">
                  <div className="text-3xl sm:text-4xl font-bold text-teal-400 mb-1">17+</div>
                  <div className="text-sm text-gray-400">Years Experience</div>
                </div>
                <div className="text-center opacity-0">
                  <div className="text-3xl sm:text-4xl font-bold text-teal-400 mb-1">5000+</div>
                  <div className="text-sm text-gray-400">Patients Treated</div>
                </div>
                <div className="text-center opacity-0">
                  <div className="text-3xl sm:text-4xl font-bold text-teal-400 mb-1">DNB</div>
                  <div className="text-sm text-gray-400">Jaslok Hospital</div>
                </div>
              </div>
            </div>

            {/* Right Section - Doctor Image */}
            <div
              ref={imageRef}
              className="hidden lg:block relative opacity-0"
              style={{
                transform: `translateY(${scrollY * 0.15}px)`,
              }}
            >
              <div className="relative">
                <img
                  className="w-full h-auto min-h-[550px] max-h-[700px] object-cover object-top rounded-2xl shadow-2xl"
                  src="/assets/images/DSC_0560.JPG"
                  alt="Dr. Vishnudas Telbhare - Pulmonologist at Navodaya Chest Care"
                  loading="eager"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
