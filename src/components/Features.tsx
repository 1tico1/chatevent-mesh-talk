import { Radio, MessageSquare, Shield, Zap, Globe, Network } from "lucide-react";

const features = [
  {
    icon: Network,
    title: "Sistema Híbrido Inteligente",
    description: "Prioriza internet, mas alterna automaticamente para Bluetooth quando necessário. Sem ação manual, sem interrupções.",
  },
  {
    icon: MessageSquare,
    title: "Comunicação Organizada",
    description: "Chat público, canais temáticos (#staff, #palco), DMs privadas — tudo no mesmo lugar, sem ruído.",
  },
  {
    icon: Radio,
    title: "Rádio no Navegador",
    description: "Transmissão de voz ao vivo com LiveKit. Ideal para briefings, anúncios e coordenação em tempo real.",
  },
  {
    icon: Zap,
    title: "Offline-First",
    description: "Cache local com IndexedDB e reentrega automática. Mensagens enviadas mesmo sem conexão são sincronizadas depois.",
  },
  {
    icon: Shield,
    title: "Isolamento por Escopo",
    description: "Cada cliente/sala opera de forma independente. Zero vazamento entre eventos, máxima privacidade.",
  },
  {
    icon: Globe,
    title: "PWA Multilíngue",
    description: "Funciona direto no navegador, pode ser instalado na tela inicial. Suporte para PT-BR, EN e ES.",
  },
];

const Features = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 gradient-accent" />
      
      <div className="container relative z-10 px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-4xl sm:text-5xl font-bold">
            Resiliência real, sem complexidade
          </h2>
          <p className="text-xl text-muted-foreground">
            Tecnologia avançada que funciona de forma transparente para sua equipe
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group p-8 rounded-2xl bg-card border border-border hover:border-primary/50 transition-smooth card-shadow hover:glow"
            >
              <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center mb-6 group-hover:scale-110 transition-smooth">
                <feature.icon className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
