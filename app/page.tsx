import React from 'react';
import Navigation from '../components/Navigation';
import Header from '../components/Header';
import ProjectsSection from '../components/ProjectsSection';
import EducationSection from '@/components/EducationSection';
import AboutSection from '@/components/AboutSection';
import Footer from '../components/Footer';
import WorkExperienceSection from '@/components/WorkExperienceSection';
import ContactSection from '@/components/ContactSection';
import SocialLinks from '../components/SocialLinks';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-background-light dark:bg-background-dark text-text-light dark:text-text-dark">
      <Navigation />
      <div className="container mx-auto px-4 py-12 space-y-24">
        <Header />
        <AboutSection />
        <EducationSection />
        <WorkExperienceSection />
        <ProjectsSection />
        <ContactSection />
      </div>
      <div className="hidden md:block fixed right-4 bottom-4 md:right-8 md:bottom-8">
        <SocialLinks />
      </div>
      <Footer />
    </main>
  );
}
