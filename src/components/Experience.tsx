import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  Briefcase,
  Calendar,
  MapPin,
  ChevronRight,
  ChevronLeft,
} from "lucide-react";
import { LanguageProps } from "../types";
import FloatingBubbles from "./FloatingBubbles";

const Experience: React.FC<LanguageProps> = ({ language }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const content = {
    en: {
      title: "Professional Experience",
      subtitle: "My Journey in DevOps & Data Engineering",
      experiences: [
        {
          title: "Data Engineer & DevOps Specialist",
          company: "SGI (Scientific Green Co. Ltd.)",
          location: "Tehran, Iran",
          period: "2025 - Present",
          type: "Full-time",
          description: [
            "Design and maintain data pipelines and analytical infrastructures supporting large-scale data processing",
            "Integrate DevOps practices into data workflows using Jenkins, Docker, and Kubernetes for automation and deployment",
            "Develop and optimize data ingestion, transformation, and storage solutions using modern Big Data technologies",
            "Collaborate with development and analytics teams to enhance data reliability, scalability, and performance",
            "Continuously evaluate emerging technologies to improve data processing efficiency and system architecture",
          ],
          technologies: [
            "Kafka",
            "Avro",
            "ClickHouse",
            "Vagrant",
            "Jenkins",
            "Docker",
            "Kubernetes",
            "Terraform",
            "Ansible",
            "Packer",
            "Git",
            "Go",
            "Bash",
          ],
        },
        {
          title: "Backend Developer Intern",
          company: "Samaneh Dadeh Salamat Co.",
          location: "Tehran, Iran",
          period: "2023 - 2023 (4 Months)",
          type: "Internship",
          description: [
            "Contributed to the design and development of backend services for healthcare data systems",
            "Worked with RESTful APIs and relational databases to improve data integrity and system performance",
            "Collaborated with data engineers and software developers to implement efficient data processing workflows",
            "Gained hands-on experience in .NET ecosystem and modern backend development practices",
          ],
          technologies: [
            "NET Core",
            "C#",
            "SQL Server",
            "PostgreSQL",
            "EF Core",
            "REST APIs",
            "Docker",
          ],
        },
      ],
    },
    fa: {
      title: "تجربه حرفه‌ای",
      subtitle: "مسیر من در DevOps و مهندسی داده",
      experiences: [
        {
          title: "مهندس داده و متخصص DevOps",
          company: "SGI (Scientific Green Co. Ltd.)",
          location: "تهران، ایران",
          period: "۱۴۰۴ - تاکنون",
          type: "تمام‌وقت",
          description: [
            "طراحی و نگهداری جریان‌های داده و زیرساخت‌های تحلیلی برای پردازش داده‌های در مقیاس بزرگ",
            "ادغام رویکردهای DevOps در فرایندهای داده با استفاده از Jenkins، Docker و Kubernetes برای خودکارسازی و استقرار",
            "توسعه و بهینه‌سازی فرآیندهای جمع‌آوری، پردازش و ذخیره‌سازی داده با بهره‌گیری از فناوری‌های نوین Big Data",
            "همکاری نزدیک با تیم‌های توسعه و تحلیل داده جهت افزایش قابلیت اطمینان، مقیاس‌پذیری و کارایی سیستم‌ها",
            "بررسی و ارزیابی مداوم فناوری‌های نوین برای ارتقای معماری و کارایی زیرساخت داده",
          ],
          technologies: [
            "Kafka",
            "Avro",
            "ClickHouse",
            "Vagrant",
            "Jenkins",
            "Docker",
            "Kubernetes",
            "Terraform",
            "Ansible",
            "Packer",
            "Git",
            "Go",
            "Bash",
          ],
        },
        {
          title: "کارآموز توسعه‌دهنده Backend",
          company: "شرکت سامانه داده سلامت",
          location: "تهران، ایران",
          period: "۱۴۰۲ - ۱۴۰۲ (۴ ماه)",
          type: "کارآموزی",
          description: [
            "مشارکت در طراحی و توسعه‌ی سرویس‌های Backend مرتبط با سامانه‌های داده‌ی سلامت",
            "کار با APIهای RESTful و پایگاه‌های داده رابطه‌ای به‌منظور بهبود عملکرد و یکپارچگی داده‌ها",
            "همکاری نزدیک با تیم‌های مهندسی داده و توسعه نرم‌افزار برای پیاده‌سازی جریان‌های پردازش داده‌ی بهینه",
            "کسب تجربه‌ی عملی در اکوسیستم .NET و روش‌های نوین توسعه Backend",
          ],
          technologies: [
            "NET Core",
            "C#",
            "SQL Server",
            "PostgreSQL",
            "EF Core",
            "REST APIs",
            "Docker",
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
        staggerChildren: 0.2,
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
      id="experience"
      className="py-20 bg-gray-50 dark:bg-dark-800 relative overflow-hidden"
    >
      {/* Floating Bubbles */}
      <FloatingBubbles count={4} color="primary" />
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="max-w-4xl mx-auto"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4 leading-tight break-words overflow-visible py-1">
              {content[language].title}
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              {content[language].subtitle}
            </p>
          </motion.div>

          {/* Experience Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-primary-200 dark:bg-primary-800"></div>

            {content[language].experiences.map((exp, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="relative mb-12 last:mb-0"
              >
                {/* Timeline Dot */}
                <div className="absolute left-6 w-4 h-4 bg-primary-600 rounded-full border-4 border-white dark:border-dark-800 shadow-lg"></div>

                {/* Experience Card */}
                <div
                  className="bg-white dark:bg-dark-900 rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300"
                  style={{ marginLeft: "5rem" }}
                >
                  {/* Header */}
                  <div
                    className="flex flex-col md:flex-row md:items-center md:justify-between mb-6"
                    style={{ direction: language === "fa" ? "rtl" : "ltr" }}
                  >
                    <div className="w-full">
                      <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-2">
                        {exp.title}
                      </h3>
                      <div className="flex items-center gap-2 text-primary-600 dark:text-primary-400 font-semibold mb-2">
                        <Briefcase className="w-5 h-5" />
                        {exp.company}
                      </div>
                      <div className="flex flex-wrap items-center gap-3 text-gray-600 dark:text-gray-400 text-sm">
                        <div className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          {exp.location}
                        </div>
                        <div className="flex items-center gap-1 ">
                          <Calendar className="w-4 h-4" />
                          {exp.period}
                        </div>
                        <span className="px-2 py-1 bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300 rounded-full text-xs">
                          {exp.type}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <div className="mb-6">
                    <ul className="space-y-3">
                      {exp.description.map((item, idx) => (
                        <li
                          key={idx}
                          className="flex items-start gap-2 text-gray-700 dark:text-gray-300 text-justify"
                          style={{
                            direction: language === "fa" ? "rtl" : "ltr",
                          }}
                        >
                          {language === "en" ? (
                            <ChevronRight className="w-5 h-5 text-primary-600 mt-0.5 flex-shrink-0" />
                          ) : (
                            <ChevronLeft className="w-5 h-5 text-primary-600 mt-0.5 flex-shrink-0" />
                          )}
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies */}
                  <div style={{ direction: language === "fa" ? "rtl" : "ltr" }}>
                    <h4 className="text-sm font-semibold text-gray-600 dark:text-gray-400 mb-3 uppercase tracking-wide">
                      {language === "en"
                        ? "Technologies Used"
                        : "فناوری‌های استفاده شده"}
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, idx) => (
                        <motion.span
                          key={idx}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={
                            inView
                              ? { opacity: 1, scale: 1 }
                              : { opacity: 0, scale: 0.8 }
                          }
                          transition={{ delay: 0.5 + idx * 0.1 }}
                          className="px-3 py-1 bg-gray-100 dark:bg-dark-800 text-gray-700 dark:text-gray-300 rounded-full text-sm font-medium hover:bg-primary-100 dark:hover:bg-primary-900 hover:text-primary-700 dark:hover:text-primary-300 transition-colors duration-200"
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Call to Action */}
          <motion.div variants={itemVariants} className="text-center mt-16">
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center px-8 py-4 bg-primary-600 hover:bg-primary-700 text-white rounded-lg font-semibold transition-colors duration-200"
              onClick={(e) => {
                e.preventDefault();
                document
                  .querySelector("#contact")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              {language === "en" ? (
                <>
                  Let's Work Together
                  <ChevronRight className="w-5 h-5 mx-1" />
                </>
              ) : (
                <>
                  <ChevronLeft className="w-5 h-5 mx-1" />
                  بیایید با هم کار کنیم
                </>
              )}
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
