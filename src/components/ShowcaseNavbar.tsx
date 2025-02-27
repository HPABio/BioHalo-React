"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Image from "next/image";
import logo from "@/assets/images/logo.png";

export const ShowcaseNavbar = () => {
  const navItems = [
    { name: "Home", href: "/" },
    { name: "Platform", href: "/" },
    { name: "Technology", href: "/" },
    { name: "Team", href: "/" },
    { name: "L6", href: "/" },

    /*  { name: "Challenges", href: "/challenges" },
  { name: 'Technology', href: '/technology' },
  { name: "Team", href: "/team" },
  { name: "Achievements", href: "/achievements" },
  { name: "Career", href: "/career" },
  { name: "Contact", href: "/contact" }, */
    // { name: "Blog", href: "/blog" },
  ];

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="w-screen border-b border-mediumGrey/5 bg-lightGrey/20 backdrop-blur-lg box-shadow-md"
    >
      <div className="container mx-auto px-4 py-4 z-90">
        <nav className="flex items-center justify-between">
          <Link href="/" className="flex items-center">
            <Image
              src={logo}
              alt="BioHalo Logo"
              width={80}
              height={80}
              quality={100}
              className="w-auto h-10"
            />
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-darkGrey hover:text-tealAccent transition-colors"
              >
                {item.name}
              </Link>
            ))}
            <Button className="bg-tealAccent hover:bg-pinkAccent/90 text-white">
              Get in Touch
            </Button>
          </div>

          {/* Mobile menu button - to be implemented */}
          <Button variant="outline" className="md:hidden">
            Menu
          </Button>
        </nav>
      </div>
    </motion.header>
  );
};
