import { Card } from "@/components/ui/card";
import { Code2, Palette, Rocket } from "lucide-react";

export const About = () => {
  const features = [
    {
      icon: Code2,
      title: "Clean Code",
      description: "Writing maintainable, efficient, and scalable code that stands the test of time."
    },
    {
      icon: Palette,
      title: "Design Focus",
      description: "Creating beautiful, intuitive interfaces that users love to interact with."
    },
    {
      icon: Rocket,
      title: "Fast Delivery",
      description: "Delivering high-quality projects on time without compromising on excellence."
    }
  ];

  return (
    <section id="about" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl md:text-5xl font-bold">About Me</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Passionate about creating exceptional digital experiences through code and design
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card 
                key={index}
                className="p-8 hover:shadow-elegant transition-smooth hover:scale-105 border-2 hover:border-primary/50"
              >
                <div className="mb-4">
                  <div className="w-14 h-14 rounded-lg gradient-primary flex items-center justify-center">
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </Card>
            );
          })}
        </div>
        
        <Card className="p-8 md:p-12 shadow-elegant">
          <p className="text-lg leading-relaxed text-muted-foreground">
            I'm a creative professional with a passion for building beautiful, functional web applications. 
            With expertise in modern web technologies and a keen eye for design, I transform ideas into 
            engaging digital experiences. I believe in the power of clean code, thoughtful design, and 
            continuous learning to create solutions that make a difference.
          </p>
        </Card>
      </div>
    </section>
  );
};
