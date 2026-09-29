import {SiteHeader} from '@/components/site-header';
import {HeroSection} from '@/components/hero-section';
import {AboutSection}from '@/components/about-section';
import {ServicesSection} from '@/components/services-section';
import {TrainingSection} from '@/components/training-section';
import InternshipsSection from '@/components/Internships';
import {ProcessSection} from '@/components/process-section';
import {IndustriesSection} from '@/components/industries-section';
import {FaqSection} from '@/components/faq-section';
import {ContactSection} from "@/components/contact-section";
import {SiteFooter} from '@/components/site-footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <SiteHeader />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <TrainingSection />
      <InternshipsSection />
      <ProcessSection />
      <IndustriesSection />
      <FaqSection />
      <ContactSection />
      <SiteFooter />
    </main>
  );
}