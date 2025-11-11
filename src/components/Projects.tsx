import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "E-Commerce Platform",
    description: "A full-featured online shopping platform with payment integration, inventory management, and user authentication.",
    tech: ["React", "Node.js", "MongoDB", "Stripe"],
    demoUrl: "#",
    githubUrl: "#",
    image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&h=600&fit=crop",
  },
  {
    title: "Task Management App",
    description: "Collaborative task management tool with real-time updates, drag-and-drop functionality, and team collaboration features.",
    tech: ["TypeScript", "React", "Firebase", "Tailwind"],
    demoUrl: "#",
    githubUrl: "#",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop",
  },
  {
    title: "Social Media Dashboard",
    description: "Analytics dashboard for social media metrics with interactive charts, data visualization, and export features.",
    tech: ["Next.js", "PostgreSQL", "Chart.js", "AWS"],
    demoUrl: "#",
    githubUrl: "#",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
  },
  {
    title: "AI Content Generator",
    description: "AI-powered content creation tool that generates blog posts, social media content, and marketing copy.",
    tech: ["React", "OpenAI", "Python", "FastAPI"],
    demoUrl: "#",
    githubUrl: "#",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop",
  },
  {
    title: "Portfolio CMS",
    description: "Headless CMS for portfolio websites with drag-and-drop page builder and customizable templates.",
    tech: ["Vue.js", "Express", "MySQL", "Docker"],
    demoUrl: "#",
    githubUrl: "#",
    image: "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?w=800&h=600&fit=crop",
  },
  {
    title: "Fitness Tracker",
    description: "Mobile-responsive fitness tracking app with workout plans, progress tracking, and nutrition logging.",
    tech: ["React Native", "Node.js", "MongoDB", "Redux"],
    demoUrl: "#",
    githubUrl: "#",
    image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800&h=600&fit=crop",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container px-4 mx-auto">
        <div className="max-w-6xl mx-auto space-y-12">
          {/* Section Header */}
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              Featured Projects
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A showcase of my recent work and personal projects
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <Card 
                key={project.title}
                className="group border-border shadow-soft hover:shadow-large transition-smooth overflow-hidden"
              >
                {/* Project Image */}
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card/90 to-transparent opacity-0 group-hover:opacity-100 transition-smooth" />
                </div>

                <CardHeader>
                  <CardTitle className="text-xl text-foreground group-hover:text-primary transition-smooth">
                    {project.title}
                  </CardTitle>
                </CardHeader>

                <CardContent className="space-y-4">
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <Badge key={tech} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>

                <CardFooter className="gap-2">
                  <Button 
                    size="sm" 
                    variant="outline"
                    className="flex-1"
                    asChild
                  >
                    <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Demo
                    </a>
                  </Button>
                  <Button 
                    size="sm" 
                    variant="outline"
                    className="flex-1"
                    asChild
                  >
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-4 w-4" />
                      Code
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
