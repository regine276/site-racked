import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Building2, Flag, Users2, Star, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const clientCategories = [
  { icon: Flag, label: "Governments", count: "5+" },
  { icon: Building2, label: "Organizations", count: "15+" },
  { icon: Users2, label: "Foundations", count: "10+" },
  { icon: Star, label: "High-Profile Clients", count: "20+" },
];

const featuredClients = [
  "Republic of Guinea",
  "City of Niamey, Niger",
  "Samuel Eto'o Foundation",
  "Africa America Chamber of Commerce",
  "Ports of the Republic of Gabon OPRAG",
  "NBA player Luc Mbah A Moute",
];

export function ClientsPreview() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Logic pour le slide mobile
  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev === clientCategories.length - 1 ? 0 : prev + 1));
  }, []);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? clientCategories.length - 1 : prev - 1));
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 4000);
    return () => clearInterval(interval);
  }, [nextSlide]);

  return (
    <section className="section-padding bg-navy-dark relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 rounded-full bg-accent blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-primary blur-3xl" />
      </div>

      <div className="container relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tight">
            Our clients
          </h2>
          <div className="h-1 w-20 bg-white mt-2"></div>
        </motion.div>
        
        <h2 className="heading-section text-primary-foreground mb-4">
          Trusted by Leaders Worldwide
        </h2>

        {/* Stats - Grid sur Desktop / Carousel sur Mobile */}
        <div className="relative mb-16">
          {/* VERSION DESKTOP : Grid classique (cachée sur mobile) */}
          <div className="hidden md:grid grid-cols-4 gap-6">
            {clientCategories.map((cat, index) => (
              <motion.div
                key={cat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center p-6 bg-primary-foreground/5 border border-primary-foreground/10"
              >
                <cat.icon className="w-8 h-8 text-accent mx-auto mb-3" />
                <p className="font-heading font-bold text-3xl text-primary-foreground mb-1">
                  {cat.count}
                </p>
                <p className="text-primary-foreground/60 text-sm">{cat.label}</p>
              </motion.div>
            ))}
          </div>

          {/* VERSION MOBILE : Carousel (caché sur desktop) */}
          <div className="md:hidden flex flex-col items-center">
            <div className="w-full relative h-[180px] flex items-center justify-center overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.4 }}
                  className="w-full text-center p-8 bg-primary-foreground/5 border border-primary-foreground/10"
                >
                  {(() => {
                    const CatIcon = clientCategories[currentIndex].icon;
                    return <CatIcon className="w-10 h-10 text-accent mx-auto mb-4" />;
                  })()}
                  <p className="font-heading font-bold text-4xl text-primary-foreground mb-1">
                    {clientCategories[currentIndex].count}
                  </p>
                  <p className="text-primary-foreground/60 text-base">
                    {clientCategories[currentIndex].label}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Navigation Mobile */}
            <div className="flex items-center gap-6 mt-6">
              <button 
                onClick={prevSlide}
                className="p-3 rounded-full bg-primary-foreground/10 text-primary-foreground"
              >
                <ChevronLeft size={24} />
              </button>
              
              <div className="flex gap-2">
                {clientCategories.map((_, idx) => (
                  <div 
                    key={idx}
                    className={`h-2 transition-all duration-300 rounded-full ${idx === currentIndex ? "w-6 bg-accent" : "w-2 bg-primary-foreground/20"}`}
                  />
                ))}
              </div>

              <button 
                onClick={nextSlide}
                className="p-3 rounded-full bg-primary-foreground/10 text-primary-foreground"
              >
                <ChevronRight size={24} />
              </button>
            </div>
          </div>
        </div>

        {/* Featured Clients */}
       
      </div>
    </section>
  );
}