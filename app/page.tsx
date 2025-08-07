'use client'

import { useState, useEffect } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Progress } from '@/components/ui/progress'
import { Github, Linkedin, Mail, Phone, MapPin, ExternalLink, Code, Briefcase, Award, User, ChevronDown, Star, Calendar, Download } from 'lucide-react'

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState('hero')
  const { scrollYProgress } = useScroll()
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%'])

  const skills = [
    { name: 'HTML', level: 95, color: 'from-orange-500 to-red-500' },
    { name: 'CSS', level: 90, color: 'from-blue-500 to-cyan-500' },
    { name: 'JavaScript', level: 85, color: 'from-yellow-500 to-orange-500' },
    { name: 'ReactJS', level: 80, color: 'from-cyan-500 to-blue-500' },
    { name: 'Java', level: 90, color: 'from-red-500 to-orange-500' },
    { name: 'C++', level: 85, color: 'from-purple-500 to-pink-500' },
    { name: 'SQL', level: 85, color: 'from-green-500 to-teal-500' },
    { name: 'Python', level: 80, color: 'from-green-500 to-blue-500' },
    { name: 'MongoDB', level: 75, color: 'from-green-600 to-green-400' },
    { name: 'Firebase', level: 80, color: 'from-yellow-500 to-red-500' }
  ]

  const projects = [
    {
      title: 'Mini Fullstack Instagram Clone',
      description: 'Developed Fullstack Instagram clone with features like creating profile, adding posts, follow/unfollow users and comments on posts',
      tech: ['ReactJS', 'Firebase', 'Tailwind CSS'],
      github: 'https://github.com/coder-mahi/fullstack-instagram-clone',
      demo: 'https://insta-clone-by-mahesh-shinde.netlify.app/',
      image: '/placeholder.svg?height=200&width=400'
    },
    {
      title: 'TaskTracker',
      description: 'Fullstack web-based Task-Management Application',
      tech: ['ReactJS', 'ExpressJs', 'NodeJs', 'MongoDB'],
      github: 'https://github.com/coder-mahi/TaskTracker',
      demo: null,
      image: '/placeholder.svg?height=200&width=400'
    },
    {
      title: 'Student Mentoring Application',
      description: 'Android application to connect students with mentors, featuring chat, scheduling, and progress tracking',
      tech: ['Android', 'Java'],
      github: 'https://github.com/coder-mahi/SanjivaniMentorMeet3',
      demo: null,
      image: '/placeholder.svg?height=200&width=400'
    },
    {
      title: 'Portfolio Website',
      description: 'Portfolio website showcasing projects and skills with responsive design',
      tech: ['HTML', 'CSS', 'JavaScript'],
      github: 'https://github.com/coder-mahi/Portfolio2.0',
      demo: 'https://shindemaheshportfolio.netlify.app/',
      image: '/placeholder.svg?height=200&width=400'
    }
  ]

  const experiences = [
    {
      title: 'Android Application Development',
      company: 'ATJOIN Pvt. Ltd',
      duration: 'June 2023',
      description: 'Focused on developing and maintaining Android applications. Enhanced skills in Java and Android SDK. Gained experience in debugging and testing Android apps.',
      type: 'Internship'
    },
    {
      title: 'Web Development',
      company: 'CodeClause',
      duration: 'April 2023',
      description: 'Worked on both front-end and back-end development projects. Developed skills in front-end development with HTML/CSS, JavaScript. Gained experience in collaboration and project development.',
      type: 'Internship'
    },
    {
      title: 'Basics of ML with Python',
      company: 'BeyonDegree Pvt. Ltd',
      duration: 'May 2022',
      description: 'Gained foundational knowledge in Machine Learning using Python. Learned essential ML concepts and techniques. Worked with Python libraries: NumPy, pandas, Matplotlib.',
      type: 'Internship'
    }
  ]

  const achievements = [
    { title: 'LeetCode 50 Day Streak Badge', platform: 'LeetCode' },
    { title: 'LeetCode 100 Problems Solved Badge', platform: 'LeetCode' },
    { title: 'Java Basics Certification', platform: 'HackerRank' },
    { title: 'React Basics Certification', platform: 'HackerRank' },
    { title: 'Full Stack Developer Bootcamp', platform: 'GeeksforGeeks' },
    { title: 'UX Design Foundations', platform: 'Coursera' }
  ]

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'skills', 'experience', 'projects', 'achievements', 'contact']
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-violet-900 text-white overflow-x-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-cyan-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
        <div className="absolute top-40 left-40 w-80 h-80 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-4000"></div>
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-md border-b border-white/10">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent"
            >
              Mahesh Shinde
            </motion.div>
            <div className="hidden md:flex space-x-8">
              {['About', 'Skills', 'Experience', 'Projects', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`transition-colors hover:text-cyan-400 ${
                    activeSection === item.toLowerCase() ? 'text-cyan-400' : 'text-white/70'
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="min-h-screen flex items-center justify-center relative">
        <motion.div
          style={{ y }}
          className="text-center z-10"
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <div className="w-32 h-32 mx-auto mb-8 rounded-full bg-gradient-to-r from-cyan-400 to-purple-400 p-1">
              <div className="w-full h-full rounded-full bg-gray-900 flex items-center justify-center">
                <User className="w-16 h-16 text-cyan-400" />
              </div>
            </div>
            <h1 className="text-6xl md:text-8xl font-bold mb-4 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Mahesh Shinde
            </h1>
            <p className="text-xl md:text-2xl text-white/80 mb-8">
              Full-Stack Developer • Android Developer • Java Developer
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <Badge variant="outline" className="border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black transition-colors">
                ReactJS
              </Badge>
              <Badge variant="outline" className="border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-black transition-colors">
                Java
              </Badge>
              <Badge variant="outline" className="border-pink-400 text-pink-400 hover:bg-pink-400 hover:text-black transition-colors">
                Android
              </Badge>
              <Badge variant="outline" className="border-green-400 text-green-400 hover:bg-green-400 hover:text-black transition-colors">
                MongoDB
              </Badge>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            <Button
              onClick={() => scrollToSection('contact')}
              className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105"
            >
              Get In Touch
            </Button>
            <Button
              variant="outline"
              className="border-white/30 text-white hover:bg-white hover:text-black px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105"
              onClick={() => window.open('https://maheshshinde9100.hackerresume.io/cdbe784f-7325-4ca3-a047-9a2c4ec314cc', '_blank')}
            >
              <Download className="w-4 h-4 mr-2" />
              Resume
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex justify-center space-x-6"
          >
            {[
              { icon: Github, url: 'https://github.com/maheshshinde9100' },
              { icon: Linkedin, url: 'https://www.linkedin.com/in/maheshshinde9100' },
              { icon: Mail, url: 'mailto:contact.shindemahesh2112@gmail.com' }
            ].map(({ icon: Icon, url }, index) => (
              <motion.a
                key={index}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center hover:bg-white/20 transition-all duration-300"
              >
                <Icon className="w-6 h-6" />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <ChevronDown className="w-8 h-8 text-white/50" />
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 relative">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              About Me
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card className="bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10 transition-all duration-300">
                <CardContent className="p-8">
                  <p className="text-lg text-white/80 leading-relaxed mb-6">
                    I am a passionate Full Stack Developer with a strong foundation in both frontend and backend technologies. 
                    My journey in web development began during my college years, and I have since honed my skills through various projects and internships.
                  </p>
                  <p className="text-lg text-white/80 leading-relaxed mb-6">
                    I specialize in creating responsive, user-friendly web applications using modern technologies like React, Node.js, and MongoDB. 
                    I am also proficient in Java and have experience in Android development.
                  </p>
                  <p className="text-lg text-white/80 leading-relaxed">
                    When I'm not coding, I enjoy solving DSA problems on platforms like LeetCode and GeeksforGeeks, 
                    which helps me improve my problem-solving skills and algorithmic thinking.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="flex items-center space-x-4">
                <MapPin className="w-6 h-6 text-cyan-400" />
                <span className="text-white/80">Yeola, Maharashtra, India</span>
              </div>
              <div className="flex items-center space-x-4">
                <Mail className="w-6 h-6 text-purple-400" />
                <span className="text-white/80">contact.shindemahesh2112@gmail.com</span>
              </div>
              <div className="flex items-center space-x-4">
                <Phone className="w-6 h-6 text-pink-400" />
                <span className="text-white/80">+91 9529544681</span>
              </div>
              
              <div className="pt-6">
                <h3 className="text-xl font-semibold mb-4 text-cyan-400">Quick Stats</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-4 bg-white/5 rounded-lg border border-white/10">
                    <div className="text-2xl font-bold text-purple-400">167+</div>
                    <div className="text-sm text-white/60">LeetCode Days</div>
                  </div>
                  <div className="text-center p-4 bg-white/5 rounded-lg border border-white/10">
                    <div className="text-2xl font-bold text-cyan-400">100+</div>
                    <div className="text-sm text-white/60">Problems Solved</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 relative">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Skills & Technologies
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10 transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex justify-between items-center mb-3">
                      <span className="text-lg font-semibold">{skill.name}</span>
                      <span className="text-sm text-white/60">{skill.level}%</span>
                    </div>
                    <div className="relative">
                      <Progress value={skill.level} className="h-3 bg-white/10" />
                      <div 
                        className={`absolute top-0 left-0 h-3 rounded-full bg-gradient-to-r ${skill.color} transition-all duration-1000 ease-out`}
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 relative">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Experience
            </h2>
          </motion.div>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10 transition-all duration-300">
                  <CardHeader>
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                      <div>
                        <CardTitle className="text-xl text-cyan-400 mb-2">{exp.title}</CardTitle>
                        <CardDescription className="text-white/60 flex items-center">
                          <Briefcase className="w-4 h-4 mr-2" />
                          {exp.company} • {exp.type}
                        </CardDescription>
                      </div>
                      <div className="flex items-center text-purple-400 mt-2 md:mt-0">
                        <Calendar className="w-4 h-4 mr-2" />
                        {exp.duration}
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-white/80 leading-relaxed">{exp.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 relative">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Featured Projects
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10 transition-all duration-300 h-full">
                  <div className="aspect-video overflow-hidden rounded-t-lg">
                    <img 
                      src={project.image || "/placeholder.svg"} 
                      alt={project.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <CardHeader>
                    <CardTitle className="text-xl text-cyan-400">{project.title}</CardTitle>
                    <CardDescription className="text-white/80 leading-relaxed">
                      {project.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((tech, techIndex) => (
                        <Badge 
                          key={techIndex} 
                          variant="outline" 
                          className="border-purple-400/50 text-purple-400 hover:bg-purple-400 hover:text-black transition-colors"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex space-x-4">
                      <Button
                        variant="outline"
                        size="sm"
                        className="border-cyan-400/50 text-cyan-400 hover:bg-cyan-400 hover:text-black transition-colors"
                        onClick={() => window.open(project.github, '_blank')}
                      >
                        <Github className="w-4 h-4 mr-2" />
                        Code
                      </Button>
                      {project.demo && (
                        <Button
                          variant="outline"
                          size="sm"
                          className="border-purple-400/50 text-purple-400 hover:bg-purple-400 hover:text-black transition-colors"
                          onClick={() => window.open(project.demo, '_blank')}
                        >
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Demo
                        </Button>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section id="achievements" className="py-20 relative">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Achievements & Certifications
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10 transition-all duration-300 h-full">
                  <CardContent className="p-6 text-center">
                    <Award className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
                    <h3 className="text-lg font-semibold text-cyan-400 mb-2">{achievement.title}</h3>
                    <p className="text-white/60 text-sm">{achievement.platform}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 relative">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Let's Connect
            </h2>
            <p className="text-xl text-white/80 max-w-2xl mx-auto">
              Feel free to reach out to me for any inquiries, collaborations, or just to say hello. 
              I'm always open to new opportunities and connections.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="space-y-8"
              >
                <Card className="bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10 transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4 mb-4">
                      <Mail className="w-6 h-6 text-cyan-400" />
                      <div>
                        <h3 className="text-lg font-semibold text-cyan-400">Email</h3>
                        <p className="text-white/80">contact.shindemahesh2112@gmail.com</p>
                      </div>
                    </div>
                    <Button
                      className="w-full bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600"
                      onClick={() => window.open('mailto:contact.shindemahesh2112@gmail.com', '_blank')}
                    >
                      Send Email
                    </Button>
                  </CardContent>
                </Card>

                <Card className="bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10 transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4 mb-4">
                      <Phone className="w-6 h-6 text-purple-400" />
                      <div>
                        <h3 className="text-lg font-semibold text-purple-400">Phone</h3>
                        <p className="text-white/80">+91 9529544681</p>
                      </div>
                    </div>
                    <Button
                      variant="outline"
                      className="w-full border-purple-400/50 text-purple-400 hover:bg-purple-400 hover:text-black"
                      onClick={() => window.open('tel:+919529544681', '_blank')}
                    >
                      Call Now
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <Card className="bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10 transition-all duration-300">
                  <CardHeader>
                    <CardTitle className="text-xl text-cyan-400">Connect on Social Media</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {[
                      { name: 'GitHub', url: 'https://github.com/maheshshinde9100', icon: Github },
                      { name: 'LinkedIn', url: 'https://www.linkedin.com/in/maheshshinde9100', icon: Linkedin },
                      { name: 'LeetCode', url: 'https://leetcode.com/u/code-with-mahesh/', icon: Code },
                    ].map((social, index) => (
                      <Button
                        key={index}
                        variant="outline"
                        className="w-full justify-start border-white/20 text-white hover:bg-white hover:text-black transition-all duration-300"
                        onClick={() => window.open(social.url, '_blank')}
                      >
                        <social.icon className="w-5 h-5 mr-3" />
                        {social.name}
                        <ExternalLink className="w-4 h-4 ml-auto" />
                      </Button>
                    ))}
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-white/10 bg-black/20 backdrop-blur-sm">
        <div className="container mx-auto px-6 text-center">
          <p className="text-white/60">
            © 2025 Mahesh Shinde. All Rights Reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}
