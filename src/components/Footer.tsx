import { Phone } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 border-t border-border bg-card">
      <div className="container px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
            {/* Brand */}
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <img src="/logo.png" alt="ChatEvent" className="h-8 w-8 object-contain" />
                <span className="text-xl font-bold">ChatEvent</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Comunicação que funciona em tempo real, direto no navegador.
              </p>
            </div>
            {/* Product */}
            <div>
              <h3 className="font-semibold mb-4">Produto</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#funcionalidades" className="hover:text-foreground transition-colors">Funcionalidades</a></li>
                <li><a href="#casos-de-uso" className="hover:text-foreground transition-colors">Casos de uso</a></li>
                <li><a href="#pricing" className="hover:text-foreground transition-colors">Preços</a></li>
              </ul>
            </div>
            {/* Company */}
            <div>
              <h3 className="font-semibold mb-4">Empresa</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#sobre" className="hover:text-foreground transition-colors">Sobre</a></li>
                <li><a href="#contato" className="hover:text-foreground transition-colors">Contato</a></li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm text-muted-foreground">
              © {currentYear} ChatEvent. Todos os direitos reservados.
            </p>
            <a
              href="https://wa.me/5511963005733"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm hover:text-foreground transition-colors"
            >
              <span className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center">
                <Phone className="w-4 h-4 text-white" />
              </span>
              WhatsApp
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
