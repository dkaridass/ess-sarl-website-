import { Button } from "@/components/ui/button";
import { AnimatedVisuals, AnimatedText } from "@/components/ui/AnimatedVisuals";
import environmentalSafetyImage from "../../assets/images/services/environmental-safety.jpg";

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* SRK-style Section Header */}
        <div className="mb-12 text-center">
          <div className="w-20 h-1 bg-[#30B4F2] mx-auto mb-5 animate-pulse-glow"></div>
          <AnimatedText.FadeInHeading className="text-3xl md:text-4xl font-bold mb-4">About ESS SARL</AnimatedText.FadeInHeading>
          <AnimatedText.SlideUpText className="text-gray-600 max-w-3xl mx-auto">
            Pioneering Environmental and Safety Solutions in the Democratic Republic of Congo
          </AnimatedText.SlideUpText>
        </div>

        {/* Custom Visual Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          <div className="hover-lift animate-scale-in">
            <AnimatedVisuals.MiningHero />
          </div>
          <div className="hover-lift animate-scale-in" style={{animationDelay: '0.1s'}}>
            <AnimatedVisuals.EnvironmentalHero />
          </div>
          <div className="hover-lift animate-scale-in" style={{animationDelay: '0.2s'}}>
            <AnimatedVisuals.SafetyHero />
          </div>
          <div className="hover-lift animate-scale-in" style={{animationDelay: '0.3s'}}>
            <AnimatedVisuals.InnovationHero />
          </div>
        </div>

        {/* Main About Content - SRK Style */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          <div className="lg:col-span-5 order-2 lg:order-1">
            <h3 className="text-2xl font-bold mb-5 text-gray-800">Leading Environmental and Safety Consultancy in DRC</h3>
            <div className="w-12 h-1 bg-[#30B4F2] mb-6"></div>
            <p className="mb-6 text-gray-600 leading-relaxed">
              Since our establishment, ESS SARL has been at the forefront of providing comprehensive solutions for environmental management, workplace safety, electrical maintenance, and construction in the Democratic Republic of Congo.
            </p>
            <p className="mb-8 text-gray-600 leading-relaxed">
              Our team of expert consultants brings together decades of industry experience to deliver exceptional service and innovative solutions tailored to the unique challenges of industrial and mining operations in the region.
            </p>

            <div className="flex flex-wrap gap-4">
              <a href="/contact" className="inline-flex items-center bg-[#30B4F2] hover:bg-[#228CBF] text-white px-6 py-3 text-sm font-semibold transition-colors rounded-sm shadow-lg hover:shadow-xl transform hover:scale-105">
                <i className="fas fa-phone mr-2"></i> Request Consultation
              </a>
              <a href="/services" className="inline-flex items-center bg-[#1E5631] hover:bg-[#15402A] text-white px-6 py-3 text-sm font-semibold transition-colors rounded-sm shadow-lg hover:shadow-xl transform hover:scale-105">
                <i className="fas fa-clipboard-list mr-2"></i> View Our Services
              </a>
            </div>
          </div>

          <div className="lg:col-span-7 order-1 lg:order-2">
            <div className="relative">
              <img 
                src={environmentalSafetyImage} 
                alt="Environmental and safety solutions for industrial operations" 
                className="w-full h-auto object-cover shadow-md"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-8">
                <div className="text-white">
                  <div className="w-10 h-1 bg-[#30B4F2] mb-3"></div>
                  <h4 className="text-xl font-bold">Excellence in service delivery</h4>
                  <p className="opacity-80">Providing sustainable solutions for complex challenges</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Vision & Mission Section - SRK Style */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="bg-gray-100 p-8 relative overflow-hidden group">
            <div className="absolute top-0 left-0 w-1 h-full bg-[#30B4F2] group-hover:h-2 group-hover:w-full group-hover:transition-all"></div>
            <div className="relative z-10">
              <div className="text-3xl text-[#30B4F2] mb-4">
                <i className="fas fa-bullseye"></i>
              </div>
              <h4 className="text-xl font-bold mb-4 text-gray-800">Our Vision</h4>
              <p className="text-gray-600 leading-relaxed">
                To be the leading national and regional provider of integrated consultancy, training, and environmental solutions, empowering industries to achieve sustainable operational excellence and responsible environmental stewardship.
              </p>
            </div>
          </div>

          <div className="bg-gray-100 p-8 relative overflow-hidden group">
            <div className="absolute top-0 left-0 w-1 h-full bg-[#1E5631] group-hover:h-2 group-hover:w-full group-hover:transition-all"></div>
            <div className="relative z-10">
              <div className="text-3xl text-[#1E5631] mb-4">
                <i className="fas fa-flag"></i>
              </div>
              <h4 className="text-xl font-bold mb-4 text-gray-800">Our Mission</h4>
              <p className="text-gray-600 leading-relaxed">
                To provide innovative, reliable, and sustainable services in consultancy, training, and environmental management. We contribute to improving safety and productivity in industries through customized solutions that respect international standards and guarantee customer satisfaction.
              </p>
            </div>
          </div>
        </div>

        {/* Values Section - SRK Style */}
        <div className="mb-16">
          <div className="text-center mb-10">
            <h3 className="text-2xl font-bold mb-3">Our Core Values</h3>
            <div className="w-16 h-1 bg-[#30B4F2] mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {[
              {name: "Quality", description: "Commitment to providing high-quality services that meet the expectations of our clients.", icon: "fa-certificate", color: "#30B4F2"},
              {name: "Safety", description: "Absolute priority to the health and safety of people and equipment.", icon: "fa-shield-alt", color: "#1E5631"},
              {name: "Innovation", description: "Continuous search for modern and effective technical solutions.", icon: "fa-lightbulb", color: "#F1C40F"},
              {name: "Responsibility", description: "Respect for environmental and social standards in all our activities.", icon: "fa-leaf", color: "#27AE60"},
              {name: "Collaboration", description: "Working in partnership with our clients to achieve their objectives.", icon: "fa-hands-helping", color: "#8E44AD"}
            ].map((value, index) => (
              <div 
                key={index} 
                className="bg-white border border-gray-200 hover:border-[#30B4F2] transition-colors p-6 text-center group hover:shadow-md"
              >
                <div className="w-16 h-16 rounded-full mx-auto flex items-center justify-center mb-4 group-hover:scale-110 transition-transform" style={{backgroundColor: `${value.color}15`}}>
                  <i className={`fas ${value.icon} text-2xl`} style={{color: value.color}}></i>
                </div>
                <h5 className="font-bold text-lg mb-3 text-gray-800">{value.name}</h5>
                <p className="text-sm text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Stats Banner - SRK Style */}
        <div className="bg-[#30B4F2] p-10 text-white">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold">Our Impact in Numbers</h3>
            <div className="w-16 h-1 bg-white mx-auto mt-4"></div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">50+</div>
              <p className="text-white/80">Projects Completed</p>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">25+</div>
              <p className="text-white/80">Corporate Clients</p>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">8+</div>
              <p className="text-white/80">Years of Experience</p>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">500+</div>
              <p className="text-white/80">Professionals Trained</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}