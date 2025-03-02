"use client";

import React from "react";
import { motion } from "framer-motion";
import { Calendar, MapPin, Clock, ExternalLink } from "lucide-react";
import Image from "next/image";

interface Event {
  id: number;
  title: string;
  date: string;
  location: string;
  description: string;
  imageUrl?: string;
  link?: string;
}

interface MeetUsAtSectionProps {
  className?: string;
  events?: Event[];
}

// Sample events data
const sampleEvents: Event[] = [
  {
    id: 1,
    title: "BioTech Summit 2024",
    date: "June 15-17, 2024",
    location: "Berlin, Germany",
    description:
      "Join us at the premier biotechnology conference where we'll be showcasing our latest enzyme platform innovations.",
    imageUrl: "/images/events/biotech-summit.jpg",
    link: "https://example.com/biotech-summit",
  },
  {
    id: 2,
    title: "Green Chemistry Expo",
    date: "August 22-25, 2024",
    location: "Stockholm, Sweden",
    description:
      "We're presenting our sustainable fluorination solutions at this year's leading green chemistry exhibition.",
    imageUrl: "/images/events/green-chemistry.jpg",
    link: "https://example.com/green-chemistry",
  },
  {
    id: 3,
    title: "Sustainable Materials Conference",
    date: "October 10-12, 2024",
    location: "Barcelona, Spain",
    description:
      "Meet our team and learn about our bio-based alternatives to traditional PFAS materials.",
    imageUrl: "/images/events/sustainable-materials.jpg",
    link: "https://example.com/sustainable-materials",
  },
];

const EventCard = ({ event }: { event: Event }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
    className="bg-white/10 backdrop-blur-sm border border-tealAccent/20 rounded-xl overflow-hidden hover:border-tealAccent/40 transition-all group"
  >
    {event.imageUrl && (
      <div className="relative h-48 overflow-hidden">
        <Image
          src={event.imageUrl}
          alt={event.title}
          className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
          width={400}
          height={200}
        />
      </div>
    )}
    <div className="p-6">
      <h3 className="text-xl font-semibold mb-2 text-gray-800">
        {event.title}
      </h3>

      <div className="flex items-center mb-2 text-gray-600">
        <Calendar className="w-4 h-4 mr-2 text-tealAccent" />
        <span>{event.date}</span>
      </div>

      <div className="flex items-center mb-3 text-gray-600">
        <MapPin className="w-4 h-4 mr-2 text-tealAccent" />
        <span>{event.location}</span>
      </div>

      <p className="text-gray-600 mb-4">{event.description}</p>

      {event.link && (
        <a
          href={event.link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center text-tealAccent hover:text-tealAccent/80 transition-colors"
        >
          Learn more
          <ExternalLink className="w-4 h-4 ml-1" />
        </a>
      )}
    </div>
  </motion.div>
);

export const MeetUsAtSection = ({
  className = "",
  events = sampleEvents,
}: MeetUsAtSectionProps) => {
  return (
    <section className={`w-full px-4 md:px-12 py-16 ${className}`}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-tealAccent via-tealAccent/70 to-mintAccent bg-clip-text text-transparent">
            Meet Us At
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Connect with our team at these upcoming events to learn more about
            our bio-based enzyme platform and sustainable solutions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <p className="text-lg text-gray-600">
            Don't see an event near you?{" "}
            <a href="#contact" className="text-tealAccent hover:underline">
              Contact us
            </a>{" "}
            to schedule a meeting or presentation.
          </p>
        </motion.div>
      </div>
    </section>
  );
};
