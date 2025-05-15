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
    With over 5 years of professional experience as a full-stack developer, I deliver end-to-end solutions across mobile and web platforms. 
    My expertise includes Flutter for cross-platform apps; designing and consuming RESTful APIs; Python-based frameworks such as FastAPI, Flask, 
    and Django; and advanced web stacks with React, Next.js, and Node.js. I also build intelligent chatbots with LangChain and manage 
    data with MySQL, PostgreSQL, MongoDB, and vector databases. Complementing my development skills, I architect CI/CD pipelines, 
    containerize applications with Docker, and streamline DevOps workflows for rapid, reliable delivery.
  `,
  resumeLink:
    // 'https://drive.google.com/file/d/1zCMO2XQRuajmc46GdHtWasZHc2m7-0Zc/view?usp=sharing',
    'https://drive.google.com/file/d/1jm8QRftJPOUrs3dXCMufD5vt9yJ7cTge/view?usp=sharing',
    
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
  subTitle: 'CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK',
  data: [
    {
      title: 'Full Stack Development',
      lottieAnimationFile: '/lottie/skills/fullstack.json', // Path of Lottie Animation JSON File
      skills: [
        emoji(
          '⚡ Building responsive Single-Page-Apps (SPA) & PWA in React.js'
        ),
        emoji('⚡ Building responsive static websites using Next.js'),
        emoji('⚡ Building RESTful APIs in Django & Django REST Framework'),
        emoji('⚡ Developing cross–platform mobile apps with Flutter'),
        emoji('⚡ Architecting intelligent chatbots with LangChain'),
      ],
      softwareSkills: [
        {
          skillName: 'HTML-5',
          iconifyTag: 'vscode-icons:file-type-html',
        },
        {
          skillName: 'CSS-3',
          iconifyTag: 'vscode-icons:file-type-css',
        },
        {
          skillName: 'JavaScript',
          iconifyTag: 'logos:javascript',
        },
        {
          skillName: 'Reactjs',
          iconifyTag: 'vscode-icons:file-type-reactjs',
        },
        {
          skillName: 'Nextjs',
          iconifyTag: 'vscode-icons:file-type-light-next',
        },
        {
          skillName: 'Python',
          iconifyTag: 'logos:python',
        },
        {
          skillName: 'Django',
          iconifyTag: 'vscode-icons:file-type-django',
        },

        {
          skillName: 'Redux',
          iconifyTag: 'logos:redux',
        },
        {
          skillName: 'NPM',
          iconifyTag: 'logos:npm-icon',
        },
        // {
        //   skillName: 'Yarn',
        //   iconifyTag: 'logos:yarn',
        // },
        {
          skillName: 'Flutter',
          iconifyTag: 'logos:flutter',
        },
        {
          skillName: 'Chatbot AI',
          // you can swap this iconifyTag for any chatbot/robot icon you like
          iconifyTag: 'mdi:robot',
        },
      ],
    },
    {
      title: 'Cloud Infra-Architecture',
      lottieAnimationFile: '/lottie/skills/cloudinfra.json', // Path of Lottie Animation JSON File
      skills: [
        emoji('⚡ Experience of working on multiple cloud platforms'),
        emoji(
          '⚡ Hosting and maintaining websites on virtual machine instances along with integration of databases'
        ),
        emoji(
          '⚡ Building CI/CD pipelines for automated testing & deployment using Github Actions'
        ),
        
      ],
      softwareSkills: [
        // ? Check README To get icon details
        {
          skillName: 'AWS',
          iconifyTag: 'logos:aws',
        },
        {
          skillName: 'Azure',
          iconifyTag: 'logos:microsoft-azure',
        },
        {
          skillName: 'Heroku',
          iconifyTag: 'logos:heroku-icon',
        },
        {
          skillName: 'PostgreSQL',
          iconifyTag: 'logos:postgresql',
        },
        {
          skillName: 'Github',
          iconifyTag: 'akar-icons:github-fill',
        },
        {
          skillName: 'Docker',
          iconifyTag: 'logos:docker-icon',
        },
        {
          skillName: 'CI-CD',
          iconifyTag: 'logos:github-actions',
        },
        {
          skillName: 'Cloudinary',
          iconifyTag: 'logos:cloudinary',
        },
        {
          skillName: 'Nginx',
          iconifyTag: 'logos:nginx',
        },
        {
          skillName: 'Sentry',
          iconifyTag: 'logos:sentry-icon',
        },
      ],
    },
    // {
    //   title: 'Blockchain',
    //   lottieAnimationFile: '/lottie/skills/ethereum.json', // Path of Lottie Animation JSON File
    //   skills: [
    //     emoji(
    //       '⚡ Experience in developing Smart Contract using Solidity & Ethereum'
    //     ),
    //     emoji(
    //       '⚡ Building Scripts for automated testing & deployment of Smart Contracts using Brownie & Infura'
    //     ),
    //     emoji(
    //       '⚡ Experience of using Openzeppelin Smart Contract Standards & Chainlink Oracles'
    //     ),
    //     emoji('⚡ Developing NFT Smart Contracts using ERC-721 Token Standard'),
    //     emoji(
    //       '⚡ Building Dapps with React.js & Solidity using Web3.js, Moralis & IPFS'
    //     ),
    //   ],
    //   softwareSkills: [
    //     {
    //       skillName: 'Ethereum',
    //       iconifyTag: 'logos:ethereum',
    //     },
    //     {
    //       skillName: 'Solidity',
    //       iconifyTag: 'logos:solidity',
    //     },
    //     {
    //       skillName: 'Web3js',
    //       iconifyTag: 'logos:web3js',
    //     },
    //     {
    //       skillName: 'Metamask',
    //       iconifyTag: 'logos:metamask-icon',
    //     },
    //     {
    //       skillName: 'Ganache',
    //       iconifyTag: 'logos:ganache-icon',
    //     },
    //   ],
    // },
  ],
};

export const SkillBars: SkillBarsType[] = [
  {
    Stack: 'Frontend/Design', //Insert stack or technology you have experience in
    progressPercentage: '90', //Insert relative proficiency in percentage
  },
  {
    Stack: 'Backend',
    progressPercentage: '90',
  },
  {
    Stack: 'Flutter',
    progressPercentage: '90',
  },
  {
    Stack: 'Chatbot AI',
    progressPercentage: '95',
  },
  {
    Stack: 'Devops',
    progressPercentage: '80',
  },
];

export const educationInfo: EducationType[] = [
  {
    schoolName: 'Superior University Lahore',
    subHeader: 'Bachelor  in Computer Science',
    duration: 'November 2017 - September 2021',
    desc: 'Participated in the Student portel project of the university.',
    grade: 'Grade A',
    descBullets: [
      'I was the SVL in my university',
      'I have been participant in the many programming events in my university',
    ],
  },
];

export const experience: ExperienceType[] = [


  {
    role: 'Senior Python Engineer',
    company: 'Mentorsol',
    companyLogo: '/img/icons/common/mentorsol.png',
    date: 'Oct 2024 - Present',
    desc: `
    As Senior Python Engineer at Mentorsol, I lead the end-to-end design, development, and optimization of mission-critical backend services. 
    I architect scalable microservices and RESTful APIs, enforce clean code through rigorous reviews, and mentor a team of 5+ developers 
    on best practices in testing, performance tuning, and security. I also drive our CI/CD strategy—building automated pipelines with GitHub 
    Actions and Docker—and collaborate closely with product and DevOps teams to ensure 99.9% uptime and seamless feature delivery.
  `,
  },
  {
    role: 'Backend Consultant and AI Authistehst',
    company: 'Aegasis Labs',
    companyLogo: '/img/icons/common/aegasis-labs.png',
    date: 'Apr 2024 - May 2025',
    desc: `
    In my remote role at Aegasis Labs, I provided expert backend consultation and led the integration of AI-driven features across client projects. 
    I designed high-performance APIs using FastAPI and Flask, architected data pipelines for large-scale analytics, and embedded GPT-based 
    chatbots for enhanced user engagement. My work included running technical workshops on AI best practices, setting up containerized 
    deployments with Docker/Kubernetes, and advising on cloud architecture to meet SLAs and security requirements.
  `,
  },
  {
    role: 'Full Stack Developer',
    company: 'Samaritan Technologies',
    companyLogo: '/img/icons/common/samaritan.png',
    date: 'Jan 2023 - Feb 2024',
    desc: 'Worked as full stack developer, Worked as a Fullstack developer,proficient in creating numerous websites using Django, React.js, and various databases such as MySQL, PostgreSQL, and SQLite. My skill set includes designing RESTful APIs and seamlessly integrating external APIs, ensuring comprehensive functionality and user-friendly experiences across the websites I have developed.',
  },
  {
    role: 'API Engineer',
    company: 'Samaritan Technologies',
    companyLogo: '/img/icons/common/samaritan.png',
    date: 'Mar 2021 – Jan 2022',
    desc: 'I worked as API Engineer,specializing in constructing highly optimized and high-performance RESTful APIs. My expertise lies in utilizing Django, Django REST Framework, PostgreSQL, JWT Authentication, and AWS to create robust APIs.I have hands-on experience integrating Plaid APIs for efficient retrieval of bank transactions, contributing to seamless and secure data interactions within applications.',
    // descBullets: [
    // 	"Lorem ipsum dolor sit amet, consdfgectetur adipiscing elit",
    // 	"Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    // ],
  },
  {
    role: 'Backend Developer',
    company: 'Dextersol',
    companyLogo: '/img/icons/common/dextersol.jpeg',
    date: 'oct 2019 - jan 2021 ',
    desc: 'Worked as a backend developer, specializing in Python-based frameworks like Django and Flask. My expertise lies in architecting robust and scalable backend systems, leveraging Django and Flask to build efficient web applications. I have a proven track record of implementing sophisticated functionalities, managing databases, and backend solutions using these frameworks.',
  },
  {
    role: 'Frontend Developer',
    company: 'Dextersol',
    companyLogo: '/img/icons/common/dextersol.jpeg',
    date: 'Feb 2019 – Oct 2019',
    desc: 'I worked as frontend web developer,specializing in crafting user-friendly admin dashboards for multiple applications. My skill set includes proficiency in React.js, HTML, CSS, Bootstrap, jQuery, Chart.js, and various other libraries. I have adeptly utilized these technologies to design intuitive and responsive web-based admin interfaces, enhancing user experiences across diverse projects.',
  },
];

export const projects: ProjectType[] = [

  {
    name: 'p-optevo-ai',
    desc: 'An Flask based AI orchestration platform  demonstrating a Optevo’s WorkPods provide scalable, agile workspaces that drive alignment, engagement, and efficiency—enabling seamless collaboration across diverse work environments.',
    github: 'https://github.com/rehmat11872/flask-p-optevo-ai',
    link: 'https://www.optevo.com/',
  },
  {
    name: 'CIDB Malaysia',
    desc: 'A Django based application demonstrating a quality Assessment System for Building Construction Works is an independent method to access and evaluate primarily on the quality of workmanship and building projects based on the standards.',
    github: 'https://github.com/PipelineNetwork/cidb-qlassic-prod',
    link: 'https://qlassic.cidb.gov.my/',
  },
  {
    name: 'Multi Agent Supervisor',
    desc: 'A FastAPI application demonstrating a multi-agent architecture orchestrated by a central supervisor. It coordinates worker agents including a GDP Agent, Math Agent, and Supervisor Agent to handle domain-specific tasks.',
    github: 'https://github.com/rehmat11872/Multi_Agent_FastAPI_Langchain',
  },
  {
    name: 'AI-Lawyer Neuracase',
    desc: 'A React and RestAPI based application demonstrating a elevate your legal practice with AI-powered tools for document summarization, note refinement, PDF management tools, enhanced security, and OCR capabilities.',
    github: 'https://github.com/rehmat11872/Frontend-ChatGPT',
    link: 'https://ai-lawyer.neuracase.com/',
  },
  {
    name: 'TunnelKing',
    desc: 'A Dashboard for managing the desktop application users and related data.',
    github: 'https://github.com/rehmat11872/TunnelKing',
    link: 'https://tunnel-king.netlify.app/',
  },
  {
    name: 'Socail media Book app',
    desc: 'Social network that allows users to post short text-based messages. The users of your app can follow other users to see their posts or unfollow them to stop seeing their posts:',
    github: 'https://github.com/rehmat11872/Social_media_app_book',
  },
  {
    name: 'Student portal',
    desc: 'A student portal is an online platform designed to cater to the needs of students within an educational institution. It typically provides access to various academic resources, such as course materials, grades, schedules, and communication tools.',
    github: 'https://github.com/rehmat11872/Studentstudyportel',
  },
  {
    name: 'Greatkart (Ecommerce)',
    desc: 'Ecommerce store, a comprehensive ecommerce solution that seamlessly integrates with your existing systems and processes. From product listing and inventory management to order processing and payment gateways, Greatkart caters to all your ecommerce needs.',
    github: 'https://github.com/rehmat11872/django-ecommerce-app',
  },
  {
    name: 'Subcovery',
    desc: 'Quality Assessment System for Building Construction Works is an independent method to access and evaluate primarily on the quality of workmanship and building projects based on the standards.',
    github: 'https://github.com/PipelineNetwork/cidb-qlassic-prod',
    link: 'http://app.subcovery.com/accounts/login/?next=/',
  },
  {
    name: 'HRM',
    desc: 'A cutting-edge HRM System designed to streamline and elevate your human resource operations. Our system is a comprehensive solution that empowers organizations to efficiently manage their workforce.',
    github: 'https://github.com/SamaritanTechnologies/HRM-backend',
    link: 'https://hrm.samaritan-technologies.com/',
  },
  {
    name: 'Fitness App',
    desc: 'A Flutter-based mobile application for tracking workouts, monitoring health metrics, and visualizing progress with interactive charts.',
    github: 'https://github.com/rehmat11872/Fitness_App',
  },
  {
    name: 'Polify RiderApp',
    desc: 'A rider companion app built with Flutter, offering real-time order updates, route navigation, and seamless communication for delivery personnel.',
    github: 'https://github.com/rehmat11872/Polify_RiderApp',
  },
  {
    name: 'PSM New Solar Market',
    desc: 'A marketplace platform focused on solar energy projects, providing listings, project analytics, and direct inquiry capabilities for stakeholders.',
    github: 'https://github.com/rehmat11872/psm_new_solar_market',
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
