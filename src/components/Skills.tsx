import { Badge } from "@/components/ui/badge";

export const Skills = () => {
  const skillCategories = [
    {
      title: "Design",
      skills: ["UI/UX Design", "Figma", "Adobe XD", "Wireframing", "Prototyping"]
    },
    {
      title: "Web Development",
      skills: ["HTML", "CSS", "JavaScript", "Responsive Design", "Git"]
    },
    {
      title: "Soft Skills",
      skills: ["Problem Solving", "Kolaborasi Tim", "Komunikasi", "Analisis Kebutuhan"]
    }
  ];

  return (
    <section id="skills" className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl md:text-5xl font-bold">Keahlian</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Teknologi dan tools yang saya kuasai untuk menciptakan solusi digital
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
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
