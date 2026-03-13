
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className="relative h-[calc(100vh-80px)] flex items-center justify-center text-center overflow-hidden bg-gradient-to-br from-background to-card">
      {/* Background elements */}
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-primary rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute top-1/2 right-1/4 w-72 h-72 bg-accent rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-72 h-72 bg-purple-600 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>

      <motion.div
        className="relative z-10 max-w-4xl mx-auto px-4"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1
          className="text-5xl md:text-7xl font-extrabold text-color-heading leading-tight mb-6"
          variants={itemVariants}
        >
          Hi, I'm <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">[Your Name]</span>
        </motion.h1>
        <motion.p
          className="text-xl md:text-3xl text-color-subheading mb-10 leading-relaxed"
          variants={itemVariants}
        >
          A Full-Stack Developer passionate about building innovative and user-friendly web applications.
        </motion.p>
        <motion.div className="flex flex-col sm:flex-row justify-center gap-6"
          variants={itemVariants}
        >
          <Button asChild className="px-8 py-6 text-lg rounded-full bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300 shadow-lg hover:shadow-xl">
            <Link to="/projects">
              View My Work <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
          <Button asChild variant="outline" className="px-8 py-6 text-lg rounded-full border-2 border-primary text-primary bg-transparent hover:bg-primary hover:text-primary-foreground transition-all duration-300 shadow-lg hover:shadow-xl">
            <Link to="/contact">
              Get in Touch
            </Link>
          </Button>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
