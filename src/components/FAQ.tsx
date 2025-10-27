const faqs = [
  {
    q: "Precisa instalar?",
    a: "Não. Funciona direto no navegador. Se preferir, instale como PWA (desktop e mobile).",
  },
  {
    q: "Funciona sem internet?",
    a: "Sim. O app guarda tudo localmente e reenviamos automático quando a rede volta.",
  },
  {
    q: "Quantas pessoas podem usar?",
    a: "Clientes e salas ilimitadas; a capacidade efetiva depende do plano do provedor (ex.: Supabase/LiveKit).",
  },
  {
    q: "O que eu ganho com os canais?",
    a: "Menos ruído e contexto por tema (#staff, #palco, #produção), além de contadores de não-lidas por canal.",
  },
  {
    q: "Consigo saber se entregou ou foi lida?",
    a: "Sim. Indicadores pendente / entregue / lida por mensagem.",
  },
  {
    q: "E segurança?",
    a: "Cada cliente/sala é isolado. Moderação permite remover mensagens para todos e o acesso é gerenciado no painel.",
  },
];

const FAQ = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-4xl sm:text-5xl font-bold">FAQ</h2>
          <p className="text-xl text-muted-foreground">Dúvidas que geralmente travam a decisão — respostas objetivas</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {faqs.map((item, i) => (
            <div key={i} className="p-6 rounded-2xl bg-card border border-border card-shadow">
              <h3 className="text-lg font-semibold mb-2">{item.q}</h3>
              <p className="text-muted-foreground">{item.a}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;