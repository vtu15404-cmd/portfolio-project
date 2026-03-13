
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Brain, Code, Palette, Server, Database, Cloud } from "lucide-react";

interface SkillCategoryProps {
  icon: React.ElementType;
  title: string;
  skills: string[];
  delay: number;
}

const SkillCategory = ({ icon: Icon, title, skills, delay }: SkillCategoryProps) => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      className="bg-card p-8 rounded-lg shadow-lg border border-border text-center"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={fadeIn}
      transition={{ duration: 0.6, delay: delay }}
    >
      <Icon className="h-12 w-12 text-primary mx-auto mb-4" />
      <h2 className="text-3xl font-bold text-color-heading mb-4">{title}</h2>
      <div className="flex flex-wrap justify-center gap-3">
        {skills.map((skill, index) => (
          <Badge key={index} variant="secondary" className="text-lg px-4 py-2 bg-secondary text-secondary-foreground">
            {skill}
          </Badge>
        ))}
      </div>
    </motion.div>
  );
};

const Skills = () => {
  const skillsData = [
    {
      icon: Code,
      title: "Frontend Development",
      skills: ["React", "Next.js", "TypeScript", "JavaScript", "HTML5", "CSS3", "Tailwind CSS", "Framer Motion", "Redux", "Zustand"],
      delay: 0.2,
    },
    {
      icon: Server,
      title: "Backend Development",
      skills: ["Node.js", "Express.js", "Python", "Django", "Flask", "REST APIs", "GraphQL", "NestJS"],
      delay: 0.4,
    },
    {
      icon: Database,
      title: "Databases",
      skills: ["PostgreSQL", "MongoDB", "MySQL", "Redis", "Supabase", "Firebase"],
      delay: 0.6,
    },
    {
      icon: Cloud,
      title: "DevOps & Cloud",
      skills: ["Docker", "Kubernetes", "AWS", "Google Cloud", "Vercel", "Netlify", "CI/CD"],
      delay: 0.8,
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      skills: ["Figma", "Adobe XD", "Responsive Design", "User Research", "Prototyping"],
      delay: 1.0,
    },
    {
      icon: Brain,
      title: "Other Skills",
      skills: ["Git", "Agile Methodologies", "Problem Solving", "Technical Writing", "Mentoring"],
      delay: 1.2,
    },
  ];

  return (
    <section className="container mx-auto px-4 py-16 md:py-24 text-center">
      <motion.h1
        className="text-4xl md:text-6xl font-bold text-color-heading mb-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        My Skills
      </motion.h1>
      <motion.p
        className="text-xl md:text-2xl text-color-subheading mb-12 max-w-3xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        A comprehensive overview of the technologies and tools I master.
      </motion.p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {skillsData.map((category, index) => (
          <SkillCategory key={index} {...category} />
        ))}
      </div>
    </section>
  );
};

export default Skills;
