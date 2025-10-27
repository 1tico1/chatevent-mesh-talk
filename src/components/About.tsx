import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const About = () => {
  return (
    <section id="sobre" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 gradient-secondary opacity-5" />

      <div className="container relative z-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center mb-16 space-y-4">
          <h2 className="text-4xl sm:text-5xl font-bold">Sobre o Chatevent</h2>
          <p className="text-xl text-muted-foreground">
            A maneira mais simples e confiável de manter sua equipe conectada — com internet ou sem.
          </p>
        </div>

        <div className="max-w-5xl mx-auto grid gap-8">
          <div className="p-6 rounded-2xl bg-card/50 backdrop-blur-sm border border-border">
            <p className="text-muted-foreground leading-relaxed">
              O Chatevent roda direto no navegador, pronto para operar. Organiza conversas por canais e DMs, mostra quem está online e mantém tudo sincronizado automaticamente. Quando há internet, as mensagens chegam em tempo real; sem internet, o sistema segue funcionando: guarda tudo localmente, coloca o que não foi entregue na fila e reenvia assim que a conectividade volta. É instalação rápida como PWA, funciona em desktop e mobile, e a interface multilíngue exibe o conteúdo no idioma preferido do usuário, traduzindo quando necessário.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-card/50 backdrop-blur-sm border border-border">
            <h3 className="text-xl font-semibold mb-2">No dia a dia</h3>
            <p className="text-muted-foreground leading-relaxed">
              Canais de texto separados por tema mantêm o ruído baixo; DMs cuidam do que precisa ser privado. A presença mostra quem está disponível, e as ações na mensagem dão agilidade: responder com citação para manter contexto, encaminhar preservando autor e conteúdo, favoritar o que importa, copiar, denunciar e excluir localmente quando necessário. As menções destacam pessoas e trazem atenção ao que importa. Para quem envia, há indicadores claros de status — pendente, entregue e lida — para acompanhar o que aconteceu com a mensagem.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-card/50 backdrop-blur-sm border border-border">
            <h3 className="text-xl font-semibold mb-2">Operação organizada</h3>
            <p className="text-muted-foreground leading-relaxed">
              A operação é organizada por cliente e sala: cada ambiente é independente, com seu histórico, canais e participantes. Ao trocar de contexto, o sistema limpa o estado e carrega só o que pertence ao novo ambiente, evitando misturar conversas. O painel administrativo permite criar clientes e salas, gerenciar canais e usuários e manter o básico operando com segurança e controle. As notificações push podem ser ativadas para alertar sobre novidades, mantendo a equipe informada mesmo fora do app.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-card/50 backdrop-blur-sm border border-border">
            <h3 className="text-xl font-semibold mb-2">Para eventos e operações</h3>
            <p className="text-muted-foreground leading-relaxed">
              Para eventos, operações de campo, feiras e ambientes educacionais, o Chatevent entrega exatamente o que se precisa: comunicação contínua, organizada e previsível, que não trava e não depende de infraestrutura pesada. E quando necessário, é possível habilitar o rádio no navegador (opcional) para briefings e anúncios ao vivo, ideal para alinhar equipes com rapidez.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-card/50 backdrop-blur-sm border border-border">
            <h3 className="text-xl font-semibold mb-4">Em resumo</h3>
            <p className="text-muted-foreground leading-relaxed">
              É um chat que funciona. Comunicação em tempo real quando há internet, continuidade offline-first quando não há, organização por canais e DMs, presença e ações essenciais, PWA instalável e suporte multilíngue. Tudo isso com uma experiência direta, que a equipe entende de cara e que você ativa sem dor de cabeça.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;