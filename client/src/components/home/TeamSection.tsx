import { useTranslation } from "react-i18next";

export default function TeamSection() {
  const { t } = useTranslation();

  const teamMembers = [
    {
      id: 1,
      name: "Dr. Jean-Baptiste Mwamba",
      position: "Managing Director & Senior Environmental Consultant",
      image: "/images/team/jean-baptiste.jpg",
      credentials: ["PhD Environmental Science", "ISO 14001 Lead Auditor", "15+ Years Experience"],
      expertise: ["Environmental Impact Assessment", "Mining Regulations", "Sustainability Planning"],
      languages: ["French", "English", "Swahili"],
      linkedin: "#",
      email: "j.mwamba@ess-sarl.com"
    },
    {
      id: 2,
      name: "Marie-Claire Kabongo",
      position: "Safety Director & Training Coordinator",
      image: "/images/team/marie-claire.jpg",
      credentials: ["MSc Occupational Safety", "NEBOSH Certified", "12+ Years Experience"],
      expertise: ["Workplace Safety", "Risk Management", "Training Development"],
      languages: ["French", "English", "Lingala"],
      linkedin: "#",
      email: "m.kabongo@ess-sarl.com"
    },
    {
      id: 3,
      name: "André Tshisekedi",
      position: "Senior Mining Consultant",
      image: "/images/team/andre.jpg",
      credentials: ["MEng Mining Engineering", "DRC Mining License", "18+ Years Experience"],
      expertise: ["Mining Operations", "Environmental Compliance", "Project Management"],
      languages: ["French", "English", "Tshiluba"],
      linkedin: "#",
      email: "a.tshisekedi@ess-sarl.com"
    },
    {
      id: 4,
      name: "Dr. Fatou Diallo",
      position: "Environmental Scientist",
      image: "/images/team/fatou.jpg",
      credentials: ["PhD Environmental Chemistry", "Water Quality Specialist", "10+ Years Experience"],
      expertise: ["Water Management", "Soil Analysis", "Environmental Monitoring"],
      languages: ["French", "English", "Wolof"],
      linkedin: "#",
      email: "f.diallo@ess-sarl.com"
    }
  ];

  const certifications = [
    { name: "ISO 14001:2015", description: "Environmental Management Systems" },
    { name: "ISO 45001:2018", description: "Occupational Health & Safety" },
    { name: "OHSAS 18001", description: "Occupational Health & Safety" },
    { name: "DRC Mining License", description: "Democratic Republic of Congo" },
    { name: "IFC Performance Standards", description: "International Finance Corporation" }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-[#30B4F2]/10 text-[#30B4F2] px-4 py-2 rounded-full text-sm font-semibold mb-4">
            <i className="fas fa-users mr-2"></i>
            Expert Team
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Meet Our Expert Consultants
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our team of certified professionals brings decades of combined experience 
            in environmental management, safety consulting, and mining operations across the DRC.
          </p>
        </div>

        {/* Team Members Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {teamMembers.map((member) => (
            <div key={member.id} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 overflow-hidden">
              {/* Profile Image */}
              <div className="relative h-64 bg-gradient-to-br from-[#30B4F2] to-[#228CBF] flex items-center justify-center">
                <div className="w-32 h-32 bg-white/20 rounded-full flex items-center justify-center">
                  <i className="fas fa-user text-white text-4xl"></i>
                </div>
                <div className="absolute top-4 right-4">
                  <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                    <i className="fas fa-certificate text-white text-sm"></i>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-1">
                  {member.name}
                </h3>
                <p className="text-[#30B4F2] font-semibold text-sm mb-4">
                  {member.position}
                </p>

                {/* Credentials */}
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-700 mb-2">Credentials</h4>
                  <div className="space-y-1">
                    {member.credentials.map((cred, index) => (
                      <div key={index} className="flex items-center text-xs text-gray-600">
                        <i className="fas fa-check text-green-500 mr-2"></i>
                        {cred}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Expertise */}
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-700 mb-2">Expertise</h4>
                  <div className="flex flex-wrap gap-1">
                    {member.expertise.map((skill, index) => (
                      <span key={index} className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Languages */}
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-700 mb-2">Languages</h4>
                  <div className="flex flex-wrap gap-1">
                    {member.languages.map((lang, index) => (
                      <span key={index} className="bg-[#30B4F2]/10 text-[#30B4F2] px-2 py-1 rounded text-xs">
                        {lang}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Contact */}
                <div className="flex space-x-2">
                  <a
                    href={member.linkedin}
                    className="flex-1 bg-[#30B4F2] hover:bg-[#228CBF] text-white text-center py-2 rounded-lg transition-colors text-sm font-medium"
                  >
                    <i className="fab fa-linkedin mr-1"></i>
                    Connect
                  </a>
                  <a
                    href={`mailto:${member.email}`}
                    className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-700 text-center py-2 rounded-lg transition-colors text-sm font-medium"
                  >
                    <i className="fas fa-envelope mr-1"></i>
                    Email
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Certifications Section */}
        <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 shadow-lg">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Our Certifications & Accreditations
            </h3>
            <p className="text-gray-600">
              ESS SARL maintains the highest standards of professional certification and accreditation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {certifications.map((cert, index) => (
              <div key={index} className="bg-white rounded-xl p-6 text-center shadow-md hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-gradient-to-br from-[#30B4F2] to-[#228CBF] rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="fas fa-certificate text-white text-xl"></i>
                </div>
                <h4 className="font-bold text-gray-900 mb-2">{cert.name}</h4>
                <p className="text-sm text-gray-600">{cert.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Why Choose Our Team */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <i className="fas fa-graduation-cap text-white text-xl"></i>
            </div>
            <h4 className="text-xl font-bold text-gray-900 mb-2">Expert Qualifications</h4>
            <p className="text-gray-600">
              All team members hold advanced degrees and professional certifications in their respective fields
            </p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <i className="fas fa-globe-africa text-white text-xl"></i>
            </div>
            <h4 className="text-xl font-bold text-gray-900 mb-2">Local Expertise</h4>
            <p className="text-gray-600">
              Deep understanding of DRC regulations, culture, and mining industry challenges
            </p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <i className="fas fa-handshake text-white text-xl"></i>
            </div>
            <h4 className="text-xl font-bold text-gray-900 mb-2">Proven Results</h4>
            <p className="text-gray-600">
              Track record of successful projects and satisfied clients across the mining sector
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
