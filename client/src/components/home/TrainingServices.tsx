import { useTranslation } from "react-i18next";

export default function TrainingServices() {
  const { t } = useTranslation();

  const coreServices = [
    {
      icon: "fa-hard-hat",
      title: "Occupational Health & Safety in Mining Operations",
      description: "Comprehensive training on safety protocols in mining environments to reduce workplace hazards and enhance employee welfare.",
      features: [
        "Mining Safety Protocols",
        "Hazard Identification & Control",
        "Emergency Response Procedures",
        "Safety Equipment Usage"
      ]
    },
    {
      icon: "fa-leaf",
      title: "Sustainable Mining Practices",
      description: "Insights into eco-friendly mining techniques that align with sustainable development goals and environmental stewardship.",
      features: [
        "Eco-Friendly Mining Techniques",
        "Waste Management Strategies",
        "Biodiversity Conservation",
        "Environmental Impact Reduction"
      ]
    },
    {
      icon: "fa-user-graduate",
      title: "Young Professionals Development",
      description: "Leadership and innovation workshops with career guidance and industry entry strategies for professional growth.",
      features: [
        "Leadership Development",
        "Innovation Workshops",
        "Career Guidance",
        "Industry Entry Strategies"
      ]
    },
    {
      icon: "fa-female",
      title: "Women in Mining & Environment",
      description: "Empowering women in the mining and environmental sectors with leadership training and career growth strategies.",
      features: [
        "Leadership Training for Women",
        "Career Advancement Strategies",
        "Mentorship Programs",
        "Professional Network Building"
      ]
    }
  ];

  const portfolioServices = [
    {
      icon: "fa-heartbeat",
      title: "First Aid Training",
      description: "Life-saving first aid and CPR skills, crucial for workplace emergencies in mining and industrial environments."
    },
    {
      icon: "fa-shield-alt",
      title: "Safety & Compliance",
      description: "Comprehensive training to reduce workplace hazards and ensure regulatory compliance across all operations."
    },
    {
      icon: "fa-chart-line",
      title: "Environmental Performance",
      description: "Strategies for sustainable mining, waste management, and biodiversity conservation practices."
    },
    {
      icon: "fa-cogs",
      title: "Operational Efficiency",
      description: "Techniques to optimize mining processes while reducing environmental impact and maximizing productivity."
    }
  ];

  const whyChooseUs = [
    {
      icon: "fa-award",
      title: "Industry Expertise",
      description: "Our trainers and mentors are seasoned professionals with extensive experience in environmental and mining sectors, ensuring high-quality, practical training."
    },
    {
      icon: "fa-puzzle-piece",
      title: "Customized Learning Solutions",
      description: "We tailor our programs to meet the unique needs of each organization, providing specialized content that directly applies to real-world challenges."
    },
    {
      icon: "fa-balance-scale",
      title: "Regulatory Compliance & Best Practices",
      description: "We ensure our clients are fully equipped with the latest industry regulations, compliance requirements, and sustainability principles."
    },
    {
      icon: "fa-handshake",
      title: "Hands-On Mentorship & Career Growth",
      description: "Our mentorship programs go beyond theory, offering personalized guidance, career advancement strategies, and leadership development."
    },
    {
      icon: "fa-seedling",
      title: "Commitment to Sustainability & Innovation",
      description: "We integrate modern sustainable practices and cutting-edge techniques to help professionals stay ahead in the evolving industry."
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        
        {/* Introduction Header */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <div className="w-16 h-1 bg-purple-600 mx-auto mb-6"></div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
            Training & Mentoring Services
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed mb-8">
            Excellence in Training and Community Development. Our consultancy specializes in providing 
            high-quality training and mentorship services tailored for professionals in the environmental 
            and mining sectors. These programs are designed to enhance technical knowledge, regulatory 
            compliance, sustainability practices, and leadership skills in the industry.
          </p>
          
          {/* Download Section */}
          <div className="bg-gradient-to-r from-purple-600 to-indigo-600 rounded-lg p-8 text-white">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="text-left mb-6 md:mb-0">
                <h3 className="text-2xl font-bold mb-2">Training & Mentoring Services Profile 2025</h3>
                <p className="text-purple-100">
                  Download our comprehensive training portfolio including specialized programs, mentorship 
                  opportunities, and professional development strategies for mining and environmental professionals.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="/ESS-Training-Profile-2025.pdf" 
                  className="bg-white text-purple-600 hover:bg-gray-100 px-6 py-3 font-semibold rounded-sm shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center"
                  download
                >
                  <i className="fas fa-download mr-2"></i>
                  Download Training Profile (PDF)
                </a>
                <a 
                  href="/contact" 
                  className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-purple-600 px-6 py-3 font-semibold rounded-sm transition-all duration-300 flex items-center"
                >
                  <i className="fas fa-phone mr-2"></i>
                  Request Training Program
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Mission Statement */}
        <div className="bg-white rounded-lg p-8 mb-16 shadow-lg">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4 text-gray-900">
              Knowledge That Elevates, Mentorship That Inspires
            </h3>
            <p className="text-gray-600 leading-relaxed max-w-4xl mx-auto">
              At ESS SARL, our training and mentoring programs are designed to enhance expertise, ensure 
              regulatory compliance, and promote sustainable industry practices. With tailored courses and 
              one-on-one mentorship opportunities, we equip professionals with the skills necessary to thrive 
              in the dynamic mining and environmental sectors.
            </p>
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-12 text-center text-gray-900">Why Choose ESS SARL for Training & Mentoring?</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyChooseUs.map((item, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow duration-300">
                <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center mb-4">
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

        {/* Portfolio Services */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-12 text-center text-gray-900">Our Training Portfolio</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {portfolioServices.map((service, index) => (
              <div key={index} className="bg-white rounded-lg p-6 text-center hover:shadow-lg transition-shadow duration-300">
                <div className="w-16 h-16 mx-auto bg-indigo-100 rounded-full flex items-center justify-center mb-4">
                  <i className={`fas ${service.icon} text-indigo-600 text-2xl`}></i>
                </div>
                <h4 className="text-lg font-bold mb-3 text-gray-900">{service.title}</h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Core Services */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-12 text-center text-gray-900">Our Core Training & Mentoring Services</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {coreServices.map((service, index) => (
              <div key={index} className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center mr-4">
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
                      <i className="fas fa-check text-purple-600 mr-3 text-sm"></i>
                      <span className="text-sm text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Professional Development Focus */}
        <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-lg p-8 mb-16 text-white">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-6">Professional Development & Career Growth</h3>
              <p className="text-indigo-100 mb-6 leading-relaxed">
                We deliver expert-led training and mentorship that enhances safety, environmental performance, 
                and operational efficiency in industrial and mining sectors. Our programs equip professionals 
                with cutting-edge knowledge, compliance mastery, and practical skills to drive sustainable success.
              </p>
              <div className="grid grid-cols-1 gap-4">
                <div className="flex items-center">
                  <i className="fas fa-graduation-cap text-white mr-3"></i>
                  <span className="text-sm">Leadership Development Programs</span>
                </div>
                <div className="flex items-center">
                  <i className="fas fa-certificate text-white mr-3"></i>
                  <span className="text-sm">Professional Certification Support</span>
                </div>
                <div className="flex items-center">
                  <i className="fas fa-users text-white mr-3"></i>
                  <span className="text-sm">Mentorship & Career Guidance</span>
                </div>
                <div className="flex items-center">
                  <i className="fas fa-lightbulb text-white mr-3"></i>
                  <span className="text-sm">Innovation & Best Practices</span>
                </div>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-white bg-opacity-20 rounded-lg p-6">
                <h4 className="text-3xl font-bold text-white mb-2">500+</h4>
                <p className="text-indigo-100 mb-4">Professionals Trained</p>
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div>
                    <div className="text-xl font-bold">95%</div>
                    <div className="text-xs text-indigo-200">Completion Rate</div>
                  </div>
                  <div>
                    <div className="text-xl font-bold">4.8/5</div>
                    <div className="text-xs text-indigo-200">Training Rating</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-gray-800 to-gray-900 rounded-lg p-8 text-center text-white">
          <h3 className="text-2xl font-bold mb-4">
            From Knowledge to Action — Shaping a Greener Future
          </h3>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Partner with ESS SARL for comprehensive training and mentoring services that enhance professional 
            capabilities, ensure regulatory compliance, and promote sustainable practices in mining and 
            environmental sectors.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a 
              href="/contact" 
              className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 font-semibold rounded-sm shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            >
              Enroll in Training Program
            </a>
            <a 
              href="/ESS-Training-Profile-2025.pdf" 
              className="bg-white bg-opacity-20 hover:bg-opacity-30 text-white border border-white px-8 py-3 font-semibold rounded-sm transition-all duration-300"
              download
            >
              Download Training Profile
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}