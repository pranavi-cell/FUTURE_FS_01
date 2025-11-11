import { Button } from "@/components/ui/button";
import { ArrowRight, Download, Github, Linkedin, Mail } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroBg} 
          alt="Hero background" 
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-hero opacity-80" />
      </div>

      {/* Content */}
      <div className="container relative z-10 px-4 py-20 mx-auto">
        <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in">
          {/* Main heading */}
          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl font-bold text-primary-foreground tracking-tight">
              Hi, I'm <span className="text-accent">Your Name</span>
            </h1>
            <p className="text-2xl md:text-3xl text-primary-foreground/90 font-light">
              Full-Stack Developer & Creative Problem Solver
            </p>
          </div>

          {/* Description */}
          <p className="text-lg md:text-xl text-primary-foreground/80 max-w-2xl mx-auto leading-relaxed">
            I craft elegant digital experiences with modern web technologies. 
            Passionate about building scalable applications that make a difference.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Button 
              size="lg" 
              onClick={() => scrollToSection("projects")}
              className="bg-accent hover:bg-accent/90 text-accent-foreground shadow-glow transition-smooth group"
            >
              View My Work
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              onClick={() => scrollToSection("contact")}
              className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 backdrop-blur-sm transition-smooth"
            >
              Get In Touch
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 backdrop-blur-sm transition-smooth"
            >
              <Download className="mr-2 h-5 w-5" />
              Resume
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex gap-4 justify-center pt-8">
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-primary-foreground/10 backdrop-blur-sm hover:bg-primary-foreground/20 transition-smooth"
            >
              <Github className="h-6 w-6 text-primary-foreground" />
            </a>
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-primary-foreground/10 backdrop-blur-sm hover:bg-primary-foreground/20 transition-smooth"
            >
              <Linkedin className="h-6 w-6 text-primary-foreground" />
            </a>
            <a 
              href="mailto:your.email@example.com"
              className="p-3 rounded-full bg-primary-foreground/10 backdrop-blur-sm hover:bg-primary-foreground/20 transition-smooth"
            >
              <Mail className="h-6 w-6 text-primary-foreground" />
            </a>
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
            <div className="w-6 h-10 border-2 border-primary-foreground/30 rounded-full flex items-start justify-center p-2">
              <div className="w-1 h-2 bg-primary-foreground/50 rounded-full" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
