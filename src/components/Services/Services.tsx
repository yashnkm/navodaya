import { useState } from 'react';
import type { ReactElement } from 'react';

// Service Icons as SVG components
const AsthmaIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
    <path d="M12 22c4-2 8-6 8-12V5l-8-3-8 3v5c0 6 4 10 8 12z" />
    <path d="M12 8v4" />
    <path d="M12 16h.01" />
  </svg>
);

const COPDIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
    <path d="M6.5 6.5c1.5-1.5 4-1.5 4 1s-2 3-2 5c0 1.5 1 2 2 2" />
    <path d="M17.5 6.5c-1.5-1.5-4-1.5-4 1s2 3 2 5c0 1.5-1 2-2 2" />
    <path d="M12 2v4" />
    <path d="M12 18v4" />
    <circle cx="12" cy="12" r="2" />
  </svg>
);

const ILDIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
    <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2" />
    <path d="M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
    <path d="M9 14l2 2 4-4" />
  </svg>
);

const PFTIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
    <path d="M3 3v18h18" />
    <path d="M7 16l4-8 4 5 5-9" />
  </svg>
);

const PneumoniaIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
    <path d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
  </svg>
);

const LungCancerIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
    <circle cx="11" cy="11" r="8" />
    <path d="m21 21-4.3-4.3" />
    <path d="M11 8v6" />
    <path d="M8 11h6" />
  </svg>
);

const PleuralEffusionIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
    <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z" />
  </svg>
);

const SleepApneaIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
    <path d="M14 10h.01" />
    <path d="M10 14a2 2 0 0 0 4 0" />
  </svg>
);

const SleepStudyIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
    <path d="M2 12h4l3-9 4 18 3-9h4" />
    <path d="M20.354 15.354A9 9 0 018.646 3.646" />
  </svg>
);

const CriticalCareIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
    <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
  </svg>
);

// Check Icon for bullet points
const CheckIcon = () => (
  <svg className="w-5 h-5 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

// Arrow Icons
const ChevronLeft = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
  </svg>
);

const ChevronRight = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
  </svg>
);

interface Service {
  id: string;
  icon: ReactElement;
  title: string;
  shortTitle: string;
  description: string;
  features: string[];
  image: string;
}

