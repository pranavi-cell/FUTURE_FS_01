import { Code2, Palette, Rocket, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const skills = [
  {
    category: "Frontend",
    items: ["React", "TypeScript", "Tailwind CSS", "Next.js", "Vue.js"],
  },
  {
    category: "Backend",
    items: ["Node.js", "Express", "PostgreSQL", "MongoDB", "REST APIs"],
  },
  {
    category: "Tools & Others",
    items: ["Git", "Docker", "AWS", "CI/CD", "Agile/Scrum"],
  },
];

const highlights = [
  {
    icon: Code2,
    title: "Clean Code",
    description: "Writing maintainable and scalable code following best practices",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "Creating beautiful and intuitive user interfaces",
  },
  {
    icon: Rocket,
    title: "Performance",
    description: "Optimizing applications for speed and efficiency",
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "Working effectively in cross-functional teams",
  },
];

const About = () => {
  return (
    <section id="about" className="py-20 bg-gradient-subtle">
      <div className="container px-4 mx-auto">
        <div className="max-w-6xl mx-auto space-y-16">
          {/* Section Header */}
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              About Me
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Passionate developer with expertise in building modern web applications
            </p>
          </div>

          {/* About Content */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-foreground">
                Bringing Ideas to Life Through Code
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                With over X years of experience in web development, I specialize in creating 
                responsive, user-friendly applications that solve real-world problems. My journey 
                in tech has been driven by curiosity and a commitment to continuous learning.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                I thrive in collaborative environments and enjoy the challenge of turning complex 
                requirements into elegant solutions. When I'm not coding, you'll find me exploring 
                new technologies or contributing to open-source projects.
              </p>
            </div>

            {/* Highlights Grid */}
            <div className="grid grid-cols-2 gap-4">
              {highlights.map((highlight) => (
                <Card 
                  key={highlight.title}
                  className="border-border shadow-soft hover:shadow-medium transition-smooth"
                >
                  <CardContent className="p-6 space-y-2">
                    <highlight.icon className="h-8 w-8 text-primary mb-2" />
                    <h4 className="font-semibold text-foreground">{highlight.title}</h4>
                    <p className="text-sm text-muted-foreground">{highlight.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Skills Section */}
          <div className="space-y-8">
            <h3 className="text-3xl font-bold text-center text-foreground">Technical Skills</h3>
            <div className="grid md:grid-cols-3 gap-8">
              {skills.map((skillSet) => (
                <Card 
                  key={skillSet.category}
                  className="border-border shadow-soft hover:shadow-medium transition-smooth"
                >
                  <CardContent className="p-6 space-y-4">
                    <h4 className="text-xl font-semibold text-primary">{skillSet.category}</h4>
                    <div className="flex flex-wrap gap-2">
                      {skillSet.items.map((skill) => (
                        <span 
                          key={skill}
                          className="px-3 py-1 bg-secondary text-secondary-foreground text-sm rounded-full"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
