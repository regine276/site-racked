import { motion } from "framer-motion";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

// Service images
import businessDev from "@/assets/services/business-development.jpg";

const services = [
  {
    id: 1,
    title: "Business Development",
    description: "With strong local and international expertise across multiple industries, our team provides insight and guidance throughout your business lifecycle. Grounded in a clear understanding of policy environments and market dynamics, we deliver recommendations that add measurable value.",
    features: [
      "Business start-up",
      "Set strategic partnerships",
      "Expand your business reach into new markets",
      "Business planning",
      "Business feasibility study",
      "Non-profit organization start-up"
    ],
    image: businessDev,
  },
];

export default function Services() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-hero overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 right-20 w-96 h-96 rounded-full bg-accent blur-3xl" />
        </div>
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <p className="text-accent font-heading font-semibold mb-3">Our Services</p>
            <h1 className="heading-display text-primary-foreground mb-6">
              Innovative Solutions
            </h1>
            <p className="text-primary-foreground/80 text-xl leading-relaxed">
              We deliver comprehensive consulting services to help your business
              thrive in local and international markets.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services List */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="space-y-24">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? "lg:flex-row-reverse" : ""
                  }`}
              >
                {/* On utilise min-w-[340px] pour forcer l'augmentation sur mobile.
                On utilise md:min-w-0 pour redonner la main au layout sur grand écran.
              */}
                <div className={`${index % 2 === 1 ? "lg:order-2" : ""} w-full min-w-[340px] md:min-w-0 md:max-w-md lg:max-w-full mx-auto`}>
                  <div className="relative">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="rounded-xl shadow-raked-lg w-full h-auto object-cover min-h-[220px]"
                    />

                    <div className="absolute -bottom-3 -right-3 md:-bottom-4 md:-right-4 w-16 h-16 md:w-20 md:h-20 bg-navy-dark rounded-xl flex items-center justify-center shadow-raked-lg">
                      <span className="font-heading font-bold text-xl md:text-2xl text-white">
                        {String(service.id).padStart(2, "0")}
                      </span>
                    </div>
                  </div>
                </div>

                <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                  <h2 className="font-heading font-bold text-2xl md:text-3xl text-navy-dark mb-4">
                    {service.title}
                  </h2>
                  <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                    {service.description}
                  </p>
                  <ul className="space-y-3">
                    {service.features.map((feature, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-3 text-foreground"
                      >
                        <span className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                          <span className="w-2 h-2 rounded-full bg-primary" />
                        </span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}


    </Layout>
  );
}
