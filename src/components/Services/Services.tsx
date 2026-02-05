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

const SleepApneaIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
    <path d="M14 10h.01" />
    <path d="M10 14a2 2 0 0 0 4 0" />
  </svg>
);

const PFTIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
    <path d="M3 3v18h18" />
    <path d="M7 16l4-8 4 5 5-9" />
  </svg>
);

const TBIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
    <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
    <path d="M12 5v14" />
    <path d="M5 12h14" />
  </svg>
);

const CriticalCareIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
    <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
  </svg>
);

const BronchoscopyIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
    <circle cx="11" cy="11" r="8" />
    <path d="m21 21-4.3-4.3" />
    <path d="M11 8v6" />
    <path d="M8 11h6" />
  </svg>
);

const LungInfectionIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
    <path d="M8 2v4" />
    <path d="M16 2v4" />
    <path d="M8 22v-4" />
    <path d="M16 22v-4" />
    <path d="M4 10c0-1.5.5-3 2-4s3-1 4-1c0 0 1 0 2 1s2 1 2 1c1 0 2.5 0 4 1s2 2.5 2 4c0 2-1 4-3 5s-4 1.5-5 2c-1-.5-3-1-5-2s-3-3-3-5z" />
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
      shortTitle: 'Asthma Care',
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
      shortTitle: 'COPD Care',
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
      id: 'sleep-apnea',
      icon: <SleepApneaIcon />,
      title: 'Sleep Apnea Care',
      shortTitle: 'Sleep Disorders',
      description: 'Diagnosis and treatment of sleep-related breathing disorders including Obstructive Sleep Apnea. We offer comprehensive sleep studies, CPAP/BiPAP therapy initiation, and ongoing management for better sleep quality.',
      features: [
        'Comprehensive sleep disorder evaluation.',
        'Home and lab-based sleep studies.',
        'CPAP/BiPAP therapy and titration.',
        'Lifestyle modification guidance.'
      ],
      image: 'https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?w=800&q=80'
    },
    {
      id: 'pft',
      icon: <PFTIcon />,
      title: 'Pulmonary Function Tests',
      shortTitle: 'Lung Testing',
      description: 'State-of-the-art spirometry and pulmonary function testing to accurately assess your lung capacity, diagnose respiratory conditions, and monitor treatment progress with precision diagnostic tools.',
      features: [
        'Advanced spirometry testing.',
        'Lung volume measurements.',
        'Diffusion capacity assessment.',
        'Pre and post-bronchodilator studies.'
      ],
      image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=800&q=80'
    },
    {
      id: 'tb',
      icon: <TBIcon />,
      title: 'Tuberculosis Treatment',
      shortTitle: 'TB Care',
      description: 'Complete tuberculosis management including early diagnosis, DOTS therapy supervision, MDR-TB treatment, and contact screening. Our experienced team ensures proper treatment completion and monitoring.',
      features: [
        'Early TB detection and diagnosis.',
        'DOTS therapy supervision.',
        'MDR-TB specialized treatment.',
        'Contact tracing and screening.'
      ],
      image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&q=80'
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
    },
    {
      id: 'bronchoscopy',
      icon: <BronchoscopyIcon />,
      title: 'Bronchoscopy Procedures',
      shortTitle: 'Bronchoscopy',
      description: 'Diagnostic and therapeutic bronchoscopy procedures for airway examination, tissue biopsy, and treatment of various lung conditions. Performed with precision and patient comfort as priority.',
      features: [
        'Diagnostic airway examination.',
        'Tissue biopsy and sampling.',
        'Therapeutic interventions.',
        'Foreign body removal.'
      ],
      image: 'https://images.unsplash.com/photo-1551190822-a9333d879b1f?w=800&q=80'
    },
    {
      id: 'lung-infections',
      icon: <LungInfectionIcon />,
      title: 'Lung Infections',
      shortTitle: 'Infections',
      description: 'Evidence-based treatment of pneumonia, bronchitis, lung abscess, and other respiratory infections. Our approach combines accurate diagnosis with targeted treatment for optimal recovery.',
      features: [
        'Pneumonia diagnosis and treatment.',
        'Acute and chronic bronchitis care.',
        'Lung abscess management.',
        'Post-infection recovery support.'
      ],
      image: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?w=800&q=80'
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
        <div className="flex items-start justify-between mb-10">
          <div>
            <p className="text-teal-600 font-lato font-medium text-lg mb-1 relative inline-block">
              Our Services
              <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-teal-600"></span>
            </p>
            <h2 className="font-montserrat font-bold text-3xl md:text-4xl text-oxford-blue-1 mt-3">
              What We Offer
            </h2>
          </div>

          {/* Navigation Arrows */}
          <div className="flex items-center gap-2">
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

        {/* Service Tabs */}
        <div className="flex flex-wrap gap-3 mb-10">
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
        <div className="md:hidden mb-8">
          <select
            value={activeService}
            onChange={(e) => setActiveService(Number(e.target.value))}
            className="w-full p-4 border-2 border-gray-200 rounded-lg text-oxford-blue-1 font-medium focus:border-teal-600 focus:ring-2 focus:ring-teal-600/20"
          >
            {services.map((service, index) => (
              <option key={service.id} value={index}>
                {service.title}
              </option>
            ))}
          </select>
        </div>

        {/* Service Content */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="grid lg:grid-cols-2 gap-0">
            {/* Image Section */}
            <div className="relative h-64 lg:h-auto lg:min-h-[400px] bg-gray-100">
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
            <div className="p-8 lg:p-10">
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
