import { motion } from "framer-motion";
import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, MapPin, Clock, Send, Check } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

// Use event image for contact page
import contactImage from "@/assets/services/admin-management.jpg";
// Importez votre vidéo ici ou utilisez un lien direct
// import contactVideo from "@/assets/videos/contact-bg.mp4";

export default function Contact() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSubmitted(true);
    toast({
      title: "Message Sent!",
      description: "Thank you for your inquiry. We'll get back to you soon.",
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      content: "info@rakedintl.com",
      href: "mailto:info@rakedintl.com",
    },
    {
      icon: MapPin,
      title: "Address",
      content: "9800 Richmond Ave., Ste 515\nHouston, TX 77042",
      href: "https://maps.google.com/?q=9800+Richmond+Ave+Houston+TX+77042",
    },
   
  ];

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
            <p className="text-accent font-heading font-semibold mb-3">Contact</p>
            <h1 className="heading-display text-primary-foreground mb-6">
              Let's Work Together
            </h1>
            <p className="text-primary-foreground/80 text-xl leading-relaxed">
              Ready to expand your global reach? Get in touch for services or
              partnership inquiries.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Content with Video Background */}
      <section className="relative section-padding overflow-hidden">
        {/* Video Background Layer 
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          >
            <source src="background.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          Overlay pour assurer la lisibilité du texte 
          <div className="absolute inset-0 bg-background/20" />
        </div>*/}

        <div className="container-custom relative z-10">
          <div className="grid lg:grid-cols-1 gap-12 lg:gap-16">
           
            {/* Contact Info & Image */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              {/*<div className="rounded-xl overflow-hidden shadow-raked-lg">
                <img
                  src={contactImage}
                  alt="Raked Intl team"
                  className="w-full h-64 object-cover"
                />
              </div>*/}

              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={info.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="glass-card p-6 flex items-start gap-4 bg-white/60 backdrop-blur-md"
                  >
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                      <info.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-heading font-bold text-foreground mb-1">
                        {info.title}
                      </h3>
                      {info.href ? (
                        <a
                          href={info.href}
                          target={info.href.startsWith("http") ? "_blank" : undefined}
                          rel="noopener noreferrer"
                          className="text-muted-foreground hover:text-primary transition-colors whitespace-pre-line"
                        >
                          {info.content}
                        </a>
                      ) : (
                        <p className="text-muted-foreground whitespace-pre-line">
                          {info.content}
                        </p>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
}