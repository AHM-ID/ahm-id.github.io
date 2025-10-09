import React from "react";
import { motion } from "framer-motion";
import { Heart, Github, Linkedin, Send } from "lucide-react";
import { LanguageProps } from "../types";
import { toJalaali } from "jalaali-js";

const Footer: React.FC<LanguageProps> = ({ language }) => {
  const getCurrentYear = () => {
    if (language === "fa") {
      const now = new Date();
      const jalaaliDate = toJalaali(
        now.getFullYear(),
        now.getMonth() + 1,
        now.getDate()
      );
      return jalaaliDate.jy;
    } else {
      return new Date().getFullYear();
    }
  };

  const content = {
    en: {
      description:
        "DevOps & Data Engineer passionate about building scalable, reliable infrastructure and data solutions.",
      quickLinks: {
        title: "Quick Links",
        links: [
          { name: "About", href: "#about" },
          { name: "Experience", href: "#experience" },
          { name: "Skills", href: "#skills" },
          { name: "Projects", href: "#projects" },
          { name: "Contact", href: "#contact" },
        ],
      },
      contact: {
        title: "Contact Info",
        email: "mr.amirhosseinmaleki@gmail.com",
        phoneTitle: "+98 901 407 7602",
        phone: "+98 901 407 7602",
        location: "Tehran, Iran",
      },
      social: {
        title: "Follow Me",
      },
      copyright: {
        text: "Made with",
        by: "by Amirhossein Maleki",
        rights: "All rights reserved.",
      },
    },
    fa: {
      description:
        "مهندس DevOps و مهندسی داده با علاقه به ساخت زیرساخت‌های مقیاس‌پذیر، قابل اعتماد و راه‌حل‌های داده محور.",
      quickLinks: {
        title: "لینک‌های سریع",
        links: [
          { name: "درباره من", href: "#about" },
          { name: "تجربه", href: "#experience" },
          { name: "مهارت‌ها", href: "#skills" },
          { name: "پروژه‌ها", href: "#projects" },
          { name: "تماس", href: "#contact" },
        ],
      },
      contact: {
        title: "اطلاعات تماس",
        email: "mr.amirhosseinmaleki@gmail.com",
        phoneTitle: "۷۶۰۲ ۴۰۷ ۹۰۱ ۹۸+",
        phone: "+98 901 407 7602",
        location: "تهران، ایران",
      },
      social: {
        title: "دنبال کنید",
      },
      copyright: {
        text: "ساخته شده با",
        by: "توسط امیرحسین ملکی",
        rights: "تمام حقوق محفوظ است.",
      },
    },
  };

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const socialLinks = [
    {
      name: "GitHub",
      href: "https://github.com/AHM-ID",
      icon: Github,
      color: "hover:text-gray-400",
      bgColor: "bg-gray-800 hover:bg-gray-700",
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/ahm-id/",
      icon: Linkedin,
      color: "hover:text-blue-400",
      bgColor: "bg-blue-600 hover:bg-blue-500",
    },
    {
      name: "Telegram",
      href: "https://t.me/AHM_ID",
      icon: Send,
      color: "hover:text-blue-400",
      bgColor: "bg-blue-500 hover:bg-blue-400",
    },
  ];

  const isRTL = language === "fa";

  return (
    <footer
      className="bg-gray-900 dark:bg-black text-white"
      dir={isRTL ? "rtl" : "ltr"}
    >
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand & Description */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold gradient-text mb-4">
                {language === "en" ? "Amirhossein Maleki" : "امیرحسین ملکی"}
              </h3>
              <p className="text-gray-400 mb-6 leading-relaxed max-w-md text-justify">
                {content[language].description}
              </p>

              {/* Social Links */}
              <div>
                <h4 className="text-lg font-semibold mb-4">
                  {content[language].social.title}
                </h4>
                <div className="grid grid-cols-3 gap-3">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1, y: -3 }}
                      whileTap={{ scale: 0.9 }}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className={`p-3 ${social.bgColor} rounded-lg text-white transition-all duration-200 flex items-center justify-center shadow-lg hover:shadow-xl`}
                      title={social.name}
                    >
                      <social.icon className="w-5 h-5" />
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          {/* Quick Links */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-semibold mb-6">
                {content[language].quickLinks.title}
              </h4>
              <ul className="space-y-3">
                {content[language].quickLinks.links.map((link) => (
                  <li key={link.name}>
                    <motion.button
                      onClick={() => scrollToSection(link.href)}
                      whileHover={{ x: isRTL ? -5 : 5 }}
                      className="text-gray-400 hover:text-white transition-colors duration-200 block text-right"
                    >
                      {link.name}
                    </motion.button>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Contact Info */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-semibold mb-6">
                {content[language].contact.title}
              </h4>
              <div className="space-y-3">
                <div>
                  <p className="text-gray-400 text-sm mb-1">
                    {language === "en" ? "Email" : "ایمیل"}
                  </p>
                  <a
                    href={`mailto:${content[language].contact.email}`}
                    className="text-white hover:text-primary-400 transition-colors duration-200 block"
                  >
                    {content[language].contact.email}
                  </a>
                </div>
                <div>
                  <p className="text-gray-400 text-sm mb-1">
                    {language === "en" ? "Phone" : "تلفن"}
                  </p>
                  <a
                    href={`tel:${content[language].contact.phone}`}
                    className="text-white hover:text-primary-400 transition-colors duration-200 block"
                    style={{ unicodeBidi: "isolate" }}
                  >
                    {content[language].contact.phoneTitle}
                  </a>
                </div>
                <div>
                  <p className="text-gray-400 text-sm mb-1">
                    {language === "en" ? "Location" : "موقعیت"}
                  </p>
                  <p className="text-white">
                    {content[language].contact.location}
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          viewport={{ once: true }}
          className="border-t border-gray-800 mt-12 pt-8"
        >
          <div
            className={`flex flex-col md:flex-row justify-between items-center`}
          >
            <div className={`flex items-center text-gray-400 mb-4 md:mb-0`}>
              <span>{content[language].copyright.text}</span>
              <Heart className="w-4 h-4 mx-2 text-red-500" />
              <span>{content[language].copyright.by}</span>
            </div>
            <div className="text-gray-400 text-sm">
              © {getCurrentYear()} {content[language].copyright.rights}
            </div>
          </div>
        </motion.div>
      </div>

      {/* Back to Top Button */}
      <motion.button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-8 right-8 p-3 bg-primary-600 hover:bg-primary-700 text-white rounded-full shadow-lg transition-colors duration-200 z-50"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1 }}
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 10l7-7m0 0l7 7m-7-7v18"
          />
        </svg>
      </motion.button>
    </footer>
  );
};

export default Footer;
