import Link from "next/link"
import Image from "next/image"
import { Mail, Phone, MapPin, ExternalLink } from "lucide-react"

export function SiteFooter() {
  return (
    <footer className="border-t border-white/10 bg-slate-950 text-slate-300">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pb-12 border-b border-white/10">
          
          {/* Column 1: Brand & Info */}
          <div className="space-y-4">
            <div className="relative h-12 w-40">
              <Image 
                src="/logo.png" 
                alt="RoboWeb Technologies Logo" 
                fill 
                className="object-contain object-left"
              />
            </div>
            <p className="text-sm text-slate-400 leading-relaxed">
              Empowering businesses and future innovators through cutting-edge IT services, software development, AI automation, and industry-oriented training programmes.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4">Quick Links</h4>
            <ul className="space-y-2.5 text-sm font-medium">
              <li><a href="/" className="hover:text-blue-400 transition-colors">Home</a></li>
              <li><a href="/#about" className="hover:text-blue-400 transition-colors">About Us</a></li>
              <li><a href="/#services" className="hover:text-blue-400 transition-colors">Services</a></li>
              <li><a href="/#training" className="hover:text-blue-400 transition-colors">Training</a></li>
              <li><a href="/#internships" className="hover:text-blue-400 transition-colors">Internships</a></li>
            </ul>
          </div>

          {/* Column 3: Opportunities */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4">Opportunities</h4>
            <ul className="space-y-2.5 text-sm font-medium">
              <li><a href="/hackathons" className="hover:text-blue-400 transition-colors">Hackathons & Events</a></li>
              <li><a href="/careers" className="hover:text-blue-400 transition-colors">Careers & Openings</a></li>
              <li><a href="/#contact" className="hover:text-blue-400 transition-colors">Contact Support</a></li>
            </ul>
          </div>

          {/* Column 4: Full Contact Info & Socials */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4">Get in Touch</h4>
            <ul className="space-y-3 text-sm text-slate-400">
              
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-blue-400 shrink-0" />
                <a href="mailto:contact@robowebtechnologies.co.in" className="hover:text-blue-400 transition-colors">
                  contact@robowebtechnologies.co.in
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-blue-400 shrink-0" />
                <a href="tel:+919876543210" className="hover:text-blue-400 transition-colors">
                  +91 98765 43210
                </a>
              </li>
              <li className="flex items-center gap-2 pt-1">
                <ExternalLink className="w-4 h-4 text-blue-400 shrink-0" />
                <a 
                  href="https://www.linkedin.com/company/roboweb-technologies" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:text-blue-400 transition-colors"
                >
                  LinkedIn / RoboWeb Technologies
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-blue-400 shrink-0 mt-1" />
                <span>39, 1st floor, Gandhi Nagar, Sathamangalam, Sivagangai road, Near Anna Bus Stand, Opposite to HP Petrol Bunk, Madurai, Tamil Nadu, India - 625020</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Copyright Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 font-medium">
          <p>© {new Date().getFullYear()} RoboWeb Technologies. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-slate-400 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-slate-400 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  )
}