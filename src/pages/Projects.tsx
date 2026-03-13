
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  githubLink?: string;
  liveLink?: string;
  image: string;
}

const ProjectCard = ({ title, description, technologies, githubLink, liveLink, image }: ProjectCardProps) => {
  const itemFadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div variants={itemFadeIn} className="h-full">
      <Card className="flex flex-col h-full overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out border border-border bg-card">
        <img src={image} alt={title} className="w-full h-48 object-cover" />
        <CardHeader className="flex-grow">
          <CardTitle className="text-2xl font-bold text-color-heading mb-2">{title}</CardTitle>
          <p className="text-muted-foreground text-base leading-relaxed">{description}</p>
        </CardHeader>
        <CardContent className="pt-4">
          <div className="flex flex-wrap gap-2 mb-4">
            {technologies.map((tech, index) => (
              <Badge key={index} variant="secondary" className="bg-secondary text-secondary-foreground">
                {tech}
              </Badge>
            ))}
          </div>
          <div className="flex gap-4">
            {githubLink && (
              <Button asChild variant="outline" className="flex-1 bg-transparent border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                <a href={githubLink} target="_blank" rel="noopener noreferrer">
                  <Github className="mr-2 h-4 w-4" /> GitHub
                </a>
              </Button>
            )}
            {liveLink && (
              <Button asChild className="flex-1 bg-primary text-primary-foreground hover:bg-primary/90">
                <a href={liveLink} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="mr-2 h-4 w-4" /> Live Demo
                </a>
              </Button>
            )}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

const Projects = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };

  const projects = [
    {
      title: "SaaS Dashboard",
      description: "A comprehensive dashboard for managing SaaS metrics, users, and subscriptions. Features real-time data visualization and analytics.",
      technologies: ["React", "Next.js", "Tailwind CSS", "Chart.js", "Supabase"],
      githubLink: "https://github.com/example/saas-dashboard",
      liveLink: "https://saas-dashboard.example.com",
      image: "/images/saas-dashboard.png",
    },
    {
      title: "E-commerce Store",
      description: "A full-featured e-commerce platform with product listings, shopping cart, checkout process, and admin panel.",
      technologies: ["Next.js", "TypeScript", "Stripe", "PostgreSQL", "GraphQL"],
      githubLink: "https://github.com/example/ecommerce-store",
      liveLink: "https://ecommerce.example.com",
      image: "/images/ecommerce-store.png",
    },
    {
      title: "Portfolio Website",
      description: "My personal portfolio website showcasing my skills, projects, and contact information. Built with modern web technologies.",
      technologies: ["React", "Vite", "Tailwind CSS", "Framer Motion"],
      githubLink: "https://github.com/example/portfolio",
      liveLink: "https://my-portfolio.example.com",
      image: "/images/portfolio-website.png",
    },
    {
      title: "Task Management App",
      description: "A collaborative task management application with real-time updates, user authentication, and project organization.",
      technologies: ["React", "Node.js", "Express", "MongoDB", "Socket.io"],
      githubLink: "https://github.com/example/task-app",
      liveLink: "https://task-app.example.com",
      image: "/images/task-app.png",
    },
    {
      title: "Blog Platform",
      description: "A content-rich blog platform with a powerful CMS, search functionality, and responsive design.",
      technologies: ["Gatsby", "Markdown", "GraphQL", "Netlify CMS"],
      githubLink: "https://github.com/example/blog-platform",
      liveLink: "https://blog.example.com",
      image: "/images/blog-platform.png",
    },
    {
      title: "Recipe Finder",
      description: "An application to discover and save recipes based on ingredients, dietary preferences, and cuisine types.",
      technologies: ["Vue.js", "Firebase", "Edamam API", "SCSS"],
      githubLink: "https://github.com/example/recipe-finder",
      liveLink: "https://recipe-finder.example.com",
      image: "/images/recipe-finder.png",
    },
  ];

  return (
    <section className="container mx-auto px-4 py-16 md:py-24">
      <motion.h1
        className="text-4xl md:text-6xl font-bold text-color-heading text-center mb-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        My Projects
      </motion.h1>
      <motion.p
        className="text-xl md:text-2xl text-color-subheading text-center mb-12 max-w-3xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        A selection of my recent work, showcasing my skills in full-stack development and design.
      </motion.p>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </motion.div>
    </section>
  );
};

export default Projects;
