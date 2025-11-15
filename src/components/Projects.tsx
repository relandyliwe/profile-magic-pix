import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

export const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A modern e-commerce solution with real-time inventory management, payment integration, and responsive design.",
      tags: ["React", "Node.js", "PostgreSQL", "Stripe"],
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      title: "Task Management App",
      description: "Collaborative task management tool with real-time updates, team collaboration features, and analytics dashboard.",
      tags: ["Next.js", "TypeScript", "Tailwind", "Firebase"],
      gradient: "from-purple-500 to-pink-500"
    },
    {
      title: "Portfolio CMS",
      description: "Content management system for creative professionals with drag-and-drop interface and custom theming.",
      tags: ["React", "Express", "MongoDB", "AWS"],
      gradient: "from-green-500 to-teal-500"
    },
    {
      title: "Analytics Dashboard",
      description: "Real-time analytics platform with interactive charts, data visualization, and export functionality.",
      tags: ["Vue.js", "D3.js", "Node.js", "GraphQL"],
      gradient: "from-orange-500 to-red-500"
    }
  ];

  return (
    <section id="projects" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl md:text-5xl font-bold">Featured Projects</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A selection of my recent work and personal projects
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={index}
              className="overflow-hidden hover:shadow-glow transition-smooth group"
            >
              <div className={`h-48 bg-gradient-to-br ${project.gradient} relative`}>
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-smooth"></div>
              </div>
              
              <div className="p-6 space-y-4">
                <h3 className="text-2xl font-semibold">{project.title}</h3>
                <p className="text-muted-foreground">{project.description}</p>
                
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex}
                      className="text-sm px-3 py-1 rounded-full bg-muted text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-3 pt-4">
                  <Button variant="outline" size="sm" className="gap-2">
                    <Github className="w-4 h-4" />
                    Code
                  </Button>
                  <Button size="sm" className="gap-2 gradient-primary text-white">
                    <ExternalLink className="w-4 h-4" />
                    Live Demo
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
