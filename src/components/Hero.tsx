import { Button } from "@/components/ui/button";
import { ArrowRight, Radio, MessageSquare, Phone } from "lucide-react";


const Hero = () => {
  
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 gradient-secondary">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-pulse delay-1000" />
        </div>
      </div>

      {/* Content */}
      <div className="container relative z-10 px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-5xl mx-auto text-center space-y-8">
          <img
            src="/logo.png"
            alt="ChatEvent"
            className="mx-auto w-56 sm:w-64 h-auto opacity-90"
            loading="eager"
            decoding="async"
            draggable={false}
          />
          {/* Main heading */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight">
            Comunicação{" "}
            <span className="inline-block px-2 py-0.5 rounded-md gradient-primary text-foreground text-[0.78em] sm:text-[0.83em] md:text-[0.88em]">
              Sem Fronteiras
            </span>{" "}
            para o Seu Evento
          </h1>
          {/* Subheading */}
          <p className="text-xl sm:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            O Futuro da Tradução em Eventos Chegou. Diga adeus ao radinho!
            <br />
            Transforme a experiência de comunicação no seu evento com o ChatEvent. Quebre barreiras de idioma e conecte todos os participantes em tempo real, direto no celular.
          </p>
          {/* Key features badges */}
          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-card/50 backdrop-blur-sm border border-border">
              <MessageSquare className="w-4 h-4 text-primary" />
              <span className="text-sm">Chat multilíngue em tempo real</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-card/50 backdrop-blur-sm border border-border">
              <Radio className="w-4 h-4 text-primary" />
              <span className="text-sm">Tradução simultânea no seu bolso</span>
            </div>
          </div>
          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
            <Button variant="hero" size="lg" className="group" asChild>
              <a href="https://app.chatevent.com.br/c/site" target="_blank" rel="noopener noreferrer">
                Testar demo
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
            <Button variant="ghost-outline" size="lg" asChild>
              <a href="#como-funciona">Ver como funciona</a>
            </Button>
          </div>

        </div>
      </div>
      {/* Floating WhatsApp button (link) */}
      <a
        href="https://wa.me/5511963005733"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp"
        className="fixed bottom-6 right-6 z-20 w-12 h-12 rounded-full bg-green-500 hover:bg-green-600 shadow-lg flex items-center justify-center transition-colors"
      >
        <Phone className="w-6 h-6 text-white" />
      </a>
    </section>
  );
};

export default Hero;
