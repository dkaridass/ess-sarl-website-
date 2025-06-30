import { achievements } from "@/lib/constants";

export default function Achievements() {
  // Additional achievements data
  const majorProjects = [
    {
      title: "Mine Closure Rehabilitation Project",
      description: "Successful environmental restoration of a former mining site, leading to biodiversity recovery and community benefits.",
      image: "https://images.unsplash.com/photo-1606041008023-472dfb5e530f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      year: "2022"
    },
    {
      title: "Safety Management System Implementation",
      description: "Comprehensive safety management system design and implementation for a major industrial client, resulting in zero lost-time incidents.",
      image: "https://images.unsplash.com/photo-1565301660306-29e08751cc53?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      year: "2020"
    },
    {
      title: "Industrial Wastewater Treatment Innovation",
      description: "Development of a customized wastewater treatment solution that reduced contaminants by 95% while cutting operational costs.",
      image: "https://images.unsplash.com/photo-1520223297779-95bbd1ea79b7?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      year: "2019"
    }
  ];
  
  // Recognition and awards
  const awards = [
    {
      title: "DRC Mining Industry Environmental Excellence Award",
      issuer: "DRC Chamber of Mines",
      year: "2023",
      description: "Recognized for outstanding contributions to environmental stewardship in mining operations."
    },
    {
      title: "Safety Innovation Recognition",
      issuer: "International Mining Safety Conference",
      year: "2022",
      description: "Awarded for innovative approaches to improving safety culture in high-risk industrial environments."
    },
    {
      title: "Corporate Social Responsibility Excellence",
      issuer: "African Business Forum",
      year: "2021",
      description: "Recognized for integrating community support and development in environmental projects."
    }
  ];
  
  // Statistical highlights
  const stats = [
    {
      value: "500+",
      label: "Professionals Trained",
      icon: "fa-user-graduate"
    },
    {
      value: "100+",
      label: "Projects Completed",
      icon: "fa-clipboard-check"
    },
    {
      value: "25+",
      label: "Mining Clients",
      icon: "fa-industry"
    },
    {
      value: "10+",
      label: "Years in Operation",
      icon: "fa-calendar-check"
    }
  ];

  return (
    <div className="bg-gray-50">
      {/* Hero Section with Page Title - SRK Style */}
      <section className="bg-gray-900 relative py-24">
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/60 z-10"></div>
        <div className="absolute inset-0 z-0">
          <img 
            src="/src/assets/images/services/environmental-safety.jpg" 
            alt="ESS SARL Achievements" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <div className="w-20 h-1 bg-[#30B4F2] mb-6"></div>
            <h1 className="text-white text-4xl md:text-5xl font-bold mb-4">Our Achievements</h1>
            <p className="text-xl text-white/80 max-w-xl">
              Excellence and innovation in environmental and safety solutions.
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
            <span className="text-gray-700">Achievements</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          {/* Stats Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {stats.map((stat, index) => (
              <div key={index} className="bg-white p-6 shadow-md text-center transition-transform hover:-translate-y-1 hover:shadow-lg">
                <div className="w-16 h-16 rounded-full bg-[#30B4F2]/10 flex items-center justify-center text-[#30B4F2] mx-auto mb-4">
                  <i className={`fas ${stat.icon} text-2xl`}></i>
                </div>
                <div className="text-3xl font-bold mb-2">{stat.value}</div>
                <p className="text-gray-600">{stat.label}</p>
              </div>
            ))}
          </div>
          
          {/* Key Achievements Section - SRK Style */}
          <div className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-6">Key Achievements</h2>
              <div className="w-16 h-1 bg-[#30B4F2] mx-auto mb-6"></div>
              <p className="text-gray-600 max-w-3xl mx-auto">
                Our commitment to excellence has resulted in significant achievements and industry recognition.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {achievements.map((achievement, index) => (
                <div key={index} className="bg-white p-8 shadow-md transition-all hover:shadow-lg group">
                  <div className="w-16 h-16 rounded-full bg-[#30B4F2]/10 flex items-center justify-center text-[#30B4F2] mb-6 group-hover:bg-[#30B4F2] group-hover:text-white transition-colors">
                    <i className={`fas ${achievement.icon} text-2xl`}></i>
                  </div>
                  <h3 className="text-xl font-bold mb-4">{achievement.title}</h3>
                  <p className="text-gray-600">{achievement.description}</p>
                </div>
              ))}
            </div>
          </div>
          
          {/* Major Projects Section - SRK Style */}
          <div className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-6">Major Projects</h2>
              <div className="w-16 h-1 bg-[#30B4F2] mx-auto mb-6"></div>
              <p className="text-gray-600 max-w-3xl mx-auto">
                Showcasing some of our most impactful projects that demonstrate our expertise and innovation.
              </p>
            </div>
            
            <div className="space-y-12">
              {majorProjects.map((project, index) => (
                <div key={index} className="bg-white shadow-md overflow-hidden">
                  <div className="grid grid-cols-1 lg:grid-cols-12">
                    <div className={`lg:col-span-5 ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                      <img 
                        src={project.image} 
                        alt={project.title} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className={`lg:col-span-7 p-8 flex flex-col justify-center ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                      <div className="text-sm font-bold text-[#30B4F2] mb-2">{project.year}</div>
                      <h3 className="text-2xl font-bold mb-4">{project.title}</h3>
                      <div className="w-12 h-1 bg-[#30B4F2] mb-4"></div>
                      <p className="text-gray-600 mb-6">{project.description}</p>
                      <a 
                        href="/contact" 
                        className="self-start bg-gray-900 hover:bg-black text-white px-6 py-2 inline-block transition-colors"
                      >
                        Learn More
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Recognition & Awards - SRK Style */}
          <div className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-6">Recognition & Awards</h2>
              <div className="w-16 h-1 bg-[#30B4F2] mx-auto mb-6"></div>
              <p className="text-gray-600 max-w-3xl mx-auto">
                Our work has been recognized by industry leaders and organizations for excellence and innovation.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {awards.map((award, index) => (
                <div key={index} className="bg-white shadow-md p-8 relative group overflow-hidden">
                  <div className="absolute top-0 right-0 w-20 h-20 bg-gray-100 flex items-center justify-center rotate-45 translate-x-8 -translate-y-8 group-hover:bg-[#30B4F2] transition-colors">
                    <span className="text-gray-500 group-hover:text-white font-bold text-sm -rotate-45 transition-colors">{award.year}</span>
                  </div>
                  <div className="mb-4 text-3xl text-[#30B4F2]">
                    <i className="fas fa-award"></i>
                  </div>
                  <h3 className="text-xl font-bold mb-2">{award.title}</h3>
                  <p className="text-sm text-[#30B4F2] mb-4">{award.issuer}</p>
                  <p className="text-gray-600">{award.description}</p>
                </div>
              ))}
            </div>
          </div>
          
          {/* Certifications Section - SRK Style */}
          <div className="bg-white p-8 shadow-md">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold mb-6">Certifications & Standards</h2>
              <div className="w-16 h-1 bg-[#30B4F2] mx-auto mb-6"></div>
              <p className="text-gray-600 max-w-3xl mx-auto">
                We adhere to international standards and maintain certifications that demonstrate our commitment to quality.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "ISO 14001",
                  description: "Environmental Management System certification, demonstrating our commitment to environmental responsibility and continuous improvement.",
                  icon: "fa-certificate"
                },
                {
                  title: "OHSAS 18001",
                  description: "Occupational Health and Safety Management certification, showcasing our dedication to workplace safety and health.",
                  icon: "fa-hard-hat"
                },
                {
                  title: "DRC Environmental Compliance",
                  description: "Full compliance with all DRC environmental regulations and standards for consultancy services.",
                  icon: "fa-check-circle"
                }
              ].map((cert, index) => (
                <div key={index} className="border border-gray-200 p-6 hover:border-[#30B4F2] transition-colors">
                  <div className="text-3xl text-[#30B4F2] mb-4">
                    <i className={`fas ${cert.icon}`}></i>
                  </div>
                  <h3 className="text-xl font-bold mb-3">{cert.title}</h3>
                  <p className="text-gray-600">{cert.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      

    </div>
  );
}