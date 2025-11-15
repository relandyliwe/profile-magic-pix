import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";

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
    <section id="skills" className="py-24 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center space-y-4 mb-20">
          <p className="text-primary font-semibold text-sm tracking-widest uppercase">Kompetensi</p>
          <h2 className="text-4xl md:text-5xl font-bold">Keahlian & Teknologi</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Teknologi dan tools yang saya kuasai untuk menciptakan solusi digital
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <Card
              key={index}
              className="p-8 shadow-soft hover:shadow-elegant transition-slow group border-2 hover:border-primary/20"
            >
              <div className="mb-6">
                <div className="inline-flex p-3 rounded-xl bg-gradient-accent group-hover:scale-110 transition-smooth">
                  <div className="w-2 h-2 rounded-full bg-primary"></div>
                </div>
              </div>
              <h3 className="text-2xl font-semibold mb-6">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <Badge 
                    key={skillIndex}
                    variant="secondary"
                    className="text-sm py-2 px-4 hover:bg-primary hover:text-white transition-smooth cursor-default font-medium"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
