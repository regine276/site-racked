import { motion } from "framer-motion";

// Icônes - vous devrez importer vos propres icônes


import {
  MegaphoneIcon,
  ChatBubbleLeftRightIcon,
  ChartBarIcon,
  BuildingOfficeIcon,
  ShieldCheckIcon,
  GlobeAltIcon,
  BuildingLibraryIcon,
  MapIcon,
  CalendarIcon,
  EnvelopeIcon,
  UserGroupIcon,
  FlagIcon,
  FilmIcon,
} from "@heroicons/react/24/outline";

const services = [
  {
    title: "Advertising & Marketing",
    description: "With an approach rooted in research, we develop customized distribution strategies and cost-efficient tactics to reach your target audiences.",
    icon: MegaphoneIcon,
  },
  {
    title: "Public Relations",
    description: "We approach crisis communications and public relations with urgency.",
    icon: ChatBubbleLeftRightIcon,
  },
  {
    title: "Research & Strategy",
    description: "Every client receives our best advice on how to define audiences, design precise research approaches, and leverage meaningful insights.",
    icon: ChartBarIcon,
  },
  {
    title: "Business Development",
    description: "With strong local and international expertise across multiple industries, our team provides insight and guidance throughout your business lifecycle. Grounded in a clear understanding of policy environments and market dynamics, we deliver recommendations that add measurable value.",
    icon: BuildingOfficeIcon,
  },
  {
    title: "Administrative Management, Business Management & Brand Management",
    description: "We partner with you to transform your organization—combining bold ideas with pragmatic solutions to deliver enduring results.",
    icon: ShieldCheckIcon, // Ou une icône appropriée pour la gestion administrative
  },
  {
    title: "Import-Export Consulting",
    description: "Importing and exporting can be complex. We help you navigate requirements, reduce risk, and build sustainable cross-border operations.",
    icon: GlobeAltIcon, // Ou une icône appropriée pour l'import-export
  },
  {
    title: "Public Affairs",
    description: "We bring a unique approach to issue management and advocacy—helping clients achieve policy goals, strengthen positioning, and engage stakeholders effectively. Our work helps avert crises, mitigate risk, and move conversations forward.",
    icon: BuildingLibraryIcon, // Ou une icône appropriée pour les affaires publiques
  },
  {
    title: "Strategic Planning",
    description: "We help teams design, build, and operate world-class planning processes that align resources to results. From facilitation to execution, we turn strategy into a working system.",
    icon: MapIcon,
  },
  {
    title: "Event Creation, Organization & Management",
    description: "We turn ideas into action with tailored programs that elevate reputation, attract investment, and strengthen local economies.",
    icon: CalendarIcon,
  },
  {
    title: "Communications & Public Relations",
    description: "We craft stories that resonate and press strategies that land. From message development to digital execution, we help you retain clients, reach new audiences, and grow your brand.",
    icon: EnvelopeIcon, // Ou une icône appropriée pour les communications
  },
  {
    title: "Community Engagement",
    description: "We design and implement outreach that builds trust, fosters participation, and reflects community priorities—in person, virtually, and in preferred languages.",
    icon: UserGroupIcon, // Ou une icône appropriée pour l'engagement communautaire
  },
  {
    title: "Political Campaign Consulting and Strategy",
    description: "We design and run campaigns that win. Whether you are a first-time candidate, an incumbent, or an advocacy organization, we pair clear strategy with disciplined execution. From message to ground game, we build the path to victory and manage every detail along the way.",
    icon: FlagIcon, // Ou une icône appropriée pour les campagnes politiques
  },
  {
    title: "Multimedia Production",
    description: "We produce media that engages, inspires, and motivates—bringing your mission to life through compelling storytelling.",
    icon: FilmIcon, // Ou une icône appropriée pour la production multimédia
  },
];

export function ServicesPreview() {
  return (
    <section className="pb-12 md:pb-20 bg-white">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 md:mb-20"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-navy-dark uppercase tracking-tight">
            OUR SERVICES
          </h2>
          <div className="h-1 w-24 md:w-32 bg-navy-dark mt-3 md:mt-4"></div>
        </motion.div>

        {/* Services Grid - 2 colonnes sur desktop, 1 sur mobile */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Colonne gauche */}
          <div className="space-y-12 lg:space-y-16">
            {services.slice(0, 5).map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex flex-col"
              >
                {/* Titre avec icône alignée à gauche */}
                <div className="flex items-start gap-4 md:gap-6 mb-6">
                  <div className="flex-shrink-0 w-12 h-12 md:w-14 md:h-14 bg-navy-dark flex items-center justify-center p-2">
                    <service.icon className="h-6 w-6 md:h-7 md:w-7 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-xl md:text-2xl lg:text-3xl text-navy-dark uppercase leading-tight">
                      {service.title}
                    </h3>
                    {/* Barre bleue sous le titre */}
                    <div className="h-0.5 w-full max-w-xs bg-navy-dark mt-2 md:mt-3"></div>
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-800 text-base md:text-lg lg:text-xl leading-relaxed md:leading-loose pl-0 md:pl-20 lg:pl-24">
                  {service.description.length > 120 
                    ? `${service.description.substring(0, 90)}...` 
                    : service.description}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Colonne droite */}
          <div className="space-y-12 lg:space-y-16">
            {services.slice(5, 10).map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: (index + 3) * 0.1 }}
                className="flex flex-col"
              >
                {/* Titre avec icône alignée à gauche */}
                <div className="flex items-start gap-4 md:gap-6 mb-6">
                  <div className="flex-shrink-0 w-12 h-12 md:w-14 md:h-14 bg-navy-dark flex items-center justify-center p-2">
                    <service.icon className="h-6 w-6 md:h-7 md:w-7 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-xl md:text-2xl lg:text-3xl text-navy-dark uppercase leading-tight">
                      {service.title}
                    </h3>
                    {/* Barre bleue sous le titre */}
                    <div className="h-0.5 w-full max-w-xs bg-navy-dark mt-2 md:mt-3"></div>
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-800 text-base md:text-lg lg:text-xl leading-relaxed md:leading-loose pl-0 md:pl-20 lg:pl-24">
                  {service.description.length > 120 
                    ? `${service.description.substring(0, 90)}...` 
                    : service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

       
      </div>
    </section>
  );
}