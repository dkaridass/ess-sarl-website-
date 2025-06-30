import { useTranslation } from "react-i18next";

export default function Sustainability() {
  const { t } = useTranslation();

  const sustainabilityFeatures = [
    {
      icon: "fa-leaf",
      title: "Environmental Stewardship",
      description: "Committed to protecting DRC's natural resources through sustainable mining practices and environmental rehabilitation programs.",
      metric: "40% Impact Reduction"
    },
    {
      icon: "fa-certificate",
      title: "Regulatory Compliance",
      description: "Full compliance with DRC mining codes, international environmental standards, and ISO 14001 certification requirements.",
      metric: "100% Compliance Rate"
    },
    {
      icon: "fa-recycle",
      title: "Circular Economy Solutions",
      description: "Implementing waste reduction strategies and resource recovery systems to minimize environmental footprint.",
      metric: "60% Waste Reduction"
    },
    {
      icon: "fa-seedling",
      title: "Land Restoration",
      description: "Expert rehabilitation of mining sites and industrial areas to restore ecosystem functionality and community benefits.",
      metric: "500+ Hectares Restored"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-[#1E5631] to-[#2A7F47] text-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <div className="w-16 h-1 bg-[#30B4F2] mx-auto mb-6"></div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Sustainability & Regulatory Compliance
          </h2>
          <p className="text-xl text-gray-200 leading-relaxed">
            ESS SARL is committed to advancing sustainable mining practices and ensuring full regulatory compliance 
            across all operations in the Democratic Republic of Congo. Our expertise helps clients achieve 
            environmental excellence while maintaining operational efficiency.
          </p>
        </div>

        {/* Sustainability Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {sustainabilityFeatures.map((feature, index) => (
            <div 
              key={index}
              className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-6 text-center hover:bg-opacity-15 transition-all duration-300 hover:transform hover:scale-105"
            >
              <div className="w-16 h-16 mx-auto bg-[#30B4F2] rounded-full flex items-center justify-center mb-4">
                <i className={`fas ${feature.icon} text-white text-2xl`}></i>
              </div>
              <div className="bg-white bg-opacity-20 text-[#30B4F2] px-3 py-1 rounded-full text-sm font-bold mb-4 inline-block">
                {feature.metric}
              </div>
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-gray-200 text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Compliance Standards */}
        <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-8 mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4">International Standards & Certifications</h3>
              <p className="text-gray-200 mb-6">
                Our commitment to excellence is demonstrated through adherence to international standards 
                and continuous professional development of our team.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center">
                  <i className="fas fa-check-circle text-[#30B4F2] mr-3"></i>
                  <span className="text-sm">ISO 14001 Certified</span>
                </div>
                <div className="flex items-center">
                  <i className="fas fa-check-circle text-[#30B4F2] mr-3"></i>
                  <span className="text-sm">DRC Mining Code Compliant</span>
                </div>
                <div className="flex items-center">
                  <i className="fas fa-check-circle text-[#30B4F2] mr-3"></i>
                  <span className="text-sm">OHSAS 18001 Standards</span>
                </div>
                <div className="flex items-center">
                  <i className="fas fa-check-circle text-[#30B4F2] mr-3"></i>
                  <span className="text-sm">IFC Performance Standards</span>
                </div>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-white bg-opacity-20 rounded-lg p-6">
                <h4 className="text-3xl font-bold text-[#30B4F2] mb-2">10+</h4>
                <p className="text-gray-200 mb-4">Years of Regulatory Excellence</p>
                <div className="flex justify-center space-x-6">
                  <div>
                    <div className="text-2xl font-bold">100%</div>
                    <div className="text-sm text-gray-300">Compliance Rate</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold">0</div>
                    <div className="text-sm text-gray-300">Violations</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-4">
            Ready to Achieve Sustainable Compliance?
          </h3>
          <p className="text-gray-200 mb-8 max-w-2xl mx-auto">
            Partner with ESS SARL to ensure your mining operations meet the highest environmental 
            and safety standards while contributing to sustainable development in the DRC.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a 
              href="/contact" 
              className="bg-[#30B4F2] hover:bg-[#228CBF] text-white px-8 py-3 font-semibold rounded-sm shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            >
              Schedule Compliance Assessment
            </a>
            <a 
              href="/services" 
              className="bg-white bg-opacity-20 hover:bg-opacity-30 text-white border border-white px-8 py-3 font-semibold rounded-sm transition-all duration-300"
            >
              View Sustainability Services
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}