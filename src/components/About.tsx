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
    <section id="about" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl md:text-5xl font-bold">Profil</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Asal: Minahasa Selatan, Kecamatan Tumpaan, Desa Popontolen
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
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-semibold mb-3">Visi</h3>
              <p className="text-lg leading-relaxed text-muted-foreground">
                Menjadi profesional Sistem Informasi yang mampu menghadirkan solusi digital inovatif, efisien, 
                dan berkelanjutan untuk mendukung transformasi digital organisasi.
              </p>
            </div>
            
            <div>
              <h3 className="text-2xl font-semibold mb-3">Misi</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex gap-3">
                  <span className="text-primary mt-1">•</span>
                  <span>Mengembangkan kompetensi teknis dan analitis melalui pembelajaran berkelanjutan.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary mt-1">•</span>
                  <span>Menciptakan solusi teknologi yang aman, user-friendly, dan sesuai standar industri.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary mt-1">•</span>
                  <span>Menjaga integritas, profesionalisme, dan etika kerja dalam setiap proses pekerjaan.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary mt-1">•</span>
                  <span>Berkolaborasi secara efektif dengan tim serta berkomunikasi jelas dengan stakeholder.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary mt-1">•</span>
                  <span>Memberikan kontribusi nyata terhadap peningkatan kinerja dan produktivitas perusahaan melalui implementasi teknologi.</span>
                </li>
              </ul>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};
