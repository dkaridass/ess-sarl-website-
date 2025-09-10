import { useState } from "react";
import { services } from "@/lib/constants";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { AnimatedVisuals, AnimatedText } from "@/components/ui/AnimatedVisuals";
import consultancyImage from "../../assets/images/services/consultancy-specific.jpg";
import trainingImage from "../../assets/optimized/engineer-cooperation.jpg";
import environmentalImage from "../../assets/optimized/woman-engineer.jpg";

export default function Services() {
  const [activeTab, setActiveTab] = useState("consultancy");

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <div className="w-16 h-1 bg-[#30B4F2] mx-auto mb-6 animate-pulse-glow"></div>
          <AnimatedText.FadeInHeading className="text-3xl md:text-4xl font-bold mb-4">
            Professional Mining & Environmental Services
          </AnimatedText.FadeInHeading>
          <AnimatedText.SlideUpText className="text-lg text-gray-600 mb-6">
            Expert consultancy services for sustainable mining operations, regulatory compliance, and environmental stewardship in the Democratic Republic of Congo
          </AnimatedText.SlideUpText>
          <div className="flex flex-wrap justify-center gap-4">
            <a 
              href="/contact" 
              className="bg-[#30B4F2] hover:bg-[#228CBF] text-white px-8 py-3 font-semibold rounded-sm shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            >
              Request a Consultation
            </a>
            <a 
              href="/services" 
              className="bg-[#1E5631] hover:bg-[#15402A] text-white px-8 py-3 font-semibold rounded-sm shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            >
              View All Services
            </a>
          </div>
        </div>

        {/* Featured Service Grid with Animated Visuals */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-16">
          <div className="group hover-lift animate-scale-in">
            <div className="relative overflow-hidden rounded-lg shadow-lg">
              <img 
                src={consultancyImage} 
                alt="Consultancy Services" 
                className="w-full h-72 object-cover transform group-hover:scale-110 transition-transform duration-700" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-6 w-full">
                <h3 className="text-white text-xl font-bold mb-2 animate-fade-in">Consultancy Services</h3>
                <p className="text-gray-200 text-sm mb-4 opacity-0 group-hover:opacity-100 transition-all duration-500 transform group-hover:translateY(-2px)">
                  Expert guidance to optimize operations and ensure regulatory compliance
                </p>
                <a 
                  href="#consultancy" 
                  onClick={(e) => {e.preventDefault(); setActiveTab("consultancy");}} 
                  className="text-[#30B4F2] bg-white inline-block px-4 py-2 rounded-sm font-medium hover:bg-[#30B4F2] hover:text-white transition-all duration-300 transform hover:scale-105"
                >
                  Learn More
                </a>
              </div>
            </div>
          </div>

          <div className="group hover-lift animate-scale-in" style={{animationDelay: '0.2s'}}>
            <div className="relative overflow-hidden rounded-lg shadow-lg">
              <AnimatedVisuals.TrainingHero />
              <div className="absolute bottom-0 left-0 p-6 w-full">
                <h3 className="text-white text-xl font-bold mb-2 animate-fade-in">Training & Mentoring</h3>
                <p className="text-gray-200 text-sm mb-4 opacity-0 group-hover:opacity-100 transition-all duration-500 transform group-hover:translateY(-2px)">
                  Comprehensive programs for professional development and certification
                </p>
                <a 
                  href="#training" 
                  onClick={(e) => {e.preventDefault(); setActiveTab("training");}}
                  className="text-[#30B4F2] bg-white inline-block px-4 py-2 rounded-sm font-medium hover:bg-[#30B4F2] hover:text-white transition-all duration-300 transform hover:scale-105"
                >
                  Learn More
                </a>
              </div>
            </div>
          </div>

          <div className="group hover-lift animate-scale-in" style={{animationDelay: '0.4s'}}>
            <div className="relative overflow-hidden rounded-lg shadow-lg">
              <AnimatedVisuals.EnvironmentalHero />
              <div className="absolute bottom-0 left-0 p-6 w-full">
                <h3 className="text-white text-xl font-bold mb-2 animate-fade-in">Environmental Services</h3>
                <p className="text-gray-200 text-sm mb-4 opacity-0 group-hover:opacity-100 transition-all duration-500 transform group-hover:translateY(-2px)">
                  Sustainable practices for responsible environmental management
                </p>
                <a 
                  href="#environmental" 
                  onClick={(e) => {e.preventDefault(); setActiveTab("environmental");}}
                  className="text-[#30B4F2] bg-white inline-block px-4 py-2 rounded-sm font-medium hover:bg-[#30B4F2] hover:text-white transition-all duration-300 transform hover:scale-105"
                >
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Detailed Services Section */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-12">
          <Tabs defaultValue="consultancy" value={activeTab} onValueChange={setActiveTab} className="mb-8">
            <TabsList className="flex flex-wrap justify-start border-b bg-transparent h-auto">
              <TabsTrigger 
                value="consultancy" 
                className={`px-5 py-3 font-medium hover:text-[#30B4F2] transition-colors focus:outline-none data-[state=active]:border-b-2 data-[state=active]:border-[#30B4F2] data-[state=active]:text-[#30B4F2] data-[state=active]:shadow-none rounded-none`}
              >
                Consultancy Services
              </TabsTrigger>
              <TabsTrigger 
                value="training" 
                className="px-5 py-3 font-medium hover:text-[#30B4F2] transition-colors focus:outline-none data-[state=active]:border-b-2 data-[state=active]:border-[#30B4F2] data-[state=active]:text-[#30B4F2] data-[state=active]:shadow-none rounded-none"
              >
                Training & Mentoring
              </TabsTrigger>
              <TabsTrigger 
                value="environmental" 
                className="px-5 py-3 font-medium hover:text-[#30B4F2] transition-colors focus:outline-none data-[state=active]:border-b-2 data-[state=active]:border-[#30B4F2] data-[state=active]:text-[#30B4F2] data-[state=active]:shadow-none rounded-none"
              >
                Environmental Services
              </TabsTrigger>
            </TabsList>

            <div className="py-8">
              <TabsContent value="consultancy" className="mt-0">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                  <div className="lg:col-span-4">
                    <div className="relative rounded-md overflow-hidden h-full min-h-[300px]">
                      <img src={consultancyImage} alt="Consultancy Services" className="w-full h-full object-cover" />
                      <div className="absolute inset-0 bg-black bg-opacity-40"></div>
                      <div className="absolute bottom-0 left-0 p-6 text-white">
                        <h3 className="text-2xl font-bold mb-2">Expert Consultancy Services</h3>
                        <div className="w-12 h-1 bg-[#30B4F2] mb-3"></div>
                        <p>ISO 14001 certified solutions for industrial excellence</p>
                      </div>
                    </div>
                  </div>
                  <div className="lg:col-span-8">
                    <p className="text-gray-700 mb-6 text-lg">
                      Our expert consultancy solutions are tailored to meet the unique needs of industrial and mining operations in the Democratic Republic of Congo. We provide comprehensive assessments and strategic guidance to optimize your operations while ensuring compliance with local and international regulations.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {services.consultancy.map((service, index) => (
                        <ServiceCard key={index} service={{...service, image: consultancyImage}} />
                      ))}
                    </div>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="training" className="mt-0">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                  <div className="lg:col-span-4">
                    <div className="relative rounded-md overflow-hidden h-full min-h-[300px]">
                      <img src="/src/assets/attached_assets/engineer-cooperation-male-female-technician-maintenance-control-relay-robot-arm-system-welding-with-tablet-laptop-control-quality-operate-process-work-heavy-industry-40-manufacturing-factory.jpg" alt="Training Services" className="w-full h-full object-cover" />
                      <div className="absolute inset-0 bg-black bg-opacity-40"></div>
                      <div className="absolute bottom-0 left-0 p-6 text-white">
                        <h3 className="text-2xl font-bold mb-2">Comprehensive Training Programs</h3>
                        <div className="w-12 h-1 bg-[#30B4F2] mb-3"></div>
                        <p>Professional development for operational excellence</p>
                      </div>
                    </div>
                  </div>
                  <div className="lg:col-span-8">
                    <p className="text-gray-700 mb-6 text-lg">
                      Our training programs are delivered by experienced professionals with deep industry knowledge. We focus on building the skills and competencies needed to enhance safety, environmental performance, and operational efficiency in industrial and mining contexts.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {services.training.map((service, index) => (
                        <ServiceCard key={index} service={{...service, image: trainingImage}} />
                      ))}
                    </div>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="environmental" className="mt-0">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                  <div className="lg:col-span-4">
                    <div className="relative rounded-md overflow-hidden h-full min-h-[300px]">
                      <img src="/src/assets/attached_assets/woman-working-as-engineer.jpg" alt="Environmental Services" className="w-full h-full object-cover" />
                      <div className="absolute inset-0 bg-black bg-opacity-40"></div>
                      <div className="absolute bottom-0 left-0 p-6 text-white">
                        <h3 className="text-2xl font-bold mb-2">Environmental Management Solutions</h3>
                        <div className="w-12 h-1 bg-[#30B4F2] mb-3"></div>
                        <p>Sustainable practices for responsible operations</p>
                      </div>
                    </div>
                  </div>
                  <div className="lg:col-span-8">
                    <p className="text-gray-700 mb-6 text-lg">
                      Our ISO 14001 certified environmental management solutions are designed specifically for industrial and mining operations in challenging contexts. We help companies minimize their environmental footprint while maintaining operational efficiency and regulatory compliance.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {services.environmental.map((service, index) => (
                        <ServiceCard key={index} service={{...service, image: environmentalImage}} />
                      ))}
                    </div>
                  </div>
                </div>
              </TabsContent>
            </div>
          </Tabs>

          <div className="text-center pt-4 border-t border-gray-100">
            <a href="#contact" className="inline-flex items-center bg-[#30B4F2] hover:bg-[#28A0D8] text-white px-6 py-3 rounded-md transition-colors">
              Request Custom Services
              <i className="fas fa-arrow-right ml-2"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

type ServiceType = {
  title: string;
  icon: string;
  description: string;
  image: string;
};

function ServiceCard({ service }: { service: ServiceType }) {
  return (
    <div className="border border-gray-100 rounded-md overflow-hidden hover:shadow-md transition-shadow group">
      <div className="p-6">
        <div className="w-12 h-12 rounded-full bg-[#30B4F2]/10 flex items-center justify-center mb-4 text-[#30B4F2] group-hover:bg-[#30B4F2] group-hover:text-white transition-colors">
          <i className={`fas ${service.icon} text-xl`}></i>
        </div>
        <h3 className="font-bold text-xl mb-3">{service.title}</h3>
        <p className="text-gray-600 mb-4">{service.description}</p>
        <a href="#contact" className="text-[#30B4F2] hover:text-[#28A0D8] font-medium inline-flex items-center">
          Learn More <i className="fas fa-arrow-right ml-2 text-sm transition-transform group-hover:translate-x-1"></i>
        </a>
      </div>
    </div>
  );
}