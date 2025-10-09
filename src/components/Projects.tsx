import React, { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  Github,
  Layers,
  Server,
  Settings,
  Database,
  BookOpen,
  Code,
  Building,
} from "lucide-react";
import { LanguageProps } from "../types";
import FloatingBubbles from "./FloatingBubbles";

const Projects: React.FC<LanguageProps> = ({ language }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [activeFilter, setActiveFilter] = useState("all");

  const content = {
    en: {
      title: "Featured Projects",
      subtitle: "DevOps, Data & Distributed Systems",
      filters: [
        { id: "all", name: "All Projects", icon: Layers },
        { id: "devops", name: "DevOps", icon: Server },
        { id: "automation", name: "Automation & Tools", icon: Settings },
        { id: "data", name: "Data Engineering", icon: Database },
        { id: "software", name: "Software Systems", icon: Code },
        { id: "academic", name: "Academic Projects", icon: BookOpen },
      ],
      projects: [
        {
          title: "Ceph Cluster Infrastructure as Code",
          description:
            "Designed a Ceph storage cluster using Infrastructure as Code. Virtual machines were provisioned via Vagrant on vSphere, with Traefik as reverse proxy/load balancer, Kafka for log brokering, and an ELK stack for observability and monitoring.",
          category: "devops",
          technologies: [
            "Vagrant",
            "vSphere",
            "Ceph",
            "Traefik",
            "Kafka",
            "ELK Stack",
            "Terraform",
          ],
          featured: true,
        },
        {
          title: "Distributed Kafka Consumer & Data Pipeline",
          description:
            "Developed a distributed Kafka consumer architecture configurable by node count. The data pipeline reads, processes, and writes messages in a three-layer design using channel-based data structures — handling up to 30 billion records per day.",
          category: "data",
          technologies: [
            "Kafka",
            ".Net",
            "Channels",
            "Data Pipeline",
            "Concurrency",
          ],
          featured: true,
        },
        {
          title: "Offline CI/CD Infrastructure",
          description:
            "Implemented a fully offline CI/CD stack using Jenkins, GitLab, and Nexus. Enabled secure, self-hosted build, test, and deployment automation without internet dependency.",
          category: "devops",
          technologies: ["Jenkins", "GitLab", "Nexus", "Docker", "Nginx"],
          featured: false,
        },
        {
          title: "IoT Microservices Architecture",
          description:
            "Designed and deployed a distributed IoT system with a Clean Architecture and microservices. Fully containerized and orchestrated for scalable device communication and data collection.",
          category: "devops",
          technologies: [
            "Podman",
            "Kubernetes",
            "Microservices",
            "Clean Architecture",
            "RealTime Monitoring",
            "IoT",
          ],
          featured: true,
        },
        {
          title: "avro2csv Engine",
          description:
            "Developed a high-performance Go-based engine to convert Avro files into CSV format optimized for database storage and analytics.",
          category: "automation",
          technologies: ["Go", "Avro", "CSV", "Data Conversion"],
          featured: true,
        },
        {
          title: "Windows Socket File Transfer",
          description:
            "Developed a Windows-based socket application similar to SHAREit for transferring files and voice messages between multiple clients.",
          category: "software",
          technologies: ["C#", "Sockets", "Networking", "Multithreading"],
          githubUrl: "https://github.com/AHM-ID/AP-FinalProject",
          featured: false,
        },
        {
          title: "Linux Terminal Chat App",
          description:
            "Created a terminal-based chat application for Linux using socket programming and multithreaded communication.",
          category: "software",
          technologies: ["C", "Sockets", "Linux", "Multithreading"],
          githubUrl: "https://github.com/AHM-ID/unix-chat-app",
          featured: false,
        },
        {
          title: "AI Pathfinding Visualization",
          description:
            "Developed an interactive visualization tool demonstrating classical pathfinding algorithms (A*, Dijkstra, BFS, DFS) for academic purposes.",
          category: "academic",
          technologies: [
            "JavaScript",
            "HTML/CSS",
            "Algorithms",
            "Visualization",
          ],
          githubUrl: "https://github.com/AHM-ID/AI_Maze_Solver",
          featured: false,
        },
        {
          title: "N-Queen Problem Visualization",
          description:
            "Built an educational visualizer for solving and animating the N-Queen problem using backtracking algorithms.",
          category: "academic",
          technologies: ["JavaScript", "Algorithms", "Visualization"],
          githubUrl: "https://github.com/AHM-ID/N-Queens",
          featured: false,
        },
        {
          title: "Fortran Compiler Demo",
          description:
            "Implemented a simulated Fortran compiler as part of a compiler design course project, covering lexical, syntax, and semantic analysis.",
          category: "academic",
          technologies: ["C", "Compiler Design", "Flex/Bison"],
          githubUrl: "https://github.com/AHM-ID/FORTRAN_Compiler",
          featured: false,
        },
        {
          title: "HTML Template Design",
          description:
            "Created responsive HTML and CSS templates for personal and educational projects with a focus on clean and minimal UI.",
          category: "software",
          technologies: ["HTML", "CSS", "JavaScript"],
          githubUrl: "https://github.com/AHM-ID/Website-Template-01",
          featured: false,
        },
      ],
    },

    fa: {
      title: "پروژه‌های منتخب",
      subtitle: "راه‌حل‌های DevOps، داده و سیستم‌های توزیع‌شده",
      filters: [
        { id: "all", name: "همه پروژه‌ها", icon: Layers },
        { id: "devops", name: "DevOps", icon: Server },
        { id: "automation", name: "خودکارسازی و ابزارها", icon: Settings },
        { id: "data", name: "مهندسی داده", icon: Database },
        { id: "software", name: "سیستم‌های نرم‌افزاری", icon: Code },
        { id: "academic", name: "پروژه‌های دانشگاهی", icon: BookOpen },
      ],
      projects: [
        {
          title: "زیرساخت کلاستر Ceph به صورت IaC",
          description:
            "طراحی و پیاده‌سازی کلاستر ذخیره‌سازی Ceph با رویکرد Infrastructure as Code. ساخت ماشین‌های مجازی با Vagrant روی vSphere، استفاده از Traefik به عنوان Load Balancer و Reverse Proxy، Kafka برای مدیریت لاگ‌ها و پشته ELK برای مانیتورینگ و Observability.",
          category: "devops",
          technologies: [
            "Vagrant",
            "vSphere",
            "Ceph",
            "Traefik",
            "Kafka",
            "ELK Stack",
            "Terraform",
          ],
          featured: true,
        },
        {
          title: "KafkaConsumer توزیع‌شده و معماری پایپلاین داده",
          description:
            "طراحی معماری KafkaConsumer توزیع‌شده با قابلیت پیکربندی تعداد نودها. پایپلاین داده در سه لایه پیام‌ها را خوانده، پردازش و ذخیره می‌کند. استفاده از ساختار داده کانال برای ارتباطات بین بخشی و پشتیبانی از ۳۰ میلیارد رکورد در روز.",
          category: "data",
          technologies: [
            "Kafka",
            "Net.",
            "Channels",
            "Data Pipeline",
            "Concurrency",
          ],
          featured: true,
        },
        {
          title: "زیرساخت CI/CD آفلاین",
          description:
            "پیاده‌سازی کامل زیرساخت CI/CD به‌صورت آفلاین با Jenkins، GitLab و Nexus جهت خودکارسازی ساخت، تست و استقرار بدون وابستگی به اینترنت.",
          category: "devops",
          technologies: ["Jenkins", "GitLab", "Nexus", "Docker", "Nginx"],
          featured: false,
        },
        {
          title: "معماری IoT مبتنی بر Microservice",
          description:
            "طراحی و استقرار سیستم IoT توزیع‌شده با معماری Clean و Microservice به‌صورت کانتینری و ارکستراسیون‌شده برای ارتباط و جمع‌آوری داده از دستگاه‌ها.",
          category: "devops",
          technologies: [
            "Podman",
            "Kubernetes",
            "Microservices",
            "Clean Architecture",
            "RealTime Monitoring",
            "IoT",
          ],
          featured: true,
        },
        {
          title: "انجین avro2csv",
          description:
            "توسعه یک موتور سریع برای تبدیل فایل‌های Avro به فرمت CSV به منظور ذخیره‌سازی و تحلیل در پایگاه داده‌ها.",
          category: "automation",
          technologies: ["Go", "Avro", "CSV", "Data Conversion"],
          featured: true,
        },
        {
          title: "انتقال فایل با سوکت ویندوزی",
          description:
            "ساخت نرم‌افزار انتقال فایل و پیام صوتی مشابه SHAREit با استفاده از سوکت‌های ویندوزی برای ارتباط میان چند کلاینت.",
          category: "software",
          technologies: ["C#", "Sockets", "Networking", "Multithreading"],
          githubUrl: "https://github.com/AHM-ID/AP-FinalProject",
          featured: false,
        },
        {
          title: "نرم‌افزار چت لینوکسی مبتنی بر ترمینال",
          description:
            "توسعه نرم‌افزار چت در محیط ترمینال لینوکس با استفاده از برنامه‌نویسی سوکت و ارتباط چندریسمانی.",
          category: "software",
          technologies: ["C", "Sockets", "Linux", "Multithreading"],
          githubUrl: "https://github.com/AHM-ID/unix-chat-app",
          featured: false,
        },
        {
          title: "بصری‌سازی مسیریابی هوش مصنوعی",
          description:
            "پیاده‌سازی ابزار مصورسازی برای نمایش الگوریتم‌های کلاسیک مسیریابی مانند A*، Dijkstra، BFS و DFS برای اهداف آموزشی.",
          category: "academic",
          technologies: ["JavaScript", "HTML", "Algorithms", "Visualization"],
          githubUrl: "https://github.com/AHM-ID/AI_Maze_Solver",
          featured: false,
        },
        {
          title: "بصری‌سازی مسئله N-Queen",
          description:
            "توسعه برنامه مصورساز برای حل و نمایش گام‌به‌گام مسئله N-Queen با استفاده از الگوریتم بازگشتی Backtracking.",
          category: "academic",
          technologies: ["JavaScript", "Algorithms", "Visualization"],
          githubUrl: "https://github.com/AHM-ID/N-Queens",
          featured: false,
        },
        {
          title: "کامپایلر نمایشی Fortran",
          description:
            "پیاده‌سازی کامپایلر نمایشی زبان Fortran برای پروژه درسی طراحی کامپایلر شامل تحلیل واژگانی، نحوی و معنایی.",
          category: "academic",
          technologies: ["C", "Compiler Design", "Flex/Bison"],
          githubUrl: "https://github.com/AHM-ID/FORTRAN_Compiler",
          featured: false,
        },
        {
          title: "طراحی قالب HTML",
          description:
            "طراحی قالب‌های واکنش‌گرا با HTML و CSS برای پروژه‌های شخصی و آموزشی با تمرکز بر سادگی و رابط کاربری تمیز.",
          category: "software",
          technologies: ["HTML", "CSS", "JavaScript"],
          githubUrl: "https://github.com/AHM-ID/Website-Template-01",
          featured: false,
        },
      ],
    },
  };

  const filteredProjects =
    activeFilter === "all"
      ? content[language].projects
      : content[language].projects.filter(
          (project) => project.category === activeFilter
        );

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section
      id="projects"
      className="py-20 bg-gray-50 dark:bg-dark-800 relative overflow-hidden"
    >
      {/* Floating Bubbles */}
      <FloatingBubbles count={4} color="mixed" />
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="max-w-7xl mx-auto"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
              {content[language].title}
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              {content[language].subtitle}
            </p>
          </motion.div>

          {/* Filter Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            {content[language].filters.map((filter) => {
              const FilterIcon = filter.icon;
              return (
                <motion.button
                  key={filter.id}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setActiveFilter(filter.id)}
                  className={`px-6 py-3 rounded-lg font-medium transition-all duration-200 flex items-center gap-2 ${
                    activeFilter === filter.id
                      ? "bg-primary-600 text-white shadow-lg"
                      : "bg-white dark:bg-dark-900 text-gray-700 dark:text-gray-300 hover:bg-primary-50 dark:hover:bg-dark-700"
                  }`}
                >
                  <FilterIcon className="w-4 h-4" />
                  <span>{filter.name}</span>
                </motion.button>
              );
            })}
          </motion.div>

          {/* Projects Grid */}
          <motion.div
            layout
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={index}
                layout
                variants={itemVariants}
                whileHover={{ y: -5 }}
                className={`bg-white dark:bg-dark-900 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 ${
                  project.featured
                    ? "ring-2 ring-primary-200 dark:ring-primary-800"
                    : ""
                }`}
              >
                {/* Project Header */}
                <div className="p-6">
                  {project.featured && (
                    <div className="inline-block px-3 py-1 bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300 text-sm font-medium rounded-full mb-4">
                      {language === "en" ? "Featured" : "منتخب"}
                    </div>
                  )}

                  <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-3">
                    {project.title}
                  </h3>

                  <p
                    className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed text-justify"
                    style={{ direction: language === "fa" ? "rtl" : "ltr" }}
                  >
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-gray-100 dark:bg-dark-800 text-gray-700 dark:text-gray-300 rounded-full text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-4">
                    {project.githubUrl ? (
                      <motion.a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex items-center px-4 py-2 bg-gray-800 dark:bg-gray-700 text-white rounded-lg hover:bg-gray-900 dark:hover:bg-gray-600 transition-colors duration-200"
                      >
                        <Github className="w-4 h-4 mx-1" />
                        GitHub
                      </motion.a>
                    ) : (
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        disabled
                        className="flex items-center px-4 py-2 bg-gray-300 dark:bg-dark-700 text-gray-800 dark:text-gray-300 rounded-lg cursor-default"
                      >
                        <Building className="w-4 h-4 mx-1" />
                        {language === "en" ? "Company Project" : "پروژه شرکتی"}
                      </motion.button>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Call to Action */}
          <motion.div variants={itemVariants} className="text-center mt-16">
            <motion.a
              href="https://github.com/AHM-ID"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center px-8 py-4 bg-gray-800 dark:bg-gray-700 text-white rounded-lg font-semibold hover:bg-gray-900 dark:hover:bg-gray-600 transition-colors duration-200"
            >
              <Github className="w-5 h-5 m-2" />
              {language === "en"
                ? "View All Projects on GitHub"
                : "مشاهده همه پروژه‌ها در GitHub"}
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
