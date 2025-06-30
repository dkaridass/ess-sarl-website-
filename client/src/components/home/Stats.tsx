import { useState, useEffect, useRef } from "react";
import { statistics } from "@/lib/constants";

export default function Stats() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section 
      id="stats" 
      ref={sectionRef} 
      className="py-16 bg-cover bg-center bg-fixed relative"
      style={{ 
        backgroundImage: "url('https://images.unsplash.com/photo-1577495508326-19a1a3cf65b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')"
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gray-900/80"></div>
      
      {/* SRK-style Stats Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <div className="w-16 h-1 bg-[#30B4F2] mx-auto mb-5"></div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Our Impact</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Transforming industrial practices across the Democratic Republic of Congo with sustainable environmental and safety solutions
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10">
          {statistics.slice(0, 4).map((stat, index) => (
            <StatCard 
              key={index}
              icon={stat.icon}
              value={stat.value}
              label={stat.label}
              animate={isVisible}
              delay={index * 100}
            />
          ))}
        </div>

        <div className="border-t border-gray-700 mt-16 pt-16">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {statistics.slice(4).map((stat, index) => (
              <ServiceStat 
                key={index + 4}
                icon={stat.icon}
                value={stat.value}
                label={stat.label}
                animate={isVisible}
                delay={(index + 4) * 100}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

type StatCardProps = {
  icon: string;
  value: string;
  label: string;
  animate: boolean;
  delay: number;
};

function StatCard({ icon, value, label, animate, delay }: StatCardProps) {
  return (
    <div 
      className="text-center text-white"
      style={{ 
        opacity: animate ? 1 : 0, 
        transform: animate ? 'translateY(0)' : 'translateY(20px)',
        transition: `opacity 0.6s ease, transform 0.6s ease`,
        transitionDelay: `${delay}ms` 
      }}
    >
      <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#30B4F2]/20 text-[#30B4F2] mb-4">
        <i className={`fas ${icon} text-2xl`}></i>
      </div>
      <div className="font-bold text-4xl mb-2 text-white">
        {value}
      </div>
      <div className="w-10 h-0.5 bg-[#30B4F2] mx-auto mb-3"></div>
      <p className="text-gray-300 font-medium">{label}</p>
    </div>
  );
}

function ServiceStat({ icon, value, label, animate, delay }: StatCardProps) {
  return (
    <div 
      className="flex items-center p-4 group"
      style={{ 
        opacity: animate ? 1 : 0, 
        transform: animate ? 'translateY(0)' : 'translateY(20px)',
        transition: `opacity 0.6s ease, transform 0.6s ease`,
        transitionDelay: `${delay}ms` 
      }}
    >
      <div className="mr-4 w-12 h-12 flex items-center justify-center rounded-full bg-[#30B4F2]/20 text-[#30B4F2] group-hover:scale-110 transition-transform">
        <i className={`fas ${icon} text-xl`}></i>
      </div>
      <div>
        <div className="font-bold text-2xl text-white mb-1">{value}</div>
        <p className="text-gray-400">{label}</p>
      </div>
    </div>
  );
}
