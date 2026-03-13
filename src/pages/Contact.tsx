
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Phone, MapPin, Linkedin, Github } from "lucide-react";

const Contact = () => {
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
        Get in Touch
      </motion.h1>
      <motion.p
        className="text-xl md:text-2xl text-color-subheading mb-12 max-w-3xl mx-auto"
        initial="hidden"
        animate="visible"
        variants={fadeIn}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        Have a project in mind or just want to say hello? I'd love to hear from you.
      </motion.p>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto text-left">
        <motion.div
          className="bg-card p-8 rounded-lg shadow-lg border border-border"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeIn}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h2 className="text-3xl font-bold text-primary mb-6">Contact Information</h2>
          <div className="space-y-6 text-lg text-muted-foreground">
            <div className="flex items-center">
              <Mail className="h-6 w-6 text-accent mr-4" />
              <span>your.email@example.com</span>
            </div>
            <div className="flex items-center">
              <Phone className="h-6 w-6 text-accent mr-4" />
              <span>+1 (555) 123-4567</span>
            </div>
            <div className="flex items-center">
              <MapPin className="h-6 w-6 text-accent mr-4" />
              <span>San Francisco, CA, USA</span>
            </div>
          </div>
          <div className="flex mt-8 space-x-6 justify-center lg:justify-start">
            <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary/80 transition-colors">
              <Linkedin className="h-8 w-8" />
            </a>
            <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary/80 transition-colors">
              <Github className="h-8 w-8" />
            </a>
          </div>
        </motion.div>

        <motion.div
          className="bg-card p-8 rounded-lg shadow-lg border border-border"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeIn}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <h2 className="text-3xl font-bold text-primary mb-6">Send a Message</h2>
          <form className="space-y-6">
            <div>
              <Label htmlFor="name" className="text-lg">Name</Label>
              <Input id="name" type="text" placeholder="Your Name" className="mt-2 p-3 bg-background border-border text-foreground" />
            </div>
            <div>
              <Label htmlFor="email" className="text-lg">Email</Label>
              <Input id="email" type="email" placeholder="Your Email" className="mt-2 p-3 bg-background border-border text-foreground" />
            </div>
            <div>
              <Label htmlFor="message" className="text-lg">Message</Label>
              <Textarea id="message" placeholder="Your Message" rows={6} className="mt-2 p-3 bg-background border-border text-foreground" />
            </div>
            <Button type="submit" className="w-full py-3 text-lg bg-primary text-primary-foreground hover:bg-primary/90">
              Send Message
            </Button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
