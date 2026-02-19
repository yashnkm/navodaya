import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';

const AboutPage = () => {
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
              <li className="text-teal-300">About Us</li>
            </ol>
          </nav>
          <h1 className="font-montserrat font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl">About Us</h1>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="section-padding bg-cultured">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-6">
              <div>
                <h2 className="font-montserrat font-bold text-3xl md:text-4xl text-oxford-blue-1 mb-4">
                  Your Trusted Partner in <span className="text-teal-600">Respiratory Health</span>
                </h2>
                <div className="w-16 h-1 bg-teal-600 rounded-full mb-6"></div>
              </div>

              <div className="space-y-4">
                <p className="text-sonic-silver leading-relaxed">
                  Welcome to Navodaya Chest Care Clinic, your premier destination for comprehensive respiratory
                  care in Pune. Our clinic specializes in diagnosing and treating all types of lung and breathing
                  disorders with a patient-centered approach.
                </p>

                <p className="text-sonic-silver leading-relaxed">
                  Led by Dr. Vishnudas Telbhare, a highly experienced pulmonologist with 17+ years of clinical
                  experience, we combine advanced diagnostic technology with compassionate care to help you
                  breathe better and live healthier.
                </p>

                <p className="text-sonic-silver leading-relaxed">
                  From asthma and COPD management to critical care pulmonology, we provide evidence-based
                  treatment tailored to each patient's unique needs. Our commitment to excellence has made us
                  a trusted name in respiratory medicine across Pune.
                </p>
              </div>

              <a href="#contact" className="btn-primary inline-block">
                Book Consultation
              </a>
            </div>

            {/* Right Image */}
            <div className="relative max-w-lg mx-auto lg:mx-0">
              <img
                src="/assets/images/DSC_0560.JPG"
                alt="Dr. Vishnudas Telbhare - Pulmonologist"
                className="w-full aspect-[3/4] rounded-lg shadow-xl object-cover object-top"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Meet the Doctor Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Image */}
            <div className="relative max-w-lg mx-auto lg:mx-0 order-2 lg:order-1">
              <img
                src="/assets/images/DSC_0559.JPG"
                alt="Dr. Vishnudas Telbhare - Consultant Pulmonologist"
                className="w-full aspect-[3/4] rounded-lg shadow-xl object-cover object-top"
              />
            </div>

            {/* Right Content */}
            <div className="space-y-6 order-1 lg:order-2">
              <div>
                <h2 className="font-montserrat font-bold text-3xl md:text-4xl text-oxford-blue-1 mb-4">
                  Meet <span className="text-teal-600">Dr. Vishnudas Telbhare</span>
                </h2>
                <div className="w-16 h-1 bg-teal-600 rounded-full mb-6"></div>
              </div>

              <div className="space-y-4">
                <p className="text-sonic-silver leading-relaxed">
                  Dr. Vishnudas Telbhare is a highly skilled and dedicated pulmonologist with over 17 years
                  of experience in respiratory medicine. He completed his MBBS from MGM Medical College
                  Aurangabad and pursued advanced training in chest diseases.
                </p>

                <p className="text-sonic-silver leading-relaxed">
                  With extensive experience in critical care from Deenanath Mangeshkar Hospital Pune,
                  Dr. Telbhare specializes in diagnostic and therapeutic chest interventions. He currently
                  serves as Consultant Respiratory Physician at multiple leading hospitals in Pune.
                </p>
              </div>

              {/* Qualifications */}
              <div className="bg-cultured p-6 rounded-lg">
                <h4 className="font-montserrat font-semibold text-oxford-blue-1 mb-4">Qualifications:</h4>
                <ul className="space-y-2 text-sonic-silver">
                  <li className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    MBBS from MGM Medical College, Aurangabad (2005)
                  </li>
                  <li className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    DTCD from GMC, Nagpur (2010)
                  </li>
                  <li className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    DNB (Respiratory Diseases) from Jaslok Hospital, Mumbai (2013)
                  </li>
                  <li className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    IDCCM from Deenanath Mangeshkar Hospital, Pune (2015)
                  </li>
                </ul>
              </div>

              {/* Experience */}
              <div className="bg-teal-50 p-6 rounded-lg border border-teal-100">
                <h4 className="font-montserrat font-semibold text-oxford-blue-1 mb-4">Experience:</h4>
                <ul className="space-y-2 text-sonic-silver text-sm">
                  <li className="flex items-start gap-2">
                    <svg className="w-4 h-4 text-teal-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    Associate Consultant Critical Care at Deenanath Mangeshkar Hospital (5 Years)
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-4 h-4 text-teal-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    Consultant Critical Care at Deenanath Mangeshkar Hospital (6 Years)
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-4 h-4 text-teal-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    Consultant Respiratory Diseases at Deenanath Mangeshkar Hospital (6 Years)
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-4 h-4 text-teal-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    Currently at Chellaram Hospital & Prayag Hospital, Pune
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="section-padding bg-cultured">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Our Mission */}
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-teal-600 text-white rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="font-montserrat font-bold text-2xl text-oxford-blue-1">Our Mission</h3>
              </div>
              <p className="text-sonic-silver leading-relaxed">
                To provide world-class respiratory care through advanced diagnostics, evidence-based treatments,
                and compassionate patient support. We are committed to helping every patient breathe easier
                and live healthier through personalized care plans and continuous medical excellence.
              </p>
            </div>

            {/* Our Vision */}
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-cyan-600 text-white rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </div>
                <h3 className="font-montserrat font-bold text-2xl text-oxford-blue-1">Our Vision</h3>
              </div>
              <p className="text-sonic-silver leading-relaxed">
                To be the leading chest care center in Pune, recognized for excellence in pulmonary medicine,
                patient outcomes, and respiratory health education. We aim to combine the most advanced
                diagnostic technology with personalized care to transform respiratory healthcare in our community.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What Sets Us Apart Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="font-montserrat font-bold text-3xl md:text-4xl text-oxford-blue-1 mb-4">
              What Sets Us <span className="text-teal-600">Apart?</span>
            </h2>
            <div className="w-16 h-1 bg-teal-600 rounded-full mx-auto mb-6"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Experienced Specialist */}
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-teal-600 text-white rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h4 className="font-montserrat font-semibold text-oxford-blue-1 text-lg mb-2">
                Experienced Specialist
              </h4>
              <p className="text-sonic-silver text-sm">
                17+ years of experience with DNB from prestigious Jaslok Hospital Mumbai
              </p>
            </div>

            {/* Advanced Diagnostics */}
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-cyan-600 text-white rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h4 className="font-montserrat font-semibold text-oxford-blue-1 text-lg mb-2">
                Advanced Diagnostics
              </h4>
              <p className="text-sonic-silver text-sm">
                State-of-the-art PFT lab, bronchoscopy suite, and sleep study facilities
              </p>
            </div>

            {/* Critical Care Expertise */}
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-teal-700 text-white rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M22 12h-4l-3 9L9 3l-3 9H2" />
                </svg>
              </div>
              <h4 className="font-montserrat font-semibold text-oxford-blue-1 text-lg mb-2">
                Critical Care Expert
              </h4>
              <p className="text-sonic-silver text-sm">
                8+ years ICU experience with ventilator management expertise
              </p>
            </div>

            {/* Compassionate Care */}
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-green-600 text-white rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h4 className="font-montserrat font-semibold text-oxford-blue-1 text-lg mb-2">
                Compassionate Care
              </h4>
              <p className="text-sonic-silver text-sm">
                Patient-centered approach with personalized treatment plans
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="section-padding bg-cultured">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8 text-center">
            {/* Years Experience */}
            <div className="bg-white p-5 sm:p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="text-4xl md:text-5xl font-montserrat font-bold text-teal-600 mb-2">
                17 <span className="text-2xl">+</span>
              </div>
              <div className="text-oxford-blue-1 font-medium">Years Experience</div>
            </div>

            {/* Critical Care Years */}
            <div className="bg-white p-5 sm:p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="text-4xl md:text-5xl font-montserrat font-bold text-teal-600 mb-2">
                8 <span className="text-2xl">+</span>
              </div>
              <div className="text-oxford-blue-1 font-medium">Years in Critical Care</div>
            </div>

            {/* Hospital Affiliations */}
            <div className="bg-white p-5 sm:p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="text-4xl md:text-5xl font-montserrat font-bold text-teal-600 mb-2">
                3 <span className="text-2xl">+</span>
              </div>
              <div className="text-oxford-blue-1 font-medium">Hospital Affiliations</div>
            </div>

            {/* Specialist Qualifications */}
            <div className="bg-white p-5 sm:p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="text-4xl md:text-5xl font-montserrat font-bold text-teal-600 mb-2">
                12 <span className="text-2xl">+</span>
              </div>
              <div className="text-oxford-blue-1 font-medium">Years as Specialist</div>
            </div>
          </div>
        </div>
      </section>

      {/* Visit Us Today Section */}
      <section className="section-padding bg-teal-700 text-white text-center">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto space-y-6">
            <h2 className="font-montserrat font-bold text-3xl md:text-4xl">
              Visit Us <span className="text-teal-200">Today!</span>
            </h2>

            <p className="text-teal-100 text-lg leading-relaxed">
              Take the first step towards better respiratory health. Schedule an appointment today and
              experience expert pulmonary care from Dr. Vishnudas Telbhare at Navodaya Chest Care Clinic.
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

      <Footer />
    </div>
  );
};

export default AboutPage;
