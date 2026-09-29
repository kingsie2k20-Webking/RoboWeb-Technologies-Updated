import { Globe, Layers, Terminal, Code, Cpu, BarChart3, Palette, Bot, ArrowRight, Mail } from 'lucide-react';
import { Reveal } from "@/components/reveal";

export default function Internships() {
  const companyEmail = "contact@robowebtechnologies.co.in";

  // Direct Gmail web compose link for general applications
  const generalGmailLink = `https://mail.google.com/mail/?view=cm&fs=1&to=${companyEmail}&su=${encodeURIComponent(
    `General Internship Application - RoboWeb Technologies`
  )}&body=${encodeURIComponent(
    `Hello RoboWeb Technologies Team,\n\nI am interested in applying for an internship program at your company.\n\nPlease find my details below:\nName:\nPhone:\nPreferred Domain:\nCollege / Qualification:\n\nLooking forward to hearing from you.\n\nBest regards,`
  )}`;

  const internshipDomains = [
    { title: 'Web Development', icon: Globe, desc: 'Build responsive, high-performance web applications using modern frontend frameworks.' },
    { title: 'Full Stack Development', icon: Layers, desc: 'Master end-to-end software creation combining robust backend architectures and dynamic user interfaces.' },
    { title: 'Python Development', icon: Terminal, desc: 'Develop backend scripts, automated workflows, and data processing scripts using Python.' },
    { title: 'Java Development', icon: Code, desc: 'Build secure, scalable enterprise software solutions using Java and industry frameworks.' },
    { title: 'AI & Machine Learning', icon: Bot, desc: 'Implement intelligent machine learning models, neural networks, and automated data pipelines.' },
    { title: 'Data Analytics', icon: BarChart3, desc: 'Transform complex datasets into actionable insights using modern analytics and visualization tools.' },
    { title: 'UI/UX Design', icon: Palette, desc: 'Design intuitive, user-friendly digital interfaces, wireframes, and design systems.' },
    { title: 'Robotics & IoT', icon: Cpu, desc: 'Build smart hardware-software integrated systems combining sensors, microcontrollers, and automation.' },
  ];

  return (
    <section id="internships" className="py-24 bg-slate-950 text-slate-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading & Separate Mail Action Button Under Paragraph */}
        <Reveal variant="blur-up">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-block mb-3">
              <span className="text-xs uppercase tracking-widest text-blue-400 font-semibold px-3 py-1 bg-blue-500/10 rounded-full border border-blue-500/20">
                Career Kickstart
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Explore Our Internship Domains
            </h2>
            <p className="text-slate-400 text-base leading-relaxed mt-3">
              Our internship programs offer hands-on, real-world project training for students and aspiring professionals looking to build practical technical experience.
            </p>

            {/* Separate General Email Application Button */}
            <div className="mt-6 flex flex-col items-center gap-2">
              <a 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white px-5 py-3 text-xs sm:text-sm font-semibold transition-all shadow-lg shadow-blue-600/30"
              >
                <Mail className="w-4 h-4 shrink-0" />
                <span>Apply via Mail: {companyEmail}</span>
              </a>
            </div>
          </div>
        </Reveal>

        {/* 4-Column Domain Grid */}
        <Reveal variant="fade-up" delay={200}>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {internshipDomains.map((domain, index) => {
              const IconComponent = domain.icon;
              
              // Domain-specific direct Gmail compose link
              const domainGmailLink = `https://mail.google.com/mail/?view=cm&fs=1&to=${companyEmail}&su=${encodeURIComponent(
                `Application for ${domain.title} Internship`
              )}&body=${encodeURIComponent(
                `Hello RoboWeb Technologies Team,\n\nI am interested in applying for the ${domain.title} Internship program.\n\nPlease find my details below:\nName:\nPhone:\nCollege / Qualification:\n\nLooking forward to hearing from you.\n\nBest regards,`
              )}`;

              return (
                <div 
                  key={index}
                  className="bg-slate-900 border border-slate-800 rounded-2xl p-6 hover:border-blue-500/50 transition-all duration-300 flex flex-col justify-between group shadow-lg"
                >
                  <div className="space-y-4">
                    <div className="w-12 h-12 rounded-xl bg-blue-600/10 group-hover:bg-blue-600/20 border border-blue-500/20 flex items-center justify-center text-blue-400 transition">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <h3 className="text-lg font-bold text-white group-hover:text-blue-400 transition-colors">
                      {domain.title}
                    </h3>
                    <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                      {domain.desc}
                    </p>
                  </div>
                  
                  <div className="pt-6 mt-6 border-t border-slate-800/80 flex items-center justify-between">
                    <span className="text-xs text-slate-500 font-medium">Certified Training</span>
                    <a 
                      href={domainGmailLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs font-semibold text-blue-400 hover:text-blue-300 transition"
                    >
                      Apply Now <ArrowRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </Reveal>

      </div>
    </section>
  );
}