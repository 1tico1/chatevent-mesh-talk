import { Radio, MessageSquare, Shield, Zap, Globe, Users } from "lucide-react";

const features = [
  {
    icon: MessageSquare,
    title: "Comunicação organizada",
    description: "Chat público, canais (#staff, #palco) e DMs em um só lugar — menos ruído, mais foco.",
  },
  {
    icon: Radio,
    title: "Rádio no navegador (opcional)",
    description: "Transmissão de voz via LiveKit para briefings e anúncios — sem rádios tradicionais. ⚑",
  },
  {
    icon: Zap,
    title: "Offline-first",
    description: "Cache local (IndexedDB) e reenvio automático quando a internet volta — continuidade garantida.",
  },
  {
    icon: Shield,
    title: "Isolamento por escopo",
    description: "Cada cliente/sala funciona de forma independente — zero vazamento entre eventos.",
  },
  {
    icon: Users,
    title: "Presença e ações",
    description: "Quem está online, menções com @nome, responder com citação, encaminhar preservando autor, copiar, favoritar, denunciar e excluir localmente.",
  },
  {
    icon: Globe,
    title: "PWA multilíngue",
    description: "Instalável no desktop e no mobile, interface PT-BR/EN/ES e tradução automática — sem instalar nada.",
  },
];

const Features = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 gradient-accent" />
      
      <div className="container relative z-10 px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-4xl sm:text-5xl font-bold">
            Tudo que sua equipe precisa para se comunicar
          </h2>
          <p className="text-xl text-muted-foreground">
            Funcionalidades essenciais que mantêm todos sincronizados, com ou sem internet
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

        <p className="mt-8 text-xs text-muted-foreground text-center">⚑ Rádio ao vivo sujeito a habilitação e configuração de LiveKit.</p>
      </div>
    </section>
  );
};

export default Features;
