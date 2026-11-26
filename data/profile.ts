export const profile = {
  name: 'Mahesh Shinde',
  initials: 'MS',
  role: 'Software developer',
  location: 'Nashik, Maharashtra, India',
  email: 'contact.shindemahesh2112@gmail.com',
  phone: '+91 9529544681',
  github: 'https://github.com/maheshshinde9100',
  linkedin: 'https://www.linkedin.com/in/maheshshinde9100',
  leetcode: 'https://leetcode.com/u/code-with-mahesh/',
  stackoverflow: 'https://stackoverflow.com/users/22119667/mahesh-shinde',
  hackerrank: 'https://www.hackerrank.com/profile/maheshshinde9100',
  gfg: 'https://www.geeksforgeeks.org/user/coder_mahi/',
  resume:
    'https://drive.google.com/file/d/1WPKyHXwK9AtDJpmVcaU7tnmnt4nsu7XW/view?usp=sharing',
  status: 'Open to backend and full-stack roles',
  tagline: 'I build backend systems and the interfaces that sit on top of them.',
  intro:
    'Full stack developer from Nashik, India. I work mostly in Java and Spring Boot, with React on the front end. I have shipped client projects, developer tools, and open source packages.',
  about: [
    'I am Mahesh, a full stack developer from Nashik. Most of my work starts on the server with Java and Spring Boot, then moves outward to React interfaces, Android apps, and the occasional ESP8266 board.',
    'I like systems that are easy to reason about: clear modules, secure APIs, and screens that do not make people stop and think. I have shipped for clients, maintained an open source UI kit, and deployed everything from a VPS behind Nginx to Vercel.',
  ],
}

export const stats = [
  { value: 416, suffix: '+', label: 'Problems solved' },
  { value: 28, suffix: '', label: 'Google Cloud badges' },
  { value: 30, suffix: '+', label: 'Projects built' },
  { value: 22, suffix: '', label: 'PRs merged as admin' },
]

export type Experience = {
  date: string
  role: string
  company: string
  detail: string
  tags: string[]
  href?: string
  highlight?: boolean
}

export const experiences: Experience[] = [
  {
    date: 'Dec 2025 to now',
    role: 'Backend Developer Intern',
    company: 'GolokaIT',
    detail:
      'Building full stack products with Spring Boot, React, and Spring Security. Delivered Fund For Bharat and deployed it to a Hostinger VPS behind Nginx and PM2.',
    tags: ['Spring Boot', 'React', 'Spring Security', 'Nginx'],
    highlight: true,
  },
  {
    date: '2026',
    role: 'Open Source Contributor and Project Admin',
    company: 'GirlScript Summer of Code (GSSoC 26)',
    detail:
      'Project Admin for MS-UI-KIT, where I reviewed and merged 22 pull requests from 11 contributors and kept the component library and release process moving. Also contributed fixes across several other repositories.',
    tags: ['Open source', 'Code review', 'Mentoring', 'React', 'npm'],
    href: 'https://github.com/maheshshinde9100/ms-ui-kit',
    highlight: true,
  },
  {
    date: '2025',
    role: 'Data Science Intern',
    company: 'Celebal Technologies (CEI)',
    detail:
      'Worked through an industry data science program with weekly graded assignments covering Python and machine learning basics.',
    tags: ['Python', 'Data science', 'Machine learning'],
  },
  {
    date: 'Jun 2023',
    role: 'Android Application Development',
    company: 'ATJOIN Pvt. Ltd',
    detail: 'Built, tested, and debugged Android applications with Java and the Android SDK.',
    tags: ['Android', 'Java', 'SDK'],
  },
  {
    date: 'Apr 2023',
    role: 'Web Development',
    company: 'CodeClause',
    detail: 'Worked on frontend and backend tasks across short project cycles.',
    tags: ['Frontend', 'Backend', 'Collaboration'],
  },
]

export type ToolkitGroup = { title: string; note: string; items: string[] }

export const toolkit: ToolkitGroup[] = [
  {
    title: 'Backend',
    note: 'Services, APIs, and security',
    items: [
      'Java',
      'Spring Boot',
      'Spring Security',
      'Spring Cloud',
      'Node.js',
      'Express.js',
      'REST APIs',
      'JWT',
      'Kafka',
    ],
  },
  {
    title: 'Frontend',
    note: 'Interfaces and design systems',
    items: [
      'React',
      'Next.js',
      'TypeScript',
      'Tailwind CSS',
      'Framer Motion',
      'Redux Toolkit',
      'Vite',
    ],
  },
  {
    title: 'Data and cloud',
    note: 'Storage, caching, and deployment',
    items: [
      'PostgreSQL',
      'MongoDB',
      'Redis',
      'Docker',
      'Google Cloud',
      'Firebase',
      'Nginx',
      'PM2',
      'Vercel',
    ],
  },
  {
    title: 'Systems and IoT',
    note: 'Hardware and realtime links',
    items: ['Android', 'ESP8266', 'MQTT', 'WebSockets', 'WebRTC', 'Python', 'OpenCV'],
  },
]

export const marqueeSkills = [
  'Java',
  'Spring Boot',
  'React',
  'TypeScript',
  'PostgreSQL',
  'MongoDB',
  'Redis',
  'Kafka',
  'Docker',
  'Next.js',
  'Spring Security',
  'Google Cloud',
]

export type Achievement = {
  title: string
  org: string
  metric: string
  detail: string
  href?: string
  icon: 'code' | 'cloud' | 'trophy' | 'git' | 'cap' | 'award'
}

