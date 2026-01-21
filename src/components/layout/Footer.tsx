import { Link } from "react-router-dom";
import { Mail, MapPin, Linkedin, Facebook, Twitter } from "lucide-react";
import logo from "@/assets/logo.jpg";
import eventMgmt from "@/assets/services/event-management.jpg";

const certifications = [
  "Service-Connected Disabled Veteran-Owned Business (SDVOSB)",
  "Historically Underutilized Business (HUB)",
  "City of Houston Minority Business Enterprise (MBE)",
  "City of Houston Persons with Disabilities Business Enterprise (PDBE)",
];

export function Footer() {
  return (
    <footer className="bg-navy-dark text-primary-foreground">
      <div className="relative min-h-[500px] flex items-center justify-center">
  {/* Image d'arrière-plan */}
  <div className="absolute inset-0 text-center">
      <img 
       src={eventMgmt}
      alt="Office background"
      className="w-full h-full object-cover"
    />
    {/* Overlay pour contraste */}
    <div className="absolute inset-0 bg-black/30"></div>
  </div>
  
  {/* Contenu principal */}
  <div className="relative w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className=" p-10 md:p-16">
      {/* En-tête */}
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
        Ready to work together?
      </h1>
      
      {/* Description */}
      <p className="text-xl md:text-2xl text-white mb-10 md:mb-12 leading-relaxed">
        Let discus how we can help you achieve your goals in local and international markets.
      </p>
      
      {/* Bouton */}
      <div className="mb-12 md:mb-16 flex justify-center">
        <button className="bg-navy-dark hover:bg-blue-900 text-white font-bold py-2 px-8  md:text-xl transition-colors duration-300">
          Contact us today
        </button>
      </div>
      
      {/* Section Contact - très propre, bordures droites */}
     
    </div>
  </div>
</div>
     <div className="bg-primary text-primary-foreground relative">
  <div className="container-custom py-16">
    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">

      {/* Logo */}
      <div>
        <img
          src={logo}
          alt="Raked Intl"
          className="h-12 w-auto mb-1 bg-primary-foreground/90 p-2 rounded"
        />
      </div>
     
     

      {/* Liens rapides */}
      <div>
        <h4 className="font-heading font-semibold text-lg mb-6">
          Quick links
        </h4>
        <ul className="space-y-3">
          {[
            { label: "Home", href: "/" },
            { label: "Who We Are", href: "/about" },
            { label: "Services", href: "/services" },
            { label: "Clients", href: "/clients" },
            { label: "Contact", href: "/contact" },
          ].map((link) => (
            <li key={link.href}>
              <Link
                to={link.href}
                className="text-primary-foreground/70 hover:text-accent transition-colors text-sm"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Contact */}
      <div>
        <h4 className="font-heading font-semibold text-lg mb-6">
          Contact us
        </h4>

        <ul className="space-y-4">
          <li className="flex items-start gap-3">
            <MapPin className="w-5 h-5 text-accent shrink-0 mt-0.5" />
            <span className="text-primary-foreground/70 text-sm">
              9800 Richmond Ave., Ste 515
              <br />
              Houston, TX 77042
            </span>
          </li>

          <li className="flex items-center gap-3">
            <Mail className="w-5 h-5 text-accent shrink-0" />
            <a
              href="mailto:info@rakedintl.com"
              className="text-primary-foreground/70 hover:text-accent transition-colors text-sm"
            >
              info@rakedintl.com
            </a>
          </li>
        </ul>

        {/* Réseaux sociaux – même style que RMJ */}
        
      </div>
    </div>

    {/* Bottom */}
    <div className="border-t border-primary-foreground/10 mt-14 pt-6 text-center">
      <p className="text-primary-foreground/50 text-sm">
        © {new Date().getFullYear()} Raked Intl LLC. All rights reserved.
      </p>
    </div>
  </div>

  {/* ========================= */}
  {/* Boutons flottants (RMJ) */}
  {/* ========================= */}

  <div className="absolute bottom-28 right-6 flex flex-col gap-4 z-50">
    {/* WhatsApp */}
    <a
      href="https://wa.me/+1(832)878-9152"
      target="_blank"
      rel="noopener noreferrer"
      className="w-14 h-14 rounded-full bg-green-500 flex items-center justify-center
                 shadow-lg hover:scale-105 transition"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="white"
        className="w-7 h-7"
      >
        <path d="M12.04 2C6.58 2 2.12 6.46 2.12 11.92c0 2.1.55 4.15 1.6 5.97L2 22l4.27-1.7a9.88 9.88 0 0 0 5.77 1.84h.01c5.46 0 9.92-4.46 9.92-9.92C21.96 6.46 17.5 2 12.04 2z"/>
      </svg>
    </a>

    {/* Appel */}
    <a
      href="tel:+1(832)878-9152"
      className="w-14 h-14 rounded-full bg-green-500 flex items-center justify-center
                 shadow-lg hover:scale-105 transition"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="white"
        viewBox="0 0 24 24"
        className="w-7 h-7"
      >
        <path d="M6.62 10.79a15.05 15.05 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 0 1 1 1v3.5a1 1 0 0 1-1 1C10.07 21.01 2.99 13.93 2.99 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.2 2.46.57 3.59a1 1 0 0 1-.25 1.01l-2.19 2.19z"/>
      </svg>
    </a>
  </div>
</div>

    </footer>
  );
}
