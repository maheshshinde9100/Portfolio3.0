import type { Project } from '@/types/project'

export const allProjects: Project[] = [
   // personal projects
  {
    id: 'mentee-connect',
    title: 'Mentee Connect',
    description:
      'Platform connecting students with mentors for personalized guidance, progress tracking, and communication.',
    category: 'personal',
    tech: ['ReactJS', 'SpringBoot', 'MongoDB', 'Spring Security', 'Tailwind CSS'],
    github: 'https://github.com/maheshshinde9100/Mentee_Connect_Frontend',
    demo: 'https://menteeconnect.vercel.app/',
    image: '/thumbnails/mentee-connect-thumbnail.png',
    date: '2024-02',
  },
{
  id: 'safe-pilot',
  title: 'SafePilot',
  description:
    'SafePilot is an IoT-driven smart-vehicle safety system using ESP8266, multiple sensors, Hive MQTT, RFID-based door authentication, Python drowsiness detection, and a WebSocket-powered React dashboard for real-time vehicle control, alerts, and object detection.',
  category: 'personal',
  tech: [
    'ESP8266',
    'RFID',
    'MQTT (HiveMQ)',
    'WebSockets',
    'Python (OpenCV)',
    'React',
    'Node.js',
    'Express',
    'Appwrite',
    'IoT Sensors',
    'Motor Driver L298N'
  ],
  github: 'https://github.com/maheshshinde9100/SafePilot',
  demo: null,
  image: '/thumbnails/safepilot-thumbnail.png',
  date: '2025-09',
},
// { //  under working
//   id: 'maitri-connect',
//   title: 'MaitriConnect',
//   description:
//     'MaitriConnect is a microservices-based real-time communication platform built with Spring Boot and React, featuring Spring Cloud, Netflix Eureka service discovery, MongoDB, WebSockets, and multipart file support. It enables real-time chat, seamless file sharing, and profile management with image updates, with ongoing development of a video and voice calling service.',
//   category: 'personal',
//   tech: [
//     'Spring Boot',
//     'Microservices Architecture',
//     'Spring Cloud',
//     'Netflix Eureka',
//     'React',
//     'TailwindCSS',
//     'MongoDB',
//     'WebSockets',
//     'Multipart File Handling',
//     'Java',
//     // 'Video and Voice Call'
//   ],
//   github: 'https://github.com/maheshshinde9100/MaitriConnect',
//   demo: null,
//   image: '/thumbnails/maitri-connect-thumbnail.png',
//   date: '2025-10',
// },

  {
  id: 'codecomplexity-ai',
  title: 'CodeComplexity.AI',
  description:
    'AI-powered tool that analyzes source code to evaluate complexity, maintainability, and provide improvement suggestions.',
  category: 'personal',
  tech: ['ReactJS', 'NodeJS', 'Gemini API'],
  github: 'https://github.com/maheshshinde9100/CodeComplexity.AI',
  demo: 'https://code-complexity-ai.vercel.app/',
  image: '/thumbnails/code-complexity-ai-thumbnail.png',
  date: '2024-08',
},
{
  id: 'smart-waste-bin',
  title: 'Smart Waste Bin',
  description:
    'IoT-powered bin with waste level detection, moisture-based segregation, automatic lid, and real-time alerts via web dashboard.',
  category: 'personal',
  tech: ['IoT', 'NodeJS','Firebase Realtime DB','EmailJS', 'Nodemailer'],
  github: 'https://github.com/maheshshinde9100/smart-waste-bin',
  demo: 'https://smartwastebinsystem.netlify.app/',
  image: '/thumbnails/smart-waste-bin-thumbnail.png',
  date: '2024-04',
},
  {
    id: 'insta-clone',
    title: 'Mini Fullstack Instagram Clone',
    description:
      'Fullstack Instagram clone: profiles, posts, follow/unfollow, comments with real-time updates.',
    category: 'personal',
    tech: ['ReactJS', 'Firebase', 'Tailwind CSS'],
    github: 'https://github.com/maheshshinde9100/fullstack-instagram-clone',
    demo: 'https://insta-clone-by-mahesh-shinde.netlify.app/',
    image: '/thumbnails/insta-clone-1-thumbnail.png',
    date: '2024-07',
  },

//   { //under working
//   id: 'opdheal',
//   title: 'OPDHeal',
//   description:
//     'Spring Boot microservices-based healthcare application for managing outpatient department operations, including appointments, patient records, and billing. Currently in development.',
//   category: 'personal',
//   tech: ['Spring Boot', 'Java', 'Microservices', 'Spring Cloud', "Feign Client"],
//   github: 'https://github.com/maheshshinde9100/OPDHeal_microservices',
//   demo: null,
//   image: '',
//   date: '2025-01',
// },

{
  id: 'portfolio-v3',
  title: 'Portfolio 3.0',
  description:
    'Modern developer portfolio built with Next.js, TypeScript, Tailwind CSS, and ShadCN UI, featuring responsive design, dynamic project sections, and smooth animations.',
  category: 'personal',
  tech: ['Next.js', 'TypeScript', 'Tailwind CSS', 'ShadCN UI'],
  github: 'https://github.com/maheshshinde9100/Portfolio3.0',
  demo: 'https://maheshshinde-dev.vercel.app/',
  image: '/thumbnails/portfolio3.0-thumbnail.png',
  date: '2025-02',
},
  {
    id: 'mentor-app',
    title: 'Student Mentoring Application',
    description:
      'Android app connecting students with mentors: progress tracking.',
    category: 'personal',
    tech: ['Android', 'Java', 'XML','PhpMyAdmin'],
    github: 'https://github.com/maheshshinde9100/SanjivaniMentorMeet3',
    demo: null,
    image: '/thumbnails/student-mentoring-app-thumbnail.png',
    date: '2023-06',
  },
    {
    id: 'tasktracker',
    title: 'TaskTracker',
    description: 'Task management web app with lists, priorities, progress tracking, task report generation and task calendar with reminders.',
    category: 'personal',
    tech: ['ReactJS', 'ExpressJs', 'NodeJs', 'MongoDB'],
    github: 'https://github.com/maheshshinde9100/TaskTracker',
    demo: null,
    image: '/thumbnails/insta-clone-1-thumbnail.png',
    date: '2023-10',
  },

 {
  id: 'portfolio-v2',
  title: 'Portfolio 2.0',
  description:
    'Responsive personal portfolio showcasing projects, skills, and achievements with smooth navigation and modern UI.',
  category: 'personal',
  tech: ['HTML', 'CSS', 'JavaScript'],
  github: 'https://github.com/maheshshinde9100/Portfolio2.0',
  demo: 'https://shindemaheshportfolio.netlify.app/',
  image: '/thumbnails/portfolio2.0-thumbnail.png',
  date: '2023-04',
},
  
    // Hackathon projects
  {
  id: 'street-supply',
  title: 'StreetSupply',
  description:
    'Hackathon project for street food sellers addressing raw material procurement challenges with location-based vendor display, supplier-vendor-admin dashboards, and Razorpay payment integration. Built using MERN stack, Redis, Docker, and ShadCN UI.',
  category: 'hackathon',
  tech: ['MongoDB', 'ExpressJs', 'ReactJS', 'NodeJs', 'Redis', 'Docker', 'ShadCN UI'],
  github: 'https://github.com/ByteNinjaSmit/web-hackathon',
  // github: 'https://github.com/maheshshinde9100/StreetSupplier-Hackathon',
  demo: 'https://streetsupplier.shop/',
  image: '/thumbnails/street-supply-thumbnail.png',
  award: 'Top 10 Finalist',
  date: '2024-05',
},
{
  id: 'neonquiz',
  title: 'NeonQuiz Application',
  description:
    'Hackathon project: Quiz application built using HTML, CSS, and JavaScript. Integrated Open Trivia DB API to generate quizzes based on user-selected categories and difficulty levels, with features like scorecard, result breakdown, and negative marking.',
  category: 'hackathon',
  tech: ['HTML', 'CSS', 'JavaScript', 'Open Trivia DB API'],
  github: 'https://github.com/maheshshinde9100/codespark-hackathon',
  demo: 'https://neonquiz.vercel.app/',
  image: '/thumbnails/neon-quiz-thumbnail.png',
  award: 'Best UI/UX',
  date: '2024-06',
},
{
  id: 'portfolio-v3',
  title: 'Portfolio 3.0',
  description:
    'Hackathon Project: Modern developer portfolio built with Next.js, TypeScript, Tailwind CSS, and ShadCN UI, featuring responsive design, dynamic project sections, and smooth animations.',
  category: 'hackathon',
  tech: ['Next.js', 'TypeScript', 'Tailwind CSS', 'ShadCN UI'],
  github: 'https://github.com/maheshshinde9100/Portfolio3.0',
  demo: 'https://maheshshinde-dev.vercel.app/',
  image: '/thumbnails/portfolio3.0-thumbnail.png',
  award: 'Top 3',
  date: '2025-09',
},

  // // Open source
// {
//   id: 'dev-helper-cli',
//   title: 'DevHelper CLI',
//   description:
//     'Open-source command-line tool that streamlines common developer tasks like project setup, dependency installation, and Git workflows.',
//   category: 'open-source',
//   tech: ['Node.js', 'JavaScript', 'CLI'],
//   github: '',
//   demo: null,
//   image: '/thumbnails/open-source.png',
//   date: '2024-09',
// },

  //client
  {
  id: 'sanjivani-blood-bank',
  title: 'Sanjivani Blood Bank',
  description:
    'Web-based blood bank management system to manage donor records, blood stock, and request processing. Features barcode-based registration, donor classification, and camp management. Currently under development.',
  category: 'client',
  tech: ['MERN Stack','Redux Toolkit','Tailwind CSS', 'Redis'],
  github: '',
  demo: null,
  image: '/thumbnails/sanjivani-blood-bank-thumbnail.png',
  date: '2025-06',
},
   {
  id: 'hotel-dhanlakshmi',
  title: 'Hotel Dhanlakshmi',
  description:
    'Comprehensive hotel management system for handling room bookings, guest check-ins, payments, and staff operations. Includes real-time availability tracking, admin dashboard, and customer reservation portal. Currently under development.',
  category: 'client',
  tech: ['React (Vite)', 'Tailwind CSS', 'MongoDB', 'MERN Stack'],
  github: '',
  demo: 'https://hoteldhanlakshmi.netlify.app/',
  image: '/thumbnails/hotel-dhanlakshmi-thumbnail.png',
  date: '2025-11',
}, 
   {
  id: 'learn-with-samarth',
  title: 'Learn With Samarth',
  description:'Built a MERN-based platform for an influencer to showcase their courses, coding notes, PDFs, and related documents in a clean and organized way.',
  category: 'client',
  tech: ['ReactJS', 'NodeJS', 'ExpressJS','MongoDB','JWT', 'BCrypt'],
  github: '',
  demo: '',
  image: '/thumbnails/learn-with-samarth-thumbnail.png',
  date: '2025-10',
},

   {
  id: 'smart-energy-portal',
  title: 'Smart Energy Portal',
  description:'A comprehensive energy management system that empowers users to track, analyze, and optimize their electricity consumption while providing administrators with powerful system-wide analytics and insights.',
  category: 'client',
  tech: ['ReactJS', 'NodeJS', 'ExpressJS','MongoDB','JWT', 'BCrypt'],
  github: 'https://github.com/maheshshinde9100/SmartEnergyPortal',
  demo: 'https://smart-energy-portal.vercel.app/',
  image: '/thumbnails/smart-energy-portal-thumbnail.png',
  date: '2025-10',
},

]
