import { useState } from "react";
import { useTranslation } from "react-i18next";

export default function LeadGeneration() {
  const { t } = useTranslation();
  const [selectedService, setSelectedService] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: ""
  });

  const services = [
    {
      id: "environmental",
      title: "Environmental Assessment",
      description: "EIA, monitoring, compliance",
      icon: "fas fa-leaf",
      color: "from-green-500 to-green-600"
    },
    {
      id: "safety",
      title: "Safety Training",
      description: "Workplace safety, compliance",
      icon: "fas fa-hard-hat",
      color: "from-orange-500 to-orange-600"
    },
    {
      id: "consulting",
      title: "Expert Consulting",
      description: "Regulatory guidance, optimization",
      icon: "fas fa-handshake",
      color: "from-blue-500 to-blue-600"
    },
    {
      id: "training",
      title: "Professional Training",
      description: "Skills development, certification",
      icon: "fas fa-graduation-cap",
      color: "from-purple-500 to-purple-600"
    }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", { ...formData, service: selectedService });
  };

  return (
    <section className="py-20 bg-gradient-to-br from-[#30B4F2] to-[#228CBF] relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-black/10"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -translate-y-48 translate-x-48"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-white/5 rounded-full translate-y-40 -translate-x-40"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Left Side - Content */}
            <div className="text-white">
              <div className="inline-flex items-center bg-white/20 text-white px-4 py-2 rounded-full text-sm font-semibold mb-6">
                <i className="fas fa-gift mr-2"></i>
                Limited Time Offer
              </div>
              
              <h2 className="text-4xl font-bold mb-6 leading-tight">
                Get Your Free Environmental Compliance Assessment
              </h2>
              
              <p className="text-xl text-white/90 mb-8 leading-relaxed">
                Discover how ESS SARL can help your mining or industrial operation achieve 
                full regulatory compliance while reducing environmental risks and operational costs.
              </p>

              {/* Benefits List */}
              <div className="space-y-4 mb-8">
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center mr-4">
                    <i className="fas fa-check text-sm"></i>
                  </div>
                  <span className="text-white/90">Comprehensive compliance audit</span>
                </div>
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center mr-4">
                    <i className="fas fa-check text-sm"></i>
                  </div>
                  <span className="text-white/90">Customized action plan</span>
                </div>
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center mr-4">
                    <i className="fas fa-check text-sm"></i>
                  </div>
                  <span className="text-white/90">Expert consultation call</span>
                </div>
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center mr-4">
                    <i className="fas fa-check text-sm"></i>
                  </div>
                  <span className="text-white/90">No obligation, completely free</span>
                </div>
              </div>

              {/* Trust Indicators */}
              <div className="flex items-center space-x-6 text-sm">
                <div className="flex items-center">
                  <i className="fas fa-shield-alt mr-2"></i>
                  <span>100% Confidential</span>
                </div>
                <div className="flex items-center">
                  <i className="fas fa-clock mr-2"></i>
                  <span>24hr Response</span>
                </div>
                <div className="flex items-center">
                  <i className="fas fa-certificate mr-2"></i>
                  <span>ISO Certified</span>
                </div>
              </div>
            </div>

            {/* Right Side - Form */}
            <div className="bg-white rounded-2xl shadow-2xl p-8">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  Request Your Free Assessment
                </h3>
                <p className="text-gray-600">
                  Get expert insights for your operation
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Service Selection */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-3">
                    What service are you interested in?
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    {services.map((service) => (
                      <button
                        key={service.id}
                        type="button"
                        onClick={() => setSelectedService(service.id)}
                        className={`p-4 rounded-lg border-2 transition-all text-left ${
                          selectedService === service.id
                            ? "border-[#30B4F2] bg-[#30B4F2]/10"
                            : "border-gray-200 hover:border-gray-300"
                        }`}
                      >
                        <div className="flex items-center mb-2">
                          <div className={`w-8 h-8 bg-gradient-to-r ${service.color} rounded-full flex items-center justify-center mr-3`}>
                            <i className={`${service.icon} text-white text-sm`}></i>
                          </div>
                          <span className="font-semibold text-gray-900 text-sm">
                            {service.title}
                          </span>
                        </div>
                        <p className="text-xs text-gray-600">
                          {service.description}
                        </p>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Form Fields */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#30B4F2] focus:border-transparent transition-all"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#30B4F2] focus:border-transparent transition-all"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#30B4F2] focus:border-transparent transition-all"
                      placeholder="+243 XXX XXX XXX"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Company Name
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#30B4F2] focus:border-transparent transition-all"
                      placeholder="Your company"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Tell us about your needs
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#30B4F2] focus:border-transparent transition-all resize-none"
                    placeholder="Describe your environmental or safety challenges..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-[#30B4F2] to-[#228CBF] hover:from-[#228CBF] hover:to-[#1a7aa3] text-white font-bold py-4 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  <i className="fas fa-paper-plane mr-2"></i>
                  Get My Free Assessment
                </button>

                <p className="text-xs text-gray-500 text-center">
                  By submitting this form, you agree to our privacy policy. 
                  We'll never share your information with third parties.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
