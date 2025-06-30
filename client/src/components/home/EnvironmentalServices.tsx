import { useTranslation } from "react-i18next";

export default function EnvironmentalServices() {
  const { t } = useTranslation();

  const coreServices = [
    {
      icon: "fa-leaf",
      title: "Sustainability",
      description: "Sustainability planning, ESG strategy development, carbon and resource efficiency assessments, and circular economy practices within mining processes.",
      features: [
        "ESG Strategy Development",
        "Carbon Efficiency Assessments", 
        "Circular Economy Practices",
        "Resource Use Optimization"
      ]
    },
    {
      icon: "fa-chart-line",
      title: "Monitoring",
      description: "Comprehensive environmental monitoring services for air and water quality, soil analysis, noise assessments, and biodiversity impact evaluations.",
      features: [
        "Air & Water Quality Monitoring",
        "Soil & Sediment Analysis",
        "Noise & Vibration Assessments",
        "Biodiversity Impact Evaluations"
      ]
    },
    {
      icon: "fa-balance-scale",
      title: "Governance",
      description: "Development of environmental management systems, compliance frameworks, and alignment with DRC regulations and international standards.",
      features: [
        "Environmental Management Systems",
        "DRC Regulatory Compliance",
        "IFC Performance Standards",
        "ISO 14001 Implementation"
      ]
    }
  ];

  const specializedServices = [
    {
      icon: "fa-tint",
      title: "Water Management",
      description: "Integrated water management systems designed to optimize resource use, treat contaminated water, and restore polluted rivers with cost-effective solutions.",
      highlights: ["Ground Water Treatment", "Surface Water Management", "Acid Mine Drainage Solutions"]
    },
    {
      icon: "fa-mountain",
      title: "TSF Management & Compliance",
      description: "Comprehensive tailings storage facility assessments with operational management plans ensuring safe, compliant, and sustainable tailings storage.",
      highlights: ["Risk Assessment & Mitigation", "Structural Integrity Monitoring", "Dam Break Studies"]
    },
    {
      icon: "fa-clipboard-check",
      title: "Compliance Consulting",
      description: "Navigate DRC environmental regulations with expert guidance on permits, environmental impact assessments, audits, and corrective action plans.",
      highlights: ["Environmental Permits", "EIA Assessments", "Regulatory Audits"]
    }
  ];

  const isoServices = [
    {
      standard: "ISO 9001",
      title: "Quality Management Systems",
      description: "Streamline operations and improve product and service quality through ISO 9001 standards implementation."
    },
    {
      standard: "ISO 14001", 
      title: "Environmental Management Systems",
      description: "Create and implement EMS frameworks that manage environmental impacts, set sustainability goals, and ensure legal compliance."
    },
    {
      standard: "ISO 45001",
      title: "Occupational Health and Safety",
      description: "Develop systems that identify, control, and reduce health and safety risks in mining environments."
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        
        {/* Introduction Header */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <div className="w-16 h-1 bg-[#1E5631] mx-auto mb-6"></div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
            Environmental Services & Consulting
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed mb-8">
            ESS SARL is a leading provider of environmental consulting services in Haute-Katanga Province, 
            Democratic Republic of Congo. Positioned in the heart of the DRC's thriving copper mining region, 
            we deliver innovative and practical environmental solutions tailored to the extractive industry.
          </p>
          
          {/* Download Section */}
          <div className="bg-gradient-to-r from-[#1E5631] to-[#2A7F47] rounded-lg p-8 text-white">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="text-left mb-6 md:mb-0">
                <h3 className="text-2xl font-bold mb-2">Environmental Services Corporate Profile 2025</h3>
                <p className="text-green-100">
                  Download our comprehensive environmental consulting portfolio including expert services, 
                  compliance solutions, and specialized capabilities for the mining industry.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="/ESS-Environmental-Profile-2025.pdf" 
                  className="bg-white text-[#1E5631] hover:bg-gray-100 px-6 py-3 font-semibold rounded-sm shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center"
                  download
                >
                  <i className="fas fa-download mr-2"></i>
                  Download Profile (PDF)
                </a>
                <a 
                  href="/contact" 
                  className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-[#1E5631] px-6 py-3 font-semibold rounded-sm transition-all duration-300 flex items-center"
                >
                  <i className="fas fa-phone mr-2"></i>
                  Request Consultation
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Problem-Solution Framework */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white rounded-lg p-8 shadow-lg text-center">
            <div className="w-16 h-16 mx-auto bg-red-100 rounded-full flex items-center justify-center mb-4">
              <i className="fas fa-exclamation-triangle text-red-600 text-2xl"></i>
            </div>
            <h3 className="text-xl font-bold mb-4 text-gray-900">What's the Problem?</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Each affected party sees a project differently. How do you involve each group and balance 
              their input to ensure success? Where do you transport material for disposal? On-site treatment 
              is often a fraction of the cost.
            </p>
          </div>
          
          <div className="bg-white rounded-lg p-8 shadow-lg text-center">
            <div className="w-16 h-16 mx-auto bg-blue-100 rounded-full flex items-center justify-center mb-4">
              <i className="fas fa-bullseye text-blue-600 text-2xl"></i>
            </div>
            <h3 className="text-xl font-bold mb-4 text-gray-900">Get it Right the First Time!</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              The key element of any successful project is identifying the issues up front. ESS's practical 
              experience helps you identify critical issues in design and management so facilities can 
              ultimately be safely and properly closed.
            </p>
          </div>
          
          <div className="bg-white rounded-lg p-8 shadow-lg text-center">
            <div className="w-16 h-16 mx-auto bg-green-100 rounded-full flex items-center justify-center mb-4">
              <i className="fas fa-check-circle text-green-600 text-2xl"></i>
            </div>
            <h3 className="text-xl font-bold mb-4 text-gray-900">Benefit from the Solution</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              We pride ourselves on solutions that sustain commercial interests and a healthy environment. 
              We work with mines looking for economical, effective compliance and financial institutions 
              that need to assess and manage risk.
            </p>
          </div>
        </div>

        {/* Core Services */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-12 text-center text-gray-900">Expert Services Offered</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {coreServices.map((service, index) => (
              <div key={index} className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="w-16 h-16 mx-auto bg-[#1E5631] rounded-full flex items-center justify-center mb-6">
                  <i className={`fas ${service.icon} text-white text-2xl`}></i>
                </div>
                <h4 className="text-xl font-bold mb-4 text-center text-gray-900">{service.title}</h4>
                <p className="text-gray-600 text-sm leading-relaxed mb-6 text-center">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-700">
                      <i className="fas fa-check text-[#1E5631] mr-3 text-xs"></i>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Specialized Services */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-12 text-center text-gray-900">Specialized Environmental Solutions</h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {specializedServices.map((service, index) => (
              <div key={index} className="bg-white rounded-lg p-8 shadow-lg">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-[#30B4F2] rounded-full flex items-center justify-center mr-4">
                    <i className={`fas ${service.icon} text-white text-lg`}></i>
                  </div>
                  <h4 className="text-xl font-bold text-gray-900">{service.title}</h4>
                </div>
                <p className="text-gray-600 leading-relaxed mb-6">
                  {service.description}
                </p>
                <div className="grid grid-cols-1 gap-2">
                  {service.highlights.map((highlight, highlightIndex) => (
                    <div key={highlightIndex} className="bg-gray-50 rounded-lg p-3">
                      <div className="flex items-center">
                        <i className="fas fa-arrow-right text-[#30B4F2] mr-3 text-sm"></i>
                        <span className="text-sm font-medium text-gray-700">{highlight}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ISO Systems */}
        <div className="bg-white rounded-lg p-8 mb-16">
          <h3 className="text-2xl font-bold mb-8 text-center text-gray-900">
            ISO Systems Development, Implementation & Certification
          </h3>
          <p className="text-gray-600 text-center mb-12 max-w-4xl mx-auto">
            ESS SARL specializes in the development, implementation, and preparation for certification of 
            internationally recognized ISO management systems. We help mining and industrial clients establish 
            robust systems that enhance performance, ensure compliance, and demonstrate excellence.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {isoServices.map((iso, index) => (
              <div key={index} className="border border-gray-200 rounded-lg p-6 text-center">
                <div className="bg-[#1E5631] text-white px-4 py-2 rounded-full text-sm font-bold mb-4 inline-block">
                  {iso.standard}
                </div>
                <h4 className="text-lg font-bold mb-3 text-gray-900">{iso.title}</h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {iso.description}
                </p>
              </div>
            ))}
          </div>

          <div className="bg-gray-50 rounded-lg p-6">
            <h4 className="text-lg font-bold mb-4 text-gray-900">Our ISO Implementation Approach:</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-center">
                <i className="fas fa-search text-[#1E5631] mr-3"></i>
                <span className="text-sm text-gray-700">Gap analyses to assess current practices</span>
              </div>
              <div className="flex items-center">
                <i className="fas fa-cogs text-[#1E5631] mr-3"></i>
                <span className="text-sm text-gray-700">Customized system design based on operations</span>
              </div>
              <div className="flex items-center">
                <i className="fas fa-users text-[#1E5631] mr-3"></i>
                <span className="text-sm text-gray-700">Employee training and capacity building</span>
              </div>
              <div className="flex items-center">
                <i className="fas fa-certificate text-[#1E5631] mr-3"></i>
                <span className="text-sm text-gray-700">Pre-certification readiness support</span>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-[#1E5631] to-[#30B4F2] rounded-lg p-8 text-center text-white">
          <h3 className="text-2xl font-bold mb-4">
            Empathy for Earth, Expertise for You
          </h3>
          <p className="text-gray-200 mb-8 max-w-2xl mx-auto">
            Combining environmental care with professional guidance. Partner with ESS SARL for comprehensive 
            environmental consulting services that ensure regulatory compliance, sustainability, and operational excellence.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a 
              href="/contact" 
              className="bg-white text-[#1E5631] hover:bg-gray-100 px-8 py-3 font-semibold rounded-sm shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            >
              Schedule Environmental Assessment
            </a>
            <a 
              href="/ESS-Environmental-Profile-2025.pdf" 
              className="bg-white bg-opacity-20 hover:bg-opacity-30 text-white border border-white px-8 py-3 font-semibold rounded-sm transition-all duration-300"
              download
            >
              Download Full Profile
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}