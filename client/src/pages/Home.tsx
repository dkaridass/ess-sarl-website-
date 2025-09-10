import Hero from "../components/home/Hero";
import Stats from "../components/home/Stats";
import AboutSection from "../components/home/About";
import ServicesSection from "../components/home/Services";
import EnvironmentalServices from "../components/home/EnvironmentalServices";
import SafetyServices from "../components/home/SafetyServices";
import TrainingServices from "../components/home/TrainingServices";
import Sustainability from "../components/home/Sustainability";
import AchievementsSection from "../components/home/Achievements";
import TestimonialsSection from "../components/home/Testimonials";
import EnhancedTestimonials from "../components/home/EnhancedTestimonials";
import LeadGeneration from "../components/home/LeadGeneration";
import ComplianceCalculator from "../components/home/ComplianceCalculator";
import TeamSection from "../components/home/TeamSection";
import CaseStudies from "../components/home/CaseStudies";
import FaqSection from "../components/home/Faq";
import BackToTop from "../components/home/BackToTop";
import SEO from "../components/seo/SEO";
import { useTranslation } from "react-i18next";

export default function Home() {
  const { t } = useTranslation();

  return (
    <>
      <SEO 
        title={t('seo.home.title')}
        description={t('seo.home.description')}
      />
      <Hero />
      <Stats />
      <AboutSection />
      <ServicesSection />
      <EnvironmentalServices />
      <SafetyServices />
      <TrainingServices />
      <Sustainability />
      <AchievementsSection />
      <EnhancedTestimonials />
      <ComplianceCalculator />
      <CaseStudies />
      <TeamSection />
      <LeadGeneration />
      <FaqSection />
      <BackToTop />
    </>
  );
}
