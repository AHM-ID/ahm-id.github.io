import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  GraduationCap,
  Calendar,
  MapPin,
  Award,
  BookOpen,
  Trophy,
} from "lucide-react";
import { LanguageProps } from "../types";

const Education: React.FC<LanguageProps> = ({ language }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const content = {
    en: {
      title: "Education",
      subtitle: "Academic Background & Achievements",
      education: [
        {
          degree: "Master of Science (M.Sc.)",
          field: "Computer Engineering",
          university: "Iran University of Science & Technology",
          location: "Tehran, Iran",
          period: "2025 - Present",
          gpa: "N/A",
          description:
            "Focused on advanced topics in DevOps, Data Engineering, and Cloud Computing. Exploring scalable infrastructure design, data pipeline optimization, and automation in distributed systems.",
          achievements: [
            "Research on data-driven infrastructure automation and cloud-native architectures",
            "Developed and deployed data engineering pipelines using modern DevOps tools",
            "Graduate coursework covering Big Data processing, distributed systems, and cloud orchestration",
          ],
          icon: GraduationCap,
          color: "from-blue-500 to-blue-600",
        },
        {
          degree: "Bachelor of Science (B.Sc.)",
          field: "Computer Engineering",
          university: "Shahed University of Tehran",
          location: "Tehran, Iran",
          period: "2021 - 2025",
          gpa: "N/A",
          description:
            "Built a strong foundation in computer science, software engineering, and web application development. Specialized in backend development using .NET Core and modern web technologies.",
          achievements: [
            "Designed and developed web-based systems using ASP.NET Core",
            "Gained hands-on experience with relational databases and RESTful APIs",
            "Capstone project focused on developing a scalable web service architecture",
          ],
          icon: BookOpen,
          color: "from-green-500 to-green-600",
        },
      ],
      certifications: {
        title: "Professional Certifications & Training",
        items: [
          {
            name: "Arvan Certified Cloud Architect",
            issuer: "Arvan Academy",
            status: "In Progress",
            icon: Award,
          },
          {
            name: "Certified Kubernetes Administrator (CKA)",
            issuer: "Cloud Native Computing Foundation",
            status: "Planned",
            icon: Trophy,
          },
          {
            name: "Arvan Certified Expert DevOps Engineer",
            issuer: "Arvan Academy",
            status: "Ongoing",
            icon: Award,
          },
        ],
      },
    },
    fa: {
      title: "تحصیلات",
      subtitle: "پیشینه تحصیلی و دستاوردها",
      education: [
        {
          degree: "کارشناسی ارشد",
          field: "مهندسی کامپیوتر",
          university: "دانشگاه علم و صنعت ایران",
          location: "تهران، ایران",
          period: "۱۴۰۴ - تاکنون",
          gpa: "N/A",
          description:
            "تمرکز بر موضوعات پیشرفته در حوزه‌های DevOps، مهندسی داده و رایانش ابری. پژوهش و توسعه در زمینه طراحی زیرساخت‌های مقیاس‌پذیر، بهینه‌سازی جریان‌های داده و خودکارسازی در سیستم‌های توزیع‌شده.",
          achievements: [
            "تحقیق در زمینه خودکارسازی زیرساخت داده و معماری‌های cloud-native",
            "توسعه و استقرار پایپ‌لاین‌های مهندسی داده با بهره‌گیری از ابزارهای مدرن DevOps",
            "پوشش دروس تخصصی در زمینه پردازش داده‌های حجیم، سیستم‌های توزیع‌شده و ارکستراسیون ابری",
          ],
          icon: GraduationCap,
          color: "from-blue-500 to-blue-600",
        },
        {
          degree: "کارشناسی",
          field: "مهندسی کامپیوتر",
          university: "دانشگاه شاهد تهران",
          location: "تهران، ایران",
          period: "۱۴۰۰ - ۱۴۰۴",
          gpa: "N/A",
          description:
            "ایجاد پایه‌ای قوی در مهندسی کامپیوتر، نرم‌افزار و توسعه اپلیکیشن‌های وب. تمرکز بر برنامه‌نویسی سمت سرور با NET Core. و استفاده از فناوری‌های مدرن وب.",
          achievements: [
            "طراحی و توسعه سیستم‌های مبتنی بر وب با استفاده از ASP.NET Core",
            "کسب تجربه عملی در کار با پایگاه‌های داده رابطه‌ای و APIهای RESTful",
            "پروژه پایانی با محوریت طراحی معماری مقیاس‌پذیر برای سرویس‌های وب",
          ],
          icon: BookOpen,
          color: "from-green-500 to-green-600",
        },
      ],
      certifications: {
        title: "گواهینامه‌ها و آموزش‌های حرفه‌ای",
        items: [
          {
            name: "Arvan Certified Cloud Architect",
            issuer: "آروان آکادمی",
            status: "در حال انجام",
            icon: Award,
          },
          {
            name: "Certified Kubernetes Administrator (CKA)",
            issuer: "Cloud Native Computing Foundation",
            status: "برنامه‌ریزی شده",
            icon: Trophy,
          },
          {
            name: "Arvan Certified Expert DevOps Engineer",
            issuer: "آروان آکادمی",
            status: "در حال انجام",
            icon: Award,
          },
        ],
      },
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
      id="education"
      className="py-20 bg-white dark:bg-dark-900 relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-50/30 to-secondary-50/30 dark:from-primary-900/10 dark:to-secondary-900/10 pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="max-w-6xl mx-auto"
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

          {/* Education Timeline */}
          <div className="relative mb-20">
            {/* Timeline Line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-200 via-secondary-200 to-primary-200 dark:from-primary-800 dark:via-secondary-800 dark:to-primary-800 transform md:-translate-x-1/2"></div>

            {content[language].education.map((edu, index) => {
              const IconComponent = edu.icon;
              const isEven = index % 2 === 0;

              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="relative mb-12 md:mb-16"
                  dir={language === "fa" ? "rtl" : "ltr"}
                >
                  <div
                    className={`md:w-1/2 ${
                      isEven ? "md:ms-auto md:ps-12" : "md:pe-12"
                    }`}
                  >
                    {/* Timeline Dot */}
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={inView ? { scale: 1 } : { scale: 0 }}
                      transition={{ delay: 0.5 + index * 0.2, type: "spring" }}
                      className={`absolute left-6 ${
                        language === "fa"
                          ? isEven
                            ? "md:left-auto md:right-1/2"
                            : "md:left-1/2 md:right-auto"
                          : isEven
                          ? "md:left-1/2 md:right-auto"
                          : "md:left-auto md:right-1/2"
                      } w-6 h-6 rounded-full bg-gradient-to-r ${
                        edu.color
                      } border-4 border-white dark:border-dark-900 shadow-lg transform md:-translate-x-1/2 z-10`}
                    >
                      <div className="absolute inset-0 rounded-full bg-gradient-to-r from-white/40 to-transparent animate-pulse" />
                    </motion.div>

                    {/* Education Card */}
                    <motion.div
                      whileHover={{ y: -5, scale: 1.02 }}
                      className={`${
                        language === "fa" ? "me-16 md:me-0" : "ms-16 md:ms-0"
                      } bg-white dark:bg-dark-800 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 dark:border-dark-700`}
                    >
                      {/* Card Header */}
                      <div
                        className={`p-6 bg-gradient-to-r ${edu.color} text-white`}
                      >
                        <div className="flex items-start justify-between mb-3">
                          <div className="flex-1">
                            <h3 className="text-2xl font-bold mb-2">
                              {edu.degree}
                            </h3>
                            <p className="text-lg font-semibold opacity-90">
                              {edu.field}
                            </p>
                          </div>
                          <div className="bg-white/20 p-3 rounded-lg backdrop-blur-sm">
                            <IconComponent className="w-8 h-8" />
                          </div>
                        </div>

                        <div className="space-y-2 text-sm">
                          <div className="flex items-center">
                            <GraduationCap className="w-4 h-4 me-2 flex-shrink-0" />
                            <span className="font-medium">
                              {edu.university}
                            </span>
                          </div>
                          <div className="flex items-center">
                            <MapPin className="w-4 h-4 me-2 flex-shrink-0" />
                            <span>{edu.location}</span>
                          </div>
                          <div className="flex items-center">
                            <Calendar className="w-4 h-4 me-2 flex-shrink-0" />
                            <span>{edu.period}</span>
                          </div>
                        </div>
                      </div>

                      {/* Card Body */}
                      <div className="p-6">
                        <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed text-justify">
                          {edu.description}
                        </p>

                        {/* Achievements */}
                        <div>
                          <h4 className="text-sm font-semibold text-gray-600 dark:text-gray-400 mb-3 uppercase tracking-wide">
                            {language === "en"
                              ? "Key Achievements"
                              : "دستاوردهای کلیدی"}
                          </h4>
                          <ul className="space-y-2">
                            {edu.achievements.map((achievement, idx) => (
                              <motion.li
                                key={idx}
                                initial={{ opacity: 0, x: -20 }}
                                animate={
                                  inView
                                    ? { opacity: 1, x: 0 }
                                    : { opacity: 0, x: -20 }
                                }
                                transition={{
                                  delay: 0.7 + index * 0.2 + idx * 0.1,
                                }}
                                className="flex items-start text-gray-600 dark:text-gray-400 text-justify"
                              >
                                <div
                                  className={`w-2 h-2 rounded-full bg-gradient-to-r ${edu.color} mt-2 me-2 flex-shrink-0`}
                                />
                                <span>{achievement}</span>
                              </motion.li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Certifications Section */}
          <motion.div variants={itemVariants}>
            <div className="bg-gradient-to-br from-gray-50 to-white dark:from-dark-800 dark:to-dark-900 rounded-2xl p-8 shadow-xl border border-gray-100 dark:border-dark-700">
              <h3
                className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-gray-200 mb-8 text-center"
                style={{ direction: language === "fa" ? "rtl" : "ltr" }}
              >
                {content[language].certifications.title}
              </h3>

              <div className="grid md:grid-cols-3 gap-6">
                {content[language].certifications.items.map((cert, index) => {
                  const CertIcon = cert.icon;
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={
                        inView
                          ? { opacity: 1, scale: 1 }
                          : { opacity: 0, scale: 0.9 }
                      }
                      transition={{ delay: 0.9 + index * 0.1 }}
                      whileHover={{ y: -5 }}
                      className="bg-white dark:bg-dark-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-dark-700"
                    >
                      <div className="flex items-start justify-between mb-4">
                        <div className="p-3 bg-gradient-to-br from-primary-100 to-secondary-100 dark:from-primary-900/30 dark:to-secondary-900/30 rounded-lg">
                          <CertIcon className="w-6 h-6 text-primary-600 dark:text-primary-400" />
                        </div>
                        <span className="px-3 py-1 bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-400 text-xs font-semibold rounded-full">
                          {cert.status}
                        </span>
                      </div>

                      <h4
                        className="font-semibold text-gray-800 dark:text-gray-200 mb-2"
                        style={{ direction: language === "fa" ? "rtl" : "ltr" }}
                      >
                        {cert.name}
                      </h4>
                      <p
                        className="text-sm text-gray-600 dark:text-gray-400"
                        style={{ direction: language === "fa" ? "rtl" : "ltr" }}
                      >
                        {cert.issuer}
                      </p>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
