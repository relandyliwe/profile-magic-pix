import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import profileImage from "@/assets/profile.jpg";

export const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center gradient-hero relative overflow-hidden pt-20">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      
      {/* Floating gradient orbs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in">
          <div className="relative inline-block">
            <div className="absolute inset-0 rounded-full bg-gradient-primary blur-2xl opacity-50 animate-pulse"></div>
            <img
              src={profileImage}
              alt="Relandy liwe - Mahasiswa Sistem Informasi"
              className="w-40 h-40 md:w-56 md:h-56 rounded-full object-cover border-4 border-background shadow-elegant relative mx-auto transition-slow hover:scale-105 hover:shadow-glow ring-4 ring-primary/10"
            />
          </div>
          
          <div className="space-y-6">
            <div>
              <p className="text-primary font-semibold text-lg mb-2 tracking-wide">MAHASISWA SISTEM INFORMASI</p>
              <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-4">
                Hi, Saya <span className="gradient-text">Relandy liwe</span>
              </h1>
            </div>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Dari Minahasa Selatan, berfokus pada pengembangan solusi digital yang inovatif 
              dan berorientasi pada transformasi teknologi
            </p>
          </div>
          
          <div className="flex gap-4 justify-center flex-wrap pt-4">
            <Button 
              size="lg" 
              className="gradient-primary text-white hover:opacity-90 shadow-elegant hover:shadow-glow transition-slow text-base px-8 py-6"
              onClick={() => scrollToSection("education")}
            >
              Lihat Pendidikan
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="hover:bg-primary hover:text-white transition-slow text-base px-8 py-6 border-2"
              onClick={() => scrollToSection("contact")}
            >
              Hubungi Saya
            </Button>
          </div>
          
          <button
            onClick={() => scrollToSection("about")}
            className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-muted-foreground hover:text-primary transition-smooth"
            aria-label="Scroll ke bagian profil"
          >
            <ArrowDown className="w-6 h-6" />
          </button>
        </div>
      </div>
      
      <style>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }
        
        .bg-grid-pattern {
          background-image: 
            linear-gradient(to right, hsl(var(--border)) 1px, transparent 1px),
            linear-gradient(to bottom, hsl(var(--border)) 1px, transparent 1px);
          background-size: 60px 60px;
        }
      `}</style>
    </section>
  );
};
