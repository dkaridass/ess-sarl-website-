import { useState } from "react";
import { services } from "@/lib/constants";
// Import images for proper asset handling
import brownCoalMining from "@assets/brown-coal-mining-111365.jpg";
import colleaguesTeamWorking from "@assets/colleagues-team-working-company-paperwork-doig-teamwork-analyze-documents-online-research-information-planning-corporate-presentation-with-data-charts-job-collaboration.jpg";
import engineerCooperation from "@assets/engineer-cooperation-male-female-technician-maintenance-control-relay-robot-arm-system-welding-with-tablet-laptop-control-quality-operate-process-work-heavy-industry-40-manufacturing-factory.jpg";
import womanEngineer from "@assets/woman-working-as-engineer.jpg";

export default function Services() {
  const [activeTab, setActiveTab] = useState("consultancy");

  // Additional services data
  const additionalServices = [
    {
      id: "emergency",
      title: "Emergency Response",
      description: "Rapid deployment of specialists to assess environmental incidents and implement control measures.",
      features: [
        "24/7 emergency response team availability",
        "Rapid site assessment and containment strategies",
        "Environmental incident investigation",
        "Remediation planning and implementation",
        "Post-incident monitoring and reporting"
      ],
      image: "https://images.unsplash.com/photo-1583950709791-38f6169e65e7?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "compliance",
      title: "Regulatory Compliance",
      description: "Comprehensive compliance management for local and international environmental and safety regulations.",
      features: [
        "Regulatory gap analysis and compliance audits",
        "Permit application and management",
        "Compliance monitoring programs",
        "Legal register development and maintenance",
        "Regulatory training for management teams"
      ],
      image: "https://images.unsplash.com/photo-1541199249251-f713e6145474?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "safety",
      title: "Safety Management",
      description: "Comprehensive workplace safety solutions to protect personnel and assets.",
      features: [
        "Safety management system development",
        "Workplace hazard identification",
        "Risk assessment and mitigation strategies",
        "Safety training and awareness programs",
        "Incident investigation and corrective action planning"
      ],
      image: "https://images.unsplash.com/photo-1521117293419-6d9e84b15d6f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    }
  ];

  return (
    <div className="bg-gray-50">
      {/* Hero Section with Page Title - SRK Style */}
      <section className="bg-gray-900 relative py-24">
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/60 z-10"></div>
        <div className="absolute inset-0 z-0">
          <img 
            src={brownCoalMining} 
            alt="ESS SARL Industrial Services" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <div className="w-20 h-1 bg-[#30B4F2] mb-6"></div>
            <h1 className="text-white text-4xl md:text-5xl font-bold mb-4">Our Services</h1>
            <p className="text-xl text-white/80 max-w-xl">
              Comprehensive environmental and safety solutions tailored to your industry needs.
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
            <span className="text-gray-700">Services</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          {/* Services Introduction */}
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold mb-6">Professional Environmental and Safety Solutions</h2>
            <div className="w-16 h-1 bg-[#30B4F2] mx-auto mb-6"></div>
            <p className="text-gray-600 mb-8">
              ESS SARL provides a comprehensive range of services to help industrial and mining operations optimize their environmental performance, enhance workplace safety, and achieve regulatory compliance. Our tailored solutions address the unique challenges faced by businesses operating in the DRC.
            </p>
          </div>

          {/* Featured Service Categories - SRK Style */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-16">
            <div className="group">
              <div className="relative overflow-hidden">
                <img 
                  src={colleaguesTeamWorking} 
                  alt="Professional Consultancy Services" 
                  className="w-full h-72 object-cover transform group-hover:scale-105 transition-transform duration-500" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-6 w-full">
                  <h3 className="text-white text-xl font-bold mb-2">Consultancy Services</h3>
                  <p className="text-gray-200 text-sm mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Expert guidance to optimize operations and ensure regulatory compliance
                  </p>
                  <button 
                    onClick={() => setActiveTab("consultancy")}
                    className="text-[#30B4F2] bg-white inline-block px-4 py-2 rounded-sm font-medium hover:bg-[#30B4F2] hover:text-white transition-colors"
                  >
                    Learn More
                  </button>
                </div>
              </div>
            </div>

            <div className="group">
              <div className="relative overflow-hidden">
                <img 
                  src={engineerCooperation} 
                  alt="Industrial Training & Mentoring" 
                  className="w-full h-72 object-cover transform group-hover:scale-105 transition-transform duration-500" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-6 w-full">
                  <h3 className="text-white text-xl font-bold mb-2">Training & Mentoring</h3>
                  <p className="text-gray-200 text-sm mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Comprehensive programs for professional development and certification
                  </p>
                  <button 
                    onClick={() => setActiveTab("training")}
                    className="text-[#30B4F2] bg-white inline-block px-4 py-2 rounded-sm font-medium hover:bg-[#30B4F2] hover:text-white transition-colors"
                  >
                    Learn More
                  </button>
                </div>
              </div>
            </div>

            <div className="group">
              <div className="relative overflow-hidden">
                <img 
                  src={womanEngineer} 
                  alt="Professional Environmental Services" 
                  className="w-full h-72 object-cover transform group-hover:scale-105 transition-transform duration-500" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-6 w-full">
                  <h3 className="text-white text-xl font-bold mb-2">Environmental Services</h3>
                  <p className="text-gray-200 text-sm mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Sustainable practices for responsible environmental management
                  </p>
                  <button 
                    onClick={() => setActiveTab("environmental")}
                    className="text-[#30B4F2] bg-white inline-block px-4 py-2 rounded-sm font-medium hover:bg-[#30B4F2] hover:text-white transition-colors"
                  >
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Service Category Details - SRK Style */}
          <div className="bg-white shadow-md p-8 mb-16">
            <div className="mb-8 border-b border-gray-200">
              <div className="flex flex-wrap -mb-px">
                <button 
                  onClick={() => setActiveTab("consultancy")}
                  className={`py-4 px-6 font-medium border-b-2 transition-colors ${
                    activeTab === "consultancy" 
                      ? "border-[#30B4F2] text-[#30B4F2]" 
                      : "border-transparent hover:text-[#30B4F2]"
                  }`}
                >
                  Consultancy Services
                </button>
                <button 
                  onClick={() => setActiveTab("training")}
                  className={`py-4 px-6 font-medium border-b-2 transition-colors ${
                    activeTab === "training" 
                      ? "border-[#30B4F2] text-[#30B4F2]" 
                      : "border-transparent hover:text-[#30B4F2]"
                  }`}
                >
                  Training & Mentoring
                </button>
                <button 
                  onClick={() => setActiveTab("environmental")}
                  className={`py-4 px-6 font-medium border-b-2 transition-colors ${
                    activeTab === "environmental" 
                      ? "border-[#30B4F2] text-[#30B4F2]" 
                      : "border-transparent hover:text-[#30B4F2]"
                  }`}
                >
                  Environmental Services
                </button>
              </div>
            </div>

            {/* Tab Content */}
            <div>
              {/* Consultancy Services */}
              {activeTab === "consultancy" && (
                <div>
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12">
                    <div className="lg:col-span-4">
                      <div className="relative rounded-md overflow-hidden h-full min-h-[300px]">
                        <img 
                          src={colleaguesTeamWorking} 
                          alt="Expert Consultancy Services" 
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
                        <div className="absolute bottom-0 left-0 p-6 text-white">
                          <h3 className="text-2xl font-bold mb-2">Expert Consultancy Services</h3>
                          <div className="w-12 h-1 bg-[#30B4F2] mb-3"></div>
                          <p>ISO 14001 certified solutions for industrial excellence</p>
                        </div>
                      </div>
                    </div>
                    <div className="lg:col-span-8">
                      <p className="text-gray-700 mb-6 leading-relaxed">
                        Our consultancy services provide expert guidance to industrial and mining operations seeking to optimize their processes, ensure regulatory compliance, and implement best practices in environmental and safety management. With deep local knowledge and international expertise, our consultants deliver practical solutions tailored to the unique challenges of operating in the DRC.
                      </p>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {services.consultancy.map((service, index) => (
                          <div key={index} className="border border-gray-100 rounded-md overflow-hidden hover:shadow-md transition-shadow group">
                            <div className="p-6">
                              <div className="w-12 h-12 rounded-full bg-[#30B4F2]/10 flex items-center justify-center mb-4 text-[#30B4F2] group-hover:bg-[#30B4F2] group-hover:text-white transition-colors">
                                <i className={`fas ${service.icon} text-xl`}></i>
                              </div>
                              <h3 className="font-bold text-xl mb-3">{service.title}</h3>
                              <p className="text-gray-600 mb-4">{service.description}</p>
                              <a href="/contact" className="text-[#30B4F2] hover:text-[#28A0D8] font-medium inline-flex items-center">
                                Request Service <i className="fas fa-arrow-right ml-2 text-sm transition-transform group-hover:translate-x-1"></i>
                              </a>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Training Services */}
              {activeTab === "training" && (
                <div>
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12">
                    <div className="lg:col-span-4">
                      <div className="relative rounded-md overflow-hidden h-full min-h-[300px]">
                        <img 
                          src={engineerCooperation} 
                          alt="Professional Training Services" 
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
                        <div className="absolute bottom-0 left-0 p-6 text-white">
                          <h3 className="text-2xl font-bold mb-2">Comprehensive Training Programs</h3>
                          <div className="w-12 h-1 bg-[#30B4F2] mb-3"></div>
                          <p>Professional development for operational excellence</p>
                        </div>
                      </div>
                    </div>
                    <div className="lg:col-span-8">
                      <p className="text-gray-700 mb-6 leading-relaxed">
                        Our training and mentoring programs are delivered by experienced professionals with deep industry knowledge. We focus on building the skills and competencies needed to enhance safety, environmental performance, and operational efficiency in industrial and mining contexts. All training programs can be customized to meet the specific needs of your organization.
                      </p>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {services.training.map((service, index) => (
                          <div key={index} className="border border-gray-100 rounded-md overflow-hidden hover:shadow-md transition-shadow group">
                            <div className="p-6">
                              <div className="w-12 h-12 rounded-full bg-[#30B4F2]/10 flex items-center justify-center mb-4 text-[#30B4F2] group-hover:bg-[#30B4F2] group-hover:text-white transition-colors">
                                <i className={`fas ${service.icon} text-xl`}></i>
                              </div>
                              <h3 className="font-bold text-xl mb-3">{service.title}</h3>
                              <p className="text-gray-600 mb-4">{service.description}</p>
                              <a href="/contact" className="text-[#30B4F2] hover:text-[#28A0D8] font-medium inline-flex items-center">
                                Request Service <i className="fas fa-arrow-right ml-2 text-sm transition-transform group-hover:translate-x-1"></i>
                              </a>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Environmental Services */}
              {activeTab === "environmental" && (
                <div>
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12">
                    <div className="lg:col-span-4">
                      <div className="relative rounded-md overflow-hidden h-full min-h-[300px]">
                        <img 
                          src={womanEngineer} 
                          alt="Professional Environmental Services" 
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
                        <div className="absolute bottom-0 left-0 p-6 text-white">
                          <h3 className="text-2xl font-bold mb-2">Environmental Management Solutions</h3>
                          <div className="w-12 h-1 bg-[#30B4F2] mb-3"></div>
                          <p>Sustainable practices for responsible operations</p>
                        </div>
                      </div>
                    </div>
                    <div className="lg:col-span-8">
                      <p className="text-gray-700 mb-6 leading-relaxed">
                        Our ISO 14001 certified environmental management solutions are designed specifically for industrial and mining operations in challenging contexts. We help companies minimize their environmental footprint while maintaining operational efficiency and regulatory compliance. Our approach integrates international best practices with practical solutions for the unique environmental challenges of the DRC.
                      </p>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {services.environmental.map((service, index) => (
                          <div key={index} className="border border-gray-100 rounded-md overflow-hidden hover:shadow-md transition-shadow group">
                            <div className="p-6">
                              <div className="w-12 h-12 rounded-full bg-[#30B4F2]/10 flex items-center justify-center mb-4 text-[#30B4F2] group-hover:bg-[#30B4F2] group-hover:text-white transition-colors">
                                <i className={`fas ${service.icon} text-xl`}></i>
                              </div>
                              <h3 className="font-bold text-xl mb-3">{service.title}</h3>
                              <p className="text-gray-600 mb-4">{service.description}</p>
                              <a href="/contact" className="text-[#30B4F2] hover:text-[#28A0D8] font-medium inline-flex items-center">
                                Request Service <i className="fas fa-arrow-right ml-2 text-sm transition-transform group-hover:translate-x-1"></i>
                              </a>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Additional Services */}
          <div className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-6">Specialized Services</h2>
              <div className="w-16 h-1 bg-[#30B4F2] mx-auto mb-6"></div>
              <p className="text-gray-600 max-w-3xl mx-auto">
                Beyond our core offerings, we provide specialized services to address specific operational challenges and requirements.
              </p>
            </div>

            <div className="space-y-12">
              {additionalServices.map((service, index) => (
                <div key={index} className="grid grid-cols-1 md:grid-cols-12 gap-8 bg-white p-8 shadow-md">
                  <div className={`md:col-span-4 ${index % 2 === 1 ? 'md:order-2' : ''}`}>
                    <img 
                      src={
                        service.id === "emergency" 
                          ? "https://images.pexels.com/photos/8961345/pexels-photo-8961345.jpeg"
                          : service.id === "compliance"
                          ? "https://images.pexels.com/photos/5668473/pexels-photo-5668473.jpeg"
                          : "https://images.pexels.com/photos/2381463/pexels-photo-2381463.jpeg"
                      }
                      alt={service.title} 
                      className="w-full h-64 object-cover rounded-md"
                    />
                  </div>
                  <div className={`md:col-span-8 ${index % 2 === 1 ? 'md:order-1' : ''}`}>
                    <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                    <div className="w-12 h-1 bg-[#30B4F2] mb-4"></div>
                    <p className="text-gray-600 mb-6">{service.description}</p>
                    <ul className="space-y-2 mb-6">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start">
                          <div className="text-[#30B4F2] mr-3 mt-1">
                            <i className="fas fa-check-circle"></i>
                          </div>
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <a 
                      href="/contact" 
                      className="inline-block bg-[#30B4F2] hover:bg-[#228CBF] text-white px-5 py-2 text-sm font-medium transition-colors"
                    >
                      Request this Service
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Service Process */}
          <div className="bg-white p-10 shadow-md">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-6">Our Service Process</h2>
              <div className="w-16 h-1 bg-[#30B4F2] mx-auto mb-6"></div>
              <p className="text-gray-600 max-w-3xl mx-auto">
                We follow a structured approach to ensure we deliver services that are aligned with your specific needs and objectives.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {[
                {
                  step: "01",
                  title: "Consultation",
                  description: "We begin with a thorough consultation to understand your needs, challenges, and objectives.",
                  icon: "fa-comments"
                },
                {
                  step: "02",
                  title: "Assessment",
                  description: "Our experts conduct a detailed assessment of your current operations and identify opportunities for improvement.",
                  icon: "fa-search"
                },
                {
                  step: "03",
                  title: "Implementation",
                  description: "We work closely with your team to implement tailored solutions and best practices.",
                  icon: "fa-cogs"
                },
                {
                  step: "04",
                  title: "Monitoring",
                  description: "We provide ongoing support and monitoring to ensure continued compliance and optimal performance.",
                  icon: "fa-chart-line"
                }
              ].map((process, index) => (
                <div key={index} className="relative p-6 border-t-2 border-[#30B4F2]">
                  <div className="absolute -top-4 left-6 bg-[#30B4F2] text-white text-sm font-bold py-1 px-3">
                    {process.step}
                  </div>
                  <div className="text-3xl text-[#30B4F2] mb-4">
                    <i className={`fas ${process.icon}`}></i>
                  </div>
                  <h3 className="text-xl font-bold mb-3">{process.title}</h3>
                  <p className="text-gray-600">{process.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>


    </div>
  );
}