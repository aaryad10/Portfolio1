import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import {
  Github,
  Linkedin,
  Mail,
  Terminal,
  Code2,
  Database,
  Server,
  Cpu,
  Laptop,
  ExternalLink,
  Phone,
  MapPin,
  Calendar,
  Building,
  GraduationCap,
  Briefcase,
  FileText,
} from 'lucide-react';

function App() {
  const navItems = [
    { title: 'About', to: 'about' },
    { title: 'Skills', to: 'skills' },
    { title: 'Education', to: 'education' },
    { title: 'Experience', to: 'experience' },
    { title: 'Projects', to: 'projects' },
    { title: 'Contact', to: 'contact' },
  ];

  const projects = [
    {
      title: 'Automatic Road Monitoring System',
      description:
        'Developed a model to locate potholes and cracks on road in order for accidence prevention',
      tech: ['Arduino', 'ML', 'Databases'],
      icon: <Terminal className="w-6 h-6" />,
      link: 'https://github.com/aaryad10/ARMS',
      date: '2024',
    },
    {
      title: 'Car Price Prediction',
      description:
        'Built a website which predicts sale price of cars based on different parameters entered by user.',
      tech: ['Python', 'ML', 'Data Handling'],
      icon: <Code2 className="w-6 h-6" />,
      link: 'https://github.com/aaryad10/Car_Price_Prediction_Project',
      date: '2024',
    },
    {
      title:
        'Non-invasive Diagnostic System for Blood Vessel Blockage and Tumor Detection',
      description:
        'Implemented a model which helps to detect tumor and blockages, and gives AI prediction for further actions.',
      tech: ['Arduino', 'ML', 'AI'],
      icon: <Database className="w-6 h-6" />,
      link: '#',
      date: '2025',
    },
  ];

  const skills = [
    {
      name: 'Hardware Programming (Arduino)',
      icon: <Server className="w-6 h-6" />,
      level: 85,
    },
    {
      name: 'Python',
      icon: <Cpu className="w-6 h-6" />,
      level: 75,
    },
    {
      name: 'SQL',
      icon: <Laptop className="w-6 h-6" />,
      level: 80,
    },
    {
      name: 'C programming',
      icon: <Laptop className="w-6 h-6" />,
      level: 65,
    },
    {
      name: 'Data Analytics',
      icon: <Laptop className="w-6 h-6" />,
      level: 90,
    },
  ];

  const education = [
    {
      degree: 'HSC',
      institution: 'Modern Jr. College',
      duration: '2022 - 2024',
      description: 'Science (PCM with CS)',
      achievements: ['84.5%', 'Maths score : 90/100'],
    },
    {
      degree: 'B.Tech Computer Science & Engineering (AI)',
      institution: 'Vishwakarma Institute of Technology',
      duration: '2024 - 2027',
      description:
        'Achieving expertise in AI & Data Analytics. Current CGPA: 8.63/10.0',
      achievements: ['5th place at innovation expo 2024.'],
    },
  ];

  const experience = [
    {
      role: 'ML with Python Intern',
      company: 'YHills EduTech',
      duration: 'May - Aug 2024',
      description: 'Developed a project in ML.',
      achievements: ['Contributed to open-source projects'],
    },
    {
      role: 'Python Developer Intern',
      company: 'Cognifyz Technologies',
      duration: 'Feb - March 2025',
      description: 'Different tasks of levels from Beginner to Advanced.',
    },
  ];

  const contactInfo = {
    email: 'deshpandeaarya56@gmail.com',
    phone: '+91 9320761875',
    location: 'Pune, India',
    github: 'https://github.com/aaryad10',
    linkedin: 'www.linkedin.com/in/aarya-d10',
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-gray-900/80 backdrop-blur-sm z-50">
        <div className="container mx-auto px-4 py-4">
          <ul className="flex justify-center space-x-6">
            {navItems.map((item) => (
              <motion.li
                key={item.to}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  to={item.to}
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={500}
                  className="text-gray-400 hover:text-blue-400 cursor-pointer transition-colors"
                >
                  {item.title}
                </Link>
              </motion.li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <motion.header
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="container mx-auto px-4 py-32 text-center relative overflow-hidden"
      >
        <motion.div
          className="absolute inset-0 opacity-10"
          initial={{ backgroundPosition: '0% 0%' }}
          animate={{ backgroundPosition: '100% 100%' }}
          transition={{ duration: 20, repeat: Infinity, repeatType: 'reverse' }}
          style={{
            backgroundImage:
              'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%239C92AC" fill-opacity="0.4"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
          }}
        />
        <motion.img
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
          src="https://unsplash.com/photos/dyMTxVG9Ei0?fit=crop&w=200&h=200"
          alt="Profile"
          className="w-32 h-32 rounded-full mx-auto mb-8 object-cover ring-4 ring-blue-500/20"
        />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <h1 className="text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
            Aarya Deshpande
          </h1>
          <h2 className="text-2xl text-gray-400 mb-8">
            Computer Science & Engineering (AI) Student
          </h2>
        </motion.div>
        <motion.div
          className="flex flex-col items-center gap-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <div className="flex justify-center gap-6 mb-6">
            <motion.a
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.9 }}
              href={'https://github.com/aaryad10'}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-400 transition-colors"
            >
              <Github className="w-6 h-6" />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.9 }}
              href={`https://www.linkedin.com/in/aarya-d10`}
              target="_blank"
              className="text-gray-400 hover:text-blue-400 transition-colors"
            >
              <Linkedin className="w-6 h-6" />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.9 }}
              href={`aarya.deshpande231@vit.edu`}
              className="text-gray-400 hover:text-blue-400 transition-colors"
            >
              <Mail className="w-6 h-6" />
            </motion.a>
          </div>
          <motion.a
            href="https://drive.google.com/file/d/1cjnvnzGwKzqhF3FQ6OUyfWpXR69DP__C/view?usp=drive_link"
            download
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 bg-blue-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-600 transition-colors"
          >
            <FileText className="w-5 h-5" />
            Download Resume
          </motion.a>
        </motion.div>
      </motion.header>

      {/* About Section */}
      <motion.section
        id="about"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: false }}
        className="container mx-auto px-4 py-16"
      >
        <h2 className="text-3xl font-bold mb-8 text-center">About Me</h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: false }}
          className="text-gray-300 max-w-2xl mx-auto text-center leading-relaxed"
        >
          Final year Computer Engineering student passionate about building
          innovative solutions that bridge hardware and software. Experienced in
          IoT, embedded systems, and full-stack development. Currently seeking
          opportunities in software engineering and systems architecture.
        </motion.p>
      </motion.section>

      {/* Skills Section */}
      <motion.section
        id="skills"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: false }}
        className="container mx-auto px-4 py-16 bg-gray-800/50"
      >
        <h2 className="text-3xl font-bold mb-12 text-center">Core Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: false }}
              className="bg-gray-700/50 p-6 rounded-lg text-center relative overflow-hidden group"
            >
              <motion.div
                className="absolute inset-0 bg-blue-500/10 transform -skew-x-12"
                initial={{ x: '-100%' }}
                whileInView={{ x: '100%' }}
                transition={{ duration: 2, delay: index * 0.2 }}
                viewport={{ once: false }}
              />
              <div className="text-blue-400 mb-4 flex justify-center">
                {skill.icon}
              </div>
              <h3 className="text-xl font-semibold mb-4">{skill.name}</h3>
              <div className="w-full bg-gray-600/50 h-2 rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-blue-500"
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  transition={{ duration: 1, delay: index * 0.2 }}
                  viewport={{ once: false }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Education Timeline */}
      <motion.section
        id="education"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: false }}
        className="container mx-auto px-4 py-16"
      >
        <h2 className="text-3xl font-bold mb-12 text-center">Education</h2>
        <div className="max-w-4xl mx-auto">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: false }}
              className="relative pl-8 pb-12 border-l-2 border-blue-500/30 last:pb-0"
            >
              <div className="absolute left-[-9px] top-0 w-4 h-4 bg-blue-500 rounded-full" />
              <div className="bg-gray-800/50 p-6 rounded-lg">
                <div className="flex items-center gap-2 text-blue-400 mb-2">
                  <GraduationCap className="w-5 h-5" />
                  <span className="text-sm">{edu.duration}</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">{edu.degree}</h3>
                <h4 className="text-gray-400 mb-4">{edu.institution}</h4>
                <p className="text-gray-300 mb-4">{edu.description}</p>
                <ul className="list-disc list-inside text-gray-400">
                  {edu.achievements.map((achievement, i) => (
                    <li key={i}>{achievement}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Experience Timeline */}
      <motion.section
        id="experience"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: false }}
        className="container mx-auto px-4 py-16 bg-gray-800/50"
      >
        <h2 className="text-3xl font-bold mb-12 text-center">Experience</h2>
        <div className="max-w-4xl mx-auto">
          {experience.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: false }}
              className="relative pl-8 pb-12 border-l-2 border-purple-500/30 last:pb-0"
            >
              <div className="absolute left-[-9px] top-0 w-4 h-4 bg-purple-500 rounded-full" />
              <div className="bg-gray-800/50 p-6 rounded-lg">
                <div className="flex items-center gap-2 text-purple-400 mb-2">
                  <Briefcase className="w-5 h-5" />
                  <span className="text-sm">{exp.duration}</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">{exp.role}</h3>
                <h4 className="text-gray-400 mb-4">{exp.company}</h4>
                <p className="text-gray-300 mb-4">{exp.description}</p>
                <ul className="list-disc list-inside text-gray-400">
                  {exp.achievements?.map((achievement, i) => (
                    <li key={i}>{achievement}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Projects Section */}
      <motion.section
        id="projects"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: false }}
        className="container mx-auto px-4 py-16"
      >
        <h2 className="text-3xl font-bold mb-12 text-center">
          Featured Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: false }}
              whileHover={{ scale: 1.02 }}
              className="bg-gray-700/30 p-6 rounded-lg group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity rounded-lg" />
              <div className="relative">
                <div className="text-blue-400 mb-4 flex items-center justify-between">
                  {project.icon}
                  <div className="flex items-center gap-4">
                    <span className="text-sm text-gray-400 flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {project.date}
                    </span>
                    <motion.a
                      href={project.link}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="text-gray-400 hover:text-blue-400 transition-colors"
                    >
                      <ExternalLink className="w-5 h-5" />
                    </motion.a>
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Contact Section */}
      <motion.footer
        id="contact"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: false }}
        className="container mx-auto px-4 py-16 text-center"
      >
        <h2 className="text-3xl font-bold mb-8">Get In Touch</h2>
        <div className="flex flex-col items-center gap-6 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: false }}
            className="flex items-center gap-4 text-gray-400"
          >
            <Mail className="w-5 h-5" />
            <a
              href={`mailto:${contactInfo.email}`}
              className="hover:text-blue-400 transition-colors"
            >
              {contactInfo.email}
            </a>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: false }}
            className="flex items-center gap-4 text-gray-400"
          >
            <Phone className="w-5 h-5" />
            <a
              href={`tel:${contactInfo.phone}`}
              className="hover:text-blue-400 transition-colors"
            >
              {contactInfo.phone}
            </a>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            viewport={{ once: false }}
            className="flex items-center gap-4 text-gray-400"
          >
            <MapPin className="w-5 h-5" />
            <span>{contactInfo.location}</span>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            viewport={{ once: false }}
            className="flex items-center gap-4 text-gray-400"
          >
            <Building className="w-5 h-5" />
            <span>Open to Remote & On-site Opportunities</span>
          </motion.div>
        </div>
        <motion.a
          href={`mailto:${contactInfo.email}`}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="inline-block bg-blue-500 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-600 transition-colors"
        >
          Say Hello
        </motion.a>
      </motion.footer>
    </div>
  );
}

export default App;
