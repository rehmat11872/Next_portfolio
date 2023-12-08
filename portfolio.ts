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
  description:
    "With over 5 years of hands-on experience in full-stack development, I specialize in crafting robust APIs for mobile applications using Python Django, Flask and ReactJS. Proficient in front-end technologies like React, HTML, and CSS.I seamlessly integrate diverse databases—MySQL, PostgreSQL, MongoDB, SQLite",
  resumeLink:
    'https://drive.google.com/file/d/1zCMO2XQRuajmc46GdHtWasZHc2m7-0Zc/view?usp=sharing',
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
        {
          skillName: 'Yarn',
          iconifyTag: 'logos:yarn',
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
          skillName: 'Github Actions',
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
    Stack: 'Programming',
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
    role: 'Full Stack Developer',
    company: 'Samaritan Technologies',
    companyLogo: '/img/icons/common/samaritan.png',
    date: 'Jan 2023 - Jan 2024',
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
    name: 'CIDB Malaysia',
    desc: 'Quality Assessment System for Building Construction Works is an independent method to access and evaluate primarily on the quality of workmanship and building projects based on the standards.',
    github: 'https://github.com/PipelineNetwork/cidb-qlassic-prod',
    link: 'https://qlassic.cidb.gov.my/',
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
