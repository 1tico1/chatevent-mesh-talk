import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, Phone } from "lucide-react";

const CTA = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 gradient-primary opacity-10" />
      
      <div className="container relative z-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="p-12 rounded-3xl bg-card/50 backdrop-blur-sm border border-primary/30 card-shadow text-center space-y-8">
            {/* Contact quick links */}
            <div className="flex items-center justify-center gap-4 text-sm">
              <a href="https://wa.me/5511999999999" className="text-primary underline underline-offset-2">WhatsApp (clique para conversar)</a>
              <span className="text-muted-foreground">•</span>
              <a href="tel:+5511999999999" className="text-primary underline underline-offset-2">Telefone</a>
            </div>

            <div className="space-y-4">
              <h2 className="text-4xl sm:text-5xl font-bold">
                Pronto para manter sua equipe
                <br />
                <span className="inline-block px-2 py-1 rounded-md gradient-primary text-foreground">
                  sempre conectada?
                </span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Agende uma demonstração personalizada e veja o Chatevent em ação no seu contexto
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button variant="hero" size="lg" className="group">
                <Calendar className="w-5 h-5" />
                Agendar demonstração
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="ghost-outline" size="lg">
                Falar com especialista
              </Button>
            </div>

            <div className="pt-8 border-t border-border/50">
              <p className="text-sm text-muted-foreground">
                Sistema em produção • Pronto para operar
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
