import { motion } from "framer-motion";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Flag, Building2, Users2, Award } from "lucide-react";

const clientCategories = [
  {
    icon: Flag,
    title: "Governments",
    clients: [
      "Republic of Guinea",
      "City of Niamey, Niger",
      "City of Yaounde II, Cameroon",
      "Ports of the Republic of Gabon OPRAG",
    ],
  },
  {
    icon: Users2,
    title: "Foundations & Notable Figures",
    clients: [
      "Samuel Eto'o Foundation",
      "NBA player Luc Mbah A Moute",
      "Kanu Heart Foundation",
    ],
  },
  {
    icon: Building2,
    title: "Organizations & Chambers",
    clients: [
      "Africa America Chamber of Commerce",
      "Africa International Chamber of Commerce",
      "Global Business Council",
      "Afro Week USA",
      "Africa America Business Summit",
    ],
  },
  {
    icon: Award,
    title: "Businesses & Events",
    clients: [
      "Journee Economique et Culturelles Burkina Faso Houston",
      "RMJ Consultant LLC",
      "K&J Cleaning Services LLC",
      "NJ Group LLC",
      "KAN Construction LLC",
      "Sahara Inc Canada",
      "Business Beyond Borders",
      "Balafon Media",
    ],
  },
];

export default function Clients() {
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
            <p className="text-accent font-heading font-semibold mb-3">Our Clients</p>
            <h1 className="heading-display text-primary-foreground mb-6">
              Trusted by Leaders Worldwide
            </h1>
            <p className="text-primary-foreground/80 text-xl leading-relaxed">
              A few of the companies, institutions, and leaders we've been proud
              to serve. Bringing the world to you alongside these valued partners.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Clients by Category */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="space-y-16">
            {clientCategories.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
               

                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  {category.clients.map((client) => (
                    <div
                      key={client}
                      className="glass-card p-6 hover:shadow-raked-lg transition-all duration-300 hover:border-primary/20"
                    >
                      <p className="font-heading font-semibold text-foreground">
                        {client}
                      </p>
                    </div>
                  ))}
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
