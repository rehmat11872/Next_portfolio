import emoji from 'react-easy-emoji';
import {
  EducationType,
  ExperienceType,
  FeedbackType,
  ProjectType,
  SkillsSectionType,
  SkillBarsType,
  SEODataType,
  SocialLinksType,
  GreetingsType,
} from './types/sections';

export const greetings: GreetingsType = {
  name: 'Rehmat Qadeer',
  title: "Hi all, I'm Rehmat",
  description: `
    I’m an Elite Full-Stack Developer & AI Solutions Architect with 8+ years of experience building scalable web applications, AI-powered platforms, and automation workflows for startups and enterprises. I specialize in Python, Django, FastAPI, Flask, modern frontend frameworks, AI integrations, and DevOps.

    I have delivered numerous projects that have significantly improved conversion rates and user experiences for clients ranging from startups to established enterprises.
  `,
  resumeLink: 'https://drive.google.com/file/d/1jm8QRftJPOUrs3dXCMufD5vt9yJ7cTge/view?usp=sharing',

};

export const openSource = {
  githubUserName: 'rehmat11872',
};

export const contact = {};

export const socialLinks: SocialLinksType = {
  url: 'https://rehmat11872.github.io/',
  linkedin: 'https://www.linkedin.com/in/rehmat-qadeer-577703178/',
  github: 'https://github.com/rehmat11872',
  instagram: 'https://instagram.com/rehmat_rao1999?igshid=OGQ5ZDc2ODk2ZA==',
  facebook: 'https://www.facebook.com/rehmat.paras?mibextid=ZbWKwL',
  twitter: 'https://x.com/pythondevloper9?t=Jbr5FWbqePRFgcxA9AwIpg&s=09',
};

export const skillsSection: SkillsSectionType = {
  title: 'What I do',
  subTitle: 'ELITE FULL-STACK DEVELOPER & AI SOLUTIONS ARCHITECT',
  data: [
    {
      title: 'AI & Automation',
      skills: [
        emoji('⚡ RAG-based chatbots & vector database integrations (LangChain, OpenAI, Gemini)'),
        emoji('⚡ AI agents & workflow automation using n8n, Gumloop, Zapier'),
        emoji('⚡ Custom AI solutions for NLP, recommendations, and conversation automation'),
      ],
      softwareSkills: [
        {
          skillName: 'OpenAI',
          iconifyTag: 'logos:openai-icon',
        },
        {
          skillName: 'LangChain',
          iconifyTag: 'simple-icons:langchain',
        },
        {
          skillName: 'Python',
          iconifyTag: 'logos:python',
        },
        {
          skillName: 'Tensorflow',
          iconifyTag: 'logos:tensorflow',
        },
      ],
    },
    {
      title: 'Backend & Cloud Infrastructure',
      skills: [
        emoji('⚡ Robust Backend Development with Django, FastAPI, Flask, Node.js'),
        emoji('⚡ Cloud Architecture on AWS (EC2, Lambda, ECS) & Azure'),
        emoji('⚡ CI/CD Automation, Docker & Kubernetes Containerization'),
        emoji('⚡ Database Optimization (PostgreSQL, MongoDB, Supabase)'),
      ],
      softwareSkills: [
        {
          skillName: 'Django',
          iconifyTag: 'vscode-icons:file-type-django',
        },
        {
          skillName: 'FastAPI',
          iconifyTag: 'logos:fastapi-icon',
        },
        {
          skillName: 'AWS',
          iconifyTag: 'logos:aws',
        },
        {
          skillName: 'Docker',
          iconifyTag: 'logos:docker-icon',
        },
        {
          skillName: 'PostgreSQL',
          iconifyTag: 'logos:postgresql',
        },
        {
          skillName: 'Kubernetes',
          iconifyTag: 'logos:kubernetes',
        },
      ],
    },
    {
      title: 'Frontend & UI/UX',
      skills: [
        emoji('⚡ Modern Responsive Web Apps with React, Next.js, Vue.js'),
        emoji('⚡ TypeScript Development for Type-Safe Applications'),
        emoji('⚡ Interactive UI/UX with Glassmorphism & Modern Animations'),
      ],
      softwareSkills: [
        {
          skillName: 'Reactjs',
          iconifyTag: 'vscode-icons:file-type-reactjs',
        },
        {
          skillName: 'Nextjs',
          iconifyTag: 'vscode-icons:file-type-light-next',
        },
        {
          skillName: 'TypeScript',
          iconifyTag: 'logos:typescript-icon',
        },
        {
          skillName: 'JavaScript',
          iconifyTag: 'logos:javascript',
        },
      ],
    },
  ],
};

export const SkillBars: SkillBarsType[] = [
  {
    Stack: 'Frontend/Design',
    progressPercentage: '90',
  },
  {
    Stack: 'Backend',
    progressPercentage: '90',
  },
  {
    Stack: 'Chatbot AI',
    progressPercentage: '95',
  },
  {
    Stack: 'DevOps',
    progressPercentage: '80',
  },
];

