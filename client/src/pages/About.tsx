import { Button } from "@/components/ui/button";
import environmentalSafetyImage from "../assets/images/about/environmental-safety.jpg";
import SEO from "@/components/seo/SEO";
import LazyImage from "@/components/ui/LazyImage";
import { useTranslation } from "react-i18next";

// Import team member images
import elieImage from "../assets/images/team/elie.jpg";
import reneImage from "../assets/images/team/rene.JPG"; // Use uppercase .JPG extension
import dariusImage from "../assets/images/team/darius.jpg";
import joelImage from "../assets/images/team/joel.jpg";
import fistonImage from "../assets/images/team/fiston.jpg";

export default function About() {
  const { t } = useTranslation();
  
  // Team member data with properly imported images
  const teamMembers = [
    {
      name: "Elie Kipanga",
      position: "Founder",
      image: elieImage,
      bio: "As the visionary founder of ESS SARL, Elie established the company in 2012 with a mission to elevate environmental and safety standards in the DRC's industrial sector. His deep understanding of local regulations and international best practices bridges the gap between global standards and local implementation."
    },
    {
      name: "Rene Le Roux Van Rooyen",
      position: "Chief Executive Officer",
      image: reneImage,
      bio: "With over 15 years of international experience in environmental and safety management across Africa and Europe, Rene leads ESS SARL with a vision for excellence and innovation. His expertise in mining operations and regulatory compliance has established ESS SARL as a leading consultancy in the DRC."
    },
    {
      name: "Darius Tshibangu",
      position: "Human Resources Manager",
      image: dariusImage,
      bio: "Darius leads our human resources department with a focus on talent development and organizational culture. His innovative approach to professional development has created a dynamic team environment that attracts the best local talent to join our mission."
    },
    {
      name: "Joel Aggee Wandjombi",
      position: "Administrator",
      image: joelImage,
      bio: "Joel manages the administrative functions of ESS SARL, bringing efficiency and order to our operations. His expertise in corporate governance, compliance, and financial management ensures that our business infrastructure supports our technical excellence in the field."
    },
    {
      name: "Fiston Mwaha",
      position: "Operations Officer",
      image: fistonImage,
      bio: "Fiston oversees all field operations and project implementations at ESS SARL. With his background in environmental engineering and extensive experience in mining operations, he ensures that our services are delivered to the highest standards while adapting to the unique challenges of the DRC industrial landscape."
    }
  ];
  
  // Company milestones
  const milestones = [
    {
      year: "2012",
      title: "ESS SARL Founded",
      description: "Established in Lubumbashi with a mission to provide professional environmental and safety solutions."
    },
    {
      year: "2015",
      title: "ISO 14001 Certification",
      description: "Achieved international certification for our environmental management systems."
    },
    {
      year: "2017",
      title: "Expansion of Services",
      description: "Added comprehensive training and mentoring programs to our service offerings."
    },
    {
      year: "2019",
      title: "Regional Recognition",
      description: "Recognized by the DRC Mining Association for excellence in environmental consultancy."
    },
    {
      year: "2021",
      title: "Office Expansion",
      description: "Opened a new headquarters facility with enhanced training capabilities."
    },
    {
      year: "2023",
      title: "500th Training Milestone",
      description: "Successfully trained over 500 professionals in safety and environmental management."
    }
  ];

  return (
    <div className="bg-gray-50">
      <SEO 
        title={t('seo.about.title')}
        description={t('seo.about.description')}
      />
      {/* Hero Section with Page Title - SRK Style */}
      <section className="bg-gray-900 relative py-24">
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/60 z-10"></div>
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" 
            alt="About ESS SARL" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <div className="w-20 h-1 bg-[#30B4F2] mb-6"></div>
            <h1 className="text-white text-4xl md:text-5xl font-bold mb-4">About ESS SARL</h1>
            <p className="text-xl text-white/80 max-w-xl">
              Pioneering Environmental and Safety Solutions in the Democratic Republic of Congo since 2012.
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
            <span className="text-gray-700">About Us</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          {/* Company Overview */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
            <div className="lg:col-span-5">
              <div className="relative">
                <img 
                  src={environmentalSafetyImage} 
                  alt="About ESS SARL" 
                  className="w-full h-auto object-cover shadow-lg"
                />
                <div className="absolute -bottom-6 -right-6 bg-[#30B4F2] p-6 text-white max-w-xs shadow-lg">
                  <div className="text-2xl font-bold mb-2">10+ Years</div>
                  <p>Of excellence in providing environmental and safety solutions in the DRC</p>
                </div>
              </div>
            </div>
            
            <div className="lg:col-span-7">
              <div className="w-16 h-1 bg-[#30B4F2] mb-6"></div>
              <h2 className="text-3xl font-bold mb-6">Our Company Story</h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                ESS SARL was founded in 2012 with a vision to transform how industrial and mining operations address environmental and safety challenges in the Democratic Republic of Congo. What began as a small consultancy has grown into a leading provider of integrated environmental management, safety solutions, and professional training services.
              </p>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Based in Lubumbashi, our team combines international expertise with deep local knowledge, allowing us to deliver solutions that are both world-class and specifically adapted to the unique contexts of the DRC. We take pride in our role as partners to our clients, helping them navigate complex regulatory landscapes while implementing sustainable practices that benefit their operations, their workers, and the communities in which they operate.
              </p>
              <p className="text-gray-700 mb-8 leading-relaxed">
                Today, ESS SARL stands as a testament to what can be achieved when technical excellence meets genuine commitment to improving industrial practices in our region. Our ISO 14001 certification and industry recognition reflect our unwavering dedication to quality and continuous improvement in everything we do.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <a href="/services" className="bg-[#30B4F2] hover:bg-[#228CBF] text-white px-5 py-2 text-sm font-medium transition-colors">
                  Our Services
                </a>
                <a href="/contact" className="bg-gray-800 hover:bg-gray-900 text-white px-5 py-2 text-sm font-medium transition-colors">
                  Contact Us
                </a>
              </div>
            </div>
          </div>
          
          {/* Vision & Mission Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
            <div className="bg-white p-8 shadow-md relative overflow-hidden group">
              <div className="absolute top-0 left-0 w-1 h-full bg-[#30B4F2] group-hover:h-2 group-hover:w-full group-hover:transition-all"></div>
              <div className="relative z-10">
                <div className="text-3xl text-[#30B4F2] mb-4">
                  <i className="fas fa-bullseye"></i>
                </div>
                <h3 className="text-xl font-bold mb-4">Our Vision</h3>
                <p className="text-gray-600 leading-relaxed">
                  To be the leading national and regional provider of integrated consultancy, training, and environmental solutions, empowering industries to achieve sustainable operational excellence and responsible environmental stewardship.
                </p>
              </div>
            </div>
            
            <div className="bg-white p-8 shadow-md relative overflow-hidden group">
              <div className="absolute top-0 left-0 w-1 h-full bg-[#1E5631] group-hover:h-2 group-hover:w-full group-hover:transition-all"></div>
              <div className="relative z-10">
                <div className="text-3xl text-[#1E5631] mb-4">
                  <i className="fas fa-flag"></i>
                </div>
                <h3 className="text-xl font-bold mb-4">Our Mission</h3>
                <p className="text-gray-600 leading-relaxed">
                  To provide innovative, reliable, and sustainable services in consultancy, training, and environmental management. We contribute to improving safety and productivity in industries through customized solutions that respect international standards and guarantee customer satisfaction.
                </p>
              </div>
            </div>
          </div>
          
          {/* Company Timeline - SRK Style */}
          <div className="mb-20">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4">Our Journey</h2>
              <div className="w-20 h-1 bg-[#30B4F2] mx-auto"></div>
            </div>
            
            <div className="relative">
              {/* Timeline Line */}
              <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gray-200"></div>
              
              <div className="space-y-16">
                {milestones.map((milestone, index) => (
                  <div key={index} className={`relative flex flex-col md:flex-row items-center ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                    <div className="flex items-center md:w-1/2 justify-end md:pr-8">
                      <div className={`p-6 bg-white shadow-md max-w-md relative ${index % 2 === 0 ? 'md:text-right' : ''} z-10`}>
                        <div className="text-sm text-[#30B4F2] font-bold mb-2">{milestone.year}</div>
                        <h3 className="text-lg font-bold mb-2">{milestone.title}</h3>
                        <p className="text-gray-600">{milestone.description}</p>
                      </div>
                    </div>
                    
                    <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#30B4F2] rounded-full h-6 w-6 z-20 flex items-center justify-center">
                      <div className="h-2 w-2 bg-white rounded-full"></div>
                    </div>
                    
                    <div className="md:w-1/2 md:pl-8">
                      {/* Right side spacing for alternating layout */}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Team Achievements Section */}
          <div className="mb-20 bg-white p-8 shadow-lg">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Our Leadership Team's Story</h2>
              <div className="w-20 h-1 bg-[#30B4F2] mx-auto mb-6"></div>
              <p className="max-w-3xl mx-auto text-gray-600">
                The success of ESS SARL is built on the foundation of a dynamic leadership team that combines international expertise with deep local knowledge.
              </p>
            </div>
            
            <div className="space-y-12">
              {/* Team Introduction */}
              <div>
                <h3 className="text-xl font-bold mb-4 text-[#30B4F2]">The ESS SARL Leadership Team</h3>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  Led by CEO Rene Le Roux Van Rooyen, with founder Elie Kipanga's vision, our leadership team represents the perfect blend of international experience and local expertise. Operations Officer Fiston Mwaha ensures excellence in our field work, while Administrator Joel Aggee Wandjombi maintains organizational efficiency, and Human Resources Manager Darius Tshibangu builds our talented team. Together, they've transformed ESS SARL from a small consultancy into the DRC's leading environmental and safety solutions provider.
                </p>
              </div>
              
              {/* Key Achievements */}
              <div>
                <h3 className="text-xl font-bold mb-4 text-[#30B4F2]">Key Achievements</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <div className="flex items-start mb-4">
                      <div className="bg-[#30B4F2] p-3 rounded-md text-white mr-4">
                        <i className="fas fa-certificate text-xl"></i>
                      </div>
                      <div>
                        <h4 className="font-bold text-lg">ISO 14001 Certification</h4>
                        <p className="text-gray-600">Led by Rene and Fiston, our team achieved international certification for our environmental management systems, establishing ESS SARL as a leader in environmental compliance in the DRC.</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <div className="flex items-start mb-4">
                      <div className="bg-[#30B4F2] p-3 rounded-md text-white mr-4">
                        <i className="fas fa-users text-xl"></i>
                      </div>
                      <div>
                        <h4 className="font-bold text-lg">Training Excellence</h4>
                        <p className="text-gray-600">Our team has successfully trained over 500 professionals in environmental and safety practices, creating a significant impact on improving workplace safety across multiple mining operations in the region.</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <div className="flex items-start mb-4">
                      <div className="bg-[#30B4F2] p-3 rounded-md text-white mr-4">
                        <i className="fas fa-handshake text-xl"></i>
                      </div>
                      <div>
                        <h4 className="font-bold text-lg">Major Mining Partnerships</h4>
                        <p className="text-gray-600">Under Elie and Rene's leadership, our team has established partnerships with several major mining companies in the DRC, providing comprehensive environmental management and safety services that maintain compliance while optimizing operations.</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <div className="flex items-start mb-4">
                      <div className="bg-[#30B4F2] p-3 rounded-md text-white mr-4">
                        <i className="fas fa-award text-xl"></i>
                      </div>
                      <div>
                        <h4 className="font-bold text-lg">Regional Industry Impact</h4>
                        <p className="text-gray-600">Through Darius and Joel's community-focused initiatives, our team has helped establish new standards for local employment and professional development in the DRC mining sector, creating lasting positive impact in the communities where we operate.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Challenges & Future Vision */}
              <div>
                <h3 className="text-xl font-bold mb-4 text-[#30B4F2]">Challenges Overcome & Future Vision</h3>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  Despite the challenging operating environment in the DRC, our team has overcome significant logistical, regulatory, and resource obstacles to deliver world-class environmental and safety solutions. By developing innovative approaches tailored to local conditions, we've helped our clients meet and exceed international standards while navigating the complexities of operating in the region.
                </p>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  Looking to the future, our leadership team is committed to expanding ESS SARL's impact through technological innovation, continuing education, and deeper integration with community development initiatives. We aim to be at the forefront of sustainable mining practices in Central Africa, helping to shape a future where industrial development and environmental stewardship go hand in hand.
                </p>
              </div>
            </div>
          </div>
          
          {/* Leadership Team Section */}
          <div>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Meet Our Leaders</h2>
              <div className="w-20 h-1 bg-[#30B4F2] mx-auto mb-6"></div>
              <p className="max-w-3xl mx-auto text-gray-600">
                Our experienced leadership team brings together diverse expertise and a shared commitment to excellence in environmental and safety solutions.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {teamMembers.map((member, index) => (
                <div key={index} className="bg-white shadow-lg rounded-md group overflow-hidden">
                  <div className="relative overflow-hidden h-80 flex items-center justify-center bg-gradient-to-b from-gray-50 to-gray-200">
                    <LazyImage 
                      src={member.image} 
                      alt={member.name} 
                      className="w-full h-auto max-h-80 object-contain transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent h-24"></div>
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <h3 className="text-white text-xl font-bold">{member.name}</h3>
                      <p className="text-[#30B4F2]">{member.position}</p>
                    </div>
                  </div>
                  <div className="p-6">
                    <p className="text-gray-600 text-sm">{member.bio}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      

    </div>
  );
}