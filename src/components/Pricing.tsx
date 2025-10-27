import { Check, ArrowRight, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";

const plan = {
  name: "Chatevent",
  price: "Sob consulta",
  description: "Plataforma completa de comunicação em tempo real para eventos e operações",
  features: [
    "Clientes e salas ilimitados*",
    "Chat público, canais (#staff, #palco) e DMs",
    "Rádio ao vivo (opcional)*",
    "Sincronização offline automática (IndexedDB)",
    "Presença online e apelidos",
    "Menções com @ para destacar pessoas",
    "Ações na mensagem (responder, encaminhar, copiar, favoritar, denunciar)",
    "Indicadores de status (pendente, entregue, lida)",
    "Contadores de não-lidas por canal",
    "Moderação: remover mensagens para todos",
    "Painel admin (criar clientes/salas, gerenciar canais e usuários)",
    "PWA instalável (desktop e mobile)",
    "Multilíngue: PT-BR, EN, ES (com tradução automática)",
    "Notificações push (quando habilitadas)",
    "Suporte técnico e atualizações incluídas",
  ],
  cta: "Solicitar proposta",
};

const Pricing = () => {
  return (
    <section className="py-24 bg-background" id="pricing">
      <div className="container px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-4xl sm:text-5xl font-bold">
            Tudo incluído, sem surpresas
          </h2>
          <p className="text-xl text-muted-foreground">
            Plataforma completa para manter sua equipe conectada em qualquer situação
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="relative p-8 rounded-2xl border border-primary bg-card card-shadow glow">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2">
              <span className="px-4 py-1 rounded-full gradient-primary text-primary-foreground text-sm font-semibold">
                Produção
              </span>
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <p className="text-muted-foreground">{plan.description}</p>
              </div>

              <div className="flex items-baseline gap-2">
                <span className="inline-block px-3 py-1 rounded-md gradient-primary text-foreground text-4xl font-bold">
                  {plan.price}
                </span>
              </div>

              <ul className="space-y-4">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="text-xs text-muted-foreground space-y-1 pt-2">
                <p>• Rádio ao vivo depende de configuração do LiveKit.</p>
                <p>• Capacidades sujeitas a limites do provedor (ex.: plano do Supabase).</p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button variant="hero" size="lg" className="flex-1 group">
                  {plan.cta}
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button variant="ghost-outline" size="lg" className="flex-1">
                  <Calendar className="w-5 h-5" />
                  Agendar demonstração
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 text-center max-w-3xl mx-auto">
          <p className="text-muted-foreground">
            Implementação inclui onboarding, suporte técnico, atualizações contínuas e acesso à documentação completa.
            <br />
            Entre em contato para conhecer opções de POC e onboarding assistido.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;