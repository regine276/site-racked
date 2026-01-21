import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Layout } from "@/components/layout/Layout";
import { Calendar, MapPin, X, Play } from "lucide-react";

import businessDev from "@/assets/services/business-development.jpg";

type Event = {
  title: string;
  date: string;
  location: string;
  video: string;
  thumbnail: string;
};

const events: Event[] = [
  {
    title: "International Business Forum",
    date: "March 2024",
    location: "Dubai, UAE",
    video: "video.mp4",
    thumbnail: businessDev,
  },
  {
    title: "Africa–US Trade Mission",
    date: "November 2023",
    location: "Houston, USA",
    video: "/videos/event2.mp4",
    thumbnail: "/images/events/event2.jpg",
  },
  {
    title: "International Business Forum",
    date: "March 2024",
    location: "Dubai, UAE",
    video: "video.mp4",
    thumbnail: "/images/events/event1.jpg",
  },
  {
    title: "Africa–US Trade Mission",
    date: "November 2023",
    location: "Houston, USA",
    video: "/videos/event2.mp4",
    thumbnail: "/images/events/event2.jpg",
  },
];

export default function Evenements() {
  const [activeEvent, setActiveEvent] = useState<Event | null>(null);

  return (
    <Layout>
      {/* HERO */}
      <section className="pt-32 pb-20 bg-gradient-hero">
        <div className="container-custom">
            <p className="text-accent font-heading font-semibold mb-3">Events</p>
          <h1 className="heading-display text-primary-foreground mb-4">
            Global Events
          </h1>
          <p className="text-primary-foreground/80 text-xl max-w-3xl">
            Strategic engagements, international forums, and high-level missions
            captured in immersive video.
          </p>
        </div>
      </section>

      {/* EVENTS GRID */}
      <section className="section-padding bg-background">
        <div className="container-custom grid grid-cols-1 md:grid-cols-2 gap-12">
          {events.map((event, index) => (
            <motion.article
              key={event.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onClick={() => setActiveEvent(event)}
              className="group cursor-pointer border border-border bg-background"
            >
              {/* IMAGE */}
              <div className="relative aspect-[16/9] overflow-hidden">
                <img
                  src={event.thumbnail}
                  alt={event.title}
                  className="
                    w-full h-full object-cover
                    transition-transform duration-700
                    group-hover:scale-105
                  "
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/35 opacity-100 group-hover:bg-black/45 transition-colors" />

                {/* Play */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 border border-white/70 flex items-center justify-center">
                    <Play className="w-7 h-7 text-white" />
                  </div>
                </div>
              </div>

              {/* CONTENT */}
              <div className="p-6">
                <h3 className="font-heading font-semibold text-foreground text-2xl mb-3">
                  {event.title}
                </h3>

                <div className="flex flex-wrap gap-6 text-muted-foreground text-sm">
                  <span className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    {event.date}
                  </span>
                  <span className="flex items-center gap-2">
                    <MapPin className="w-4 h-4" />
                    {event.location}
                  </span>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      {/* VIDEO MODAL */}
      <AnimatePresence>
        {activeEvent && (
          <motion.div
            className="fixed inset-0 z-50 bg-black/85 flex items-center justify-center p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 40 }}
              transition={{ duration: 0.3 }}
              className="relative w-full max-w-6xl bg-black"
            >
              {/* Close */}
              <button
                onClick={() => setActiveEvent(null)}
                className="absolute top-4 right-4 z-10 text-white hover:opacity-70"
              >
                <X className="w-6 h-6" />
              </button>

              {/* Video */}
              <video
                src={activeEvent.video}
                controls
                autoPlay
                className="w-full max-h-[80vh] bg-black object-contain"
              />

              {/* Footer */}
              <div className="p-6 bg-background">
                <h3 className="font-heading font-semibold text-xl mb-1">
                  {activeEvent.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {activeEvent.date} • {activeEvent.location}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </Layout>
  );
}
