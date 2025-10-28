import { Music, Building2, Truck, GraduationCap, Briefcase } from "lucide-react";

const useCases = [
  {
    icon: Music,
    title: "Festivais e Shows",
    description: "Produção, palco, segurança e credenciamento em tempo real.",
    tags: ["Produção", "Segurança", "Staff"],
  },
  {
    icon: Building2,
    title: "Feiras e Congressos",
    description: "Equipes por pavilhão e trilha, comunicação fluida.",
    tags: ["Staff", "Coordenação", "Multiárea"],
  },
  {
    icon: Truck,
    title: "Operações de Campo",
    description: "Continuidade com 4G instável graças ao offline-first.",
    tags: ["Logística", "Fieldops", "Mobile"],
  },
  {
    icon: GraduationCap,
    title: "Escolas e Universidades",
    description: "Canais por turma/curso e comunicação institucional.",
    tags: ["Educação", "Eventos", "Admin"],
  },
  {
    icon: Briefcase,
    title: "Plantões Corporativos",
    description: "Continuidade e reenvio automático garantem entrega.",
    tags: ["Corporativo", "24/7", "Missão crítica"],
  },
];

const UseCases = () => {
  return (
    <section id="casos-de-uso" className="py-24 bg-background">
      {/* conteúdo da seção de casos de uso */}
    </section>
  );
};

export default UseCases;
