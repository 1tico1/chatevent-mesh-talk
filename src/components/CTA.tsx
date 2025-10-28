import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, Phone } from "lucide-react";


const CTA = () => {
  
  return (
    <section id="contato" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 gradient-primary opacity-10" />
      
      <div className="container relative z-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="p-12 rounded-3xl bg-card/50 backdrop-blur-sm border border-primary/30 card-shadow text-center space-y-8">


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
              <Button variant="hero" size="lg" className="group" asChild>
                <a href="https://chatevent.com.br/" target="_blank" rel="noopener noreferrer">
                  <Calendar className="w-5 h-5" />
                  Testar demo
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
              <Button variant="ghost-outline" size="lg" asChild>
                <a href="https://wa.me/5511999999999" target="_blank" rel="noopener noreferrer">
                  Falar com especialista
                </a>
              </Button>
            </div>

            <div className="pt-8 border-t border-border/50">
              <p className="text-sm text-muted-foreground">
                Sistema em produção • Pronto para operar
              </p>
            </div>

            {/* Modal para botões não funcionais */}
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
