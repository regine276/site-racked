import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Globe, Users, Briefcase, Award } from "lucide-react";
import { Button } from "@/components/ui/button";

const highlights = [
  {
    icon: Globe,
    title: "Global Reach",
    description: "Operations across Africa, USA, Qatar, Dubai, China, and Europe",
  },
  {
    icon: Users,
    title: "Expert Network",
    description: "Relationships with corporate, political, and civic leaders worldwide",
  },
  {
    icon: Briefcase,
    title: "Tailored Solutions",
    description: "Customized programs focused on action and measurable results",
  },
  {
    icon: Award,
    title: "Veteran-Owned",
    description: "SDVOSB certified with proven leadership and discipline",
  },
];

export function AboutPreview() {
  return (
    <section className="bg-white">
      {/* Hero Banner Style Image */}
      <div className="w-full bg-navy-dark px-6 py-20">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tight mb-6">
              Welcome to Raked Intl
            </h1>
            <div className="h-1 w-24 bg-white mb-8"></div>
            <p className="text-white/90 text-lg md:text-xl leading-relaxed max-w-4xl mb-10">
              At Raked Intl, we help you build, expand, and lead with confidence in every market.
              Bringing the world to you through proven strategy and execution. From idea to impact,
              we help you grow across borders.
            </p>
            
          </motion.div>
        </div>
      </div>

      {/* Main Content Section */}
      <div className="container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-1 gap-12 items-start">
          
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12" // Espacement identique
          >
            <h2 className="text-4xl md:text-5xl font-black text-navy-dark uppercase tracking-tight">
              Who We Are
            </h2>
            <div className="h-1 w-20 bg-navy-dark mt-2"></div>
           <h3 className="text-2xl md:text-3xl font-bold text-navy-dark mb-6 mt-4 leading-tight">
              A Global Strategic Consulting & Advisory Firm
            </h3>
            <p className="text-gray-700 text-lg leading-relaxed mb-8">
              Raked Intl LLC is a global strategic consulting and advisory firm specializing in a wide range of
              services dedicated to supporting the development and expansion of your business, brand,
              community, or organization in local and international markets. With expertise that bridges local
              and international markets, we consult, advise, and provide our clients with tailored programs
              focused on action and results.
            </p>
            <Button 
              asChild
              className="bg-navy-dark hover:bg-[#005fa3] text-white rounded-none px-8 py-6 font-bold uppercase"
            >
              <Link to="/about">Learn More About Us</Link>
            </Button>
          </motion.div>

          {/* Highlights Grid - Style "Cartes Institutionnelles" */}
          
        </div>
      </div>
    </section>
  );
}