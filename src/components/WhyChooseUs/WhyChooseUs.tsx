const WhyChooseUs = () => {
  const features = [
    {
      title: "Expert Pulmonology Care",
      description: "With 18+ years of experience in pulmonology and 13+ years in critical care, Dr. Vishnudas Telbhare delivers specialized respiratory care with precision and expertise. He holds a DNB in Respiratory Diseases from Jaslok Hospital Mumbai and IDCCM in Critical Care from Deenanath Mangeshkar Hospital Pune."
    },
    {
      title: "Comprehensive Treatment Approach",
      description: "From diagnosis to recovery, we provide end-to-end respiratory care including advanced diagnostics, personalized treatment plans, and ongoing management."
    },
    {
      title: "Critical Care Excellence",
      description: "13+ years of ICU experience ensures expert handling of complex respiratory conditions, ventilator management, and critical care pulmonology."
    }
  ];

  return (
    <section id="why-choose-us" className="py-20 bg-white">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Content Section */}
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-montserrat font-bold text-oxford-blue-1 leading-tight mb-6">
                Why Choose Navodaya for Your Respiratory Care?
              </h2>
            </div>

            <div className="space-y-8">
              {features.map((feature, index) => (
                <div key={index} className="space-y-3">
                  <h3 className="text-xl font-montserrat font-bold text-oxford-blue-1">
                    {feature.title}
                  </h3>
                  <p className="text-sonic-silver font-lato leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Image Section */}
          <div className="relative max-w-lg mx-auto lg:mx-0">
            <img
              src="/assets/images/DSC_0559.JPG"
              alt="Dr. Vishnudas Telbhare - Pulmonologist at Navodaya Chest Care"
              className="w-full aspect-[3/4] rounded-lg shadow-xl object-cover object-top"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;