const Services = () => {
  const services: Service[] = [
    {
      id: 'asthma',
      icon: <AsthmaIcon />,
      title: 'Asthma Management',
      shortTitle: 'Asthma',
      description: 'Comprehensive asthma care at Navodaya Chest Care, where our expert pulmonologist specializes in diagnosing and managing all types of asthma with precision and personalized care. Trust Dr. Vishnudas Telbhare for exceptional asthma treatment tailored to your individual needs.',
      features: [
        'Expert diagnosis and severity assessment.',
        'Personalized inhaler therapy optimization.',
        'Trigger identification and avoidance strategies.',
        'Emergency action plans for asthma attacks.'
      ],
      image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=800&q=80'
    },
    {
      id: 'copd',
      icon: <COPDIcon />,
      title: 'COPD Treatment',
      shortTitle: 'COPD',
      description: 'Expert management of Chronic Obstructive Pulmonary Disease at Navodaya Chest Care. Our comprehensive approach includes medication optimization, pulmonary rehabilitation guidance, and oxygen therapy to improve your quality of life.',
      features: [
        'Advanced COPD staging and assessment.',
        'Medication and bronchodilator optimization.',
        'Pulmonary rehabilitation programs.',
        'Long-term oxygen therapy management.'
      ],
      image: 'https://images.unsplash.com/photo-1631815588090-d4bfec5b1ccb?w=800&q=80'
    },
    {
      id: 'ild',
      icon: <ILDIcon />,
      title: 'Interstitial Lung Disease',
      shortTitle: 'ILD',
      description: 'Specialized diagnosis and treatment of Interstitial Lung Disease (ILD) including pulmonary fibrosis, sarcoidosis, and other diffuse parenchymal lung diseases. Dr. Telbhare provides comprehensive ILD management with advanced diagnostic evaluation and personalized treatment plans.',
      features: [
        'HRCT-guided diagnosis and staging.',
        'Antifibrotic therapy for pulmonary fibrosis.',
        'Immunosuppressive treatment when indicated.',
        'Long-term disease monitoring and supportive care.'
      ],
      image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=800&q=80'
    },
    {
      id: 'pft',
      icon: <PFTIcon />,
      title: 'Pulmonary Function Tests',
      shortTitle: 'PFT',
      description: 'State-of-the-art spirometry and pulmonary function testing to accurately assess your lung capacity, diagnose respiratory conditions, and monitor treatment progress with precision diagnostic tools.',
      features: [
        'Advanced spirometry testing.',
        'Lung volume measurements.',
        'Diffusion capacity assessment.',
        'Pre and post-bronchodilator studies.'
      ],
      image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&q=80'
    },
    {
      id: 'pneumonia',
      icon: <PneumoniaIcon />,
      title: 'Pneumonia Treatment',
      shortTitle: 'Pneumonia',
      description: 'Expert diagnosis and treatment of all types of pneumonia including community-acquired, hospital-acquired, and aspiration pneumonia. Our evidence-based approach ensures accurate pathogen identification and targeted antibiotic therapy for optimal recovery.',
      features: [
        'Accurate diagnosis with imaging and labs.',
        'Targeted antibiotic therapy.',
        'Severe pneumonia and ICU management.',
        'Post-pneumonia recovery and follow-up.'
      ],
      image: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?w=800&q=80'
    },
    {
      id: 'lung-cancer',
      icon: <LungCancerIcon />,
      title: 'Lung Cancer',
      shortTitle: 'Lung Cancer',
      description: 'Comprehensive lung cancer evaluation, early detection, and coordinated treatment planning. Dr. Telbhare provides expert bronchoscopic evaluation, staging, and works closely with oncology teams to ensure the best treatment outcomes for patients.',
      features: [
        'Early detection and screening.',
        'Bronchoscopic biopsy and diagnosis.',
        'Staging and treatment coordination.',
        'Supportive pulmonary care during treatment.'
      ],
      image: 'https://images.unsplash.com/photo-1551190822-a9333d879b1f?w=800&q=80'
    },
    {
      id: 'pleural-effusion',
      icon: <PleuralEffusionIcon />,
      title: 'Pleural Effusion',
      shortTitle: 'Pleural Effusion',
      description: 'Expert management of pleural effusion including diagnostic thoracentesis, pleural fluid analysis, and therapeutic drainage. We identify the underlying cause and provide targeted treatment to prevent recurrence.',
      features: [
        'Diagnostic thoracentesis and fluid analysis.',
        'Therapeutic pleural drainage.',
        'Identification of underlying cause.',
        'Intercostal drain and pleurodesis when needed.'
      ],
      image: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?w=800&q=80'
    },
    {
      id: 'osa',
      icon: <SleepApneaIcon />,
      title: 'Obstructive Sleep Apnea',
      shortTitle: 'Sleep Apnea',
      description: 'Diagnosis and treatment of Obstructive Sleep Apnea (OSA) — a condition causing repeated breathing interruptions during sleep. We offer comprehensive evaluation, CPAP/BiPAP therapy initiation, and ongoing management for better sleep quality and health.',
      features: [
        'Comprehensive sleep disorder evaluation.',
        'CPAP/BiPAP therapy and titration.',
        'Device fitting and compliance support.',
        'Lifestyle modification guidance.'
      ],
      image: 'https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?w=800&q=80'
    },
    {
      id: 'sleep-study',
      icon: <SleepStudyIcon />,
      title: 'Sleep Study',
      shortTitle: 'Sleep Study',
      description: 'Comprehensive polysomnography (sleep study) to diagnose sleep apnea, insomnia, restless leg syndrome, and other sleep disorders. Our sleep testing helps identify the exact nature and severity of your sleep condition for targeted treatment.',
      features: [
        'Overnight polysomnography testing.',
        'Home sleep testing options.',
        'CPAP titration studies.',
        'Detailed sleep report and analysis.'
      ],
      image: 'https://images.unsplash.com/photo-1631815588090-d4bfec5b1ccb?w=800&q=80'
    },
    {
      id: 'critical-care',
      icon: <CriticalCareIcon />,
      title: 'Critical Care Pulmonology',
      shortTitle: 'Critical Care',
      description: 'Expert ICU ventilator management, respiratory failure treatment, and critical care services. Dr. Telbhare brings 8+ years of intensive care experience from Deenanath Mangeshkar Hospital.',
      features: [
        'Ventilator management expertise.',
        'Respiratory failure treatment.',
        'Post-ICU pulmonary rehabilitation.',
        'Weaning protocols and recovery.'
      ],
      image: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?w=800&q=80'
    }
  ];

  const [activeService, setActiveService] = useState(0);
  const [startIndex, setStartIndex] = useState(0);
  const visibleTabs = 4;

  const handlePrevious = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - 1);
    }
  };

  const handleNext = () => {
    if (startIndex < services.length - visibleTabs) {
      setStartIndex(startIndex + 1);
    }
  };

  const visibleServices = services.slice(startIndex, startIndex + visibleTabs);
  const currentService = services[activeService];

  return (
    <section id="service" className="section-padding bg-teal-50/30">
      <div className="container-custom">
        {/* Section Header */}
        <div className="flex items-start justify-between mb-6 sm:mb-10">
          <div>
            <p className="text-teal-600 font-lato font-medium text-base sm:text-lg mb-1 relative inline-block">
              Our Services
              <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-teal-600"></span>
            </p>
            <h2 className="font-montserrat font-bold text-2xl sm:text-3xl md:text-4xl text-oxford-blue-1 mt-3">
              What We Offer
            </h2>
          </div>

          {/* Navigation Arrows - Desktop only (controls tab carousel) */}
          <div className="hidden md:flex items-center gap-2">
            <button
              onClick={handlePrevious}
              disabled={startIndex === 0}
              className={`w-10 h-10 rounded-full border-2 flex items-center justify-center transition-all duration-200 ${
                startIndex === 0
                  ? 'border-gray-200 text-gray-300 cursor-not-allowed'
                  : 'border-gray-300 text-gray-600 hover:border-teal-600 hover:text-teal-600'
              }`}
            >
              <ChevronLeft />
            </button>
            <button
              onClick={handleNext}
              disabled={startIndex >= services.length - visibleTabs}
              className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200 ${
                startIndex >= services.length - visibleTabs
                  ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                  : 'bg-teal-600 text-white hover:bg-teal-700'
              }`}
            >
              <ChevronRight />
            </button>
          </div>
        </div>

        {/* Service Tabs - Desktop */}
        <div className="hidden md:flex flex-wrap gap-3 mb-10">
          {visibleServices.map((service, index) => {
            const actualIndex = startIndex + index;
            const isActive = activeService === actualIndex;

            return (
              <button
                key={service.id}
                onClick={() => setActiveService(actualIndex)}
                className={`flex items-center gap-3 px-5 py-3 rounded-lg border-2 transition-all duration-300 ${
                  isActive
                    ? 'border-teal-600 bg-teal-50 text-teal-700'
                    : 'border-gray-200 bg-white text-oxford-blue-1 hover:border-teal-300 hover:bg-teal-50/50'
                }`}
              >
                <span className={`${isActive ? 'text-teal-600' : 'text-teal-500'}`}>
                  {service.icon}
                </span>
                <span className="font-medium">{service.shortTitle}</span>
              </button>
            );
          })}
        </div>

        {/* Mobile Tab Selector */}
        <div className="md:hidden mb-6">
          <div className="flex items-center gap-2">
            <button
              onClick={() => setActiveService(prev => Math.max(0, prev - 1))}
              disabled={activeService === 0}
              className={`w-10 h-10 rounded-full border-2 flex-shrink-0 flex items-center justify-center transition-all duration-200 ${
                activeService === 0
                  ? 'border-gray-200 text-gray-300 cursor-not-allowed'
                  : 'border-gray-300 text-gray-600 active:border-teal-600 active:text-teal-600'
              }`}
            >
              <ChevronLeft />
            </button>
            <select
              value={activeService}
              onChange={(e) => setActiveService(Number(e.target.value))}
              className="flex-1 p-3 border-2 border-gray-200 rounded-lg text-oxford-blue-1 font-medium focus:border-teal-600 focus:ring-2 focus:ring-teal-600/20 text-sm"
            >
              {services.map((service, index) => (
                <option key={service.id} value={index}>
                  {service.title}
                </option>
              ))}
            </select>
            <button
              onClick={() => setActiveService(prev => Math.min(services.length - 1, prev + 1))}
              disabled={activeService === services.length - 1}
              className={`w-10 h-10 rounded-full flex-shrink-0 flex items-center justify-center transition-all duration-200 ${
                activeService === services.length - 1
                  ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                  : 'bg-teal-600 text-white active:bg-teal-700'
              }`}
            >
              <ChevronRight />
            </button>
          </div>
        </div>

        {/* Service Content */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="grid lg:grid-cols-2 gap-0">
            {/* Image Section */}
            <div className="relative h-48 sm:h-64 lg:h-auto lg:min-h-[400px] bg-gray-100">
              <img
                src={currentService.image}
                alt={currentService.title}
                className="w-full h-full object-cover"
                onError={(e) => {
                  // Fallback to placeholder if image doesn't exist
                  (e.target as HTMLImageElement).src = '/assets/images/Gemini_Generated_Image_nqzj5qnqzj5qnqzj-removebg-preview.png';
                }}
              />
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent lg:hidden"></div>
            </div>

            {/* Content Section */}
            <div className="p-5 sm:p-8 lg:p-10">
              <h3 className="font-montserrat font-bold text-2xl md:text-3xl text-oxford-blue-1 mb-4">
                {currentService.title}
              </h3>

              <p className="text-sonic-silver leading-relaxed mb-6">
                {currentService.description}
              </p>

              {/* Features List */}
              <ul className="space-y-3 mb-8">
                {currentService.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="flex-shrink-0 mt-0.5">
                      <CheckIcon />
                    </span>
                    <span className="text-oxford-blue-1">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <a
                href="#appointment"
                className="inline-flex items-center gap-2 bg-teal-600 text-white font-semibold px-6 py-3 rounded-lg hover:bg-teal-700 transition-all duration-200 shadow-md hover:shadow-lg"
              >
                Book Schedule Now
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Service Indicator Dots (Mobile) */}
        <div className="flex justify-center gap-2 mt-6 lg:hidden">
          {services.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveService(index)}
              className={`w-2 h-2 rounded-full transition-all duration-200 ${
                activeService === index ? 'bg-teal-600 w-6' : 'bg-gray-300'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