export const educationInfo: EducationType[] = [
  {
    schoolName: 'The Superior University',
    subHeader: "Bachelor's degree, Computer Science",
    duration: 'Jun 2017 - Jun 2021',
    desc: 'Bachelor of Technology in Computer Science',
    grade: 'Grade: A (CGPA: 3/4)',
    descBullets: [
      'Activities and societies: Google Developer Student Clubs (GDSC), ACM Student Chapter, Coding Club',
      'Participated in multiple programming competitions and hackathons',
    ],
  },
];

export const experience: ExperienceType[] = [
  {
    role: 'Senior Python Developer',
    company: 'MentorSol',
    companyLogo: '/img/icons/common/mentorsol.png',
    date: 'Oct 2024 - Aug 2025',
    desc: `Designing, developing, and deploying scalable Python applications, leveraging expertise in machine learning, data analysis, and cloud computing to drive business growth and innovation.`,
  },
  {
    role: 'Senior Python Consultant',
    company: 'Aegasis Labs',
    companyLogo: '/img/icons/common/aegasis-labs.png',
    date: 'Sep 2024 - Jul 2025',
    desc: `Improved code efficiency by 30% through optimization and refactoring. Collaborated with cross-functional teams to deliver high-quality solutions. Utilized expertise in machine learning and data analysis to enhance project outcomes.`,
  },
  {
    role: 'Full-stack Developer',
    company: 'Samaritan Technologies',
    companyLogo: '/img/icons/common/samaritan.png',
    date: 'Oct 2021 - Oct 2024',
    desc: 'Worked as a full-stack developer, proficient in creating numerous websites using Django, React.js, and various databases such as MySQL, PostgreSQL, and SQLite. Designed RESTful APIs and seamlessly integrated external APIs, ensuring comprehensive functionality and user-friendly experiences.',
  },
  {
    role: 'Software Engineer',
    company: 'DexterSol',
    companyLogo: '/img/icons/common/dextersol.jpeg',
    date: 'Jul 2018 - Oct 2021',
    desc: 'Started my career as associate software engineer from DexterSol Lahore. Specialized in Python-based frameworks like Django and Flask, architecting robust and scalable backend systems. Also worked on frontend development with React.js, HTML, CSS, and Bootstrap.',
  },
];

