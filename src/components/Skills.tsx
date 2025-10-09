import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  Server,
  Database,
  Cloud,
  Code,
  Settings,
  GitBranch,
} from "lucide-react";
import { LanguageProps } from "../types";
import FloatingBubbles from "./FloatingBubbles";

const Skills: React.FC<LanguageProps> = ({ language }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const content = {
    en: {
      title: "Technical Skills",
      subtitle: "DevOps & Data Engineering Expertise",
      categories: [
        {
          title: "Infrastructure as Code",
          icon: Settings,
          color: "from-blue-500 to-blue-600",
          skills: [
            { name: "Terraform", level: 60 },
            { name: "Vagrant", level: 70 },
            { name: "Ansible", level: 60 },
            { name: "Packer", level: 80 },
          ],
        },
        {
          title: "Containerization & Orchestration",
          icon: Server,
          color: "from-green-500 to-green-600",
          skills: [
            { name: "Docker", level: 80 },
            { name: "Kubernetes", level: 50 },
            { name: "Docker Compose", level: 90 },
            { name: "Podman", level: 80 },
          ],
        },
        {
          title: "Cloud Platforms",
          icon: Cloud,
          color: "from-purple-500 to-purple-600",
          skills: [
            { name: "AWS", level: 75 },
            { name: "Azure", level: 70 },
            { name: "Google Cloud", level: 65 },
            { name: "Arvan Cloud", level: 80 },
          ],
        },
        {
          title: "CI/CD & Version Control",
          icon: GitBranch,
          color: "from-orange-500 to-orange-600",
          skills: [
            { name: "Git", level: 95 },
            { name: "Jenkins", level: 85 },
            { name: "ArgoCD", level: 70 },
            { name: "GitLab CI", level: 80 },
          ],
        },
        {
          title: "Data Engineering",
          icon: Database,
          color: "from-red-500 to-red-600",
          skills: [
            { name: "Apache Spark", level: 70 },
            { name: "Apache Kafka", level: 80 },
            { name: "Apache Pulsar", level: 60 },
            { name: "Elasticsearch", level: 85 },
            { name: "ClickHouse", level: 75 },
          ],
        },
        {
          title: "Programming & Scripting",
          icon: Code,
          color: "from-indigo-500 to-indigo-600",
          skills: [
            { name: ".Net/C#", level: 90 },
            { name: "Bash/Shell", level: 80 },
            { name: "Go", level: 70 },
            { name: "JavaScript", level: 60 },
          ],
        },
      ],
    },
    fa: {
      title: "مهارت‌های فنی",
      subtitle: "تخصص در DevOps و مهندسی داده",
      categories: [
        {
          title: "Infrastructure as Code",
          icon: Settings,
          color: "from-blue-500 to-blue-600",
          skills: [
            { name: "Terraform", level: 60 },
            { name: "Vagrant", level: 70 },
            { name: "Ansible", level: 60 },
            { name: "Packer", level: 80 },
          ],
        },
        {
          title: "کانتینرسازی و ارکستراسیون",
          icon: Server,
          color: "from-green-500 to-green-600",
          skills: [
            { name: "Docker", level: 80 },
            { name: "Kubernetes", level: 50 },
            { name: "Docker Compose", level: 90 },
            { name: "Podman", level: 80 },
          ],
        },
        {
          title: "پلتفرم‌های ابری",
          icon: Cloud,
          color: "from-purple-500 to-purple-600",
          skills: [
            { name: "AWS", level: 75 },
            { name: "Azure", level: 70 },
            { name: "Google Cloud", level: 65 },
            { name: "Arvan Cloud", level: 80 },
          ],
        },
        {
          title: "CI/CD و کنترل نسخه",
          icon: GitBranch,
          color: "from-orange-500 to-orange-600",
          skills: [
            { name: "Git", level: 95 },
            { name: "Jenkins", level: 85 },
            { name: "ArgoCD", level: 70 },
            { name: "GitLab CI", level: 80 },
          ],
        },
        {
          title: "مهندسی داده",
          icon: Database,
          color: "from-red-500 to-red-600",
          skills: [
            { name: "Apache Spark", level: 70 },
            { name: "Apache Kafka", level: 80 },
            { name: "Apache Pulsar", level: 60 },
            { name: "Elasticsearch", level: 85 },
            { name: "ClickHouse", level: 75 },
          ],
        },
        {
          title: "برنامه‌نویسی و اسکریپت‌نویسی",
          icon: Code,
          color: "from-indigo-500 to-indigo-600",
          skills: [
            { name: ".Net/C#", level: 90 },
            { name: "Bash/Shell", level: 80 },
            { name: "Go", level: 70 },
            { name: "JavaScript", level: 60 },
          ],
        },
      ],
    },
  };

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
      id="skills"
      className="py-20 bg-white dark:bg-dark-900 relative overflow-hidden"
    >
      {/* Floating Bubbles */}
      <FloatingBubbles count={5} color="secondary" />
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

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {content[language].categories.map((category, categoryIndex) => (
              <motion.div
                key={categoryIndex}
                variants={itemVariants}
                className="bg-gray-50 dark:bg-dark-800 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300"
              >
                {/* Category Header */}
                <div
                  className="flex items-center gap-4 mb-6"
                  style={{ direction: language === "fa" ? "rtl" : "ltr" }}
                >
                  <div
                    className={`p-3 rounded-lg bg-gradient-to-r ${category.color}`}
                  >
                    <category.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
                    {category.title}
                  </h3>
                </div>

                {/* Skills List */}
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-700 dark:text-gray-300 font-medium">
                          {skill.name}
                        </span>
                        <span className="text-sm text-gray-500 dark:text-gray-400">
                          {skill.level}%
                        </span>
                      </div>

                      {/* Progress Bar */}
                      <div className="w-full bg-gray-200 dark:bg-dark-700 rounded-full h-2">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={
                            inView ? { width: `${skill.level}%` } : { width: 0 }
                          }
                          transition={{
                            duration: 1,
                            delay: categoryIndex * 0.2 + skillIndex * 0.1,
                            ease: "easeOut",
                          }}
                          className={`h-2 rounded-full bg-gradient-to-r ${category.color}`}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Additional Info */}
          <motion.div variants={itemVariants} className="mt-16 text-center">
            <div className="bg-gradient-to-r from-primary-50 to-secondary-50 dark:from-primary-900/20 dark:to-secondary-900/20 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200">
                {language === "en" ? "Continuous Learning" : "یادگیری مداوم"}
              </h3>
              <p
                className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto"
                style={{ direction: language === "fa" ? "rtl" : "ltr" }}
              >
                {language === "en"
                  ? "I am deeply committed to mastering modern concepts and technologies in DevOps and Data Engineering. Through hands-on practice, specialized training programs, and active participation in open-source projects, I strive to continuously expand and refine my professional expertise."
                  : "من به‌صورت جدی به یادگیری و تسلط بر جدیدترین مفاهیم و فناوری‌های حوزه‌ی DevOps و مهندسی داده علاقه‌مندم. تلاش می‌کنم با یادگیری عملی، شرکت در دوره‌ها و کارگاه‌های تخصصی، و مشارکت در پروژه‌های متن‌باز، دانش و مهارت‌های خود را همواره به‌روز و کارآمد نگه دارم."}
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
