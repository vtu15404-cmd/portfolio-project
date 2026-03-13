
import { Link } from "react-router-dom";
import { Github, Linkedin, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border py-12 mt-20">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
        {/* Brand Section */}
        <div className="flex flex-col items-center md:items-start">
          <Link to="/" className="text-3xl font-bold text-primary tracking-tight mb-4">
            MyPortfolio
          </Link>
          <p className="text-muted-foreground leading-relaxed max-w-xs">
            Crafting exceptional digital experiences with passion and precision.
          </p>
        </div>

        {/* Navigation Links */}
        <div>
          <h3 className="text-xl font-semibold text-color-heading mb-5">Quick Links</h3>
          <ul className="space-y-3 text-lg">
            <li>
              <Link to="/about" className="text-muted-foreground hover:text-primary transition-colors">
                About
              </Link>
            </li>
            <li>
              <Link to="/projects" className="text-muted-foreground hover:text-primary transition-colors">
                Projects
              </Link>
            </li>
            <li>
              <Link to="/skills" className="text-muted-foreground hover:text-primary transition-colors">
                Skills
              </Link>
            </li>
            <li>
              <Link to="/contact" className="text-muted-foreground hover:text-primary transition-colors">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Social Media & Contact */}
        <div className="flex flex-col items-center md:items-start">
          <h3 className="text-xl font-semibold text-color-heading mb-5">Connect</h3>
          <div className="flex space-x-6 mb-6">
            <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
              <Github className="h-7 w-7" />
            </a>
            <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
              <Linkedin className="h-7 w-7" />
            </a>
            <a href="https://twitter.com/yourhandle" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
              <Twitter className="h-7 w-7" />
            </a>
          </div>
          <p className="text-muted-foreground text-sm">
            &copy; {new Date().getFullYear()} MyPortfolio. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
