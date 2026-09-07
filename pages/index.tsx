import Head from 'next/head';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import AlternatingFeatures from '../components/AlternatingFeatures';
import StickyArchitecture from '../components/StickyArchitecture';
import CaseStudiesSection from '../components/CaseStudiesSection';
import SystemCapabilities from '../components/SystemCapabilities';
import ExperienceTimeline from '../components/ExperienceTimeline';
import EducationSection from '../components/EducationSection';
import Testimonials from '../components/Testimonials';
import ContactSection from '../components/ContactSection';
import FooterSection from '../components/FooterSection';
import { PERSONAL_INFO } from '../data/portfolioData';

export default function Home() {
  return (
    <>
      <Head>
        <title>{PERSONAL_INFO.name} — Senior Full-Stack AI Engineer</title>
        <meta
          name="description"
          content={`${PERSONAL_INFO.name} is a ${PERSONAL_INFO.title} with 8+ years of experience architecting production AI systems, RAG pipelines, scalable Python backends, and cloud SaaS platforms.`}
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="author" content={PERSONAL_INFO.name} />
        <meta property="og:title" content={`${PERSONAL_INFO.name} — Senior Full-Stack AI Engineer`} />
        <meta
          property="og:description"
          content="Architecting production AI systems, RAG pipelines, and high-throughput Python backends for enterprise SaaS. 8+ years experience."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://rehmat-resume.netlify.app/" />
        <meta name="keywords" content="Rehmat Qadeer, Senior Full-Stack AI Engineer, Python, FastAPI, Django, LangChain, RAG, pgvector, Next.js, React, AWS, Docker, AI Agents" />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <div className="min-h-screen bg-[#f8f8f6] text-[#111827] selection:bg-[#0f382c] selection:text-white">
        <Navbar />
        <main>
          <Hero />
          <AlternatingFeatures />
          <StickyArchitecture />
          <CaseStudiesSection />
          <SystemCapabilities />
          <ExperienceTimeline />
          <EducationSection />
          <Testimonials />
          <ContactSection />
        </main>
        <FooterSection />
      </div>
    </>
  );
}
