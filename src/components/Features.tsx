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
    <section id="funcionalidades" className="py-24 relative overflow-hidden">
      {/* conteúdo da seção de funcionalidades */}
    </section>
  );
};

export default Features;
