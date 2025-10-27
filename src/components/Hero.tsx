import { Button } from "@/components/ui/button";
import { ArrowRight, Radio, MessageSquare, Wifi, WifiOff } from "lucide-react";

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
            <span className="gradient-primary bg-clip-text text-transparent">
              nunca para
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-xl sm:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            A plataforma híbrida que mantém sua equipe conectada em eventos e operações — 
            com ou sem internet, direto no navegador.
          </p>

          {/* Key features badges */}
          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-card/50 backdrop-blur-sm border border-border">
              <MessageSquare className="w-4 h-4 text-primary" />
              <span className="text-sm">Chat em tempo real</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-card/50 backdrop-blur-sm border border-border">
              <Radio className="w-4 h-4 text-primary" />
              <span className="text-sm">Rádio no navegador</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-card/50 backdrop-blur-sm border border-border">
              <Wifi className="w-4 h-4 text-primary" />
              <WifiOff className="w-4 h-4 text-primary" />
              <span className="text-sm">Funciona offline</span>
            </div>
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
            <Button variant="hero" size="lg" className="group">
              Agendar demonstração
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="ghost-outline" size="lg">
              Ver como funciona
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-16 max-w-4xl mx-auto">
            <div className="space-y-2">
              <div className="text-3xl sm:text-4xl font-bold gradient-primary bg-clip-text text-transparent">99.9%</div>
              <div className="text-sm text-muted-foreground">Uptime garantido</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl sm:text-4xl font-bold gradient-primary bg-clip-text text-transparent">&lt;100ms</div>
              <div className="text-sm text-muted-foreground">Latência média</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl sm:text-4xl font-bold gradient-primary bg-clip-text text-transparent">24/7</div>
              <div className="text-sm text-muted-foreground">Suporte ativo</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl sm:text-4xl font-bold gradient-primary bg-clip-text text-transparent">Zero</div>
              <div className="text-sm text-muted-foreground">Instalação</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
