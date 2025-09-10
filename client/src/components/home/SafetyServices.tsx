import { useTranslation } from "react-i18next";

export default function SafetyServices() {
  const { t } = useTranslation();

  const coreValues = [
    {
      icon: "fa-shield-alt",
      title: "Commitment to Safety",
      description: "We prioritize protecting lives by fostering a safe and secure work environment for all employees."
    },
    {
      icon: "fa-balance-scale",
      title: "Integrity & Compliance",
      description: "Ensuring ethical practices and adherence to all legal safety regulations and international standards."
    },
    {
      icon: "fa-search",
      title: "Proactive Risk Management",
      description: "Identifying and eliminating potential workplace hazards before they become costly liabilities."
    },
    {
      icon: "fa-chart-line",
      title: "Continuous Improvement",
      description: "Implementing cutting-edge safety strategies for ongoing development and refinement of safety protocols."
    },
    {
      icon: "fa-users",
      title: "Empowering Workforces",
      description: "Educating employees with the knowledge and skills to maintain a safety-conscious culture."
    }
  ];

  const coreServices = [
    {
      icon: "fa-clipboard-check",
      title: "Workplace Safety Audits",
      description: "Comprehensive assessments to identify hazards, ensure compliance, and implement corrective actions.",
      features: [
        "Hazard Identification & Assessment",
        "Compliance Gap Analysis",
        "Corrective Action Planning",
        "Risk Priority Ranking"
      ]
    },
    {
      icon: "fa-graduation-cap",
      title: "Regulatory Compliance Training",
      description: "Guidance on local and international health and safety regulations to prevent violations and legal risks.",
      features: [
        "DRC Safety Regulations",
        "International Standards Training",
        "Legal Risk Prevention",
        "Certification Support"
      ]
    },
    {
      icon: "fa-exclamation-triangle",
      title: "Risk Management & Mitigation",
      description: "Development of proactive risk control measures to minimize workplace incidents and protect employees.",
      features: [
        "Risk Assessment Protocols",
        "Control Measure Implementation",
        "Incident Prevention Strategies",
        "Safety Performance Monitoring"
      ]
    },
    {
      icon: "fa-ambulance",
      title: "Emergency Preparedness",
      description: "Structured response plans and safety drills to ensure readiness for emergencies and crisis situations.",
      features: [
        "Emergency Response Planning",
        "Crisis Management Protocols",
        "Safety Drill Coordination",
        "Evacuation Procedures"
      ]
    },
    {
      icon: "fa-heartbeat",
      title: "Occupational Health Training",
      description: "Programs focusing on employee well-being, including CPR, first aid, and injury prevention.",
      features: [
        "First Aid & CPR Training",
        "Injury Prevention Programs",
        "Health Risk Evaluations",
        "Ergonomic Assessments"
      ]
    }
  ];

  const whyChooseUs = [
    {
      icon: "fa-hard-hat",
      title: "Industry Expertise",
      description: "Our consultants bring years of experience in industrial and mining safety regulations and risk management."
    },
    {
      icon: "fa-cog",
      title: "Tailored Solutions",
      description: "We customize our safety programs to align with specific operational needs and workplace challenges."
    },
    {
      icon: "fa-certificate",
      title: "Compliance Assurance",
      description: "We help businesses stay ahead of health and safety laws, avoiding costly fines and liabilities."
    },
    {
      icon: "fa-eye",
      title: "Proactive Risk Reduction",
      description: "Our approach focuses on preventing accidents rather than reacting to them."
    },
    {
      icon: "fa-chalkboard-teacher",
      title: "Comprehensive Training & Support",
      description: "We offer ongoing training, resources, and mentorship to reinforce long-term safety initiatives."
    }
  ];

  const portfolioServices = [
    "Safety Management System Development",
    "Hazard Identification & Control",
    "Emergency Response Planning", 
    "Workplace Health Monitoring",
    "Compliance Auditing & Certification"
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        
        {/* Introduction Header */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <div className="w-16 h-1 bg-[#30B4F2] mx-auto mb-6"></div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
            Health & Safety Services
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed mb-8">
            Expertise You Can Trust, Safety You Can Rely On. Selecting the right health and safety consultant 
            is a crucial investment in workplace well-being. Our industry expertise, tailored solutions, and 
            proactive risk management strategies make us the trusted choice for companies seeking to enhance 
            compliance, reduce risk, and build a culture of safety.
          </p>
          
          {/* Download Section */}
          <div className="bg-gradient-to-r from-[#30B4F2] to-[#1E5631] rounded-lg p-8 text-white">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="text-left mb-6 md:mb-0">
                <h3 className="text-2xl font-bold mb-2">Health & Safety Services Profile 2025</h3>
                <p className="text-blue-100">
                  Download our comprehensive HSE consulting portfolio including safety management systems, 
                  compliance training, and risk management strategies for the mining and industrial sectors.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="/ESS-HSE-Profile-2025.pdf" 
                  className="bg-white text-[#30B4F2] hover:bg-gray-100 px-6 py-3 font-semibold rounded-sm shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center"
                  download
                >
                  <i className="fas fa-download mr-2"></i>
                  Download HSE Profile (PDF)
                </a>
                <a 
                  href="/contact" 
                  className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-[#30B4F2] px-6 py-3 font-semibold rounded-sm transition-all duration-300 flex items-center"
                >
                  <i className="fas fa-phone mr-2"></i>
                  Request Safety Assessment
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Mission Statement */}
        <div className="bg-gray-50 rounded-lg p-8 mb-16">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4 text-gray-900">
              Protecting People, Ensuring Compliance, Reducing Risks
            </h3>
            <p className="text-gray-600 leading-relaxed max-w-4xl mx-auto">
              At the heart of ESS SARL's HSE services lies a commitment to safety, integrity, and continuous 
              improvement. We provide expert-led solutions that address industry-specific challenges, ensuring 
              organizations create safer, more efficient environments for their workforce. We believe that a 
              safe workplace is not just a requirement—it's a fundamental right.
            </p>
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-12 text-center text-gray-900">Why Choose ESS SARL for Health & Safety?</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyChooseUs.map((item, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow duration-300">
                <div className="w-12 h-12 bg-[#30B4F2] rounded-full flex items-center justify-center mb-4">
                  <i className={`fas ${item.icon} text-white text-lg`}></i>
                </div>
                <h4 className="text-lg font-bold mb-3 text-gray-900">{item.title}</h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Core Values */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-12 text-center text-gray-900">Our Core Values</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {coreValues.map((value, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 mx-auto bg-orange-100 rounded-full flex items-center justify-center mb-4">
                  <i className={`fas ${value.icon} text-orange-600 text-2xl`}></i>
                </div>
                <h4 className="text-xl font-bold mb-3 text-gray-900">{value.title}</h4>
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Core Services */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-12 text-center text-gray-900">Our Core Health & Safety Services</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {coreServices.map((service, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-8 hover:shadow-lg transition-shadow duration-300">
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
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center">
                      <i className="fas fa-check text-[#30B4F2] mr-3 text-sm"></i>
                      <span className="text-sm text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Service Portfolio */}
        <div className="bg-[#1E5631] rounded-lg p-8 mb-16 text-white">
          <h3 className="text-2xl font-bold mb-8 text-center">
            Proven Solutions for Safer Workplaces and Stronger Compliance
          </h3>
          <p className="text-green-100 text-center mb-8 max-w-4xl mx-auto">
            ESS SARL showcases proven strategies and industry-leading solutions that help businesses implement 
            effective safety protocols and mitigate risks. From compliance audits to emergency response planning, 
            we deliver tangible results that protect employees, optimize operations, and uphold safety standards.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {portfolioServices.map((service, index) => (
              <div key={index} className="bg-white bg-opacity-20 rounded-lg p-6 text-center">
                <div className="w-12 h-12 mx-auto bg-white bg-opacity-30 rounded-full flex items-center justify-center mb-4">
                  <i className="fas fa-check text-white text-lg"></i>
                </div>
                <h4 className="text-lg font-bold mb-2">{service}</h4>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-gray-800 to-gray-900 rounded-lg p-8 text-center text-white">
          <h3 className="text-2xl font-bold mb-4">
            Safety First, Compliance Always, Excellence in Every Step
          </h3>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Partner with ESS SARL for comprehensive health and safety consulting services that ensure regulatory 
            compliance, minimize workplace risks, and create a culture of safety across your organization.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a 
              href="/contact" 
              className="bg-[#30B4F2] hover:bg-[#228CBF] text-white px-8 py-3 font-semibold rounded-sm shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            >
              Schedule Safety Assessment
            </a>
            <a 
              href="/ESS-HSE-Profile-2025.pdf" 
              className="bg-white bg-opacity-20 hover:bg-opacity-30 text-white border border-white px-8 py-3 font-semibold rounded-sm transition-all duration-300"
              download
            >
              Download HSE Profile
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}