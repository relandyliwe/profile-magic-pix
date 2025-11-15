import { Heart } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="py-10 px-4 border-t border-border bg-muted/20">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground">
            © {new Date().getFullYear()} Relandy liwe. All rights reserved.
          </p>
          
          <p className="text-muted-foreground flex items-center gap-2">
            Dibuat dengan <Heart className="w-4 h-4 text-primary fill-primary" /> menggunakan React & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
};
