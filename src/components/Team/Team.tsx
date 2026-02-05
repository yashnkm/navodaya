interface DoctorCardProps {
  name: string;
  specialty: string;
  image: string;
  socialLinks: {
    facebook?: string;
    twitter?: string;
    instagram?: string;
  };
}

const DoctorCard = ({ name, specialty, image, socialLinks }: DoctorCardProps) => {
  return (
    <div className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
      <div className="relative overflow-hidden">
        <img 
          src={image}
          alt={name}
          className="w-full h-80 object-cover transition-transform duration-300 group-hover:scale-105"
          width="460"
          height="500"
        />
        <div className="absolute inset-0 bg-dentelo-gradient opacity-0 group-hover:opacity-80 transition-opacity duration-300 flex items-center justify-center">
          <div className="flex gap-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
            {socialLinks.facebook && (
              <a 
                href={socialLinks.facebook} 
                className="w-10 h-10 bg-white text-carolina-blue rounded-full flex items-center justify-center hover:bg-carolina-blue hover:text-white transition-colors duration-200"
                aria-label={`${name} Facebook`}
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                </svg>
              </a>
            )}
            {socialLinks.twitter && (
              <a 
                href={socialLinks.twitter} 
                className="w-10 h-10 bg-white text-carolina-blue rounded-full flex items-center justify-center hover:bg-carolina-blue hover:text-white transition-colors duration-200"
                aria-label={`${name} Twitter`}
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"/>
                </svg>
              </a>
            )}
            {socialLinks.instagram && (
              <a 
                href={socialLinks.instagram} 
                className="w-10 h-10 bg-white text-carolina-blue rounded-full flex items-center justify-center hover:bg-carolina-blue hover:text-white transition-colors duration-200"
                aria-label={`${name} Instagram`}
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.042-3.441.219-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 01.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.357-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001.012.001z"/>
                </svg>
              </a>
            )}
          </div>
        </div>
      </div>
      
      <div className="p-6 text-center">
        <h3 className="font-montserrat font-bold text-xl text-oxford-blue-1 mb-1">
          <a href="#" className="hover:text-carolina-blue transition-colors duration-200">
            {name}
          </a>
        </h3>
        <p className="text-sonic-silver font-medium">
          {specialty}
        </p>
      </div>
    </div>
  );
};

const Team = () => {
  const doctors = [
    {
      name: "Dr. Chandrama Patil",
      specialty: "Pediatric & General Dentist",
      image: "./assests/dr-chandrama-patil.jpeg",
      socialLinks: {
        facebook: "#",
        twitter: "#",
        instagram: "#"
      }
    }
  ];

  return (
    <section className="section-padding bg-cultured">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-carolina-blue font-lato font-medium text-lg mb-2">
            Meet Dr. Chandrama Patil
          </p>
          <h2 className="font-montserrat font-bold text-3xl md:text-4xl text-oxford-blue-1 mb-4">
            Pediatric Dental Expert
          </h2>
          <div className="w-20 h-1 bg-carolina-blue mx-auto rounded-full mb-6"></div>
          <p className="text-sonic-silver max-w-2xl mx-auto leading-relaxed">
            Dr. Chandrama Patil brings specialized expertise in pediatric dentistry with a 
            patient-centered approach that prioritizes comfort and care for all patients.
          </p>
        </div>

        {/* Team Grid - Single Doctor Feature */}
        <div className="flex justify-center">
          <div className="max-w-md">
            {doctors.map((doctor, index) => (
              <DoctorCard key={index} {...doctor} />
            ))}
          </div>
        </div>

        {/* Team Stats */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-16 pt-16 border-t border-light-gray">
          <div className="text-center">
            <div className="text-3xl font-bold text-carolina-blue mb-2">500+</div>
            <div className="text-sonic-silver">Happy Patients</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-carolina-blue mb-2">15+</div>
            <div className="text-sonic-silver">Years of Experience</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-carolina-blue mb-2">4</div>
            <div className="text-sonic-silver">Expert Doctors</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-carolina-blue mb-2">100%</div>
            <div className="text-sonic-silver">Satisfaction Rate</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;