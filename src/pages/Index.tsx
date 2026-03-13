
import Hero from "@/components/Hero";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Code, Palette, Rocket } from "lucide-react";

const Index = () => {
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  const featureCards = [
    {
      icon: Code,
      title: "Clean Code",
      description: "Writing maintainable, efficient, and well-documented code is at the core of my development process.",
    },
    {
      icon: Palette,
      title: "Intuitive Design",
      description: "Crafting user interfaces that are not only visually appealing but also highly functional and easy to navigate.",
    },
    {
      icon: Rocket,
      title: "Performance Optimization",
      description: "Ensuring applications are fast, responsive, and provide a seamless experience across all devices.",
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Hero />

      {/* Features Section */}
      <motion.section
        className="container mx-auto px-4 py-16 md:py-24 text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={sectionVariants}
      >
        <h2 className="text-4xl md:text-5xl font-bold text-color-heading mb-6">
          Why Work With Me?
        </h2>
        <p className="text-xl md:text-2xl text-color-subheading mb-12 max-w-3xl mx-auto">
          Bringing ideas to life with a focus on quality, user experience, and cutting-edge technology.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featureCards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="bg-card p-6 rounded-lg shadow-lg border border-border h-full flex flex-col items-center justify-center">
                <card.icon className="h-12 w-12 text-primary mb-4" />
                <CardTitle className="text-2xl font-semibold text-color-heading mb-3">{card.title}</CardTitle>
                <CardContent className="text-muted-foreground text-center text-base leading-relaxed p-0">
                  {card.description}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Call to Action Section */}
      <motion.section
        className="bg-gradient-to-r from-primary to-purple-600 text-white py-16 md:py-24 text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={sectionVariants}
      >
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Start Your Next Project?
          </h2>
          <p className="text-xl md:text-2xl mb-10 max-w-3xl mx-auto">
            Let's collaborate and build something amazing together. Reach out today!
          </p>
          <Button asChild className="px-10 py-6 text-xl rounded-full bg-white text-primary hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl">
            <Link to="/contact">
              Contact Me
            </Link>
          </Button>
        </div>
      </motion.section>
    </div>
  );
};

export default Index;
