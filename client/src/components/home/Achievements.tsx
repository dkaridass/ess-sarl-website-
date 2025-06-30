import { achievements } from "@/lib/constants";

export default function Achievements() {
  return (
    <section id="achievements" className="py-20 bg-[#1E5631] text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <span className="inline-block bg-white bg-opacity-20 text-white font-medium px-4 py-1 rounded-full mb-3">Our Achievements</span>
          <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">Setting Industry Standards in DRC</h2>
          <p className="text-lg text-gray-200">Our commitment to excellence has earned us recognition across the industry</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {achievements.map((achievement, index) => (
            <div 
              key={index} 
              className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-6 text-center hover:bg-opacity-15 transition-all duration-300 hover:transform hover:scale-105"
            >
              <div className="w-16 h-16 mx-auto bg-white rounded-full flex items-center justify-center mb-4">
                <i className={`fas ${achievement.icon} text-[#1E5631] text-2xl`}></i>
              </div>
              <div className="bg-[#30B4F2] text-white px-3 py-1 rounded-full text-sm font-semibold mb-3 inline-block">
                {achievement.metric}
              </div>
              <h3 className="text-xl font-bold mb-2">{achievement.title}</h3>
              <p className="text-gray-200 mb-3">
                {achievement.description}
              </p>
              <div className="text-sm text-gray-300 font-medium">
                Achieved: {achievement.year}
              </div>
            </div>
          ))}
        </div>

        {/* Case Studies Section */}
        <div className="mt-16">
          <h3 className="text-2xl md:text-3xl font-bold text-center mb-12">Featured Case Studies</h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-8">
              <div className="flex items-center mb-4">
                <i className="fas fa-industry text-[#30B4F2] text-2xl mr-3"></i>
                <h4 className="text-xl font-bold">MMG Kinsevere Safety Implementation</h4>
              </div>
              <p className="text-gray-200 mb-4">
                Comprehensive safety management system implementation resulting in zero lost-time incidents over 18 months of operations.
              </p>
              <div className="grid grid-cols-2 gap-4 text-center">
                <div className="bg-white bg-opacity-20 rounded-lg p-3">
                  <div className="text-2xl font-bold text-[#30B4F2]">0</div>
                  <div className="text-sm">Incidents</div>
                </div>
                <div className="bg-white bg-opacity-20 rounded-lg p-3">
                  <div className="text-2xl font-bold text-[#30B4F2]">300+</div>
                  <div className="text-sm">Workers Trained</div>
                </div>
              </div>
            </div>
            
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-8">
              <div className="flex items-center mb-4">
                <i className="fas fa-leaf text-[#30B4F2] text-2xl mr-3"></i>
                <h4 className="text-xl font-bold">Environmental Compliance Project</h4>
              </div>
              <p className="text-gray-200 mb-4">
                Environmental impact assessment and management system for major mining operation, achieving full regulatory compliance.
              </p>
              <div className="grid grid-cols-2 gap-4 text-center">
                <div className="bg-white bg-opacity-20 rounded-lg p-3">
                  <div className="text-2xl font-bold text-[#30B4F2]">40%</div>
                  <div className="text-sm">Impact Reduction</div>
                </div>
                <div className="bg-white bg-opacity-20 rounded-lg p-3">
                  <div className="text-2xl font-bold text-[#30B4F2]">100%</div>
                  <div className="text-sm">Compliance</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
