import { MessageSquare, Radio, Megaphone } from "lucide-react";

const steps = [
  {
    icon: MessageSquare,
    keyword: "Chat multilíngue em tempo real",
    tail: "Sem barreiras",
    description:
      "Tradução automática do texto em vários idiomas, na hora. Os participantes conversam livremente, sem esbarrar no idioma.",
  },
  {
    icon: Radio,
    keyword: "Tradução simultânea no seu bolso",
    tail: "Adeus ao radinho",
    description:
      "Canais de áudio com tradução simultânea da palestra (ou áudio original), direto no smartphone. Um toque para ouvir com seus próprios fones.",
  },
  {
    icon: Megaphone,
    keyword: "Rádio do evento e comunicação centralizada",
    tail: "Informação em tempo real",
    description:
      "Anúncios, programação e avisos importantes em um canal dedicado. Centralize a comunicação no celular e simplifique a logística.",
  },
  {
    icon: Megaphone,
    keyword: "Patrocínio vivo dentro da rádio do evento",
    tail: "",
    description:
      "Aqui o patrocinador não anuncia: ele participa. A marca é integrada à programação e ao ambiente sonoro da rádio, garantindo visibilidade autêntica e constante, sem quebrar a imersão do ouvinte.",
  },
];

const HowItWorks = () => {
  return (
    <section className="py-24 relative overflow-hidden" id="como-funciona">
      <div className="absolute inset-0 gradient-secondary" />
      <div className="container relative z-10 px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-4xl sm:text-5xl font-bold uppercase">Como funciona</h2>
          <p className="text-xl text-muted-foreground">
            A plataforma ChatEvent foi projetada para ser poderosa para o organizador e simples para o participante. Revolucione logística e experiência em três passos.
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
          {/* Removido: indicador de fluxo de sincronização */}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;