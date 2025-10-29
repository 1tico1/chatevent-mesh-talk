import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const About = () => {
  return (
    <section id="sobre" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 gradient-secondary opacity-5" />
      <div className="container relative z-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center mb-16 space-y-4">
          <h2 className="text-4xl sm:text-5xl font-bold">Comunicação Inteligente. Custo Reduzido. Evento Simplificado.</h2>
          <p className="text-xl text-muted-foreground">
            Elimine custos com aluguel de equipamentos e simplifique a logística do seu evento.
          </p>
        </div>
        <div className="max-w-5xl mx-auto grid gap-8">
          <div className="p-6 rounded-2xl bg-card/50 backdrop-blur-sm border border-border">
            <h3 className="text-xl font-semibold mb-2">Foco em Economia e Eficiência</h3>
            <p className="text-muted-foreground leading-relaxed">
              Zero aluguel de equipamento. Sem transporte, armazenamento ou logística de distribuição de receptores. Esqueça inventário, pilhas e cobranças de devolução. Reduza despesas operacionais e invista mais no conteúdo, maximizando o ROI.
            </p>
          </div>
          <div className="p-6 rounded-2xl bg-card/50 backdrop-blur-sm border border-border">
            <h3 className="text-xl font-semibold mb-2">Foco em Facilidade de Uso (Para Você e Seu Público)</h3>
            <p className="text-muted-foreground leading-relaxed">
              Acesso instantâneo no navegador, sem instalar aplicativo. Tradução na ponta do dedo: participantes ouvem a tradução ou a palestra no próprio smartphone, usando seus fones. Comunicação imediata via chat multilíngue, promovendo networking e engajamento sem atritos.
            </p>
          </div>
          <div className="p-6 rounded-2xl bg-card/50 backdrop-blur-sm border border-border">
            <h3 className="text-xl font-semibold mb-2">A Escolha Inteligente</h3>
            <p className="text-muted-foreground leading-relaxed">
              O ChatEvent não é apenas uma ferramenta, é uma atualização de infraestrutura. Mais simples de gerenciar, acessível para os participantes e significativamente mais econômico para o seu orçamento.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;