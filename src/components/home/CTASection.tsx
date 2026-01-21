import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

export function CTASection() {
  return (
    <section className=" bg-background">
      
      
      <CertificationsSection />
    </section>
  );
}



const certifications = [
  { 
    title: "Service-Connected Disabled Veteran-Owned Business (SDVOSB)", 
    image: "certif1.png" // Utiliser le logo correspondant
  },
  { 
    title: "Historically Underutilized Business (HUB)", 
    image: "certif2.png" // Logo "HUB" de l'image 1
  },
  { 
    title: "City of Houston Minority Business Enterprise (MBE)", 
    image: "certif3.png" // Logo "City of Houston" de l'image 1
  },
  { 
    title: "City of Houston Persons with Disabilities Business Enterprise (PDBE)", 
    image: "certif4.png" // Autre logo "City of Houston" de l'image 1
  },
];

export function CertificationsSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Titre identique aux sections précédentes */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-black text-navy-dark uppercase tracking-tight">
            CERTIFICATIONS
          </h2>
          <div className="h-1 w-20 bg-navy-dark mt-2"></div>
          <p className="mt-6 text-gray-700 text-lg">
            Raked Intl LLC holds the following certifications:
          </p>
        </motion.div>

        {/* Grille des 4 certifications spécifiques */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 items-start">
          {certifications.map((cert, index) => (
           <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
               

                
                 
                    <div
                      className="glass-card p-6 hover:shadow-raked-lg transition-all duration-300 hover:border-primary/20"
                    >
                      <p className="font-heading font-semibold text-foreground">
                        {cert.title}
                      </p>
                    </div>
               
              </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}