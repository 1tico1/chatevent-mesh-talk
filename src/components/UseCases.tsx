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
    <section className="py-24 bg-background">
      <div className="container px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-4xl sm:text-5xl font-bold">
            Casos de uso reais
          </h2>
          <p className="text-xl text-muted-foreground">
            Organizações de todos os portes confiam no Chatevent para manter suas equipes conectadas
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {useCases.map((useCase, index) => (
            <div
              key={index}
              className="p-8 rounded-2xl bg-card border border-border hover:border-primary/30 transition-smooth group"
            >
              <div className="flex items-start gap-6">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-smooth">
                  <useCase.icon className="w-7 h-7 text-primary" />
                </div>
                <div className="space-y-4 flex-1">
                  <h3 className="text-2xl font-bold">{useCase.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {useCase.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {useCase.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-3 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary border border-primary/20"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UseCases;
