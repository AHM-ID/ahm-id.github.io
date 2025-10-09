import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  GraduationCap,
  MapPin,
  Calendar,
  Award,
  Target,
  Sparkles,
} from "lucide-react";
import { LanguageProps } from "../types";
import FloatingBubbles from "./FloatingBubbles";

const About: React.FC<LanguageProps> = ({ language }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const content = {
    en: {
      title: "About Me",
      subtitle: "Professional Background & Education",
      description:
        "I am a DevOps and Data Engineer passionate about building reliable, scalable, and automated infrastructures. With a strong background in Computer Engineering and hands-on experience in cloud technologies, data pipelines, and CI/CD automation, I focus on bridging the gap between software development and data-driven operations. My goal is to design systems that are not only efficient and secure but also sustainable and adaptable to future challenges.",
      education: {
        title: "Education",
        degree: "M.Sc. in Computer Engineering",
        university: "Iran University of Science & Technology",
        location: "Tehran, Iran",
        period: "2025 - Present",
      },
      experience: {
        title: "Current Role",
        position: "DevOps & Data Engineer",
        company: "SGI (Scientific Green Co. Ltd.)",
        location: "Tehran, Iran",
        period: "2025 - Present",
      },
      interests: {
        title: "Professional Interests",
        items: [
          "Infrastructure as Code (IaC) implementation",
          "Data engineering and distributed systems",
          "Cloud computing and container orchestration",
          "Automation and CI/CD pipelines",
          "Scalable and sustainable infrastructure design",
        ],
      },
      stats: [
        { number: "3+", label: "Years Experience", icon: Target },
        { number: "15+", label: "Projects Completed", icon: Sparkles },
        { number: "5+", label: "Technologies Mastered", icon: Award },
      ],
    },
    fa: {
      title: "درباره من",
      subtitle: "پیشینه حرفه‌ای و تحصیلات",
      description:
        "من مهندس DevOps و مهندس داده هستم که به طراحی و توسعه زیرساخت‌های قابل اعتماد، مقیاس‌پذیر و خودکارسازی‌شده علاقه‌مندم. با پیشینه‌ای در مهندسی کامپیوتر و تجربه عملی در حوزه‌های فناوری ابری، پایپ‌لاین‌های داده و خودکارسازی فرآیندهای CI/CD، تمرکزم بر ایجاد پلی میان توسعه نرم‌افزار و عملیات داده‌محور است. هدفم طراحی سیستم‌هایی است که علاوه بر کارایی و امنیت بالا، پایداری و انعطاف‌پذیری لازم برای رشد آینده را نیز فراهم کنند.",
      education: {
        title: "تحصیلات",
        degree: "کارشناسی ارشد مهندسی کامپیوتر",
        university: "دانشگاه علم و صنعت ایران",
        location: "تهران، ایران",
        period: "۱۴۰۴ - تاکنون",
      },
      experience: {
        title: "نقش فعلی",
        position: "مهندس DevOps و مهندس داده",
        company: "شرکت SGI (علوم سبز)",
        location: "تهران، ایران",
        period: "۱۴۰۴ - تاکنون",
      },
      interests: {
        title: "علایق حرفه‌ای",
        items: [
          "پیاده‌سازی Infrastructure as Code (IaC)",
          "مهندسی داده و سیستم‌های توزیع‌شده",
          "رایانش ابری و ارکستراسیون کانتینرها",
          "خودکارسازی و پایپ‌لاین‌های CI/CD",
          "طراحی زیرساخت‌های مقیاس‌پذیر و پایدار",
        ],
      },
      stats: [
        { number: "۳+", label: "سال تجربه", icon: Target },
        { number: "۱۵+", label: "پروژه تکمیل‌شده", icon: Sparkles },
        { number: "۵+", label: "فناوری تسلط‌یافته", icon: Award },
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
      id="about"
      className="py-20 bg-gradient-to-b from-white via-gray-50 to-white dark:from-dark-900 dark:via-dark-800 dark:to-dark-900 relative overflow-hidden"
    >
      {/* Floating Bubbles */}
      <FloatingBubbles count={4} color="mixed" />
      <div className="container mx-auto px-6">
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

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left Column - Description & Info */}
            <motion.div variants={itemVariants} className="space-y-8">
              <div className="bg-gradient-to-br from-white to-gray-50 dark:from-dark-800 dark:to-dark-900 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <p
                  className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed text-justify"
                  style={{ direction: language === "fa" ? "rtl" : "ltr" }}
                >
                  {content[language].description}
                </p>
              </div>

              {/* Education */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/30 rounded-2xl p-6 shadow-md hover:shadow-lg transition-all duration-300"
              >
                <div
                  className="flex items-center gap-3 mb-4"
                  style={{ direction: language === "fa" ? "rtl" : "ltr" }}
                >
                  <div className="p-3 bg-blue-500 rounded-lg shadow-md">
                    <GraduationCap className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
                    {content[language].education.title}
                  </h3>
                </div>
                <div
                  className="space-y-2"
                  style={{ direction: language === "fa" ? "rtl" : "ltr" }}
                >
                  <h4 className="font-semibold text-gray-800 dark:text-gray-200 text-lg">
                    {content[language].education.degree}
                  </h4>
                  <p className="text-gray-700 dark:text-gray-300 font-medium">
                    {content[language].education.university}
                  </p>
                  <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 dark:text-gray-400 pt-2">
                    <div className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      <span>{content[language].education.location}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span>{content[language].education.period}</span>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Current Experience */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="bg-gradient-to-br from-primary-50 to-purple-100 dark:from-primary-900/20 dark:to-purple-900/30 rounded-2xl p-6 shadow-md hover:shadow-lg transition-all duration-300"
              >
                <div
                  className="flex items-center gap-3 mb-4"
                  style={{ direction: language === "fa" ? "rtl" : "ltr" }}
                >
                  <div className="p-3 bg-gradient-to-br from-primary-500 to-purple-600 rounded-lg shadow-md">
                    <Award className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
                    {content[language].experience.title}
                  </h3>
                </div>
                <div
                  className="space-y-2"
                  style={{ direction: language === "fa" ? "rtl" : "ltr" }}
                >
                  <h4 className="font-semibold text-gray-800 dark:text-gray-200 text-lg">
                    {content[language].experience.position}
                  </h4>
                  <p className="text-primary-700 dark:text-primary-300 font-medium">
                    {content[language].experience.company}
                  </p>
                  <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 dark:text-gray-400 pt-2">
                    <div className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      <span>{content[language].experience.location}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span>{content[language].experience.period}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Right Column - Interests & Stats */}
            <motion.div variants={itemVariants} className="space-y-8">
              {/* Professional Interests */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="bg-gradient-to-br from-white to-gray-50 dark:from-dark-800 dark:to-dark-900 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-6 flex items-center">
                  <Sparkles className="w-6 h-6 m-2 text-primary-600" />
                  {content[language].interests.title}
                </h3>
                <ul className="space-y-4">
                  {content[language].interests.items.map((item, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={
                        inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }
                      }
                      transition={{ delay: 0.5 + index * 0.1 }}
                      className="flex items-start gap-3 text-gray-700 dark:text-gray-300 group"
                      style={{ direction: language === "fa" ? "rtl" : "ltr" }}
                    >
                      <div className="w-2 h-2 bg-gradient-to-r from-primary-600 to-secondary-600 rounded-full mt-2 flex-shrink-0 group-hover:scale-150 transition-transform duration-300" />
                      <span className="group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-300">
                        {item}
                      </span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-4">
                {content[language].stats.map((stat, index) => {
                  const IconComponent = stat.icon;
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.5 }}
                      animate={
                        inView
                          ? { opacity: 1, scale: 1 }
                          : { opacity: 0, scale: 0.5 }
                      }
                      transition={{ delay: 0.7 + index * 0.1 }}
                      whileHover={{ scale: 1.05, rotate: 2 }}
                      className="bg-gradient-to-br from-white to-gray-100 dark:from-dark-800 dark:to-dark-700 rounded-xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300 card-hover"
                    >
                      <div className="flex justify-center mb-2">
                        <div className="p-2 bg-gradient-to-br from-primary-100 to-secondary-100 dark:from-primary-900/30 dark:to-secondary-900/30 rounded-lg">
                          <IconComponent className="w-6 h-6 text-primary-600 dark:text-primary-400" />
                        </div>
                      </div>
                      <div className="text-3xl font-bold gradient-text mb-2">
                        {stat.number}
                      </div>
                      <div className="text-sm text-gray-600 dark:text-gray-400 font-medium">
                        {stat.label}
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
