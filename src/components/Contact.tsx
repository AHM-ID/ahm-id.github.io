import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import ReCAPTCHA from "react-google-recaptcha";
import { Mail, Phone, MapPin, Send, Github, Linkedin } from "lucide-react";
import { LanguageProps } from "../types";
import FloatingBubbles from "./FloatingBubbles";

const Contact: React.FC<LanguageProps> = ({ language }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [recaptchaToken, setRecaptchaToken] = useState<string | null>(null);

  const recaptchaRef = useRef<ReCAPTCHA>(null);

  const SITE_KEY = import.meta.env.VITE_RECAPTCHA_SITE_KEY;

  const content = {
    en: {
      title: "Get In Touch",
      subtitle: "Ready for your next project? Let’s talk.",
      description:
        "I’m always open to new opportunities and exciting collaborations. Whether you need DevOps consulting, scalable infrastructure design, or end-to-end data engineering solutions, I’d be thrilled to help bring your vision to life. Feel free to reach out!",
      contactInfo: {
        email: "mr.amirhosseinmaleki@gmail.com",
        phoneTitle: "+98 901 407 7602",
        phone: "+98 901 407 7602",
        location: "Tehran, Iran",
      },
      form: {
        name: "Your Name",
        email: "Your Email",
        subject: "Subject",
        message: "Your Message",
        send: "Send Message",
        sending: "Sending...",
      },
      social: {
        title: "Connect With Me",
        github: "GitHub",
        linkedin: "LinkedIn",
        telegram: "Telegram",
      },
    },
    fa: {
      title: "تماس با من",
      subtitle: "برای پروژهٔ بعدی‌تان آماده‌اید؟ بیایید صحبت کنیم.",
      description:
        "همیشه برای فرصت‌های جدید و همکاری‌های الهام‌بخش آماده‌ام. چه به مشاورهٔ DevOps، طراحی زیرساخت‌های مقیاس‌پذیر، یا راه‌حل‌های جامع مهندسی داده نیاز داشته باشید، از همکاری با شما برای تحقق ایده‌هایتان خوشحال خواهم شد. حتماً با من در ارتباط باشید! ",
      contactInfo: {
        email: "mr.amirhosseinmaleki@gmail.com",
        phoneTitle: "۷۶۰۲ ۴۰۷ ۹۰۱ ۹۸+",
        phone: "+98 901 407 7602",
        location: "تهران، ایران",
      },
      form: {
        name: "نام شما",
        email: "ایمیل شما",
        subject: "موضوع",
        message: "پیام شما",
        send: "ارسال پیام",
        sending: "در حال ارسال...",
      },
      social: {
        title: "با من در ارتباط باشید",
        github: "گیت‌هاب",
        linkedin: "لینکدین",
        telegram: "تلگرام",
      },
    },
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!recaptchaToken) {
      alert(
        language === "en"
          ? "Please complete the reCAPTCHA."
          : "لطفاً reCAPTCHA را تکمیل کنید."
      );
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("https://formspree.io/f/xanpdgrl", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
          "g-recaptcha-response": recaptchaToken,
        }),
      });

      const result = await response.json();
      console.log(result);

      if (response.ok) {
        setFormData({ name: "", email: "", subject: "", message: "" });
        setRecaptchaToken(null);
        recaptchaRef.current?.reset();
        alert(
          language === "en"
            ? "Message sent successfully!"
            : "پیام با موفقیت ارسال شد!"
        );
      } else {
        const errorData = await response.json().catch(() => ({}));
        console.error("Formspree error:", errorData);
        alert(
          language === "en"
            ? "Failed to send message. Please try again."
            : "ارسال پیام با خطا مواجه شد. لطفاً دوباره تلاش کنید."
        );
      }
    } catch (error) {
      console.error("Form submission error:", error);
      alert(
        language === "en"
          ? "An error occurred. Please try again later."
          : "خطایی رخ داد. لطفاً بعداً دوباره تلاش کنید."
      );
    } finally {
      setIsSubmitting(false);
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
      id="contact"
      className="py-20 bg-white dark:bg-dark-900 relative overflow-hidden"
    >
      {/* Floating Bubbles */}
      <FloatingBubbles count={4} color="primary" />
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
            <p className="text-xl text-gray-600 dark:text-gray-400 mb-6">
              {content[language].subtitle}
            </p>
            <p
              className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto"
              style={{ direction: language === "fa" ? "rtl" : "ltr" }}
            >
              {content[language].description}
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <motion.div variants={itemVariants} className="space-y-8">
              {/* Contact Details */}
              <div className="space-y-6">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="flex items-center gap-4 p-6 bg-gray-50 dark:bg-dark-800 rounded-xl"
                  style={{ direction: language === "fa" ? "rtl" : "ltr" }}
                >
                  <div className="p-3 bg-primary-100 dark:bg-primary-900 rounded-lg">
                    <Mail className="w-6 h-6 text-primary-600 dark:text-primary-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-1">
                      {language === "en" ? "Email" : "ایمیل"}
                    </h3>
                    <a
                      href={`mailto:${content[language].contactInfo.email}`}
                      className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200"
                    >
                      {content[language].contactInfo.email}
                    </a>
                  </div>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="flex items-center gap-4 p-6 bg-gray-50 dark:bg-dark-800 rounded-xl"
                  style={{ direction: language === "fa" ? "rtl" : "ltr" }}
                >
                  <div className="p-3 bg-green-100 dark:bg-green-900 rounded-lg">
                    <Phone className="w-6 h-6 text-green-600 dark:text-green-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-1">
                      {language === "en" ? "Phone" : "تلفن"}
                    </h3>
                    <a
                      href={`tel:${content[language].contactInfo.phone}`}
                      className="text-gray-600 dark:text-gray-400 hover:text-green-600 dark:hover:text-green-400 transition-colors duration-200"
                    >
                      {content[language].contactInfo.phoneTitle}
                    </a>
                  </div>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="flex items-center gap-4 p-6 bg-gray-50 dark:bg-dark-800 rounded-xl"
                  style={{ direction: language === "fa" ? "rtl" : "ltr" }}
                >
                  <div className="p-3 bg-purple-100 dark:bg-purple-900 rounded-lg">
                    <MapPin className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-1">
                      {language === "en" ? "Location" : "موقعیت"}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      {content[language].contactInfo.location}
                    </p>
                  </div>
                </motion.div>
              </div>

              {/* Social Links */}
              <div>
                <h3
                  className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-6"
                  style={{ direction: language === "fa" ? "rtl" : "ltr" }}
                >
                  {content[language].social.title}
                </h3>
                <div className="grid grid-cols-3 gap-4">
                  {/* GitHub */}
                  <motion.a
                    href="https://github.com/AHM-ID"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -3 }}
                    whileTap={{ scale: 0.9 }}
                    className="group p-4 bg-gradient-to-br from-gray-800 to-gray-900 hover:from-gray-700 hover:to-gray-800 text-white rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl flex items-center justify-center"
                    title="GitHub"
                  >
                    <Github className="w-6 h-6" />
                  </motion.a>

                  {/* LinkedIn */}
                  <motion.a
                    href="https://www.linkedin.com/in/ahm-id/"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -3 }}
                    whileTap={{ scale: 0.9 }}
                    className="group p-4 bg-gradient-to-br from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl flex items-center justify-center"
                    title="LinkedIn"
                  >
                    <Linkedin className="w-6 h-6" />
                  </motion.a>

                  {/* Telegram */}
                  <motion.a
                    href="https://t.me/AHM_ID"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -3 }}
                    whileTap={{ scale: 0.9 }}
                    className="group p-4 bg-gradient-to-br from-pink-500 via-purple-500 to-orange-500 hover:from-pink-400 hover:via-purple-400 hover:to-orange-400 text-white rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl flex items-center justify-center"
                    title="Telegram"
                  >
                    <Send className="w-6 h-6" />
                  </motion.a>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div variants={itemVariants}>
              <form
                onSubmit={handleSubmit}
                className="bg-gray-50 dark:bg-dark-800 rounded-xl p-8"
                dir={language === "fa" ? "rtl" : "ltr"}
              >
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      {content[language].form.name}
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 dark:border-dark-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-dark-900 text-gray-900 dark:text-gray-100 transition-colors duration-200"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      {content[language].form.email}
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 dark:border-dark-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-dark-900 text-gray-900 dark:text-gray-100 transition-colors duration-200"
                    />
                  </div>
                </div>

                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    {content[language].form.subject}
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 dark:border-dark-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-dark-900 text-gray-900 dark:text-gray-100 transition-colors duration-200"
                  />
                </div>

                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    {content[language].form.message}
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-dark-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-dark-900 text-gray-900 dark:text-gray-100 transition-colors duration-200 resize-none"
                  />
                </div>

                <div className="mb-6 flex justify-center">
                  <ReCAPTCHA
                    ref={recaptchaRef}
                    sitekey={SITE_KEY}
                    onChange={(token) => setRecaptchaToken(token)}
                    onExpired={() => setRecaptchaToken(null)}
                    onErrored={() => setRecaptchaToken(null)}
                  />
                </div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full px-8 py-4 bg-primary-600 hover:bg-primary-700 disabled:bg-primary-400 text-white rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                      {content[language].form.sending}
                    </>
                  ) : (
                    <>
                      <Mail className="w-5 h-5 m-2" />
                      {content[language].form.send}
                    </>
                  )}
                </motion.button>
              </form>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