export const projects: ProjectType[] = [
  {
    name: 'Optevo - AI Knowledge Base',
    desc: 'Built an AI-powered Knowledge Base system integrated into WorkPods platform with semantic search using OpenAI embeddings and Azure Cognitive Search. Features include document upload/management (PDF, DOCX, XLSX), natural language query answering, smart chunking with metadata indexing, and secure file validation. Technologies: Python, Flask, Azure OpenAI, Azure Cognitive Search, PostgreSQL.',
    link: 'https://www.optevo.com/',
    image: '/img/projects/ai_project.png',
  },
  {
    name: 'Legal AI System - LexOrbit',
    desc: 'Complete Legal AI platform with ETL pipeline from CourtListener API, semantic search with pgvector, AI research engine powered by GPT-4, judge analytics module, case prediction AI, and comprehensive PDF utilities. Built the full backend using Django REST Framework with multi-tenant architecture, JWT authentication, and background jobs for data processing. Technologies: Django REST Framework, OpenAI, pgvector, PostgreSQL, Azure Cognitive Search.',
    link: 'https://getlexorbit.com/',
    image: '/img/projects/legal_project.png',
  },
  {
    name: 'Veriport - Compliance Platform',
    desc: 'Automated drug & alcohol testing compliance platform. Set up CI/CD pipeline on AWS, diagnosed and resolved integration issues between React frontend and Django backend, configured AWS infrastructure (EC2, S3, RDS, CloudWatch), optimized API performance, and implemented comprehensive logging and monitoring. Technologies: AWS (EC2, S3, CloudFront, RDS), CI/CD (CodePipeline, CodeBuild), Python/Django, React, PostgreSQL.',
    link: 'https://veriport.ca/',
    image: '/img/projects/cloud_project.png',
  },

  {
    name: 'p-optevo-ai',
    desc: 'An Flask based AI orchestration platform  demonstrating a Optevo’s WorkPods provide scalable, agile workspaces that drive alignment, engagement, and efficiency—enabling seamless collaboration across diverse work environments.',
    github: 'https://github.com/rehmat11872/flask-p-optevo-ai',
    link: 'https://www.optevo.com/',
    image: '/img/projects/ai_project.png',
  },
  {
    name: 'CIDB Malaysia',
    desc: 'A Django based application demonstrating a quality Assessment System for Building Construction Works is an independent method to access and evaluate primarily on the quality of workmanship and building projects based on the standards.',
    github: 'https://github.com/PipelineNetwork/cidb-qlassic-prod',
    link: 'https://qlassic.cidb.gov.my/',
    image: '/img/projects/cloud_project.png',
  },
  {
    name: 'Multi Agent Supervisor',
    desc: 'A FastAPI application demonstrating a multi-agent architecture orchestrated by a central supervisor. It coordinates worker agents including a GDP Agent, Math Agent, and Supervisor Agent to handle domain-specific tasks.',
    github: 'https://github.com/rehmat11872/Multi_Agent_FastAPI_Langchain',
    image: '/img/projects/ai_project.png',
  },
  {
    name: 'AI-Lawyer Neuracase',
    desc: 'A React and RestAPI based application demonstrating a elevate your legal practice with AI-powered tools for document summarization, note refinement, PDF management tools, enhanced security, and OCR capabilities.',
    github: 'https://github.com/rehmat11872/Frontend-ChatGPT',
    link: 'https://ai-lawyer.neuracase.com/',
    image: '/img/projects/legal_project.png',
  },
  {
    name: 'TunnelKing',
    desc: 'A Dashboard for managing the desktop application users and related data.',
    github: 'https://github.com/rehmat11872/TunnelKing',
    link: 'https://tunnel-king.netlify.app/',
    image: '/img/projects/cloud_project.png',
  },
  {
    name: 'Socail media Book app',
    desc: 'Social network that allows users to post short text-based messages. The users of your app can follow other users to see their posts or unfollow them to stop seeing their posts:',
    github: 'https://github.com/rehmat11872/Social_media_app_book',
    image: '/img/projects/cloud_project.png',
  },
  {
    name: 'Student portal',
    desc: 'A student portal is an online platform designed to cater to the needs of students within an educational institution. It typically provides access to various academic resources, such as course materials, grades, schedules, and communication tools.',
    github: 'https://github.com/rehmat11872/Studentstudyportel',
    image: '/img/projects/cloud_project.png',
  },
  {
    name: 'Greatkart (Ecommerce)',
    desc: 'Ecommerce store, a comprehensive ecommerce solution that seamlessly integrates with your existing systems and processes. From product listing and inventory management to order processing and payment gateways, Greatkart caters to all your ecommerce needs.',
    github: 'https://github.com/rehmat11872/django-ecommerce-app',
    image: '/img/projects/cloud_project.png',
  },
  {
    name: 'Subcovery',
    desc: 'Quality Assessment System for Building Construction Works is an independent method to access and evaluate primarily on the quality of workmanship and building projects based on the standards.',
    github: 'https://github.com/PipelineNetwork/cidb-qlassic-prod',
    link: 'http://app.subcovery.com/accounts/login/?next=/',
    image: '/img/projects/cloud_project.png',
  },
  {
    name: 'HRM',
    desc: 'A cutting-edge HRM System designed to streamline and elevate your human resource operations. Our system is a comprehensive solution that empowers organizations to efficiently manage their workforce.',
    github: 'https://github.com/SamaritanTechnologies/HRM-backend',
    link: 'https://hrm.samaritan-technologies.com/',
    image: '/img/projects/cloud_project.png',
  },
  {
    name: 'Fitness App',
    desc: 'A Flutter-based mobile application for tracking workouts, monitoring health metrics, and visualizing progress with interactive charts.',
    github: 'https://github.com/rehmat11872/Fitness_App',
    image: '/img/projects/cloud_project.png',
  },
  {
    name: 'Polify RiderApp',
    desc: 'A rider companion app built with Flutter, offering real-time order updates, route navigation, and seamless communication for delivery personnel.',
    github: 'https://github.com/rehmat11872/Polify_RiderApp',
    image: '/img/projects/cloud_project.png',
  },
  {
    name: 'PSM New Solar Market',
    desc: 'A marketplace platform focused on solar energy projects, providing listings, project analytics, and direct inquiry capabilities for stakeholders.',
    github: 'https://github.com/rehmat11872/psm_new_solar_market',
    image: '/img/projects/cloud_project.png',
  },
];

export const feedbacks: FeedbackType[] = [
  {
    name: 'Flavio',
    feedback:
      'Working with Rehmat was a pleasure! Exceptional freelancer who not only met our expectations but exceeded them. Timely, professional, and delivered outstanding results.',
  },
  {
    name: 'Devis',
    feedback:
      'Rehmat is a true professional. The quality of work delivered was top-notch, and the attention to detail was impressive. We look forward to collaborating on future projects.',
  },
];

// option to hide or show the ContactUs component
export const showContactUs: boolean = true;

// See object prototype on /types/section.ts page
export const seoData: SEODataType = {
  title: 'Rehmat Qadeer',
  description:
    'A passionate Full Stack Web Developer.',
  author: 'Rehmat Qadeer',
  image: 'https://avatars.githubusercontent.com/u/82605080?v=4',
  url: 'https://rehmat-resume.netlify.app/',
  keywords: [
    'Rehmat',
    'Rehmat Qadeer',
    '@rehmat11872',
    'rehmat11872',
    'Portfolio',
    'Rehmat Portfolio ',
    'Rehmat Qadeer Portfolio',
  ],
};