export const achievements: Achievement[] = [
  {
    title: 'Open source contributor and Project Admin',
    org: 'GSSoC 26',
    metric: '22 PRs merged',
    detail:
      'Project Admin for MS-UI-KIT, reviewing and merging 22 pull requests from 11 contributors, plus merged fixes across DailyForge, TermUI, RestroHub, and more.',
    href: 'https://github.com/maheshshinde9100/ms-ui-kit',
    icon: 'git',
  },
  {
    title: 'Problem solving across platforms',
    org: 'LeetCode and GeeksforGeeks',
    metric: '416+ solved',
    detail:
      '416+ data structures and algorithms problems solved with 167+ active days, backed by consistent contest and streak practice.',
    href: 'https://leetcode.com/u/code-with-mahesh/',
    icon: 'code',
  },
  {
    title: 'Google Cloud skill badges',
    org: 'Google Cloud',
    metric: '28 badges',
    detail:
      'Earned 28 Google Cloud skill badges across compute, storage, networking, and data, and published open lab walkthroughs for learners.',
    icon: 'cloud',
  },
  {
    title: 'Hackathon finalist',
    org: 'Web and product hackathons',
    metric: 'Top 3',
    detail:
      'Top 3 finish for Portfolio 3.0, Best UI and UX for NeonQuiz, and Top 10 finalist for StreetSupply across multiple national hackathons.',
    icon: 'trophy',
  },
  {
    title: 'Java and React certifications',
    org: 'HackerRank',
    metric: '2 certifications',
    detail:
      'Certified in Java basics and React basics, with a verified problem solving profile across the HackerRank platform.',
    href: 'https://www.hackerrank.com/profile/maheshshinde9100',
    icon: 'award',
  },
  {
    title: 'Full stack developer bootcamp',
    org: 'GeeksforGeeks',
    metric: 'Bootcamp + DSA',
    detail:
      'Completed the GeeksforGeeks full stack developer bootcamp alongside structured DSA problem solving practice.',
    href: 'https://www.geeksforgeeks.org/user/coder_mahi/',
    icon: 'cap',
  },
]

export type Certification = {
  title: string
  issuer: string
  href: string
}

export const certifications: Certification[] = [
  {
    title: 'Java Basics Certification',
    issuer: 'HackerRank',
    href: 'https://www.hackerrank.com/certificates/fa38c0acdfc0',
  },
  {
    title: 'React Basics Certification',
    issuer: 'HackerRank',
    href: 'https://www.hackerrank.com/certificates/297cc1647c35',
  },
  {
    title: 'Full Stack Developer Bootcamp',
    issuer: 'GeeksforGeeks',
    href: 'https://drive.google.com/file/d/1M0GjudjkREWMRi_x8DPWCTRK645vdUMO/view?usp=sharing',
  },
  {
    title: 'React Bootcamp Participation',
    issuer: 'LetsUpgrade',
    href: 'https://drive.google.com/file/d/1FYv4C24agNHho_iA6h2z_80uZCnwP8Qu/view?usp=sharing',
  },
  {
    title: 'Fullstack Instagram Clone Project',
    issuer: 'Udemy',
    href: 'https://drive.google.com/file/d/1RIqbglUwC8u5n_dGEZwAigQasHGiSAXB/view?usp=sharing',
  },
  {
    title: 'Foundations of UX Design',
    issuer: 'Coursera',
    href: 'https://drive.google.com/file/d/1TifJbwpdHqm6HF0bkMdTodBDRmO2US_R/view?usp=sharing',
  },
  {
    title: '28 Google Cloud Skill Badges',
    issuer: 'Google Cloud',
    href: 'https://www.cloudskillsboost.google/public_profiles/maheshshinde9100',
  },
]

export type Contribution = {
  repo: string
  owner: string
  summary: string
  ref: string
  href: string
}

export const contributions: Contribution[] = [
  {
    repo: 'MS-UI-KIT',
    owner: 'maheshshinde9100',
    summary: 'Project Admin for GSSoC 26. Reviewed and merged 22 PRs from 11 contributors.',
    ref: 'GSSoC 26',
    href: 'https://github.com/maheshshinde9100/ms-ui-kit',
  },
  {
    repo: 'client-encryption-java',
    owner: 'Mastercard',
    summary:
      'Fixed an AES and JWE charset bug that broke cross platform interoperability on encrypted payloads.',
    ref: 'PR #128',
    href: 'https://github.com/Mastercard/client-encryption-java/pull/128',
  },
  {
    repo: 'razorpay-java',
    owner: 'razorpay',
    summary:
      'Fixed response parsing failures in shaded builds through dynamic package resolution.',
    ref: 'PR #346',
    href: 'https://github.com/razorpay/razorpay-java/pull/346',
  },
  {
    repo: 'DailyForge',
    owner: 'open source',
    summary: 'Fixed a Task API response bug in the MERN productivity app.',
    ref: 'PR #1494',
    href: 'https://github.com/maheshshinde9100/DailyForge/pull/1494',
  },
  {
    repo: 'TermUI',
    owner: 'open source',
    summary: 'Added a TreeTable widget to the terminal UI framework.',
    ref: 'Issue #161',
    href: 'https://github.com/maheshshinde9100/TermUI/issues/161',
  },
  {
    repo: 'RestroHub',
    owner: 'open source',
    summary: 'Built the signup and login authentication flow.',
    ref: 'PR #109',
    href: 'https://github.com/maheshshinde9100/RestroHub/pull/109',
  },
]
