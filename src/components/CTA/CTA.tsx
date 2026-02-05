const CTA = () => {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* CTA Banner */}
          <div className="relative order-2 lg:order-1">
            <div className="relative z-10">
              <img 
                src="/assests/before-after-treatment.jpeg" 
                alt="Before and after dental treatment results"
                className="w-full h-auto rounded-lg shadow-xl"
                width="1056"
                height="1076"
              />
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-carolina-blue/10 rounded-full -z-10 animate-pulse"></div>
            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-royal-blue-light/10 rounded-full -z-10 animate-pulse delay-75"></div>
          </div>

          {/* CTA Content */}
          <div className="space-y-8 order-1 lg:order-2">
            <div>
              <p className="text-carolina-blue font-lato font-medium text-lg mb-2">
                Book Dental Appointment
              </p>
              <h2 className="font-montserrat font-bold text-3xl md:text-4xl text-oxford-blue-1 mb-4">
                We Are Open And 
                <span className="text-carolina-blue">Welcoming</span> Patients
              </h2>
              <div className="w-16 h-1 bg-carolina-blue rounded-full mb-6"></div>
            </div>

            <div className="space-y-4">
              <p className="text-sonic-silver leading-relaxed">
                Ready to transform your smile? Our experienced team is here to provide you with 
                exceptional dental care in a comfortable, welcoming environment. Book your 
                appointment today and take the first step towards optimal oral health.
              </p>
              
              <div className="bg-cultured rounded-lg p-6">
                <h3 className="font-montserrat font-semibold text-oxford-blue-1 mb-4">
                  Why Choose Wonder Smiles?
                </h3>
                <ul className="space-y-2">
                  <li className="flex items-center gap-3 text-sonic-silver">
                    <div className="w-5 h-5 bg-carolina-blue rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    Same-day appointments available
                  </li>
                  <li className="flex items-center gap-3 text-sonic-silver">
                    <div className="w-5 h-5 bg-carolina-blue rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    State-of-the-art equipment
                  </li>
                  <li className="flex items-center gap-3 text-sonic-silver">
                    <div className="w-5 h-5 bg-carolina-blue rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    Flexible payment options
                  </li>
                  <li className="flex items-center gap-3 text-sonic-silver">
                    <div className="w-5 h-5 bg-carolina-blue rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    Comprehensive dental services
                  </li>
                </ul>
              </div>
            </div>

            {/* Contact Methods */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#contact" className="btn-primary flex items-center justify-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3a2 2 0 012-2h4a2 2 0 012 2v4m-6 0V7a2 2 0 012-2h4a2 2 0 012 2v4m-6 0h8a2 2 0 012 2v6a2 2 0 01-2 2H8a2 2 0 01-2-2v-6a2 2 0 012-2z" />
                </svg>
                Book Appointment
              </a>
              <a 
                href="tel:+917052101786" 
                className="btn-secondary flex items-center justify-center gap-2"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Call Now
              </a>
            </div>

            {/* Emergency Contact */}
            <div className="bg-red-50 border border-red-200 rounded-lg p-4">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 text-red-600 flex-shrink-0 mt-0.5">
                  <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.35 16.5c-.77.833.192 2.5 1.732 2.5z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-red-800 mb-1">Dental Emergency?</h4>
                  <p className="text-red-700 text-sm">
                    Call our 24/7 emergency hotline: 
                    <a href="tel:+917052101786" className="font-semibold hover:underline">
                      +91-7052-101-786
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;