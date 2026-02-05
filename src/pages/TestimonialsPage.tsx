import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';

const TestimonialsPage = () => {
  // Patient reviews for respiratory care
  const reviews = [
    {
      id: 1,
      name: "Rajesh Sharma",
      rating: 5,
      timeAgo: "a week ago",
      review: "Dr. Vishnudas Telbhare is an exceptional pulmonologist. My chronic asthma was not well controlled despite multiple consultations elsewhere. After visiting Navodaya Chest Care, my condition improved significantly within weeks. Highly recommended!",
      verified: true,
      category: "Asthma Care",
    },
    {
      id: 2,
      name: "Priya Kulkarni",
      rating: 5,
      timeAgo: "2 weeks ago",
      review: "After struggling with sleep apnea for years, I finally found relief here. Dr. Telbhare conducted a thorough sleep study and prescribed the right treatment. I'm sleeping better than ever and feeling more energetic throughout the day.",
      verified: true,
      category: "Sleep Apnea",
    },
    {
      id: 3,
      name: "Santosh Patil",
      rating: 5,
      timeAgo: "2 weeks ago",
      review: "My father was diagnosed with COPD and we were worried about his quality of life. Dr. Telbhare's comprehensive approach to treatment, including pulmonary rehabilitation guidance, has made a tremendous difference. The clinic has state-of-the-art equipment.",
      verified: true,
      hasResponse: true,
      category: "COPD Treatment",
    },
    {
      id: 4,
      name: "Meena Joshi",
      rating: 5,
      timeAgo: "2 weeks ago",
      review: "Very honest doctor. Unlike other clinics, Dr. Telbhare only recommended necessary tests and treatments. He took time to explain my lung condition in detail and answered all my questions patiently. Trustworthy and caring.",
      verified: true,
      category: "Trust & Honesty",
    },
    {
      id: 5,
      name: "Amit Deshpande",
      rating: 5,
      timeAgo: "a week ago",
      review: "I had a persistent cough for months that no one could diagnose. Dr. Telbhare's thorough examination and PFT revealed the actual cause. Within 3 weeks of treatment, I was completely cured. Excellent diagnostic skills!",
      verified: true,
      hasResponse: true,
      category: "Diagnostic Excellence",
    },
    {
      id: 6,
      name: "Sunita Bhosale",
      rating: 5,
      timeAgo: "6 days ago",
      review: "Dr. Telbhare was extremely professional during my TB treatment. He explained the entire DOTS therapy process clearly and ensured regular follow-ups. The staff is also very supportive and caring throughout the treatment journey.",
      verified: true,
      hasResponse: true,
      category: "TB Treatment",
    },
    {
      id: 7,
      name: "Vikram Naik",
      rating: 5,
      timeAgo: "2 weeks ago",
      review: "Five stars for the hygiene standards and professionalism! The clinic follows strict protocols, and the pulmonary function testing was conducted very professionally. Dr. Telbhare's expertise in critical care is evident.",
      verified: true,
      category: "Hygiene & Safety",
    },
    {
      id: 8,
      name: "Anita Gaikwad",
      rating: 5,
      timeAgo: "a week ago",
      review: "My elderly mother had severe breathing difficulties. Dr. Telbhare's ICU experience really showed in how confidently he managed her case. She recovered well under his care. Forever grateful to the entire team.",
      verified: true,
      hasResponse: true,
      category: "Critical Care",
    },
    {
      id: 9,
      name: "Prakash Jadhav",
      rating: 5,
      timeAgo: "a week ago",
      review: "Every appointment was on time, and the spirometry tests were explained in detail. Dr. Telbhare's 17+ years of experience really shows in his confident diagnosis. We truly appreciate the professionalism.",
      verified: true,
      hasResponse: true,
      category: "Punctuality",
    },
    {
      id: 10,
      name: "Deepak Kale",
      rating: 5,
      timeAgo: "a week ago",
      review: "As someone with bronchitis recurring every season, I was frustrated. Dr. Telbhare identified the underlying cause and provided a long-term management plan. This is the first winter I haven't had a severe episode. Thank you, Doctor!",
      verified: true,
      localGuide: true,
      hasResponse: true,
      category: "Lung Infections",
    },
    {
      id: 11,
      name: "Kavita Marathe",
      rating: 5,
      timeAgo: "2 weeks ago",
      review: "Excellent, knowledgeable, and empathetic doctor. Dr. Telbhare's DNB from Jaslok Hospital Mumbai shows in his expertise. He explained my interstitial lung disease in simple terms and made me feel confident about the treatment.",
      verified: true,
      category: "Expertise",
    },
    {
      id: 12,
      name: "Ramesh Wagh",
      rating: 5,
      timeAgo: "a week ago",
      review: "I visited Navodaya Chest Care for my mother's lung infection treatment. Dr. Telbhare is very professional and caring. The clinic is well-equipped with modern diagnostic facilities. Highly recommend for any respiratory issues.",
      verified: true,
      hasResponse: true,
      category: "Family Care",
    },
    {
      id: 13,
      name: "Smita Sawant",
      rating: 5,
      timeAgo: "2 weeks ago",
      review: "I was anxious about my bronchoscopy procedure, but Dr. Telbhare explained everything beforehand and made me comfortable. The procedure went smoothly, and the results helped in accurate diagnosis. Very skilled doctor.",
      verified: true,
      category: "Bronchoscopy",
    },
    {
      id: 14,
      name: "Nitin Phadke",
      rating: 5,
      timeAgo: "a week ago",
      review: "Great experience! Dr. Telbhare is gentle, professional, and takes time to listen to patient concerns. The staff is courteous and the clinic maintains excellent hygiene standards. Highly recommended for respiratory care!",
      verified: true,
      category: "Patient Comfort",
    },
    {
      id: 15,
      name: "Leena Deshmukh",
      rating: 5,
      timeAgo: "2 weeks ago",
      review: "Dr. Telbhare's approach to my allergic respiratory problems was comprehensive. He not only treated the symptoms but also helped identify triggers. The inhaler technique training was very helpful. Thank you, Doctor!",
      verified: true,
      category: "Allergy Care",
    }
  ];


  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <svg
        key={index}
        className={`w-5 h-5 ${index < rating ? 'text-yellow-400' : 'text-gray-300'}`}
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ));
  };

  const averageRating = reviews.reduce((acc, review) => acc + review.rating, 0) / reviews.length;
  const totalReviews = reviews.length;

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section with Breadcrumb */}
      <section
        className="relative py-24 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "linear-gradient(rgba(13, 148, 136, 0.85), rgba(13, 148, 136, 0.85)), url('/assets/gallery/clinic-hero.webp')"
        }}
      >
        <div className="container-custom text-center text-white">
          <nav className="mb-6">
            <ol className="flex justify-center items-center space-x-2 text-sm">
              <li>
                <a href="/" className="hover:text-teal-200 transition-colors">Home</a>
              </li>
              <li className="text-gray-300">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
              </li>
              <li className="text-teal-200">Testimonials</li>
            </ol>
          </nav>
          <h1 className="font-montserrat font-bold text-4xl md:text-5xl lg:text-6xl">Patient Testimonials</h1>
          <p className="mt-4 text-lg text-teal-100 max-w-2xl mx-auto">
            Real stories from real patients who trust Navodaya Chest Care for their respiratory health
          </p>
        </div>
      </section>

      <main className="pt-8 pb-16">
        {/* Stats Overview */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
          <div className="bg-gradient-to-r from-teal-600 to-teal-700 rounded-2xl p-8 text-white">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div>
                <div className="text-4xl font-bold mb-2">{averageRating.toFixed(1)}</div>
                <div className="flex justify-center mb-1">{renderStars(Math.round(averageRating))}</div>
                <div className="text-teal-200 text-sm">Average Rating</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">{totalReviews}+</div>
                <div className="text-teal-200 text-sm">Happy Patients</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">17+</div>
                <div className="text-teal-200 text-sm">Years Experience</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">100%</div>
                <div className="text-teal-200 text-sm">Satisfaction Rate</div>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Reviews Masonry Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {reviews.map((review) => (
              <div
                key={review.id}
                className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden transform hover:-translate-y-2 border border-gray-100"
              >
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-gradient-to-br from-teal-600 to-teal-700 text-white rounded-full flex items-center justify-center font-bold text-lg">
                        {review.name.charAt(0)}
                      </div>
                      <div>
                        <h3 className="font-bold text-oxford-blue-1 text-lg">{review.name}</h3>
                        <div className="flex items-center gap-2">
                          {review.localGuide && (
                            <span className="text-xs bg-teal-100 text-teal-600 px-2 py-1 rounded-full font-medium">
                              Local Guide
                            </span>
                          )}
                          {review.verified && (
                            <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                          )}
                        </div>
                      </div>
                    </div>
                    <span className="text-sm text-gray-500 bg-gray-50 px-3 py-1 rounded-full">{review.timeAgo}</span>
                  </div>

                  {/* Category Badge */}
                  <div className="mb-3">
                    <span className="text-xs bg-teal-50 text-teal-700 px-3 py-1 rounded-full font-medium">
                      {review.category}
                    </span>
                  </div>

                  <div className="flex items-center mb-4">
                    {renderStars(review.rating)}
                    <span className="ml-2 text-sm font-medium text-gray-600">Excellent Care</span>
                  </div>

                  <p className="text-gray-700 leading-relaxed mb-4">{review.review}</p>

                  {review.hasResponse && (
                    <div className="bg-gradient-to-r from-teal-50 to-cyan-50 rounded-xl p-4 border-l-4 border-teal-600">
                      <div className="flex items-center gap-2 mb-2">
                        <div className="w-8 h-8 bg-teal-600 rounded-full flex items-center justify-center">
                          <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <span className="text-sm font-semibold text-teal-700">Dr. Vishnudas Telbhare</span>
                      </div>
                      <p className="text-sm text-teal-700 italic">Thank you for your kind words! Your health and recovery are our top priority. Wishing you continued good respiratory health.</p>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Statistics Section */}
          <div className="bg-gradient-to-r from-teal-600 to-teal-700 rounded-3xl p-8 mb-12 text-white">
            <h2 className="text-3xl font-bold text-center mb-8">Why Patients Trust Navodaya Chest Care</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">DNB</div>
                <div className="text-teal-200 text-sm">Jaslok Hospital Mumbai</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">1000+</div>
                <div className="text-teal-200 text-sm">Patients Treated</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">8+</div>
                <div className="text-teal-200 text-sm">Years Critical Care</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">3</div>
                <div className="text-teal-200 text-sm">Hospital Affiliations</div>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <div className="bg-white rounded-3xl p-12 shadow-2xl border border-gray-100">
              <h2 className="text-3xl font-bold text-oxford-blue-1 mb-4">
                Ready to Breathe Better?
              </h2>
              <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                Experience the same exceptional respiratory care that earned us these amazing reviews.
                Book your consultation today with Dr. Vishnudas Telbhare!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
                <a
                  href="tel:+917507468918"
                  className="inline-flex items-center justify-center px-8 py-4 bg-teal-600 text-white font-bold rounded-xl hover:bg-teal-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  Call Now
                </a>
                <a
                  href="https://wa.me/917507468918"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-8 py-4 bg-green-600 text-white font-bold rounded-xl hover:bg-green-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                  </svg>
                  WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default TestimonialsPage;
