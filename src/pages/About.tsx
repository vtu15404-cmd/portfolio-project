
import { motion } from "framer-motion";

const About = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className="container mx-auto px-4 py-16 md:py-24 text-center">
      <motion.h1
        className="text-4xl md:text-6xl font-bold text-color-heading mb-6"
        initial="hidden"
        animate="visible"
        variants={fadeIn}
        transition={{ duration: 0.6 }}
      >
        About Me
      </motion.h1>
      <motion.p
        className="text-xl md:text-2xl text-color-subheading mb-12 max-w-3xl mx-auto"
        initial="hidden"
        animate="visible"
        variants={fadeIn}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        A passionate full-stack developer crafting engaging and efficient web experiences.
      </motion.p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-left max-w-5xl mx-auto">
        <motion.div
          className="bg-card p-8 rounded-lg shadow-lg border border-border"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeIn}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h2 className="text-3xl font-bold text-primary mb-4">My Journey</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            My journey into web development began with a fascination for how digital products come to life.
            Starting with front-end basics, I quickly delved into back-end technologies, building a comprehensive
            skill set that allows me to tackle projects from conception to deployment. I thrive on solving complex
            problems and continuously learning new technologies to stay at the forefront of the industry.
          </p>
        </motion.div>

        <motion.div
          className="bg-card p-8 rounded-lg shadow-lg border border-border"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeIn}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <h2 className="text-3xl font-bold text-primary mb-4">What I Do</h2>
          <ul className="list-disc list-inside text-lg text-muted-foreground leading-relaxed space-y-2">
            <li>Develop robust and scalable full-stack applications.</li>
            <li>Design intuitive and responsive user interfaces.</li>
            <li>Optimize performance for seamless user experiences.</li>
            <li>Collaborate with teams to deliver high-quality software.</li>
            <li>Continuously explore and integrate cutting-edge technologies.</li>
          </ul>
        </motion.div>
      </div>

      <motion.div
        className="mt-16 bg-gradient-to-r from-primary to-purple-600 p-8 rounded-lg shadow-xl max-w-4xl mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeIn}
        transition={{ duration: 0.6, delay: 0.8 }}
      >
        <h2 className="text-3xl font-bold text-white mb-4">My Philosophy</h2>
        <p className="text-lg text-white leading-relaxed">
          I believe in building software that is not only functional but also delightful to use.
          Every line of code is written with precision, and every design decision is made with the user in mind.
          My goal is to create impactful digital solutions that stand the test of time.
        </p>
      </motion.div>
    </section>
  );
};

export default About;
