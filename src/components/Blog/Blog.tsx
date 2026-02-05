interface BlogCardProps {
  title: string;
  excerpt: string;
  image: string;
  date: string;
  readTime: string;
  category: string;
}

const BlogCard = ({ title, excerpt, image, date, readTime, category }: BlogCardProps) => {
  return (
    <article className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
      <div className="relative overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
          width="1180"
          height="800"
        />
        <div className="absolute top-4 left-4 bg-white px-3 py-1 rounded-full shadow-lg flex items-center gap-2 text-sm">
          <svg className="w-4 h-4 text-carolina-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3a2 2 0 012-2h4a2 2 0 012 2v4m-6 0V7a2 2 0 012-2h4a2 2 0 012 2v4m-6 0h8a2 2 0 012 2v6a2 2 0 01-2 2H8a2 2 0 01-2-2v-6a2 2 0 012-2z" />
          </svg>
          <time className="text-sonic-silver font-medium">{date}</time>
        </div>
        <div className="absolute top-4 right-4 bg-carolina-blue text-white px-3 py-1 rounded-full text-sm font-medium">
          {readTime}
        </div>
        <div className="absolute bottom-4 left-4 bg-royal-blue-light text-white px-3 py-1 rounded-full text-sm font-medium">
          {category}
        </div>
      </div>

      <div className="p-6">
        <h3 className="font-montserrat font-bold text-xl text-oxford-blue-1 mb-3 line-clamp-2 group-hover:text-carolina-blue transition-colors duration-200">
          {title}
        </h3>

        <p className="text-sonic-silver leading-relaxed mb-4 line-clamp-3">
          {excerpt}
        </p>

        <div className="flex items-center justify-between">
          <div className="text-carolina-blue font-medium flex items-center gap-2">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
            </svg>
            <span className="text-sm text-sonic-silver">Wonder Smiles Insights</span>
          </div>
        </div>
      </div>
    </article>
  );
};

const Blog = () => {
  const blogPosts = [
    {
      title: "Why Choose Wonder Smiles for Your Child's First Dental Visit in Bavdhan",
      excerpt: "At Wonder Smiles Kids & Family Dental Clinic in Bavdhan, Dr. Chandrama Patil specializes in making children's first dental experiences positive and stress-free. Learn why parents across Pune trust our gentle approach, state-of-the-art equipment, and child-friendly environment for their family's dental care needs.",
      image: "/assests/gallery/DSC02930.webp",
      date: "Dec 15, 2024",
      readTime: "4 min read",
      category: "Pediatric Care"
    },
    {
      title: "Advanced Dental Technology at Wonder Smiles: Modern Care in Bavdhan, Pune",
      excerpt: "Discover how Wonder Smiles Dental Clinic combines cutting-edge dental technology with compassionate care. From digital X-rays to modern sterilization systems, learn about the advanced equipment that makes our Bavdhan clinic a leader in dental care for families in Pune and surrounding areas.",
      image: "/assests/gallery/DSC02683.jpg",
      date: "Dec 10, 2024",
      readTime: "5 min read",
      category: "Technology"
    }
  ];

  return (
    <section id="blog" className="section-padding bg-cultured">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-carolina-blue font-lato font-medium text-lg mb-2">
            Dental Health Insights
          </p>
          <h2 className="font-montserrat font-bold text-3xl md:text-4xl text-oxford-blue-1 mb-4">
            Latest from Wonder Smiles
          </h2>
          <div className="w-20 h-1 bg-carolina-blue mx-auto rounded-full mb-6"></div>
          <p className="text-sonic-silver max-w-2xl mx-auto leading-relaxed">
            Expert dental care insights and updates from Dr. Chandrama Patil and the Wonder Smiles team in Bavdhan, Pune.
          </p>
        </div>

        {/* Blog Posts - Clean 2-column layout */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {blogPosts.map((post, index) => (
            <BlogCard key={index} {...post} />
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <div className="bg-white rounded-2xl p-8 shadow-lg max-w-2xl mx-auto">
            <h3 className="font-montserrat font-bold text-2xl text-oxford-blue-1 mb-4">
              Ready to Experience Wonder Smiles Care?
            </h3>
            <p className="text-sonic-silver mb-6">
              Book your appointment today and discover why families in Bavdhan choose Wonder Smiles for their dental care needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#appointment" className="btn-primary">
                Book Appointment
              </a>
              <a
                href="tel:+917052101786"
                className="border border-carolina-blue text-carolina-blue hover:bg-carolina-blue hover:text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200"
              >
                Call: +91 70521 01786
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;