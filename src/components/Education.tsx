import { Card } from "@/components/ui/card";
import { GraduationCap, MapPin, Calendar } from "lucide-react";

export const Education = () => {
  return (
    <section id="education" className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl md:text-5xl font-bold">Pendidikan</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Perjalanan akademis saya di bidang Sistem Informasi
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-primary"></div>

          <div className="space-y-12">
            {/* Current Education */}
            <div className="relative pl-20">
              <div className="absolute left-5 top-0 w-7 h-7 rounded-full bg-primary border-4 border-background shadow-glow"></div>
              
              <Card className="p-6 shadow-elegant hover:shadow-glow transition-slow group">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-gradient-accent group-hover:scale-110 transition-smooth">
                    <GraduationCap className="w-6 h-6 text-primary" />
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-3">
                      <h3 className="text-xl font-semibold">Fakultas Ilmu Komputer</h3>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Calendar className="w-4 h-4" />
                        <span>Sekarang</span>
                      </div>
                    </div>
                    
                    <p className="text-lg text-primary font-medium mb-2">
                      Jurusan Sistem Informasi
                    </p>
                    
                    <div className="flex items-center gap-2 text-muted-foreground mb-4">
                      <MapPin className="w-4 h-4" />
                      <span>Minahasa Selatan, Kecamatan Tumpaan, Desa Popontolen</span>
                    </div>
                    
                    <div className="space-y-2">
                      <p className="text-sm text-muted-foreground">
                        Fokus pembelajaran:
                      </p>
                      <div className="flex flex-wrap gap-2">
                        <span className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary font-medium">
                          Analisis Sistem
                        </span>
                        <span className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary font-medium">
                          Database Management
                        </span>
                        <span className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary font-medium">
                          Web Development
                        </span>
                        <span className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary font-medium">
                          UI/UX Design
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
