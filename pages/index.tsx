import Head from 'next/head';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Services from '../components/Services';
import SkillsSection from '../components/SkillsSection';
import ProjectsSection from '../components/ProjectsSection';
import ExperienceSection from '../components/ExperienceSection';
import EducationSection from '../components/EducationSection';
import Testimonials from '../components/Testimonials';
import ContactSection from '../components/ContactSection';
import FooterSection from '../components/FooterSection';

export default function Home() {
  return (
    <>
      <Head>
        <title>Rehmat Qadeer — Full-Stack Developer & AI Engineer</title>
        <meta
          name="description"
          content="Rehmat Qadeer is an Elite Full-Stack Developer specializing in Python/Django, React/Next.js, AI solutions, and cloud architecture. Available for hire remotely."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="author" content="Rehmat Qadeer" />
        <meta property="og:title" content="Rehmat Qadeer — Full-Stack Developer & AI Engineer" />
        <meta
          property="og:description"
          content="Building production-grade web apps, AI integrations, and cloud platforms. 8+ years, 50+ projects."
        />
        <meta name="keywords" content="Rehmat Qadeer, Full-Stack Developer, Django, React, Next.js, AI, Python, AWS, Pakistan" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="min-h-screen bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-100">
        <Navbar />
        <main>
          <Hero />
          <Services />
          <SkillsSection />
          <ProjectsSection />
          <ExperienceSection />
          <EducationSection />
          <Testimonials />
          <ContactSection />
        </main>
        <FooterSection />
      </div>
    </>
  );
}
