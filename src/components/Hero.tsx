import React from "react";
import { motion } from "framer-motion";
import {
  ChevronDown,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Server,
  Cloud,
  Database,
  Send,
} from "lucide-react";
import { LanguageProps } from "../types";
import FloatingBubbles from "./FloatingBubbles";
import profileImage from "../assets/profile-img.jpg";

const Hero: React.FC<LanguageProps> = ({ language }) => {
  const content = {
    en: {
      greeting: "Hello, I'm",
      name: "Amirhossein Maleki",
      title: "DevOps & Data Engineer",
      company: "@ SGI (Scientific Green Co. Ltd.)",
      location: "Tehran, Iran",
      description:
        "I’m a DevOps and Data Engineer focused on building scalable, automated, and data-driven systems. Combining a strong engineering background with a passion for cloud technologies and automation, I work to create reliable and sustainable infrastructures at SGI.",
      cta: "Get In Touch",
      scrollDown: "Scroll Down",
    },
    fa: {
      greeting: "سلام، من",
      name: "امیرحسین ملکی",
      title: "مهندس DevOps و داده",
      company: "در شرکت علوم سبز (SGI)",
      location: "تهران، ایران",
      description:
        "من مهندس DevOps و داده هستم که بر طراحی و توسعه زیرساخت‌های مقیاس‌پذیر، خودکارسازی‌شده و داده‌محور تمرکز دارم. با تکیه بر پیشینه‌ی مهندسی و علاقه‌ی عمیق به فناوری‌های ابری و خودکارسازی، در شرکت SGI زیرساخت‌های پایدار و قابل اعتماد طراحی و پیاده‌سازی می‌کنم.",
      cta: "تماس با من",
      scrollDown: "ادامه مطالب",
    },
  };

  const isRTL = language === "fa";

  const scrollToAbout = () => {
    const aboutSection = document.querySelector("#about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
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
      id="hero"
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-primary-50 via-white to-secondary-50 dark:from-dark-900 dark:via-dark-800 dark:to-dark-900"
      dir={isRTL ? "rtl" : "ltr"}
      lang={language}
    >
      {/* Floating Bubbles Background */}
      <FloatingBubbles count={6} color="mixed" />

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="container mx-auto px-6 py-20 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-6xl mx-auto"
        >
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Text Content */}
            <div
              className={`text-center lg:text-left order-2 lg:order-1 ${
                isRTL ? "lg:text-right" : ""
              }`}
            >
              {/* Greeting */}
              <motion.p
                variants={itemVariants}
                className="text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-4"
              >
                {content[language].greeting}
              </motion.p>

              {/* Name */}
              <motion.h1
                variants={itemVariants}
                className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
              >
                <span className="gradient-text">{content[language].name}</span>
              </motion.h1>

              {/* Title & Company */}
              <motion.div variants={itemVariants} className="mb-6">
                <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 dark:text-gray-200 mb-2">
                  {content[language].title}
                </h2>
                <p className="text-lg md:text-xl text-primary-600 dark:text-primary-400 font-medium">
                  {content[language].company}
                </p>
              </motion.div>

              {/* Location */}
              <motion.div
                variants={itemVariants}
                className={`flex items-center gap-2 mb-8 ${
                  isRTL
                    ? "flex-row-reverse justify-center lg:justify-end"
                    : "justify-center lg:justify-start"
                }`}
              >
                {language === "fa" ? (
                  <>
                    <span className="text-gray-600 dark:text-gray-400">
                      {content[language].location}
                    </span>
                    <MapPin className="w-5 h-5 text-gray-500 ml-1" />
                  </>
                ) : (
                  <>
                    <MapPin className="w-5 h-5 text-gray-500 mr-1" />
                    <span className="text-gray-600 dark:text-gray-400">
                      {content[language].location}
                    </span>
                  </>
                )}
              </motion.div>

              {/* Description */}
              <motion.p
                variants={itemVariants}
                className="text-base md:text-lg text-gray-700 dark:text-gray-300 mb-8 leading-relaxed text-justify"
              >
                {content[language].description}
              </motion.p>

              {/* CTA Buttons */}
              <motion.div
                variants={itemVariants}
                className={`flex flex-col gap-6 mb-8 items-center lg:items-start`}
              >
                {/* Primary CTA */}
                <motion.a
                  href="#contact"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-primary-600 to-primary-700 hover:from-primary-700 hover:to-primary-800 text-white rounded-xl font-semibold transition-all duration-200 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl`}
                  onClick={(e) => {
                    e.preventDefault();
                    document
                      .querySelector("#contact")
                      ?.scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  <Mail className="w-5 h-5" />
                  {content[language].cta}
                </motion.a>

                {/* Social Media Links */}
                <div
                  className={`flex items-center gap-3 flex-wrap ${
                    isRTL
                      ? "justify-center lg:justify-end"
                      : "justify-center lg:justify-start"
                  }`}
                >
                  {/* GitHub */}
                  <motion.a
                    href="https://github.com/AHM-ID"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.15, y: -2 }}
                    whileTap={{ scale: 0.9 }}
                    className="group p-3 bg-gradient-to-br from-gray-800 to-gray-900 hover:from-gray-700 hover:to-gray-800 dark:from-gray-700 dark:to-gray-800 dark:hover:from-gray-600 dark:hover:to-gray-700 rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl"
                    title="GitHub"
                  >
                    <Github className="w-5 h-5 text-white" />
                  </motion.a>

                  {/* LinkedIn */}
                  <motion.a
                    href="https://www.linkedin.com/in/ahm-id/"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.15, y: -2 }}
                    whileTap={{ scale: 0.9 }}
                    className="group p-3 bg-gradient-to-br from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl"
                    title="LinkedIn"
                  >
                    <Linkedin className="w-5 h-5 text-white" />
                  </motion.a>

                  {/* Telegram */}
                  <motion.a
                    href="https://t.me/AHM_ID"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.15, y: -2 }}
                    whileTap={{ scale: 0.9 }}
                    className="group p-3 bg-gradient-to-br from-pink-500 via-purple-500 to-orange-500 hover:from-pink-400 hover:via-purple-400 hover:to-orange-400 text-white rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl flex items-center justify-center"
                    title="Telegram"
                  >
                    <Send className="w-5 h-5 text-white" />
                  </motion.a>
                </div>
              </motion.div>
            </div>

            {/* Right Column - Profile Image */}
            <motion.div
              variants={itemVariants}
              className={`order-1 lg:order-2 flex justify-center ${
                isRTL ? "lg:order-1" : ""
              }`}
            >
              <div className="relative">
                {/* Animated Border Ring */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="absolute inset-0 rounded-full bg-gradient-to-r from-primary-500 via-secondary-500 to-primary-500 opacity-75 blur-xl"
                  style={{ padding: "8px" }}
                />

                {/* Profile Image Container */}
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 z-10"
                >
                  <div className="w-full h-full rounded-full overflow-hidden shadow-2xl ring-4 ring-white dark:ring-dark-800 bg-gradient-to-br from-primary-100 to-secondary-100 dark:from-primary-900/30 dark:to-secondary-900/30">
                    <img
                      src={profileImage}
                      alt="Amirhossein Maleki - DevOps & Data Engineer"
                      className="w-full h-full object-cover object-top"
                      onError={(e) => {
                        // Fallback if image fails to load
                        (e.target as HTMLImageElement).src =
                          'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200"%3E%3Crect fill="%230ea5e9" width="200" height="200"/%3E%3Ctext x="50%25" y="50%25" font-size="80" text-anchor="middle" dy=".3em" fill="white" font-family="Arial"%3EAM%3C/text%3E%3C/svg%3E';
                      }}
                    />
                  </div>

                  {/* Floating Tech Icons */}
                  <motion.div
                    animate={{
                      y: [0, -15, 0],
                      rotate: [0, 10, 0],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className={`absolute -top-4 bg-white dark:bg-dark-800 p-4 rounded-full shadow-xl ring-2 ring-primary-200 dark:ring-primary-800 ${
                      isRTL ? "-left-4" : "-right-4"
                    }`}
                  >
                    <Server className="w-8 h-8 text-primary-600 dark:text-primary-400" />
                  </motion.div>

                  <motion.div
                    animate={{
                      y: [0, 15, 0],
                      rotate: [0, -10, 0],
                    }}
                    transition={{
                      duration: 3.5,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 0.5,
                    }}
                    className={`absolute -bottom-4 bg-white dark:bg-dark-800 p-4 rounded-full shadow-xl ring-2 ring-secondary-200 dark:ring-secondary-800 ${
                      isRTL ? "-right-4" : "-left-4"
                    }`}
                  >
                    <Cloud className="w-8 h-8 text-secondary-600 dark:text-secondary-400" />
                  </motion.div>

                  <motion.div
                    animate={{
                      x: [0, -10, 0],
                      rotate: [0, -5, 0],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 1,
                    }}
                    className={`absolute top-1/2 bg-white dark:bg-dark-800 p-3 rounded-full shadow-xl ring-2 ring-green-200 dark:ring-green-800 ${
                      isRTL ? "-right-6" : "-left-6"
                    }`}
                  >
                    <Database className="w-7 h-7 text-green-600 dark:text-green-400" />
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>
          </div>

          {/* Scroll Down Indicator */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col items-center mt-16"
          >
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
              {content[language].scrollDown}
            </p>
            <motion.button
              onClick={scrollToAbout}
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-dark-800 transition-colors duration-200"
            >
              <ChevronDown className="w-6 h-6 text-gray-500 dark:text-gray-400" />
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
