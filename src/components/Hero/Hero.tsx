import { useEffect, useRef } from 'react';
import gsap from 'gsap';

const Hero = () => {
  // Refs for GSAP animations
  const heroRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const desktopImageRef = useRef<HTMLDivElement>(null);

  // GSAP Animations - Fade in all elements
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate all opacity-0 elements inside heroRef
      const tl = gsap.timeline({ defaults: { ease: 'power2.out' } });

      // Fade in image first
      tl.fromTo(
        imageRef.current,
        { opacity: 0, scale: 0.9 },
        { opacity: 1, scale: 1, duration: 0.8 },
        0
      );

      if (desktopImageRef.current) {
        tl.fromTo(
          desktopImageRef.current,
          { opacity: 0 },
          { opacity: 1, duration: 1 },
          0.2
        );
      }

      // Animate all text elements with opacity-0
      tl.fromTo(
        heroRef.current?.querySelectorAll('.opacity-0') || [],
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.6, stagger: 0.1 },
        0.3
      );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={heroRef} className="relative min-h-screen lg:h-screen lg:min-h-[600px] lg:max-h-[900px] overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b lg:bg-gradient-to-r from-oxford-blue-1/95 via-oxford-blue-1/85 to-oxford-blue-1/70" />
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 right-20 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-20 left-20 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl" />
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="container-custom w-full">

          {/* ===== MOBILE LAYOUT ===== */}
          <div className="lg:hidden flex flex-col items-center pt-24 pb-10 gap-6">
            {/* Text Content - Top */}
            <div className="text-white text-center">
              <div
                className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-4 opacity-0"
              >
                <span className="w-2 h-2 bg-teal-400 rounded-full animate-pulse"></span>
                <span className="text-sm font-medium text-teal-300">Expert Respiratory Care</span>
              </div>

              <h1
                className="text-3xl sm:text-4xl font-bold leading-tight mb-3 opacity-0"
              >
                Breathe Better,
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-400">
                  Live Better
                </span>
              </h1>

              <p
                className="text-sm sm:text-base text-gray-300 mb-5 max-w-md mx-auto leading-relaxed opacity-0"
              >
                Expert pulmonary care with Dr. Vishnudas Telbhare.
                17+ years in asthma, COPD, sleep disorders & critical care.
              </p>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 max-w-sm mx-auto mb-6">
                <div className="text-center opacity-0">
                  <div className="text-2xl font-bold text-teal-400 mb-0.5">17+</div>
                  <div className="text-xs text-gray-400">Years Exp.</div>
                </div>
                <div className="text-center opacity-0">
                  <div className="text-2xl font-bold text-teal-400 mb-0.5">5000+</div>
                  <div className="text-xs text-gray-400">Patients</div>
                </div>
                <div className="text-center opacity-0">
                  <div className="text-2xl font-bold text-teal-400 mb-0.5">DNB</div>
                  <div className="text-xs text-gray-400">Jaslok Hospital</div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 mb-6 justify-center opacity-0">
                <a
                  href="#appointment"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-bold text-oxford-blue-1 bg-gradient-to-r from-teal-400 to-cyan-400 rounded-lg shadow-lg transition-all duration-300"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  Book Consultation
                </a>
                <a
                  href="#service"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-bold text-white border-2 border-white/30 rounded-lg backdrop-blur-sm transition-all duration-300"
                >
                  Explore Services
                </a>
              </div>
            </div>

            {/* Doctor Image - Rectangular */}
            <div
              ref={imageRef}
              className="w-full px-4 opacity-0"
            >
              <img
                className="w-full h-auto min-h-[350px] sm:min-h-[450px] object-cover object-top rounded-2xl shadow-2xl"
                src="/assets/images/DSC_0560.JPG"
                alt="Dr. Vishnudas Telbhare"
                loading="eager"
              />
            </div>
          </div>

          {/* ===== DESKTOP LAYOUT ===== */}
          <div className="hidden lg:grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Section - Content */}
            <div className="text-white">
              <div
                className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-6 opacity-0"
              >
                <span className="w-2 h-2 bg-teal-400 rounded-full animate-pulse"></span>
                <span className="text-sm font-medium text-teal-300">Expert Respiratory Care</span>
              </div>

              <h1
                className="text-6xl font-bold leading-tight mb-6 opacity-0"
              >
                Breathe Better,
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-400">
                  Live Better
                </span>
              </h1>

              <p
                className="text-xl text-gray-300 mb-8 max-w-xl leading-relaxed opacity-0"
              >
                Experience expert pulmonary care with Dr. Vishnudas Telbhare.
                17+ years of experience in asthma, COPD, sleep disorders, and critical care pulmonology.
              </p>

              <div className="flex gap-4 mb-10 opacity-0">
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

              <div className="grid grid-cols-3 gap-6 max-w-md">
                <div className="text-center opacity-0">
                  <div className="text-4xl font-bold text-teal-400 mb-1">17+</div>
                  <div className="text-sm text-gray-400">Years Experience</div>
                </div>
                <div className="text-center opacity-0">
                  <div className="text-4xl font-bold text-teal-400 mb-1">5000+</div>
                  <div className="text-sm text-gray-400">Patients Treated</div>
                </div>
                <div className="text-center opacity-0">
                  <div className="text-4xl font-bold text-teal-400 mb-1">DNB</div>
                  <div className="text-sm text-gray-400">Jaslok Hospital</div>
                </div>
              </div>
            </div>

            {/* Right Section - Doctor Image */}
            <div
              ref={desktopImageRef}
              className="relative opacity-0"
            >
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
    </section>
  );
};

export default Hero;
