import { motion } from "framer-motion";

// Icônes - vous devrez importer vos propres icônes


import {
  BuildingOfficeIcon,
} from "@heroicons/react/24/outline";

const services = [
  {
    title: "Business Development",
    description: "With strong local and international expertise across multiple industries, our team provides insight and guidance throughout your business lifecycle. Grounded in a clear understanding of policy environments and market dynamics, we deliver recommendations that add measurable value.",
    icon: BuildingOfficeIcon,
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
        {/* Services List */}
        <div className="max-w-4xl mx-auto space-y-12">
          {services.map((service, index) => (
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
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>


      </div>
    </section>
  );
}