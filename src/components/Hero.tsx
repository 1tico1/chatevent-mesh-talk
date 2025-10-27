import { Button } from "@/components/ui/button";
import { ArrowRight, Radio, MessageSquare, Database } from "lucide-react";

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
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/20 bg-primary/5 backdrop-blur-sm">
            <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            <span className="text-sm font-medium text-foreground">Já em produção • Pronto para escalar</span>
          </div>

          {/* Main heading */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight">
            Comunicação que{" "}
            <span className="inline-block px-3 py-1 rounded-md gradient-primary text-foreground">
              funciona
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-xl sm:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            <span className="font-semibold">Chat que não para quando a internet cai.</span>
            <br />
            Plataforma de chat em tempo real que roda direto no navegador — com internet ou sem. Chat organizado,
            <span className="font-semibold"> sincronização offline automática</span> e
            <span className="font-semibold"> rádio ao vivo (opcional)</span> para briefings e anúncios.
          </p>

          {/* Key features badges */}
          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-card/50 backdrop-blur-sm border border-border">
              <MessageSquare className="w-4 h-4 text-primary" />
              <span className="text-sm">Chat em tempo real</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-card/50 backdrop-blur-sm border border-border">
              <Radio className="w-4 h-4 text-primary" />
              <span className="text-sm">Rádio ao vivo (opcional)</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-card/50 backdrop-blur-sm border border-border">
              <Database className="w-4 h-4 text-primary" />
              <span className="text-sm">Sincronização offline</span>
            </div>
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
            <Button variant="hero" size="lg" className="group">
              Agendar demonstração
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="ghost-outline" size="lg" asChild>
              <a href="#como-funciona">Ver como funciona</a>
            </Button>
          </div>

          {/* Micro-selos */}
          <div className="flex flex-wrap items-center justify-center gap-3 pt-12 text-sm">
            <span className="px-3 py-1 rounded-full bg-card/50 border border-border">Pronto para operar</span>
            <span className="px-3 py-1 rounded-full bg-card/50 border border-border">Baixa latência em tempo real</span>
            <span className="px-3 py-1 rounded-full bg-card/50 border border-border">Suporte ativo</span>
            <span className="px-3 py-1 rounded-full bg-card/50 border border-border">PWA instalável</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
