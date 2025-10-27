import { Wifi, Bluetooth, Database, Repeat } from "lucide-react";

const steps = [
  {
    icon: Wifi,
    title: "1. Prioridade: Internet",
    description: "Sistema usa Supabase Realtime para comunicação em tempo real quando há conectividade.",
  },
  {
    icon: Bluetooth,
    title: "2. Fallback: Bluetooth",
    description: "Sem internet? A malha local via Web Bluetooth assume automaticamente, sem intervenção.",
  },
  {
    icon: Database,
    title: "3. Cache Local",
    description: "Tudo é guardado no IndexedDB. Mensagens não entregues ficam na fila de pendências.",
  },
  {
    icon: Repeat,
    title: "4. Sincronização",
    description: "Quando a conectividade retorna, o sistema reenvia automaticamente tudo que estava pendente.",
  },
];

const HowItWorks = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 gradient-secondary" />
      
      <div className="container relative z-10 px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-4xl sm:text-5xl font-bold">
            Como funciona o sistema híbrido
          </h2>
          <p className="text-xl text-muted-foreground">
            O usuário não precisa entender tecnologia — o Chatevent decide o melhor transporte a cada instante
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
                    <h3 className="text-xl font-bold">{step.title}</h3>
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
            <div className="flex items-center justify-center gap-4 text-sm font-medium">
              <span className="text-foreground">Internet disponível</span>
              <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              <span className="text-muted-foreground">→</span>
              <span className="text-foreground">Realtime</span>
              <span className="text-muted-foreground">|</span>
              <span className="text-foreground">Sem internet</span>
              <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              <span className="text-muted-foreground">→</span>
              <span className="text-foreground">Bluetooth</span>
              <span className="text-muted-foreground">|</span>
              <span className="text-foreground">Offline</span>
              <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              <span className="text-muted-foreground">→</span>
              <span className="text-foreground">Cache + Fila</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
