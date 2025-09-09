import { useState } from "react";
import { useTranslation } from "react-i18next";

export default function CaseStudies() {
  const { t } = useTranslation();
  const [activeCase, setActiveCase] = useState(0);

  const caseStudies = [
    {
      id: 1,
      title: "Katanga Mining Corporation - Environmental Compliance Transformation",
      client: "Katanga Mining Corporation",
      industry: "Copper Mining",
      location: "Katanga Province, DRC",
      duration: "18 months",
      challenge: "Multiple environmental violations and regulatory compliance issues threatening operations",
      solution: "Comprehensive environmental management system implementation with real-time monitoring",
      results: [
        "60% reduction in environmental violations",
        "100% regulatory compliance achieved",
        "$2.3M in avoided penalties",
        "ISO 14001 certification obtained"
      ],
      image: "/images/case-studies/katanga-mining.jpg",
      testimonial: "ESS SARL transformed our environmental compliance approach. Their expertise helped us achieve full regulatory compliance while maintaining operational efficiency.",
      testimonialAuthor: "Jean-Pierre Mwamba, Environmental Manager"
    },
    {
      id: 2,
      title: "Copperbelt Industries - Safety Culture Transformation",
      client: "Copperbelt Industries",
      industry: "Industrial Manufacturing",
      location: "Lubumbashi, DRC",
      duration: "12 months",
      challenge: "High incident rates and poor safety culture affecting productivity and employee morale",
      solution: "Comprehensive safety training program and culture change initiative",
      results: [
        "45% reduction in workplace incidents",
        "85% improvement in safety culture scores",
        "Zero lost-time accidents for 8 months",
        "95% employee safety training completion"
      ],
      image: "/images/case-studies/copperbelt-industries.jpg",
      testimonial: "The safety transformation led by ESS SARL has been remarkable. Our workforce is now more engaged and our incident rates have dropped significantly.",
      testimonialAuthor: "Marie-Claire Kabongo, Safety Director"
    },
    {
      id: 3,
      title: "DRC Mining Solutions - Environmental Impact Assessment",
      client: "DRC Mining Solutions",
      industry: "Gold Mining",
      location: "South Kivu, DRC",
      duration: "8 months",
      challenge: "Complex environmental impact assessment required for new mining operations",
      solution: "Comprehensive EIA with stakeholder engagement and mitigation planning",
      results: [
        "Successful EIA approval",
        "30% operational efficiency improvement",
        "Zero environmental incidents",
        "Community support increased by 70%"
      ],
      image: "/images/case-studies/drc-mining.jpg",
      testimonial: "ESS SARL's environmental assessment was thorough and professional. Their recommendations helped us optimize our operations while protecting the environment.",
      testimonialAuthor: "Dr. André Tshisekedi, Operations Manager"
    }
  ];

  const nextCase = () => {
    setActiveCase((prev) => (prev + 1) % caseStudies.length);
  };

  const prevCase = () => {
    setActiveCase((prev) => (prev - 1 + caseStudies.length) % caseStudies.length);
  };

  const currentCase = caseStudies[activeCase];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-[#30B4F2]/10 text-[#30B4F2] px-4 py-2 rounded-full text-sm font-semibold mb-4">
            <i className="fas fa-chart-line mr-2"></i>
            Success Stories
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Real Results for Real Clients
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover how ESS SARL has helped mining and industrial companies achieve 
            compliance, improve safety, and optimize environmental performance.
          </p>
        </div>

        {/* Case Study Display */}
        <div className="max-w-7xl mx-auto">
          <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
              {/* Visual Side */}
              <div className="bg-gradient-to-br from-[#30B4F2] to-[#228CBF] p-12 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="relative z-10 text-center text-white">
                  <div className="w-32 h-32 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <i className="fas fa-industry text-5xl"></i>
                  </div>
                  <h3 className="text-2xl font-bold mb-4">
                    {currentCase.industry}
                  </h3>
                  <p className="text-white/90 leading-relaxed mb-6">
                    {currentCase.location}
                  </p>
                  
                  {/* Project Stats */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white/20 rounded-lg p-4">
                      <div className="text-2xl font-bold">{currentCase.duration}</div>
                      <div className="text-sm text-white/80">Duration</div>
                    </div>
                    <div className="bg-white/20 rounded-lg p-4">
                      <div className="text-2xl font-bold">{currentCase.results.length}</div>
                      <div className="text-sm text-white/80">Key Results</div>
                    </div>
                  </div>
                </div>
                
                {/* Decorative Elements */}
                <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full -translate-y-20 translate-x-20"></div>
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/10 rounded-full translate-y-16 -translate-x-16"></div>
              </div>

              {/* Content Side */}
              <div className="p-12">
                {/* Case Study Info */}
                <div className="mb-8">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-[#30B4F2] rounded-full flex items-center justify-center mr-4">
                      <i className="fas fa-building text-white"></i>
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-gray-900">{currentCase.client}</h4>
                      <p className="text-[#30B4F2] font-semibold">{currentCase.industry}</p>
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">
                    {currentCase.title}
                  </h3>
                </div>

                {/* Challenge & Solution */}
                <div className="space-y-6 mb-8">
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                      <i className="fas fa-exclamation-triangle text-orange-500 mr-2"></i>
                      Challenge
                    </h4>
                    <p className="text-gray-700 leading-relaxed">
                      {currentCase.challenge}
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                      <i className="fas fa-lightbulb text-yellow-500 mr-2"></i>
                      Solution
                    </h4>
                    <p className="text-gray-700 leading-relaxed">
                      {currentCase.solution}
                    </p>
                  </div>
                </div>

                {/* Results */}
                <div className="mb-8">
                  <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                    <i className="fas fa-trophy text-green-500 mr-2"></i>
                    Results Achieved
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {currentCase.results.map((result, index) => (
                      <div key={index} className="flex items-center bg-green-50 rounded-lg p-3">
                        <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mr-3">
                          <i className="fas fa-check text-white text-xs"></i>
                        </div>
                        <span className="text-gray-700 font-medium">{result}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Testimonial */}
                <div className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-lg p-6 mb-8">
                  <blockquote className="text-gray-700 italic mb-4">
                    "{currentCase.testimonial}"
                  </blockquote>
                  <cite className="text-sm text-gray-600 font-semibold">
                    — {currentCase.testimonialAuthor}
                  </cite>
                </div>

                {/* Navigation */}
                <div className="flex items-center justify-between">
                  <div className="flex space-x-2">
                    {caseStudies.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setActiveCase(index)}
                        className={`w-3 h-3 rounded-full transition-all ${
                          activeCase === index 
                            ? "bg-[#30B4F2] w-8" 
                            : "bg-gray-300 hover:bg-gray-400"
                        }`}
                      />
                    ))}
                  </div>
                  <div className="flex space-x-2">
                    <button
                      onClick={prevCase}
                      className="w-10 h-10 bg-gray-100 hover:bg-[#30B4F2] hover:text-white rounded-full flex items-center justify-center transition-colors"
                    >
                      <i className="fas fa-chevron-left"></i>
                    </button>
                    <button
                      onClick={nextCase}
                      className="w-10 h-10 bg-gray-100 hover:bg-[#30B4F2] hover:text-white rounded-full flex items-center justify-center transition-colors"
                    >
                      <i className="fas fa-chevron-right"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-[#30B4F2] to-[#228CBF] rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Ready to Achieve Similar Results?
            </h3>
            <p className="text-xl text-white/90 mb-6">
              Let ESS SARL help your organization achieve compliance excellence and operational optimization
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#contact"
                className="bg-white text-[#30B4F2] font-semibold px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors"
              >
                <i className="fas fa-calendar-alt mr-2"></i>
                Schedule Consultation
              </a>
              <a
                href="#services"
                className="bg-white/20 text-white border-2 border-white font-semibold px-8 py-3 rounded-lg hover:bg-white/30 transition-colors"
              >
                <i className="fas fa-info-circle mr-2"></i>
                Learn More
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
