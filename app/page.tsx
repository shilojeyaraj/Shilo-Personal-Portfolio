'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import PhotoCarousel from '@/components/ui/PhotoCarousel'
import { TypewriterEffectSmooth } from '@/components/ui/typewriter-effect'
import { motion } from 'framer-motion'
import { 
  Github, 
  Linkedin, 
  Mail, 
  ExternalLink, 
  Code, 
  Palette, 
  Zap,
  Download,
  ArrowRight,
  MapPin,
  Calendar,
  Star,
  Activity,
   Sun, 
   FileText, 
   Utensils, 
   Brain, 
   Mic, 
   Bot, 
   Gamepad2,
   Sparkles,
   GraduationCap,
   Trophy,
   Search

} from 'lucide-react'

// Hero Section
const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-purple-500/5" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.1),transparent_50%)]" />
      
      {/* Floating shapes */}
      <motion.div
        className="absolute top-20 left-10 w-20 h-20 bg-primary/10 rounded-full blur-xl"
        animate={{ y: [-20, 20, -20] }}
        transition={{ duration: 6, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-32 h-32 bg-purple-500/10 rounded-full blur-xl"
        animate={{ y: [20, -20, 20] }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      
      <div className="container mx-auto px-4 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-6 flex justify-center"
          >
            <div className="text-6xl md:text-8xl font-bold">
              <TypewriterEffectSmooth 
                words={[
                  {
                    text: "Hi,",
                    className: "text-white",
                  },
                  {
                    text: "I'm",
                    className: "text-white",
                  },
                  {
                    text: "Shilo",
                    className: "text-gradient",
                  },
                ]}
              />
            </div>
          </motion.div>
          
          <motion.p 
            className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            I am a Mechatronics Engineering Student passionate in software development and robotics, along with creating innovative 
            digital experiences with modern technologies and AI.
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            
            <a 
              href="/me/resume.pdf" 
              download="Shilo_Jeyaraj_Resume.pdf"
              className="border border-input bg-background hover:bg-accent hover:text-accent-foreground inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 h-11 px-8"
            >
              <Download className="mr-2 h-4 w-4" />
              Download Resume
            </a>
          </motion.div>
          
          {/* Social Links */}
          <motion.div 
            className="flex justify-center space-x-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            {[
              { icon: Github, href: 'https://github.com/shilojeyaraj', label: 'GitHub' },
              { icon: Linkedin, href: 'https://linkedin.com/in/shilo-jeyaraj', label: 'LinkedIn' },
              { icon: Mail, href: 'mailto:stjeyara@uwaterloo.ca', label: 'Email' }
            ].map(({ icon: Icon, href, label }) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors duration-200 p-3 rounded-full hover:bg-primary/10"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Icon size={24} />
                <span className="sr-only">{label}</span>
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
        
        {/* Scroll indicator */}
        
      </div>
    </section>
  )
}

// About Section

import { Layout, Server, Wrench, Cpu, Cloud, Database } from "lucide-react" // icons



const AboutSection = () => {
  const skills = [
    {
      icon: Code,
      title: "Languages & Frameworks",
      description:
        "Python, TypeScript, JavaScript, SQL, Java, C/C++, HTML/CSS, Bash. React, Next.js, Node.js, FastAPI, Flask, TensorFlow, PyTorch, Pandas, NumPy, Tailwind CSS, Framer Motion, OpenCV, MediaPipe, OCR."
    },
    {
      icon: Cloud,
      title: "Cloud Infrastructure & DevOps",
      description:
        "Google Cloud Platform (Vertex AI, BigQuery, Cloud Run), AWS, Docker, PostgreSQL, Supabase, Git, Linux, Elasticsearch, MongoDB, WebSockets, Cloudflare."
    },
    {
      icon: Brain,
      title: "AI & Data Tools",
      description:
        "OpenAI API, LangChain, Google Gemini, Pgvector, Vertex AI SDKs, Claude Code, Cursor, Vector Embeddings, Fivetran, REST APIs, ROS 2."
    },
    {
      icon: Wrench,
      title: "Mechanical & Hardware Engineering",
      description:
        "AutoCAD, SolidWorks, PCB design, circuit design, and machine shop tools for hardware integration."
    }
  ]

  return (
    <section id="about" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">

        {/* About Me Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">About Me</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            I'm a Mechatronics Engineering student at the University of Waterloo with a strong
            foundation in engineering principles and hands-on project design. My passion lies in
            software engineering, where I focus on creating automation systems, AI-driven
            applications, and scalable web solutions that bring real-world impact.
          </p>
        </motion.div>

        {/* My Journey Section */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-3xl font-semibold mb-6">My Journey</h3>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Through leadership roles and extracurricular activities, I’ve learned how to work
                across teams and lead projects from concept to completion. My experience spans
                full-stack development, AI/robotics, and mechanical design — giving me a unique
                perspective at the intersection of hardware and software.
              </p>
              <p>
                I’m motivated by the challenge of solving complex problems through thoughtful
                design and clean, efficient code. My long-term goal is to grow as a software
                engineer, working on impactful projects in automation, intelligent systems, and
                innovative digital platforms.
              </p>
              <p>
                Outside academics, I enjoy staying active through weight training and basketball,
                diving into books that expand my perspective, and traveling with my family to
                experience new cultures. These interests keep me balanced, creative, and constantly
                inspired.
              </p>
            </div>
          </motion.div>

<motion.div
  initial={{ opacity: 0, x: 30 }}
  whileInView={{ opacity: 1, x: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.8 }}
>
  <PhotoCarousel
    images={[
      '/me/Normative.png',   // not 'public/me/Normative.PNG'
      '/me/hackathon.jpg',   // not 'public/me/hackathon.JPG'
      '/me/Basketball.png',
      '/me/Grand_canyon.png'
    ]}
    className="rounded-2xl"
    rounded="rounded-2xl"
  />
</motion.div>
        </div>

        {/* Skills Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Skills</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A blend of frontend, backend, hardware, and AI expertise developed through
            projects, internships, and hands-on engineering work.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.15 }}
              className="rounded-lg border bg-card text-card-foreground shadow-sm hover:shadow-md transition-all duration-300 p-6 text-center hover:scale-105"
            >
              <div className="flex justify-center mb-4">
                <div className="p-3 bg-primary/10 rounded-full">
                  <skill.icon className="w-8 h-8 text-primary" />
                </div>
              </div>
              <h4 className="text-xl font-semibold mb-2">{skill.title}</h4>
              <p className="text-muted-foreground text-sm">{skill.description}</p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}




// Experience Section
const ExperienceSection = () => {
  const experiences = [
    {
      title: "Software Engineering Intern",
      company: "Friedmann AI",
      location: "Oakville, ON",
      duration: "Sep 2025 - Present",
      type: "Full-time",
      description: "Currently developing and testing AI-powered chatbot for customer support along with other product features.",
      achievements: [
        "Implemented complete Calendly integration and booking system with pre-filled forms, improving demo scheduling efficiency for 30+ potential clients",
        "Enhanced financial plan generator to meet FP Canada compliance requirements, developing a 1,200+ line prompt engineering system",
        "Built comprehensive advisor profile management system with API endpoints and settings UI, streamlining information management for financial advisors",
        "Created developer testing infrastructure including test signup endpoint and authentication bypass, reducing development workflow time by 75%",
        "Resolved critical UI/UX issues including CSP configurations, Stripe client initialization, and preload optimizations"
      ]
    },
        {
      title: "Software Engineer Intern",
      company: "Normative",
      location: "Toronto, ON (Remote)",
      duration: "Jan 2025 – Apr 2025",
      type: "Internship",
      description:
        "Contributed to full-stack and AI development projects, enhancing internal tools and building AI-powered document processing systems.",
      achievements: [
        "Built and enhanced Freedman's internal site using Retool and JavaScript, improving usability for 30+ team members",
        "Created an OCR-based document processing system with Python backend and HTML/CSS frontend, improving text recognition accuracy of scanned PDFs by 75%",
        "Developed and tested AI-driven business proposal generation using reinforcement learning and Python, optimizing proposal quality and reducing editing time"
      ]
    },
    {
      title: "Autonomy Team Member",
      company: "Waterloo Aerial Robotics Group (WARG)",
      location: "Waterloo, ON",
      duration: "May 2025 – Present",
      type: "Extracurricular",
      description:
        "Working on the autonomy team to advance drone navigation and perception systems using Python and machine learning.",
      achievements: [
        "Developing computer vision pipelines with Python and ML models to increase drone navigation accuracy",
        "Optimizing autonomy algorithms for object detection, landing precision, and flight stability",
        "Collaborating with a multidisciplinary team to integrate autonomy modules into larger UAV systems"
      ]
    },
      {
      title: "Electrical Team Member",
      company: "University of Waterloo Baja SAE Design Team",
      location: "Waterloo, ON",
      duration: "May 2025 – August 2025",
      type: "Extracurricular",
      description:
        "Supported the design and optimization of electrical systems for an off-road vehicle in a competitive engineering design team.",
      achievements: [
        "Boosted circuit reliability by 30% through low-voltage system design and simulation",
        "Designed custom PCBs to regulate and protect internal components, reducing voltage issues by 45%",
        "Enhanced performance analysis by 25% by integrating data acquisition with accelerometers, RPM sensors, and strain gauges"
      ]
    }
  ]
  

  return (
    <section id="experience" className="py-20 bg-background">
      <div className="container mx-auto px-4 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Professional Experience</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            My journey through various roles and teams, building impactful digital experiences
          </p>
        </motion.div>

        <div className="space-y-8">
          {experiences.map((experience, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="rounded-lg border bg-card text-card-foreground shadow-sm hover:shadow-md transition-all duration-300 p-6 hover:scale-[1.02]"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-1">{experience.title}</h3>
                  <p className="text-lg text-primary font-medium mb-2">{experience.company}</p>
                  <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {experience.duration}
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      {experience.location}
                    </div>
                    <div className="flex items-center gap-1">
                      <div className="w-4 h-4 flex items-center justify-center">
                        <div className={`w-2 h-2 rounded-full ${experience.type === 'Internship' ? 'bg-yellow-500' : 'bg-green-500'}`} />
                      </div>
                      {experience.type}
                    </div>
                  </div>
                </div>
              </div>

              <p className="text-muted-foreground mb-4">{experience.description}</p>

              {experience.achievements && (
                <div>
                  <h4 className="font-medium mb-2">Key Achievements:</h4>
                  <ul className="space-y-1">
                    {experience.achievements.map((achievement, achievementIndex) => (
                      <li key={achievementIndex} className="text-sm text-muted-foreground flex items-start gap-2">
                        <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

// Projects Section
const ProjectsSection = () => {
  const projects = [
    // Published projects (with deployed links) - at the top
    {
      title: "Brain Battle - Interactive Quizzing and Study Platform",
      description:
        "Production-ready platform for competitive brain training with real-time multiplayer capabilities. Features WebSocket-based live gameplay, dynamic scoring algorithms, and diverse question categories. Built with scalable microservices architecture, persistent leaderboards, and responsive design for engaging user experience.",
      technologies: ["React", "Next.js", "TypeScript", "Node.js", "WebSockets", "PostgreSQL", "Supabase", "OpenAI API", "Tailwind CSS", "Framer Motion", "Vercel"],
      githubUrl: "https://github.com/shilojeyaraj/Brain-Battle",
      projectUrl: "https://brain-battle.app",
      featured: false,
      icon: Trophy,
      imageUrl: "/projectimages/Brain-Battle-logo.png"
    },
    {
      title: "Dermalens - AI-Powered Skincare Analysis",
      description:
        "Production-ready platform leveraging Gemini API for medical-grade skin analysis, Elasticsearch for intelligent recommendations, and real-time data pipelines. Features multi-angle facial scanning, personalized routines, and scalable microservices architecture on Google Cloud Platform.",
      technologies: ["Next.js", "TypeScript", "FastAPI", "Python", "Gemini API", "Elasticsearch", "Fivetran", "Supabase", "GCP", "BigQuery", "Vertex AI", "Tailwind CSS", "Radix UI", "Docker", "Vercel"],
      githubUrl: "https://github.com/shilojeyaraj/Dermalens",
      projectUrl: "https://dermalens.vercel.app",
      featured: true,
      icon: Search,
      imageUrl: "/projectimages/dermalens-logo.png"
    },
    {
      title: "Coursely - Waterloo Elective Advisor",
      description:
        "AI-powered platform helping engineering students choose electives through personalized recommendations. Built with Next.js, GPT-4o-mini, and RAG architecture featuring vector semantic search across 284+ courses. Includes natural language chat interface and intelligent course matching based on student profiles and career goals.",
      technologies: ["React", "Next.js", "TypeScript", "OpenAI", "LangChain", "RAG", "PostgreSQL", "Supabase", "pgvector", "Python", "Tailwind CSS"],
      githubUrl: "https://github.com/shilojeyaraj/Elective-chooser",
      projectUrl: "https://uwaterloo-course-chats.vercel.app",
      featured: true,
      icon: GraduationCap,
      imageUrl: "/projectimages/coursely-logo.jpg"
    },
    {
      title: "Mid Chats - AI-Powered Chat Application",
      description:
        "Fully functioning personal chat application with real-time messaging capabilities. Features personal info storage for resume and cover letter building, along with comprehensive \"study mode\" function, intelligent conversation handling, message history, and seamless user experience. Built with modern full-stack technologies for scalable and responsive communication.",
      technologies: ["Next.js", "TypeScript", "React", "Node.js", "FastAPI", "Python", "WebSockets", "PostgreSQL", "Supabase", "Tailwind CSS"],
      githubUrl: "https://github.com/shilojeyaraj/Shilo-chat",
      projectUrl: "https://shilo-chat.vercel.app",
      featured: false,
      icon: Sparkles,
      imageUrl: "/projectimages/Gemini_Generated_Image_57sanv57sanv57sa.png"
    },
    {
      title: "Global Solar Panel Energy Calculator",
      description:
        "Web app that estimates annual solar output using NASA irradiance data. Python backend with a lightweight HTML/CSS front end; calculates per-panel output by location and panel efficiency.",
      technologies: ["Python", "Flask", "REST API", "JavaScript", "HTML/CSS"],
      githubUrl: "https://github.com/shilojeyaraj/solar-energy-calculator",
      projectUrl: "https://solar-energy-calculator.vercel.app",
      featured: false,
      icon: Sun,
      imageUrl: "/projectimages/solar-ai.png"
    },
    // Other projects (without deployed links) - at the bottom
    {
      title: "Gym Posture Corrector (Real-Time Form Feedback)",
      description:
        "Real-time posture analysis using OpenCV/MediaPipe to extract skeletal keypoints and a TensorFlow classifier to distinguish good vs. bad exercise form. Flask + JS UI for instant feedback.",
      technologies: ["Python", "OpenCV", "MediaPipe", "TensorFlow", "Flask", "HTML/CSS", "JavaScript"],
      githubUrl: "https://github.com/shilojeyaraj/gym-motion-capture",
      featured: false,
      icon: Activity,
      imageUrl: "/projectimages/gym-opencv-logo.jpg"
    },
    {
      title: "OCR Image Scanner / Medical Document Analyzer",
      description:
        "OCR pipeline with Python + OpenAI APIs to extract structured info from scanned PDFs; front end in HTML/CSS for quick review and export.",
      technologies: ["Python", "OpenAI API", "OCR", "Flask", "HTML/CSS"],
      githubUrl: "https://github.com/shilojeyaraj/normativemxocr",
      featured: false,
      icon: FileText
    },
    {
      title: "Nutrition/Fitness Plan Builder",
      description:
        "Generates tailored workout + meal plans based on user goals and restrictions. Gemini API prompts via Flask backend with a simple web UI.",
      technologies: ["Python", "Flask", "Gemini API", "HTML/CSS", "JavaScript"],
      githubUrl: "https://github.com/shilojeyaraj/Fitness-plan-maker",
      featured: false,
      icon: Utensils
    },
    {
      title: "Tic Tac Toe Playing VEX Robot",
      description:
        "A VEX robot capable of playing Tic Tac Toe against human opponents. Used computer vision to recognize game board states and mechanical systems for piece placement. Demonstrated integration of robotics, computer vision, and game theory algorithms.",
      technologies: ["C++", "VEX", "Robot C", "Computer Vision"],
      githubUrl: "https://github.com/behzadwaseem/Tic-Tac-Tron",
      featured: false,
      icon: Gamepad2
    }
  ]

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Featured Projects</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills and passion for development.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => {
            const Icon = project.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className={`group relative overflow-hidden rounded-lg border bg-card text-card-foreground shadow-sm hover:shadow-md transition-all duration-300 flex flex-col ${
                  project.featured ? 'md:col-span-1' : ''
                }`}
              >
                {/* Project image/logo header */}
                <div className={`relative h-48 md:h-56 flex items-center justify-center overflow-hidden group/image ${
                  project.imageUrl 
                    ? project.title.includes('Brain Battle') 
                      ? 'bg-[#0D1137]' 
                      : project.title.includes('Dermalens')
                        ? 'bg-gradient-to-br from-[#F0FFF4] via-[#D1FAE5] to-[#A7F3D0]'
                        : project.title.includes('Solar')
                          ? 'bg-gradient-to-br from-[#0D1B2A] via-[#2A52BE] to-[#8A2BE2]'
                          : 'bg-white'
                    : 'bg-primary/5'
                }`}>

                  {project.imageUrl ? (
                    <div className={`relative w-full h-full flex items-center justify-center ${
                      project.title.includes('Dermalens') ? 'p-0' : 'p-4'
                    }`}>
                      <Image
                        src={project.imageUrl}
                        alt={project.title}
                        fill
className={`${
                           project.title.includes('Dermalens') ? 'object-contain scale-[3.25]' : 
                            project.title.includes('Solar') ? 'object-cover scale-150' : 'object-contain'
                          }`}
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                    </div>
                  ) : (
                    <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center">
                      <Icon className="w-8 h-8 text-primary" />
                    </div>
                  )}

                  {/* Hover overlay with View Live button */}
                  {(project.title.includes('Brain Battle') || 
                    project.title.includes('Dermalens') || 
                    project.title.includes('Coursely') || 
                    project.title.includes('Mid Chats')) && project.projectUrl ? (
                    <div className="absolute inset-0 bg-black/70 opacity-0 group-hover/image:opacity-100 transition-opacity duration-300 flex items-center justify-center z-10">
                      <a
                        href={project.projectUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 bg-gradient-to-r from-primary via-purple-500 to-pink-500 text-white hover:from-primary/90 hover:via-purple-500/90 hover:to-pink-500/90 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 h-10 px-6"
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        View Live
                      </a>
                    </div>
                  ) : null}
                </div>

                {/* Card body */}
                <div className="p-4 flex flex-col flex-1">
                  <h3 className="text-xl font-semibold mb-1.5">{project.title}</h3>
                  <p className="text-muted-foreground mb-3 text-sm">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action buttons at the bottom */}
                  <div className="mt-auto flex flex-col sm:flex-row gap-2">
                    {project.projectUrl && (
                      <a
                        href={project.projectUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 bg-gradient-to-r from-primary via-purple-500 to-pink-500 text-white hover:from-primary/90 hover:via-purple-500/90 hover:to-pink-500/90 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 h-9 px-4"
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        View Live
                      </a>
                    )}
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-9 px-4 ${
                          project.projectUrl ? 'flex-1' : 'w-full'
                        }`}
                      >
                        <Github className="w-4 h-4 mr-2" />
                        View on GitHub
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

// Contact Section
const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<{ type: 'success' | 'error' | null; message: string }>({ type: null, message: '' })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
    // Clear status when user starts typing
    if (submitStatus.type) {
      setSubmitStatus({ type: null, message: '' })
    }
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus({ type: null, message: '' })

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (response.ok) {
        setSubmitStatus({ type: 'success', message: data.message || 'Message sent successfully!' })
        setFormData({ name: '', email: '', message: '' })
      } else {
        setSubmitStatus({ type: 'error', message: data.error || 'Failed to send message. Please try again.' })
      }
    } catch (error) {
      setSubmitStatus({ type: 'error', message: 'Failed to send message. Please try again.' })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Get In Touch</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            I'm always open to discussing new opportunities and interesting projects. 
            Let's connect and create something amazing together.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-2xl font-semibold mb-6">Let's Connect</h3>
            <p className="text-muted-foreground mb-8">
              Whether you have a project in mind, want to collaborate, or just want to say hello, 
              I'd love to hear from you.
            </p>
            
            <div className="space-y-6">
              {[
                { icon: Mail, label: 'Email', value: 'stjeyara@uwaterloo.ca' },
                { icon: MapPin, label: 'Location', value: 'Available for remote work and willing to relocate' },
                { icon: Calendar, label: 'Availability', value: 'Open to new opportunities' }
              ].map(({ icon: Icon, label, value }) => (
                <div key={label} className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold">{label}</h4>
                    <p className="text-muted-foreground">{value}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="rounded-lg border bg-card text-card-foreground shadow-sm hover:shadow-md transition-all duration-300 p-6"
          >
            <h3 className="text-xl font-semibold mb-6">Send a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                required
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email"
                required
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              />
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message"
                rows={5}
                required
                className="flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 resize-none"
              />
              {submitStatus.type && (
                <div className={`p-3 rounded-md text-sm ${
                  submitStatus.type === 'success' 
                    ? 'bg-green-500/10 text-green-500 border border-green-500/20' 
                    : 'bg-red-500/10 text-red-500 border border-red-500/20'
                }`}>
                  {submitStatus.message}
                </div>
              )}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-primary via-purple-500 to-pink-500 text-white hover:from-primary/90 hover:via-purple-500/90 hover:to-pink-500/90 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-10 px-4 py-2"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

// Navigation
const Navigation = () => {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="fixed top-0 w-full z-50 glass backdrop-blur-md border-b border-white/10"
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="font-bold text-xl text-gradient">ShiloJeyaraj.com</div>
          
          <div className="hidden md:flex space-x-8">
            {['About', 'Experience', 'Projects', 'Contact'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-muted-foreground hover:text-foreground transition-colors duration-200"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </motion.nav>
  )
}

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <ExperienceSection />
      <ProjectsSection />
      <ContactSection />
    </main>
  )
} 