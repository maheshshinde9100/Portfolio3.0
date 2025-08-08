import type { Project } from '@/types/project'

export const allProjects: Project[] = [
  // Existing personal projects
  {
    id: 'insta-clone',
    title: 'Mini Fullstack Instagram Clone',
    description:
      'Fullstack Instagram clone: profiles, posts, follow/unfollow, comments with real-time updates.',
    category: 'personal',
    tech: ['ReactJS', 'Firebase', 'Tailwind CSS'],
    github: 'https://github.com/coder-mahi/fullstack-instagram-clone',
    demo: 'https://insta-clone-by-mahesh-shinde.netlify.app/',
    image: '/placeholder.svg?height=220&width=420',
    date: '2024-07',
  },
  {
    id: 'tasktracker',
    title: 'TaskTracker',
    description: 'Task management web app with lists, priorities, and progress tracking.',
    category: 'personal',
    tech: ['ReactJS', 'ExpressJs', 'NodeJs', 'MongoDB'],
    github: 'https://github.com/coder-mahi/TaskTracker',
    demo: null,
    image: '/placeholder.svg?height=220&width=420',
    date: '2023-10',
  },
  {
    id: 'mentor-app',
    title: 'Student Mentoring Application',
    description:
      'Android app connecting students with mentors: chat, scheduling, and progress tracking.',
    category: 'personal',
    tech: ['Android', 'Java'],
    github: 'https://github.com/coder-mahi/SanjivaniMentorMeet3',
    demo: null,
    image: '/placeholder.svg?height=220&width=420',
    date: '2023-06',
  },
  {
    id: 'portfolio-v2',
    title: 'Portfolio Website',
    description: 'Responsive portfolio showcasing projects and skills.',
    category: 'personal',
    tech: ['HTML', 'CSS', 'JavaScript'],
    github: 'https://github.com/coder-mahi/Portfolio2.0',
    demo: 'https://shindemaheshportfolio.netlify.app/',
    image: '/placeholder.svg?height=220&width=420',
    date: '2023-04',
  },

  // Hackathon projects (examples — replace with yours)
  {
    id: 'hackathon-ai-health',
    title: 'MediAssist AI',
    description:
      'Hackathon: AI triage assistant with symptom checker, risk scoring, and appointment routing.',
    category: 'hackathon',
    tech: ['ReactJS', 'NodeJs', 'ExpressJs', 'MongoDB'],
    github: 'https://github.com/coder-mahi/mediassist-ai',
    demo: null,
    image: '/placeholder.svg?height=220&width=420',
    award: 'Top 5 Finalist',
    date: '2024-11',
  },
  {
    id: 'hackathon-smart-city',
    title: 'CityPulse',
    description:
      'Hackathon: Smart city dashboard aggregating traffic, air quality, and emergency alerts in real time.',
    category: 'hackathon',
    tech: ['Next.js', 'Tailwind CSS', 'Firebase'],
    github: 'https://github.com/coder-mahi/citypulse',
    demo: null,
    image: '/placeholder.svg?height=220&width=420',
    award: 'Best UI/UX',
    date: '2024-08',
  },

  // Open source (example)
  {
    id: 'oss-ui-kit',
    title: 'Neon UI Kit',
    description:
      'Open-source neon-themed component kit with accessible primitives and Tailwind presets.',
    category: 'open-source',
    tech: ['ReactJS', 'Tailwind CSS'],
    github: 'https://github.com/coder-mahi/neon-ui-kit',
    demo: null,
    image: '/placeholder.svg?height=220&width=420',
    date: '2024-03',
  },
]
