import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Linkedin, Github, Send } from "lucide-react";

export const Contact = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <section id="contact" className="py-24 px-4 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center space-y-4 mb-20">
          <p className="text-primary font-semibold text-sm tracking-widest uppercase">Kontak</p>
          <h2 className="text-4xl md:text-5xl font-bold">Mari Terhubung</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Tertarik untuk berkolaborasi? Jangan ragu untuk menghubungi saya
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <div className="space-y-6">
            <Card className="p-8 shadow-elegant border-2">
              <h3 className="text-2xl font-semibold mb-8">Informasi Kontak</h3>
              
              <div className="space-y-4">
                <a 
                  href="mailto:your.email@example.com"
                  className="flex items-center gap-4 p-4 rounded-xl hover:bg-muted transition-slow group"
                >
                  <div className="w-14 h-14 rounded-xl gradient-primary flex items-center justify-center group-hover:scale-110 transition-smooth shadow-soft">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-medium">Email</p>
                    <p className="text-sm text-muted-foreground">your.email@example.com</p>
                  </div>
                </a>
                
                <a 
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-xl hover:bg-muted transition-slow group"
                >
                  <div className="w-14 h-14 rounded-xl gradient-primary flex items-center justify-center group-hover:scale-110 transition-smooth shadow-soft">
                    <Linkedin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-medium">LinkedIn</p>
                    <p className="text-sm text-muted-foreground">Connect with me</p>
                  </div>
                </a>
                
                <a 
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-xl hover:bg-muted transition-slow group"
                >
                  <div className="w-14 h-14 rounded-xl gradient-primary flex items-center justify-center group-hover:scale-110 transition-smooth shadow-soft">
                    <Github className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-medium">GitHub</p>
                    <p className="text-sm text-muted-foreground">Check out my code</p>
                  </div>
                </a>
              </div>
            </Card>
          </div>
          
          <Card className="p-8 shadow-elegant border-2">
            <h3 className="text-2xl font-semibold mb-8">Kirim Pesan</h3>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Input 
                  placeholder="Nama Anda" 
                  required
                  className="h-12"
                />
              </div>
              
              <div>
                <Input 
                  type="email"
                  placeholder="Email Anda"
                  required
                  className="h-12"
                />
              </div>
              
              <div>
                <Input 
                  placeholder="Subjek" 
                  required
                  className="h-12"
                />
              </div>
              
              <div>
                <Textarea 
                  placeholder="Pesan Anda"
                  required
                  className="min-h-[150px] resize-none"
                />
              </div>
              
              <Button 
                type="submit" 
                className="w-full gradient-primary text-white h-12 text-lg gap-2"
              >
                <Send className="w-5 h-5" />
                Send Message
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
};
