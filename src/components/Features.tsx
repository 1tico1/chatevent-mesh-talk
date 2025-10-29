import { Radio, MessageSquare, Shield, Zap } from "lucide-react";

const features = [
  {
    icon: MessageSquare,
    title: "Comunicação organizada",
    description:
      "Chat público, canais (#staff, #palco) e DMs em um só lugar. Menos ruído, mais foco.",
  },
  {
    icon: Radio,
    title: "Rádio no navegador (opcional)",
    description:
      "Transmissão de voz para briefings e anúncios, sem rádios tradicionais.",
  },
  {
    icon: Zap,
    title: "Confiável em redes instáveis",
    description:
      "Pensado para eventos: mantém a sessão e reconecta rápido em redes cheias. O envio depende da conexão.",
  },
  {
    icon: Shield,
    title: "Isolamento por escopo",
    description:
      "Cada cliente/sala funciona de forma independente, zero vazamento entre eventos.",
  },
];

const Features = () => {
  return (
    <section id="funcionalidades" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 gradient-secondary opacity-10" />
      <div className="container relative z-10 px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-4xl sm:text-5xl font-bold">Funcionalidades</h2>
          <p className="text-xl text-muted-foreground">O que você usa no dia a dia.</p>
        </div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {features.map((f, i) => (
            <div
              key={i}
              className="p-6 rounded-2xl bg-card/60 backdrop-blur-sm border border-border hover:border-primary/50 transition-smooth card-shadow"
            >
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl gradient-primary flex items-center justify-center shrink-0 glow">
                  <f.icon className="w-5 h-5 text-primary-foreground" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold">{f.title}</h3>
                  <p className="text-muted-foreground">{f.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
