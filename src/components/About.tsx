import { Card } from "@/components/ui/card";
import { Code2, Palette, Rocket } from "lucide-react";

export const About = () => {
  const features = [
    {
      icon: Code2,
      title: "Pengembangan Kompetensi",
      description: "Mengembangkan keahlian teknis melalui pembelajaran berkelanjutan dan sertifikasi."
    },
    {
      icon: Palette,
      title: "Solusi User-Friendly",
      description: "Menciptakan solusi teknologi yang aman, efisien, dan mudah digunakan sesuai standar industri."
    },
    {
      icon: Rocket,
      title: "Profesionalisme",
      description: "Menjaga integritas, etika kerja, dan berkolaborasi efektif dengan tim dan stakeholder."
    }
  ];

  return (
    <section id="about" className="py-24 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center space-y-4 mb-20">
          <p className="text-primary font-semibold text-sm tracking-widest uppercase">Tentang Saya</p>
          <h2 className="text-4xl md:text-5xl font-bold">Profil & Visi Misi</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Asal: Minahasa Selatan, Kecamatan Tumpaan, Desa Popontolen
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6 mb-20">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card 
                key={index}
                className="p-8 hover:shadow-elegant transition-slow hover:scale-105 border group"
              >
                <div className="mb-6">
                  <div className="w-16 h-16 rounded-2xl gradient-primary flex items-center justify-center group-hover:scale-110 transition-smooth shadow-soft">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </Card>
            );
          })}
        </div>
        
        <Card className="p-10 md:p-16 shadow-elegant border-2 hover:border-primary/20 transition-slow">
          <div className="space-y-10">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="h-1 w-12 gradient-primary rounded-full"></div>
                <h3 className="text-3xl font-bold">Visi</h3>
              </div>
              <p className="text-lg leading-relaxed text-muted-foreground">
                Menjadi profesional Sistem Informasi yang mampu menghadirkan solusi digital inovatif, efisien, 
                dan berkelanjutan untuk mendukung transformasi digital organisasi.
              </p>
            </div>
            
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="h-1 w-12 gradient-primary rounded-full"></div>
                <h3 className="text-3xl font-bold">Misi</h3>
              </div>
              <ul className="space-y-4">
                <li className="flex gap-4 group">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-accent flex items-center justify-center mt-0.5 group-hover:scale-110 transition-smooth">
                    <span className="text-primary font-bold text-sm">1</span>
                  </div>
                  <span className="text-muted-foreground leading-relaxed">Mengembangkan kompetensi teknis dan analitis melalui pembelajaran berkelanjutan.</span>
                </li>
                <li className="flex gap-4 group">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-accent flex items-center justify-center mt-0.5 group-hover:scale-110 transition-smooth">
                    <span className="text-primary font-bold text-sm">2</span>
                  </div>
                  <span className="text-muted-foreground leading-relaxed">Menciptakan solusi teknologi yang aman, user-friendly, dan sesuai standar industri.</span>
                </li>
                <li className="flex gap-4 group">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-accent flex items-center justify-center mt-0.5 group-hover:scale-110 transition-smooth">
                    <span className="text-primary font-bold text-sm">3</span>
                  </div>
                  <span className="text-muted-foreground leading-relaxed">Menjaga integritas, profesionalisme, dan etika kerja dalam setiap proses pekerjaan.</span>
                </li>
                <li className="flex gap-4 group">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-accent flex items-center justify-center mt-0.5 group-hover:scale-110 transition-smooth">
                    <span className="text-primary font-bold text-sm">4</span>
                  </div>
                  <span className="text-muted-foreground leading-relaxed">Berkolaborasi secara efektif dengan tim serta berkomunikasi jelas dengan stakeholder.</span>
                </li>
                <li className="flex gap-4 group">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-accent flex items-center justify-center mt-0.5 group-hover:scale-110 transition-smooth">
                    <span className="text-primary font-bold text-sm">5</span>
                  </div>
                  <span className="text-muted-foreground leading-relaxed">Memberikan kontribusi nyata terhadap peningkatan kinerja dan produktivitas perusahaan melalui implementasi teknologi.</span>
                </li>
              </ul>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};
