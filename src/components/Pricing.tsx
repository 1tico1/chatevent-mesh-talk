import { Check, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const plans = [
  {
    name: "Profissional",
    price: "Sob consulta",
    description: "Para eventos e equipes que exigem operação confiável",
    features: [
      "Clientes e salas ilimitados",
      "Chat em tempo real (público, canais, DMs)",
      "Rádio ao vivo com LiveKit",
      "Sistema híbrido (Internet + Bluetooth)",
      "Offline-first com sincronização",
      "Moderação e controle de acesso",
      "PWA multiplataforma",
      "Suporte técnico",
      "Atualizações incluídas",
    ],
    cta: "Solicitar proposta",
    popular: false,
  },
  {
    name: "Enterprise",
    price: "Personalizado",
    description: "Para organizações com requisitos avançados de segurança e integração",
    features: [
      "Tudo do Profissional, mais:",
      "SSO/IdP (SAML, SCIM)",
      "SLA garantido",
      "Ambiente dedicado",
      "Data residency configurável",
      "Logs de auditoria exportáveis",
      "Integrações avançadas via API",
      "Implantação assistida",
      "Suporte prioritário 24/7",
      "Treinamento e onboarding dedicado",
    ],
    cta: "Falar com especialista",
    popular: true,
  },
];

const Pricing = () => {
  return (
    <section className="py-24 bg-background" id="pricing">
      <div className="container px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-4xl sm:text-5xl font-bold">
            Planos para qualquer escala
          </h2>
          <p className="text-xl text-muted-foreground">
            Escolha o plano ideal para suas necessidades. Todos com sistema híbrido completo.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative p-8 rounded-2xl border transition-smooth ${
                plan.popular
                  ? "border-primary bg-card card-shadow glow scale-105"
                  : "border-border bg-card hover:border-primary/30"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="px-4 py-1 rounded-full gradient-primary text-primary-foreground text-sm font-semibold">
                    Mais popular
                  </span>
                </div>
              )}

              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                  <p className="text-muted-foreground">{plan.description}</p>
                </div>

                <div className="flex items-baseline gap-2">
                  <span className="text-4xl font-bold gradient-primary bg-clip-text text-transparent">
                    {plan.price}
                  </span>
                </div>

                <ul className="space-y-4">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                      <span className={feature.startsWith("Tudo do") ? "font-semibold" : ""}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <Button
                  variant={plan.popular ? "hero" : "ghost-outline"}
                  size="lg"
                  className="w-full group"
                >
                  {plan.cta}
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center max-w-3xl mx-auto">
          <p className="text-muted-foreground">
            Todas as implementações incluem suporte técnico, atualizações e acesso à documentação completa.
            <br />
            Entre em contato para conhecer opções de POC e migração assistida.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
