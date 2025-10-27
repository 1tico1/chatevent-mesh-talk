import { Wifi, Database, Repeat, CheckCircle } from "lucide-react";

const steps = [
  {
    icon: Wifi,
    keyword: "Tempo real",
    tail: "via internet (Supabase Realtime)",
    description: "Comunicação instantânea quando há conectividade estável.",
  },
  {
    icon: Database,
    keyword: "Cache local",
    tail: "automático (IndexedDB)",
    description: "Mensagens são salvas no dispositivo; histórico disponível mesmo offline.",
  },
  {
    icon: Repeat,
    keyword: "Fila de pendências",
    tail: "(envia depois, sozinho)",
    description: "Sem conexão? As mensagens ficam na fila e são reenviadas quando a rede volta.",
  },
  {
    icon: CheckCircle,
    keyword: "Indicadores claros",
    tail: "(pendente/entregue/lida + não-lidas)",
    description: "Acompanhe status de entrega/leitura e contadores por canal.",
  },
];

const HowItWorks = () => {
  return (
    <section className="py-24 relative overflow-hidden" id="como-funciona">
      <div className="absolute inset-0 gradient-secondary" />
      
      <div className="container relative z-10 px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-4xl sm:text-5xl font-bold">
            Como funciona a sincronização
          </h2>
          <p className="text-xl text-muted-foreground">
            Tempo real quando possível, offline-first sempre — o usuário conversa, o sistema cuida do resto
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {steps.map((step, index) => (
              <div
                key={index}
                className="relative p-8 rounded-2xl bg-card/50 backdrop-blur-sm border border-border hover:border-primary/50 transition-smooth group"
              >
                {/* Connection line for desktop */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-primary/50 to-transparent" />
                )}
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center shrink-0 group-hover:scale-110 transition-smooth glow">
                    <step.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div className="space-y-2 flex-1">
                    <h3 className="text-xl font-bold">
                      <span className="font-bold">{index + 1}. {step.keyword}</span> {step.tail}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Visual flow indicator */}
          <div className="mt-16 p-8 rounded-2xl bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 border border-primary/20">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 text-sm font-medium text-center">
              <span className="text-foreground">Com internet</span>
              <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              <span className="text-muted-foreground hidden sm:inline">→</span>
              <span className="text-foreground">Realtime instantâneo</span>
              <span className="text-muted-foreground hidden sm:inline">|</span>
              <span className="text-foreground">Sem internet</span>
              <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              <span className="text-muted-foreground hidden sm:inline">→</span>
              <span className="text-foreground">Fila local + reenvio automático</span>
            </div>
            <p className="mt-4 text-center text-sm text-muted-foreground">
              Legenda: <span className="font-semibold">Com internet → Realtime</span> • <span className="font-semibold">Sem internet → Fila local + reenvio automático</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;