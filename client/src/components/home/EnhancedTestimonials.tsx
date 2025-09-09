import { useTranslation } from "react-i18next";
import { useState } from "react";

export default function EnhancedTestimonials() {
  const { t } = useTranslation();
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "Jean-Pierre Mwamba",
      position: "Environmental Manager",
      company: "Katanga Mining Corporation",
      image: "/images/testimonials/client-1.jpg",
      rating: 5,
      text: "ESS SARL transformed our environmental compliance approach. Their expertise in DRC mining regulations helped us reduce violations by 60% and achieve full regulatory compliance within 8 months.",
      project: "Environmental Impact Assessment & Compliance",
      result: "60% reduction in violations",
      industry: "Mining"
    },
    {
      id: 2,
      name: "Marie-Claire Kabongo",
      position: "Safety Director",
      company: "Copperbelt Industries",
      image: "/images/testimonials/client-2.jpg",
      rating: 5,
      text: "The safety training programs from ESS SARL are exceptional. Our workforce safety incidents decreased by 45% after implementing their comprehensive safety management system.",
      project: "Safety Training & Management System",
      result: "45% reduction in incidents",
      industry: "Industrial"
    },
    {
      id: 3,
      name: "Dr. André Tshisekedi",
      position: "Operations Manager",
      company: "DRC Mining Solutions",
      image: "/images/testimonials/client-3.jpg",
      rating: 5,
      text: "ESS SARL's environmental monitoring services are world-class. Their real-time monitoring systems helped us optimize our operations while maintaining environmental standards.",
      project: "Environmental Monitoring & Optimization",
      result: "30% operational efficiency gain",
      industry: "Mining"
    }
  ];

  const nextTestimonial = () => {
    setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-[#30B4F2]/10 text-[#30B4F2] px-4 py-2 rounded-full text-sm font-semibold mb-4">
            <i className="fas fa-star mr-2"></i>
            Client Success Stories
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Trusted by Leading DRC Mining Companies
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See how ESS SARL has helped mining and industrial companies achieve compliance, 
            improve safety, and optimize environmental performance.
          </p>
        </div>

        {/* Main Testimonial Display */}
        <div className="max-w-6xl mx-auto">
          <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
              {/* Testimonial Content */}
              <div className="p-12 flex flex-col justify-center">
                <div className="mb-6">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonials[activeTestimonial].rating)].map((_, i) => (
                      <i key={i} className="fas fa-star text-yellow-400 text-lg"></i>
                    ))}
                  </div>
                  <blockquote className="text-xl text-gray-700 leading-relaxed mb-6">
                    "{testimonials[activeTestimonial].text}"
                  </blockquote>
                </div>

                {/* Client Info */}
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#30B4F2] to-[#228CBF] rounded-full flex items-center justify-center text-white font-bold text-xl">
                    {testimonials[activeTestimonial].name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-bold text-gray-900">
                      {testimonials[activeTestimonial].name}
                    </h4>
                    <p className="text-[#30B4F2] font-semibold">
                      {testimonials[activeTestimonial].position}
                    </p>
                    <p className="text-gray-600 text-sm">
                      {testimonials[activeTestimonial].company}
                    </p>
                  </div>
                </div>

                {/* Project Results */}
                <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-lg p-4 mb-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-gray-600">Project:</p>
                      <p className="font-semibold text-gray-900">
                        {testimonials[activeTestimonial].project}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-gray-600">Result:</p>
                      <p className="font-bold text-green-600 text-lg">
                        {testimonials[activeTestimonial].result}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Navigation */}
                <div className="flex items-center justify-between">
                  <div className="flex space-x-2">
                    {testimonials.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setActiveTestimonial(index)}
                        className={`w-3 h-3 rounded-full transition-all ${
                          activeTestimonial === index 
                            ? "bg-[#30B4F2] w-8" 
                            : "bg-gray-300 hover:bg-gray-400"
                        }`}
                      />
                    ))}
                  </div>
                  <div className="flex space-x-2">
                    <button
                      onClick={prevTestimonial}
                      className="w-10 h-10 bg-gray-100 hover:bg-[#30B4F2] hover:text-white rounded-full flex items-center justify-center transition-colors"
                    >
                      <i className="fas fa-chevron-left"></i>
                    </button>
                    <button
                      onClick={nextTestimonial}
                      className="w-10 h-10 bg-gray-100 hover:bg-[#30B4F2] hover:text-white rounded-full flex items-center justify-center transition-colors"
                    >
                      <i className="fas fa-chevron-right"></i>
                    </button>
                  </div>
                </div>
              </div>

              {/* Visual Element */}
              <div className="bg-gradient-to-br from-[#30B4F2] to-[#228CBF] p-12 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="relative z-10 text-center text-white">
                  <div className="w-32 h-32 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <i className="fas fa-industry text-5xl"></i>
                  </div>
                  <h3 className="text-2xl font-bold mb-4">
                    {testimonials[activeTestimonial].industry} Excellence
                  </h3>
                  <p className="text-white/90 leading-relaxed">
                    Delivering measurable results for {testimonials[activeTestimonial].industry.toLowerCase()} operations across the DRC
                  </p>
                </div>
                
                {/* Decorative Elements */}
                <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full -translate-y-20 translate-x-20"></div>
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/10 rounded-full translate-y-16 -translate-x-16"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-3xl font-bold text-[#30B4F2] mb-2">500+</div>
            <div className="text-gray-600">Projects Completed</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-[#30B4F2] mb-2">50+</div>
            <div className="text-gray-600">Corporate Clients</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-[#30B4F2] mb-2">15+</div>
            <div className="text-gray-600">Years Experience</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-[#30B4F2] mb-2">98%</div>
            <div className="text-gray-600">Client Satisfaction</div>
          </div>
        </div>
      </div>
    </section>
  );
}
