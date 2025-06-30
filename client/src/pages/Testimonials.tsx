import { testimonials } from "@/lib/constants";

export default function Testimonials() {
  // Additional testimonials for the page
  const extendedTestimonials = [
    ...testimonials,
    {
      name: "Robert Kambale",
      position: "Operations Director, Tenke Mining",
      image: "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
      quote: "ESS SARL's environmental management solutions have helped us achieve and maintain compliance with both local and international standards. Their team's dedication to excellence is evident in everything they do.",
      rating: 5,
    },
    {
      name: "Sophie Kabongo",
      position: "HSE Manager, CMOC International",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
      quote: "The training programs provided by ESS SARL have significantly improved our safety culture. Their trainers are knowledgeable, professional, and effective at engaging our staff at all levels.",
      rating: 5,
    },
    {
      name: "François Mulamba",
      position: "Project Manager, Gecamines",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
      quote: "We've been working with ESS SARL for over five years, and their consistent quality and reliability have made them an invaluable partner in our environmental compliance efforts.",
      rating: 4.5,
    },
    {
      name: "Charlotte Musonda",
      position: "Environmental Officer, Ivanhoe Mines",
      image: "https://images.unsplash.com/photo-1614644147798-f8c0fc9da7f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
      quote: "ESS SARL's consultancy services have provided us with practical, tailored solutions that address our specific operational challenges. Their deep understanding of both local and international requirements is exceptional.",
      rating: 5,
    }
  ];

  // Case studies for detailed success stories
  const caseStudies = [
    {
      title: "Environmental Compliance Transformation at Major Mining Operation",
      client: "Tenke Fungurume Mining",
      challenge: "Achieving compliance with updated environmental regulations while maintaining operational efficiency.",
      solution: "Comprehensive environmental management system implementation and staff training.",
      results: [
        "100% compliance with local and international standards",
        "30% reduction in environmental incidents",
        "Successful regulatory audits with zero major findings"
      ],
      image: "https://images.unsplash.com/photo-1579547945413-497e1b99dac0?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    },
    {
      title: "Safety Culture Transformation",
      client: "Ruashi Mining",
      challenge: "High incident rate and poor safety culture across operational teams.",
      solution: "Tailored safety leadership program and comprehensive safety management system implementation.",
      results: [
        "75% reduction in recordable incidents",
        "Successful achievement of 1 million work hours without lost time incidents",
        "Positive shift in safety culture as measured by independent assessment"
      ],
      image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    }
  ];

  // Function to render stars based on rating
  const renderStars = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    
    // Add full stars
    for (let i = 0; i < fullStars; i++) {
      stars.push(<i key={`full-${i}`} className="fas fa-star text-yellow-400"></i>);
    }
    
    // Add half star if needed
    if (hasHalfStar) {
      stars.push(<i key="half" className="fas fa-star-half-alt text-yellow-400"></i>);
    }
    
    // Add empty stars
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<i key={`empty-${i}`} className="far fa-star text-yellow-400"></i>);
    }
    
    return stars;
  };

  return (
    <div className="bg-gray-50">
      {/* Hero Section with Page Title - SRK Style */}
      <section className="bg-gray-900 relative py-24">
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/60 z-10"></div>
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" 
            alt="ESS SARL Testimonials" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <div className="w-20 h-1 bg-[#30B4F2] mb-6"></div>
            <h1 className="text-white text-4xl md:text-5xl font-bold mb-4">Client Testimonials</h1>
            <p className="text-xl text-white/80 max-w-xl">
              Hear from our satisfied clients about their experience working with ESS SARL.
            </p>
          </div>
        </div>
      </section>

      {/* Breadcrumb - SRK Style */}
      <div className="bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center text-sm text-gray-500">
            <a href="/" className="hover:text-[#30B4F2]">Home</a>
            <span className="mx-2">/</span>
            <span className="text-gray-700">Testimonials</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          {/* Introduction */}
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold mb-6">What Our Clients Say</h2>
            <div className="w-16 h-1 bg-[#30B4F2] mx-auto mb-6"></div>
            <p className="text-gray-600">
              At ESS SARL, we measure our success by the satisfaction and achievements of our clients. Here's what some of them have to say about working with us.
            </p>
          </div>
          
          {/* Featured Testimonials Grid - SRK Style */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {extendedTestimonials.map((testimonial, index) => (
              <div key={index} className="bg-white shadow-md rounded-sm overflow-hidden transition-transform hover:-translate-y-1 hover:shadow-lg">
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-16 h-16 rounded-full overflow-hidden mr-4 flex-shrink-0">
                      <img 
                        src={testimonial.image} 
                        alt={testimonial.name} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg">{testimonial.name}</h3>
                      <p className="text-sm text-gray-500">{testimonial.position}</p>
                      <div className="flex mt-1">
                        {renderStars(testimonial.rating)}
                      </div>
                    </div>
                  </div>
                  <div className="relative">
                    <i className="fas fa-quote-left text-3xl text-gray-200 absolute -top-3 -left-1"></i>
                    <p className="text-gray-600 italic pt-3 pl-5 pr-2">"{testimonial.quote}"</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Case Studies - SRK Style */}
          <div className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-6">Success Stories</h2>
              <div className="w-16 h-1 bg-[#30B4F2] mx-auto mb-6"></div>
              <p className="text-gray-600 max-w-3xl mx-auto">
                Explore detailed case studies of how we've helped our clients overcome challenges and achieve their goals.
              </p>
            </div>
            
            <div className="space-y-12">
              {caseStudies.map((study, index) => (
                <div key={index} className="bg-white p-8 shadow-md">
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                    <div className={`lg:col-span-4 ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                      <img 
                        src={study.image} 
                        alt={study.title} 
                        className="w-full h-auto rounded-sm"
                      />
                    </div>
                    <div className={`lg:col-span-8 ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                      <h3 className="text-2xl font-bold mb-2">{study.title}</h3>
                      <div className="w-12 h-1 bg-[#30B4F2] mb-4"></div>
                      
                      <div className="mb-4">
                        <h4 className="font-bold text-[#30B4F2] mb-1">Client</h4>
                        <p className="text-gray-700">{study.client}</p>
                      </div>
                      
                      <div className="mb-4">
                        <h4 className="font-bold text-[#30B4F2] mb-1">Challenge</h4>
                        <p className="text-gray-700">{study.challenge}</p>
                      </div>
                      
                      <div className="mb-4">
                        <h4 className="font-bold text-[#30B4F2] mb-1">Solution</h4>
                        <p className="text-gray-700">{study.solution}</p>
                      </div>
                      
                      <div>
                        <h4 className="font-bold text-[#30B4F2] mb-1">Results</h4>
                        <ul className="text-gray-700 space-y-1">
                          {study.results.map((result, idx) => (
                            <li key={idx} className="flex items-start">
                              <i className="fas fa-check-circle text-green-500 mt-1 mr-2"></i>
                              <span>{result}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Testimonial Video - SRK Style */}
          <div className="bg-white p-8 shadow-md text-center">
            <h3 className="text-2xl font-bold mb-6">Watch Client Testimonials</h3>
            <div className="w-16 h-1 bg-[#30B4F2] mx-auto mb-6"></div>
            <div className="max-w-3xl mx-auto">
              <div className="relative pt-[56.25%] bg-gray-200">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-20 h-20 rounded-full bg-[#30B4F2]/90 flex items-center justify-center text-white mx-auto mb-4 cursor-pointer hover:bg-[#30B4F2] transition-colors">
                      <i className="fas fa-play text-2xl"></i>
                    </div>
                    <p className="text-gray-600">Client video testimonials will be available soon</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      

    </div>
  );
}