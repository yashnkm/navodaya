const About = () => {
  const features = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      title: "DNB Respiratory Medicine",
      description: "Specialized training from Jaslok Hospital Mumbai in respiratory diseases"
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
      title: "Critical Care Expert",
      description: "8+ years of ICU experience with ventilator management and critical care"
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
        </svg>
      ),
      title: "Chest Interventions",
      description: "Expertise in diagnostic and therapeutic chest procedures including bronchoscopy"
    }
  ];

  return (
    <section id="about" className="section-padding bg-white">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* About Banner */}
          <div className="relative max-w-lg mx-auto lg:mx-0">
            <img
              src="/assets/images/DSC_0560.JPG"
              alt="Dr. Vishnudas Telbhare - Pulmonologist at Navodaya Chest Care"
              className="w-full aspect-[3/4] rounded-lg shadow-xl object-cover object-top"
              loading="lazy"
            />
          </div>

          {/* About Content */}
          <div className="space-y-6">
            <div>
              <p className="text-teal-600 font-lato font-medium text-lg mb-2">
                About Dr. Vishnudas Telbhare
              </p>
              <h2 className="font-montserrat font-bold text-3xl md:text-4xl text-oxford-blue-1 mb-4">
                Expert Care For Your
                <span className="text-teal-600"> Respiratory</span> Health
              </h2>
              <div className="w-16 h-1 bg-teal-600 rounded-full mb-6"></div>
            </div>

            <div className="space-y-4">
              <p className="text-sonic-silver leading-relaxed">
                Dr. Vishnudas Telbhare is a highly skilled and dedicated pulmonologist with 17+ years
                of experience. He completed his MBBS from MGM Medical College Aurangabad, DTCD from
                Government Medical College Nagpur, and DNB in Respiratory Diseases from the prestigious
                Jaslok Hospital Mumbai.
              </p>

              <p className="text-sonic-silver leading-relaxed">
                With extensive experience in critical care from Deenanath Mangeshkar Hospital Pune,
                Dr. Telbhare specializes in diagnostic and therapeutic chest interventions. He currently
                serves as Consultant Respiratory Physician at multiple leading hospitals in Pune including
                Deenanath Mangeshkar Hospital, Chellaram Hospital, and Prayag Hospital.
              </p>
            </div>

            {/* Features Grid */}
            <div className="grid sm:grid-cols-1 gap-4 py-6">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-4 p-4 bg-cultured rounded-lg hover:bg-teal-50 transition-colors duration-300">
                  <div className="flex-shrink-0 w-12 h-12 bg-teal-600 text-white rounded-lg flex items-center justify-center">
                    {feature.icon}
                  </div>
                  <div>
                    <h4 className="font-montserrat font-semibold text-oxford-blue-1 mb-1">
                      {feature.title}
                    </h4>
                    <p className="text-sonic-silver text-sm">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a href="#service" className="btn-primary">
                Our Services
              </a>
              <a href="#contact" className="btn-secondary">
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;