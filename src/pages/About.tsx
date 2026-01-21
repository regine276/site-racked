import { motion } from "framer-motion";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Globe, Award, Users, Target } from "lucide-react";

// Use one of the uploaded photos for about section
import eventImage from "@/assets/services/public-affairs.jpg";
import meetingImage from "@/assets/services/strategic-planning.jpg";

const values = [
  {
    icon: Globe,
    title: "Global Perspective",
    description: "We bring international expertise to every engagement, connecting markets across continents.",
  },
  {
    icon: Target,
    title: "Results-Driven",
    description: "Our tailored programs focus on action and measurable outcomes for lasting impact.",
  },
  {
    icon: Users,
    title: "Relationship-Based",
    description: "Strong connections with corporate, political, and civic leaders worldwide.",
  },
  {
    icon: Award,
    title: "Veteran-Led",
    description: "Founded on principles of discipline, integrity, and service excellence.",
  },
];

const expertise = [
  "Business Development",
  "Government Relations & Public Affairs",
  "Event Planning & Management",
  "Policy Development",
  "Brand Management",
  "Communications & PR",
  "Community Engagement",
  "Negotiation Strategy",
];

export default function About() {
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
            <p className="text-accent font-heading font-semibold mb-3">Who We Are</p>
            <h1 className="heading-display text-white mb-6">
              Global Strategic Consulting Excellence
            </h1>
            <p className="text-white/80 text-xl leading-relaxed">
              Raked Intl LLC is a global strategic consulting and advisory firm
              specializing in supporting the development and expansion of
              businesses, brands, and organizations worldwide.
            </p>
          </motion.div>
        </div>
      </section>

      {/* About Content */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="heading-section text-navy-dark mb-6">
                Bridging Local & International Markets
              </h2>
              <p className="text-muted-navy-dark text-lg leading-relaxed mb-6">
                With expertise that bridges local and international markets, we
                consult, advise, and provide our clients with tailored programs
                focused on action and results.
              </p>
              <p className="text-muted-navy-dark leading-relaxed mb-6">
                Our close relationships with corporate, political, and civic
                leaders in various countries make us authoritative partners for
                clients looking to enter new markets or grow in existing ones.
              </p>
              <div className="flex flex-wrap gap-2 mb-8">
                {expertise.map((item) => (
                  <span
                    key={item}
                    className="px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <img
                src={eventImage}
                alt="Raked Intl team event"
                className="rounded-xl shadow-raked-lg"
              />
              <div className="absolute -bottom-6 -left-6 w-48 h-48 rounded-xl overflow-hidden shadow-raked-lg border-4 border-background">
                <img
                  src={meetingImage}
                  alt="Business meeting"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="section-padding bg-muted/50">
        <div className="container-custom">
          <motion.div
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.6 }}
  className="max-w-6xl mx-auto"
>
  <p className="text-narvy-dark font-heading font-semibold mb-8 text-center md:text-left">Our Founder</p>
  
  <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
    {/* Section Image */}
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="w-full md:w-2/5 lg:w-2/5"
    >
      <div className="relative">
        <div className="aspect-square md:aspect-[3/4] overflow-hidden rounded-xl shadow-raked-lg">
          <img
            src="image dg.jpeg"
            alt="Director portrait"
            className="w-full h-full object-cover object-center"
          />
        </div>
        {/* Overlay décoratif optionnel pour effet pro */}
        <div className="absolute -inset-4 -z-10 bg-gradient-to-br from-gray-50 to-narvy-light/20 rounded-2xl opacity-60"></div>
      </div>
    </motion.div>

    {/* Section Description - prête pour votre texte */}
    <motion.div
      initial={{ opacity: 0, x: 30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="w-full md:w-3/5 lg:w-3/5"
    >
      <div className="space-y-6 p-4 md:p-6">
        {/* Espace réservé pour votre description */}
       <h2 className="heading-section text-navy-dark mb-8">Raoul Keddy</h2>
            <div className="text-left space-y-6 text-muted-navy-dark leading-relaxed">
              <p className="text-lg">
                Raoul Keddy is a dynamic entrepreneur, public affairs specialist,
                and international business and affairs strategist. He is the
                Founder of Raked Intl LLC, where he has successfully developed
                strategic business plans, established global partnerships, and
                facilitated trade missions across Africa, the United States,
                Qatar, Dubai, China, and Europe.
              </p>
              <p>
                Raoul's expertise spans business development, government
                relations, and political strategy, making him a respected figure
                in international commerce and public affairs. His leadership
                extends to various civic and international organizations,
                including serving on the Advisory Board of the City of Houston
                Mayor's Office of Business Opportunity.
              </p>
              <p>
                A United States Army veteran who served in Operation New Dawn in
                Iraq in 2011, Raoul is a sought-after international speaker and
                motivational leader who inspires audiences with his journey and
                expertise in entrepreneurship, global investment, and economic
                development.
              </p>
              </div>
      </div>
    </motion.div>
  </div>
</motion.div>
        </div>
      </section>

      {/* Values Section 
      <section className="section-padding bg-background">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <p className="text-accent font-heading font-semibold mb-3">Our Values</p>
            <h2 className="heading-section text-navy-dark">What Drives Us</h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-card p-8 text-center group hover:shadow-raked-lg transition-all duration-300"
              >
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6 group-hover:bg-primary group-hover:text-primary-navy-dark transition-colors duration-300">
                  <value.icon className="w-8 h-8 text-primary group-hover:text-primary-navy-dark" />
                </div>
                <h3 className="font-heading font-bold text-navy-dark text-xl mb-3">
                  {value.title}
                </h3>
                <p className="text-muted-navy-dark">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>*/}

      {/* CTA */}
      
    </Layout>
  );
}
