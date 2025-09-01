'use client'

import React from 'react'
import PhotoCarousel from '@/components/ui/PhotoCarousel'
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
   Gamepad2

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
          <motion.h1 
            className="text-5xl md:text-7xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Hi, I'm{' '}
            <span className="text-gradient">Shilo </span>
          </motion.h1>
          
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
            
            <button className="border border-input bg-background hover:bg-accent hover:text-accent-foreground inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-11 rounded-md px-8">
              <Download className="mr-2 h-4 w-4" />
              Download Resume
            </button>
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
              { icon: Mail, href: 'mailto:contact@shilojeyaraj.com', label: 'Email' }
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

import { Layout, Server, Wrench, Cpu } from "lucide-react" // icons



const AboutSection = () => {
  const skills = [
    {
      icon: Layout,
      title: "Frontend Development",
      description:
        "HTML, CSS, JavaScript, React, Next.js, Tailwind, and Node.js tooling to ship clean, responsive UIs."
    },
    {
      icon: Server,
      title: "Backend Development",
      description:
        "Python, C++, SQL, REST APIs, Flask/Node.js, and data pipelines for scalable, secure services."
    },
    {
      icon: Wrench,
      title: "Mechanical & Hardware Engineering",
      description:
        "AutoCAD, SolidWorks, PCB design, circuit design, and machine shop tools for hardware integration."
    },
    {
      icon: Cpu,
      title: "AI Development & Robotics",
      description:
        "Python, TensorFlow, OpenCV, and ROS 2 for real-time AI, computer vision, and robotic systems."
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
        "Built and enhanced Normative’s internal site using Retool and JavaScript, improving usability for 30+ team members",
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
    {
      title: "Gym Posture Corrector (Real-Time Form Feedback)",
      description:
        "Real-time posture analysis using OpenCV/MediaPipe to extract skeletal keypoints and a TensorFlow classifier to distinguish good vs. bad exercise form. Flask + JS UI for instant feedback.",
      technologies: ["Python", "OpenCV", "MediaPipe", "TensorFlow", "Flask", "HTML/CSS", "JavaScript"],
      githubUrl: "https://github.com/shilojeyaraj/gym-motion-capture",
      featured: false,
      icon: Activity
    },
    {
      title: "Global Solar Panel Energy Calculator",
      description:
        "Web app that estimates annual solar output using NASA irradiance data. Python backend with a lightweight HTML/CSS front end; calculates per-panel output by location and panel efficiency.",
      technologies: ["Python", "Flask", "REST API", "JavaScript", "HTML/CSS"],
      githubUrl: "https://github.com/shilojeyaraj/solar-energy-calculator",
      featured: false,
      icon: Sun
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
      title: "Value Proposition Design (VPD) Prompt Optimization",
      description:
        "Python framework to benchmark and score prompt strategies for generating high-quality business proposals; integrates OpenAI models with an HTML interface.",
      technologies: ["Python", "OpenAI API", "Flask", "JavaScript", "Prompt Engineering"],
      githubUrl: "https://github.com/shilojeyaraj/VPD-proposal",
      featured: false,
      icon: Brain
    },
    {
      title: "AI GPS Voice Assistant",
      description:
        "Voice assistant for directions and POIs with real-time speech recognition/NLP and a Python backend.",
      technologies: ["Python", "Speech Recognition", "NLP", "Flask"],
      githubUrl: "https://github.com/shilojeyaraj/AI-Voice-assistant",
      featured: false,
      icon: Mic
    },
    {
      title: "ROS2 TurtleBot Wrapper / Autonomy Toolkit",
      description:
        "ROS2 modules for robot control, lidar/IMU/camera integration, and logging; supports rapid experimentation in autonomy pipelines.",
      technologies: ["ROS 2", "Python", "OpenCV", "Sensors (Lidar/IMU/Camera)"],
      githubUrl: "https://github.com/Taha-M567/toyota-hackathon",
      featured: false,
      icon: Bot
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
                className={`group relative overflow-hidden rounded-lg border bg-card text-card-foreground shadow-sm hover:shadow-md transition-all duration-300 ${
                  project.featured ? 'md:col-span-1' : ''
                }`}
              >
                {/* Icon header instead of image */}
                <div className="relative h-40 flex items-center justify-center bg-primary/5">
                  <div className="absolute top-4 left-4">
                    {project.featured && (
                      <div className="flex items-center bg-primary text-primary-foreground px-2 py-1 rounded-full text-xs font-medium">
                        <Star className="w-3 h-3 mr-1" />
                        Featured
                      </div>
                    )}
                  </div>

                  <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>

                  {/* Hover overlay with GitHub only */}
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="border border-input bg-background/90 hover:bg-accent hover:text-accent-foreground inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 h-9 px-3"
                      >
                        <Github className="w-4 h-4 mr-2" />
                        Code
                      </a>
                    )}
                  </div>
                </div>

                {/* Card body */}
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-muted-foreground mb-4 text-sm">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Optional inline GitHub link */}
                  {project.githubUrl && (
                    <div className="mt-4">
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-sm text-primary hover:underline"
                      >
                        <Github className="w-4 h-4 mr-2" />
                        View on GitHub
                      </a>
                    </div>
                  )}
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
                { icon: Mail, label: 'Email', value: 'shilojeyaraj@gmail.com' },
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
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              />
              <textarea
                placeholder="Your Message"
                rows={5}
                className="flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 resize-none"
              />
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-primary via-purple-500 to-pink-500 text-white hover:from-primary/90 hover:via-purple-500/90 hover:to-pink-500/90 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-10 px-4 py-2"
              >
                Send Message
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