import { Badge } from "@/components/ui/badge";

export const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      skills: ["React", "TypeScript", "Tailwind CSS", "Next.js", "Vue.js", "HTML5", "CSS3"]
    },
    {
      title: "Backend Development",
      skills: ["Node.js", "Express", "PostgreSQL", "MongoDB", "REST APIs", "GraphQL"]
    },
    {
      title: "Tools & Technologies",
      skills: ["Git", "Docker", "Figma", "AWS", "Vercel", "CI/CD"]
    },
    {
      title: "Soft Skills",
      skills: ["Problem Solving", "Team Collaboration", "Communication", "Time Management"]
    }
  ];

  return (
    <section id="skills" className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl md:text-5xl font-bold">Skills & Expertise</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Technologies and tools I work with to bring ideas to life
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <div 
              key={index}
              className="space-y-4 p-8 rounded-lg bg-card border border-border shadow-elegant hover:shadow-glow transition-smooth"
            >
              <h3 className="text-2xl font-semibold mb-4">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <Badge 
                    key={skillIndex}
                    variant="secondary"
                    className="text-base py-2 px-4 hover:bg-primary hover:text-white transition-smooth cursor-default"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
