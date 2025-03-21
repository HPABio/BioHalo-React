"use client";

import Image from "next/image";
import React, { useState } from "react";
import BioHaloLogoOnly from "@/assets/BioHaloLogoOnly.svg";
import { motion } from "framer-motion";

// Import team member images
import nicolasImage from "@/assets/images/BioHaloTeam/NicoKrink.png";
import marielaImage from "@/assets/images/BioHaloTeam/MarielaMezzina.png";
import pabloImage from "@/assets/images/BioHaloTeam/PabloNikel.png";
import albertoImage from "@/assets/images/BioHaloTeam/AlbertoDeMaria.png";
import justineImage from "@/assets/images/BioHaloTeam/JustineTurlin.png";
import arthurImage from "@/assets/images/BioHaloTeam/ArthurVancolen.png";
import johannImage from "@/assets/images/BioHaloTeam/JohannLiebeton.png";
import artemisImage from "@/assets/images/BioHaloTeam/ArtemisTalliou.png";

// Team member type definition
type TeamMember = {
  id: number;
  name: string;
  position: string;
  image: any;
  linkedIn?: string;
};

// Actual team members data
const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: "Nicolas Krink",
    position: "Co-founder & CEO",
    image: nicolasImage,
    linkedIn: "https://www.linkedin.com/in/nicolaskrink/",
  },
  {
    id: 2,
    name: "Mariela Mezzina",
    position: "Co-founder, CSO & COO",
    image: marielaImage,
    linkedIn: "https://www.linkedin.com/in/mariela-mezzina/",
  },
  {
    id: 3,
    name: "Pablo Nikel",
    position: "Co-founder",
    image: pabloImage,
    linkedIn: "https://www.linkedin.com/in/pabnik/",
  },
  {
    id: 4,
    name: "Alberto De Maria",
    position: "Head of Science",
    image: albertoImage,
    linkedIn: "https://www.linkedin.com/in/aldema503039157/",
  },
  {
    id: 5,
    name: "Justine Turlin",
    position: "R&D Project Associate",
    image: justineImage,
    linkedIn: "https://www.linkedin.com/in/justine-turlin/",
  },
  {
    id: 6,
    name: "Arthur Vancolen",
    position: "Research Assistant",
    image: arthurImage,
    linkedIn: "https://www.linkedin.com/in/arthur-vancolen/",
  },
  {
    id: 7,
    name: "Johann Liebeton",
    position: "Business Development Lead",
    image: johannImage,
    linkedIn: "https://www.linkedin.com/in/johannliebeton/",
  },
  {
    id: 8,
    name: "Artemis Talliou",
    position: "Junior Operations Associate",
    image: artemisImage,
    linkedIn: "https://www.linkedin.com/in/artemis-talliou/",
  },
];

interface TeamSectionProps {
  className?: string;
}

export const TeamSection: React.FC<TeamSectionProps> = ({ className = "" }) => {
  return (
    <section
      className={`py-24 bg-gradient-to-br from-gray-50 via-gray-300 to-gray-100 ${className}`}
    >
      <div className="w-full h-[100px] bg-gradient-to-t from-gray-50/0 via-gray-50/30 to-gray-50 -mt-[100px]"></div>
      <div className="container mx-auto px-4 sm:px-6">
        <h1 className="font-black font-Arial text-3xl sm:text-4xl md:text-6xl bg-gradient-to-br from-teal-800/80 via-tealAccent/80 to-tealAccent/70 bg-clip-text text-transparent pb-6 sm:pb-10 text-center">
          Meet the Team behind <br />
          <span
            className="font-poppins font-bold flex flex-col sm:flex-row items-center justify-center
          text-black text-[clamp(60px,8vw,150px)] sm:text-[clamp(110px,10vw,150px)] mx-auto"
          >
            <Image
              src={BioHaloLogoOnly}
              alt="BioHalo Logo"
              className="h-[0.8em] sm:h-[1em] w-auto sm:ml-4"
            />
            <span className="mt-2 sm:mt-0">BioHalo</span>
          </span>
        </h1>

        <div className="mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8 justify-items-center md:max-w-[calc(580px+2rem)] xl:max-w-[calc(1160px+3rem)]">
          {teamMembers.map((member) => (
            <TeamMemberCard key={member.id} member={member} />
          ))}
        </div>
      </div>
    </section>
  );
};

const TeamMemberCard: React.FC<{ member: TeamMember }> = ({ member }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="rounded-xl overflow-hidden relative h-[420px] w-[290px]"
      initial={{ y: 0 }}
      whileHover={{
        y: -8,
        filter: "grayscale(0%)",
        boxShadow:
          "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04), 0 0 15px 0 rgba(20, 184, 166, 0.3)",
      }}
      transition={{
        y: { type: "spring", stiffness: 300, damping: 15 },
        filter: { duration: 0.3 },
        boxShadow: { duration: 0.3 },
      }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      style={{ filter: isHovered ? "grayscale(0%)" : "grayscale(20%)" }}
    >
      {/* Card background with gradient that changes on hover */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-tealAccent to-mintAccent"
        initial={{
          opacity: 0.6,
          filter: "grayscale(20%)",
        }}
        animate={{
          opacity: isHovered ? 1 : 0.6,
          filter: isHovered ? "grayscale(0%)" : "grayscale(20%)",
        }}
        transition={{ duration: 0.4 }}
      />

      {/* Full-size image that spans the entire card (grayscale controlled by parent) */}
      <div className="absolute inset-0 w-full h-full">
        <motion.div
          className="relative w-full h-full"
          animate={{
            scale: isHovered ? 1.05 : 1,
          }}
          transition={{ duration: 0.5 }}
        >
          <Image
            src={member.image}
            alt={member.name}
            className="w-full h-full object-cover object-top grayscale"
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            priority
          />
        </motion.div>
      </div>

      {/* White overlay for text area */}
      <div className="absolute bottom-0 left-0 right-0 h-[130px] bg-lightGrey backdrop-blur-sm border-t border-gray-100 z-20"></div>

      {/* Text content */}
      <div className="absolute bottom-0 left-0 right-0 p-6 text-center z-30">
        <motion.h3
          className="text-xl font-semibold mb-1 text-gray-800"
          animate={{
            color: isHovered ? "rgb(34, 85, 102)" : "rgb(31, 41, 55)",
          }}
          transition={{ duration: 0.3 }}
        >
          {member.name}
        </motion.h3>
        <p className="text-gray-600">{member.position}</p>

        <motion.div
          className="mt-4 flex justify-center space-x-4"
          initial={{ opacity: 0, y: 10 }}
          animate={{
            opacity: isHovered ? 1 : 0,
            y: isHovered ? 0 : 10,
          }}
          transition={{ duration: 0.3, delay: 0.1 }}
        >
          {member.linkedIn && (
            <a
              href={member.linkedIn}
              target="_blank"
              rel="noopener noreferrer"
              className="text-pinkAccent hover:text-tealAccent transition-colors duration-300"
              aria-label={`Visit ${member.name}'s LinkedIn profile`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="22"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
              </svg>
            </a>
          )}
        </motion.div>
      </div>
    </motion.div>
  );
};
