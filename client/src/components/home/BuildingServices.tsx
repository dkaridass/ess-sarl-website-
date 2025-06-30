import { useTranslation } from "react-i18next";
// Using a professional building/construction image
const buildingImage = "/src/assets/attached_assets/colleagues-team-working-company-paperwork-doig-teamwork-analyze-documents-online-research-information-planning-corporate-presentation-with-data-charts-job-collaboration.jpg";

export default function BuildingServices() {
  const { t } = useTranslation();

  const services = [
    {
      icon: "fa-hammer",
      title: "Foundations",
      description: "Engineered for stability, longevity, and optimal load-bearing performance."
    },
    {
      icon: "fa-building",
      title: "Superstructure Construction",
      description: "From columns to beams, slabs to walls, we bring robust structural frameworks to life."
    },
    {
      icon: "fa-shield-alt",
      title: "Boundary Walls",
      description: "Designed for security and aesthetic appeal, suitable for residential, commercial, and institutional spaces."
    },
    {
      icon: "fa-home",
      title: "Roofing",
      description: "Durable and weather-resistant solutions customized to project needs."
    },
    {
      icon: "fa-bolt",
      title: "Electrical Installations",
      description: "Safe, reliable, and compliant systems for lighting, power distribution, and more."
    },
    {
      icon: "fa-wrench",
      title: "Plumbing",
      description: "Efficient water and sanitation systems built to last, supporting healthy environments."
    }
  ];

  const projectTypes = [
    {
      icon: "fa-clinic-medical",
      title: "Health Clinics",
      description: "Providing access to essential healthcare facilities in underserved areas."
    },
    {
      icon: "fa-graduation-cap",
      title: "Schools",
      description: "Constructing safe and conducive learning environments to nurture the next generation."
    },
    {
      icon: "fa-store",
      title: "Town Centres & Marketplaces",
      description: "Developing vibrant community hubs that foster economic activity and social cohesion."
    },
    {
      icon: "fa-handshake",
      title: "Private Sector Development",
      description: "High-quality developments for residential compounds, commercial facilities, and mixed-use projects."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        
        {/* Introduction Header */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <div className="w-16 h-1 bg-[#30B4F2] mx-auto mb-6"></div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
            Building & Construction Services
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed mb-8">
            Excellence in Construction and Community Development. Headquartered in Lubumbashi, 
            ESS SARL is a proudly Congolese construction company specializing in comprehensive 
            building solutions with a commitment to quality, integrity, and sustainable development.
          </p>
          
          {/* Download Section */}
          <div className="bg-gradient-to-r from-[#30B4F2] to-[#1E5631] rounded-lg p-8 text-white">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="text-left mb-6 md:mb-0">
                <h3 className="text-2xl font-bold mb-2">Building & Construction Profile 2025</h3>
                <p className="text-blue-100">
                  Download our comprehensive building services portfolio including project examples, 
                  service specifications, and company capabilities.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="/ESS-Building-Profile-2025.pdf" 
                  className="bg-white text-[#30B4F2] hover:bg-gray-100 px-6 py-3 font-semibold rounded-sm shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center"
                  download
                >
                  <i className="fas fa-download mr-2"></i>
                  Download Profile (PDF)
                </a>
                <a 
                  href="/contact" 
                  className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-[#30B4F2] px-6 py-3 font-semibold rounded-sm transition-all duration-300 flex items-center"
                >
                  <i className="fas fa-phone mr-2"></i>
                  Request Quote
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-16">
          
          {/* Content */}
          <div>
            <h3 className="text-2xl font-bold mb-6 text-gray-900">
              Driving Community Growth & Development
            </h3>
            <p className="text-gray-600 leading-relaxed mb-6">
              At ESS SARL, we build more than structures—we build futures. Our commitment goes 
              beyond construction; we empower communities, create opportunities, and drive 
              sustainable development. Every project strengthens local economies, fosters growth, 
              and enhances lives in the Democratic Republic of Congo and beyond.
            </p>

            {/* Why Choose Us */}
            <div className="mb-8">
              <h4 className="text-xl font-semibold mb-4 text-gray-900">Why Choose ESS SARL?</h4>
              <div className="space-y-3">
                <div className="flex items-start">
                  <i className="fas fa-check-circle text-[#30B4F2] mr-3 mt-1"></i>
                  <div>
                    <strong className="text-gray-900">Local Expertise:</strong>
                    <span className="text-gray-600"> Deep knowledge of Lubumbashi's regulatory, environmental, and logistical landscape.</span>
                  </div>
                </div>
                <div className="flex items-start">
                  <i className="fas fa-check-circle text-[#30B4F2] mr-3 mt-1"></i>
                  <div>
                    <strong className="text-gray-900">Commitment to Quality:</strong>
                    <span className="text-gray-600"> Materials and workmanship that meet international standards.</span>
                  </div>
                </div>
                <div className="flex items-start">
                  <i className="fas fa-check-circle text-[#30B4F2] mr-3 mt-1"></i>
                  <div>
                    <strong className="text-gray-900">Social Impact:</strong>
                    <span className="text-gray-600"> We prioritize projects that create jobs, support local suppliers, and contribute to sustainable development.</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <img 
              src={buildingImage} 
              alt="Construction team collaboration and project planning" 
              className="w-full h-auto rounded-lg shadow-lg object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6 rounded-b-lg">
              <div className="text-white">
                <h4 className="text-xl font-bold mb-2">Building the Foundations of Tomorrow's Communities</h4>
                <p className="text-gray-200">Professional construction services across Lubumbashi and the DRC</p>
              </div>
            </div>
          </div>
        </div>

        {/* Project Portfolio */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-8 text-center text-gray-900">Our Project Portfolio</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {projectTypes.map((project, index) => (
              <div 
                key={index}
                className="bg-gray-50 rounded-lg p-6 text-center hover:shadow-lg transition-shadow duration-300"
              >
                <div className="w-16 h-16 mx-auto bg-[#30B4F2] rounded-full flex items-center justify-center mb-4">
                  <i className={`fas ${project.icon} text-white text-2xl`}></i>
                </div>
                <h4 className="text-lg font-bold mb-3 text-gray-900">{project.title}</h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {project.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Core Services */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-8 text-center text-gray-900">Our Core Construction Services</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div 
                key={index}
                className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow duration-300"
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-[#1E5631] rounded-full flex items-center justify-center mr-4">
                    <i className={`fas ${service.icon} text-white text-lg`}></i>
                  </div>
                  <h4 className="text-lg font-bold text-gray-900">{service.title}</h4>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-[#1E5631] rounded-lg p-8 text-center text-white">
          <h3 className="text-2xl font-bold mb-4">
            Ready to Start Your Construction Project?
          </h3>
          <p className="text-gray-200 mb-8 max-w-2xl mx-auto">
            Partner with ESS SARL for comprehensive building and construction services. 
            From initial planning to project completion, we deliver quality results that 
            stand the test of time.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a 
              href="/contact" 
              className="bg-[#30B4F2] hover:bg-[#228CBF] text-white px-8 py-3 font-semibold rounded-sm shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            >
              Get Construction Quote
            </a>
            <a 
              href="/ESS-Building-Profile-2025.pdf" 
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