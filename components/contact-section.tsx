"use client"

import { Mail, Phone, MapPin, Clock, ExternalLink, Link } from "lucide-react"

export function ContactSection() {
  return (
    <section id="contact" className="relative bg-slate-950 py-24 text-slate-100 overflow-hidden">
      {/* Background glow styling */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-125 h-125 bg-blue-600/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-sm font-semibold tracking-wider text-blue-400 uppercase">
            Contact Us
          </span>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            We'd love to <span className="text-blue-500">hear from you.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
          {/* Contact Information Card */}
          <div className="rounded-2xl border border-white/10 bg-slate-900/60 backdrop-blur p-8 flex flex-col justify-between space-y-6">
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>

              <div className="space-y-6">
                {/* Address */}
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-blue-600/20 text-blue-400 border border-blue-500/30">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-1">Address</p>
                    <p className="text-sm text-slate-200 leading-relaxed">
                      39, 1st floor, Gandhi Nagar, Sathamangalam, Sivagangai road, Near Anna Bus Stand, Opposite to HP Petrol Bunk, Madurai, Tamil Nadu, India - 625020
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-blue-600/20 text-blue-400 border border-blue-500/30">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-1">Phone</p>
                    <a href="tel:+919150008650" className="text-sm font-semibold text-white hover:text-blue-400 transition-colors">
                      +91-9150008650
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-blue-600/20 text-blue-400 border border-blue-500/30">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-1">Email</p>
                    <a href="mailto:contact@robowebtechnologies.co.in" className="text-sm font-semibold text-white hover:text-blue-400 transition-colors">
                      contact@robowebtechnologies.co.in
                    </a>
                  </div>
                </div>

                {/* LinkedIn (Added right below Email) */}
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-blue-600/20 text-blue-400 border border-blue-500/30">
                    <Link className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-1">LinkedIn</p>
                    <a 
                      href="https://in.linkedin.com/in/kingsie-arumugam-5ba5bb428" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-sm font-semibold text-white hover:text-blue-400 transition-colors flex items-center gap-1.5"
                    >
                      <span>RoboWeb Technologies</span>
                      <ExternalLink className="h-3.5 w-3.5 text-slate-400" />
                    </a>
                  </div>
                </div>

                {/* Business Hours */}
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-blue-600/20 text-blue-400 border border-blue-500/30">
                    <Clock className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-1">Business Hours</p>
                    <p className="text-sm font-semibold text-white">
                      10.30 AM - 7 PM
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Embedded Google Map with Open in Maps Button */}
          <div className="relative rounded-2xl border border-white/10 bg-slate-900/60 backdrop-blur overflow-hidden flex flex-col min-h-100">
            <div className="absolute top-4 left-4 z-10">
              <a
                href="https://maps.google.com/?q=Shenoy+Nagar+Madurai"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg bg-white px-4 py-2 text-xs font-bold text-slate-900 shadow-md hover:bg-slate-100 transition-colors"
              >
                <span>Open in Maps</span>
                <ExternalLink className="h-3.5 w-3.5" />
              </a>
            </div>
            
            <div className="w-full h-full flex-1">
              <iframe
                title="RoboWeb Technologies Location Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6560.406761626026!2d78.13104439526796!3d9.925356859097324!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b00c5dd4245f821%3A0xf2eb0d1353d67022!2sRoboWeb%20Technologies!5e1!3m2!1sen!2sin!4v1789709486385!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: "400px" }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}