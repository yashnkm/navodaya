import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';

const ServicesPage = () => {
  // Diagnostic Services
  const diagnosticServices = [
    {
      id: 1,
      title: "Pulmonary Function Tests (PFT)",
      description: "Comprehensive lung function testing to assess breathing capacity and diagnose respiratory conditions.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      subServices: [
        "Spirometry: Measure lung capacity and airflow",
        "Peak Flow Testing: Monitor asthma control",
        "Diffusion Capacity: Assess gas exchange efficiency"
      ]
    },
    {
      id: 2,
      title: "Bronchoscopy",
      description: "Diagnostic and therapeutic procedures for direct visualization of airways.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
        </svg>
      ),
      subServices: [
        "Diagnostic Bronchoscopy: Airway examination",
        "Bronchoalveolar Lavage (BAL): Sample collection",
        "Bronchial Biopsy: Tissue diagnosis"
      ]
    },
    {
      id: 3,
      title: "Sleep Study (Polysomnography)",
      description: "Comprehensive sleep testing to diagnose sleep apnea and other sleep disorders.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
        </svg>
      ),
      subServices: [
        "Overnight Sleep Monitoring",
        "Home Sleep Testing",
        "CPAP Titration Studies"
      ]
    },
    {
      id: 4,
      title: "Chest Imaging Interpretation",
      description: "Expert analysis of chest X-rays, CT scans, and HRCT for accurate diagnosis.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      id: 5,
      title: "Allergy Testing",
      description: "Identify respiratory allergens causing asthma and allergic rhinitis.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      ),
      subServices: [
        "Skin Prick Tests",
        "IgE Blood Tests",
        "Respiratory Allergen Panels"
      ]
    },
    {
      id: 6,
      title: "Arterial Blood Gas (ABG)",
      description: "Measure oxygen and carbon dioxide levels in blood for respiratory assessment.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      )
    }
  ];

  // Treatment Services
  const treatmentServices = [
    {
      id: 1,
      title: "Asthma Management",
      description: "Comprehensive asthma care from diagnosis to long-term control.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      subServices: [
        "Inhaler Therapy Optimization",
        "Asthma Action Plans",
        "Severe Asthma Biologics"
      ]
    },
    {
      id: 2,
      title: "COPD Treatment",
      description: "Expert management of Chronic Obstructive Pulmonary Disease.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      ),
      subServices: [
        "Medication Optimization",
        "Pulmonary Rehabilitation",
        "Oxygen Therapy"
      ]
    },
    {
      id: 3,
      title: "Sleep Apnea Treatment",
      description: "Diagnosis and treatment of obstructive and central sleep apnea.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
        </svg>
      ),
      subServices: [
        "CPAP/BiPAP Therapy",
        "Device Fitting & Adjustment",
        "Lifestyle Modification"
      ]
    },
    {
      id: 4,
      title: "Tuberculosis (TB) Treatment",
      description: "Complete TB care including drug-resistant TB management.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0016.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 002 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
        </svg>
      ),
      subServices: [
        "DOTS Therapy",
        "MDR-TB Management",
        "Contact Screening"
      ]
    },
    {
      id: 5,
      title: "Lung Infection Treatment",
      description: "Treatment of pneumonia, bronchitis, and other respiratory infections.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
        </svg>
      )
    },
    {
      id: 6,
      title: "Critical Care Pulmonology",
      description: "ICU ventilator management and respiratory failure treatment.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M22 12h-4l-3 9L9 3l-3 9H2" />
        </svg>
      ),
      subServices: [
        "Ventilator Management",
        "Weaning Protocols",
        "Tracheostomy Care"
      ]
    },
    {
      id: 7,
      title: "Interstitial Lung Disease (ILD)",
      description: "Diagnosis and treatment of pulmonary fibrosis and other ILDs.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
        </svg>
      ),
      subServices: [
        "Antifibrotic Therapy",
        "Disease Monitoring",
        "Supportive Care"
      ]
    },
    {
      id: 8,
      title: "Smoking Cessation Program",
      description: "Comprehensive support to quit smoking and improve lung health.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" />
        </svg>
      ),
      subServices: [
        "Counseling",
        "Nicotine Replacement Therapy",
        "Behavioral Support"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section with Breadcrumb */}
      <section
        className="relative py-24 bg-gradient-to-r from-teal-700 to-teal-900"
      >
        <div className="container-custom text-center text-white">
          <nav className="mb-6">
            <ol className="flex justify-center items-center space-x-2 text-sm">
              <li>
                <a href="/" className="hover:text-teal-300 transition-colors">Home</a>
              </li>
              <li className="text-gray-300">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
              </li>
              <li className="text-teal-300">Services</li>
            </ol>
          </nav>
          <h1 className="font-montserrat font-bold text-4xl md:text-5xl lg:text-6xl">Our Services</h1>
          <p className="mt-4 text-teal-100 text-lg max-w-2xl mx-auto">
            Comprehensive respiratory care by Dr. Vishnudas Telbhare
          </p>
        </div>
      </section>

      <main>
        {/* Diagnostic Services Section */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <div className="text-center mb-16">
              <h2 className="font-montserrat font-bold text-3xl md:text-4xl text-oxford-blue-1 mb-4">
                Diagnostic <span className="text-teal-600">Services</span>
              </h2>
              <div className="w-16 h-1 bg-teal-600 rounded-full mx-auto mb-6"></div>
              <p className="text-sonic-silver text-lg max-w-3xl mx-auto">
                Advanced diagnostic testing to accurately identify respiratory conditions
                and guide effective treatment plans.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {diagnosticServices.map((service) => (
                <div
                  key={service.id}
                  className="bg-cultured p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 group"
                >
                  <div className="text-teal-600 mb-6 group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                  <h3 className="font-montserrat font-semibold text-xl text-oxford-blue-1 mb-4">
                    {service.title}
                  </h3>
                  <p className="text-sonic-silver leading-relaxed mb-4">
                    {service.description}
                  </p>
                  {service.subServices && (
                    <ul className="space-y-2">
                      {service.subServices.map((subService, index) => (
                        <li key={index} className="flex items-start gap-2 text-sm text-sonic-silver">
                          <svg className="w-4 h-4 text-teal-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          {subService}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Treatment Services Section */}
        <section className="section-padding bg-cultured">
          <div className="container-custom">
            <div className="text-center mb-16">
              <h2 className="font-montserrat font-bold text-3xl md:text-4xl text-oxford-blue-1 mb-4">
                Treatment <span className="text-teal-600">Services</span>
              </h2>
              <div className="w-16 h-1 bg-teal-600 rounded-full mx-auto mb-6"></div>
              <p className="text-sonic-silver text-lg max-w-3xl mx-auto">
                Evidence-based treatment for all respiratory conditions with personalized care plans
                tailored to your specific needs.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {treatmentServices.map((service) => (
                <div
                  key={service.id}
                  className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 group"
                >
                  <div className="text-teal-600 mb-4 group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                  <h3 className="font-montserrat font-semibold text-lg text-oxford-blue-1 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-sonic-silver leading-relaxed text-sm mb-3">
                    {service.description}
                  </p>
                  {service.subServices && (
                    <ul className="space-y-1">
                      {service.subServices.map((subService, index) => (
                        <li key={index} className="flex items-start gap-2 text-xs text-sonic-silver">
                          <svg className="w-3 h-3 text-teal-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          {subService}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="section-padding bg-teal-700 text-white text-center">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto space-y-6">
              <h2 className="font-montserrat font-bold text-3xl md:text-4xl">
                Ready to Schedule Your <span className="text-teal-200">Consultation?</span>
              </h2>

              <p className="text-teal-100 text-lg leading-relaxed">
                Whether you need diagnostic testing or treatment for a respiratory condition,
                Dr. Vishnudas Telbhare is here to provide expert care with 17+ years of experience.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <a
                  href="/#appointment"
                  className="bg-white text-teal-700 hover:bg-teal-50 px-8 py-3 rounded-lg font-medium transition-colors duration-200"
                >
                  Book Appointment
                </a>
                <a
                  href="tel:+917507468918"
                  className="border border-white hover:bg-white hover:text-teal-700 text-white px-8 py-3 rounded-lg font-medium transition-colors duration-200"
                >
                  Call Now: +91 75074 68918
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ServicesPage;
