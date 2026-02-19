import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';

const ServicesPage = () => {
  // All services in specified order
  const allServices = [
    {
      id: 1,
      title: "Asthma Management",
      description: "Comprehensive asthma care from diagnosis to long-term control with personalized treatment plans.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 22c4-2 8-6 8-12V5l-8-3-8 3v5c0 6 4 10 8 12z" />
        </svg>
      ),
      subServices: [
        "Expert diagnosis and severity assessment",
        "Inhaler therapy optimization",
        "Trigger identification and avoidance strategies"
      ]
    },
    {
      id: 2,
      title: "COPD Treatment",
      description: "Expert management of Chronic Obstructive Pulmonary Disease with medication optimization and rehabilitation.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      ),
      subServices: [
        "Medication and bronchodilator optimization",
        "Pulmonary rehabilitation programs",
        "Long-term oxygen therapy management"
      ]
    },
    {
      id: 3,
      title: "Interstitial Lung Disease (ILD)",
      description: "Specialized diagnosis and treatment of pulmonary fibrosis, sarcoidosis, and other diffuse parenchymal lung diseases.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
        </svg>
      ),
      subServices: [
        "HRCT-guided diagnosis and staging",
        "Antifibrotic therapy for pulmonary fibrosis",
        "Immunosuppressive treatment when indicated"
      ]
    },
    {
      id: 4,
      title: "Pulmonary Function Tests (PFT)",
      description: "State-of-the-art spirometry and lung function testing for accurate diagnosis and treatment monitoring.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      subServices: [
        "Spirometry: Measure lung capacity and airflow",
        "Diffusion capacity assessment",
        "Pre and post-bronchodilator studies"
      ]
    },
    {
      id: 5,
      title: "Pneumonia Treatment",
      description: "Expert diagnosis and treatment of community-acquired, hospital-acquired, and aspiration pneumonia.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
        </svg>
      ),
      subServices: [
        "Accurate diagnosis with imaging and labs",
        "Targeted antibiotic therapy",
        "Severe pneumonia and ICU management"
      ]
    },
    {
      id: 6,
      title: "Lung Cancer",
      description: "Comprehensive lung cancer evaluation, early detection, bronchoscopic biopsy, and coordinated treatment planning.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
        </svg>
      ),
      subServices: [
        "Early detection and screening",
        "Bronchoscopic biopsy and diagnosis",
        "Staging and treatment coordination"
      ]
    },
    {
      id: 7,
      title: "Pleural Effusion",
      description: "Expert management including diagnostic thoracentesis, pleural fluid analysis, and therapeutic drainage.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 2.69l5.66 5.66a8 8 0 11-11.31 0z" />
        </svg>
      ),
      subServices: [
        "Diagnostic thoracentesis and fluid analysis",
        "Therapeutic pleural drainage",
        "Intercostal drain and pleurodesis"
      ]
    },
    {
      id: 8,
      title: "Obstructive Sleep Apnea",
      description: "Diagnosis and treatment of OSA with CPAP/BiPAP therapy and ongoing management for better sleep quality.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
        </svg>
      ),
      subServices: [
        "Comprehensive sleep disorder evaluation",
        "CPAP/BiPAP therapy and titration",
        "Device fitting and compliance support"
      ]
    },
    {
      id: 9,
      title: "Sleep Study (Polysomnography)",
      description: "Comprehensive sleep testing to diagnose sleep apnea, insomnia, and other sleep disorders.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2 12h4l3-9 4 18 3-9h4" />
        </svg>
      ),
      subServices: [
        "Overnight polysomnography testing",
        "Home sleep testing options",
        "CPAP titration studies"
      ]
    },
    {
      id: 10,
      title: "Critical Care Pulmonology",
      description: "ICU ventilator management, respiratory failure treatment, and critical care services.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M22 12h-4l-3 9L9 3l-3 9H2" />
        </svg>
      ),
      subServices: [
        "Ventilator management expertise",
        "Weaning protocols and recovery",
        "Tracheostomy care"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section with Breadcrumb */}
      <section
        className="relative py-16 sm:py-24 bg-gradient-to-r from-teal-700 to-teal-900"
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
          <h1 className="font-montserrat font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl">Our Services</h1>
          <p className="mt-4 text-teal-100 text-lg max-w-2xl mx-auto">
            Comprehensive respiratory care by Dr. Vishnudas Telbhare
          </p>
        </div>
      </section>

      <main>
        {/* All Services Section */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <div className="text-center mb-8 sm:mb-16">
              <h2 className="font-montserrat font-bold text-2xl sm:text-3xl md:text-4xl text-oxford-blue-1 mb-4">
                Comprehensive <span className="text-teal-600">Respiratory Care</span>
              </h2>
              <div className="w-16 h-1 bg-teal-600 rounded-full mx-auto mb-6"></div>
              <p className="text-sonic-silver text-sm sm:text-lg max-w-3xl mx-auto">
                Advanced diagnostic testing and evidence-based treatment for all respiratory conditions
                with personalized care plans tailored to your specific needs.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
              {allServices.map((service) => (
                <div
                  key={service.id}
                  className="bg-cultured p-4 sm:p-6 lg:p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 group"
                >
                  <div className="text-teal-600 mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                  <h3 className="font-montserrat font-semibold text-lg sm:text-xl text-oxford-blue-1 mb-3 sm:mb-4">
                    {service.title}
                  </h3>
                  <p className="text-sonic-silver leading-relaxed text-sm sm:text-base mb-4">
                    {service.description}
                  </p>
                  {service.subServices && (
                    <ul className="space-y-2">
                      {service.subServices.map((subService, index) => (
                        <li key={index} className="flex items-start gap-2 text-xs sm:text-sm text-sonic-silver">
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

        {/* Call to Action Section */}
        <section className="section-padding bg-teal-700 text-white text-center">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto space-y-6">
              <h2 className="font-montserrat font-bold text-2xl sm:text-3xl md:text-4xl">
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
