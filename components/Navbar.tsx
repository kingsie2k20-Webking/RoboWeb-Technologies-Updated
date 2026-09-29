'use client';
import { useState } from 'react';
import Link from 'next/link';
import { Menu, X, Code2 } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Training', href: '#training' },
    { name: 'Internships', href: '#internships' },
    { name: 'Hackathons', href: '#hackathons' },
    { name: 'Careers', href: '#careers' },
    { name: 'Admin', href: '/admin' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-slate-950/90 backdrop-blur-md border-b border-slate-800 text-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group shrink-0">
            <div className="bg-blue-600 p-2 rounded-lg text-white group-hover:bg-blue-500 transition">
              <Code2 className="w-5 h-5" />
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-base tracking-tight leading-none">RoboWeb</span>
              <span className="text-[10px] text-blue-400 font-medium tracking-wider">TECHNOLOGIES</span>
            </div>
          </Link>

          {/* Desktop Navigation - Clean spacing for all main links */}
          <nav className="hidden lg:flex items-center space-x-5 xl:space-x-7">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-xs xl:text-sm font-medium text-slate-300 hover:text-white transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Contact Us CTA */}
          <div className="hidden lg:block shrink-0">
            <Link
              href="#contact"
              className="bg-blue-600 hover:bg-blue-500 text-white text-xs xl:text-sm font-medium px-4 py-2.5 rounded-xl transition shadow-lg shadow-blue-600/20"
            >
              Contact Us
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-300 hover:text-white p-2 focus:outline-none"
              aria-label="Toggle Menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="lg:hidden bg-slate-900 border-b border-slate-800 px-4 pt-3 pb-6 space-y-2">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block px-3 py-2 rounded-md text-sm font-medium text-slate-300 hover:text-white hover:bg-slate-800 transition"
            >
              {link.name}
            </Link>
          ))}
          <div className="pt-2">
            <Link
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="block text-center bg-blue-600 text-white py-2.5 rounded-xl font-medium text-sm"
            >
              Contact Us
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}