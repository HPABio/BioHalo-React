"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Award,
  TrendingUp,
  FileText,
  Target,
  Zap,
  CheckCircle,
} from "lucide-react";
import Image from "next/image";

interface Achievement {
  id: number;
  title: string;
  description: string;
  date: string;
  icon: React.ReactNode;
  category: "grant" | "milestone" | "award" | "publication";
}

interface SuccessesSectionProps {
  className?: string;
  achievements?: Achievement[];
}

// Sample achievements data
const sampleAchievements: Achievement[] = [
  {
    id: 1,
    title: "€2.5M EU Horizon Grant",
    description:
      "Secured major funding for our bio-based fluorination platform development from the European Union's Horizon Europe program.",
    date: "March 2024",
    icon: <FileText className="w-6 h-6 text-tealAccent" />,
    category: "grant",
  },
  {
    id: 2,
    title: "Successful Enzyme Scale-Up",
    description:
      "Achieved 10x scale-up of our proprietary enzyme production process while maintaining activity and selectivity.",
    date: "January 2024",
    icon: <TrendingUp className="w-6 h-6 text-tealAccent" />,
    category: "milestone",
  },
  {
    id: 3,
    title: "Green Chemistry Innovation Award",
    description:
      "Recognized for our breakthrough in sustainable fluorination technology at the International Green Chemistry Symposium.",
    date: "November 2023",
    icon: <Award className="w-6 h-6 text-tealAccent" />,
    category: "award",
  },
  {
    id: 4,
    title: "Patent Approval",
    description:
      "Received patent approval for our novel biocatalytic fluorination process, strengthening our intellectual property portfolio.",
    date: "September 2023",
    icon: <FileText className="w-6 h-6 text-tealAccent" />,
    category: "milestone",
  },
  {
    id: 5,
    title: "Research Publication in Nature Biotechnology",
    description:
      "Our groundbreaking research on enzymatic fluorination was published in the prestigious journal Nature Biotechnology.",
    date: "July 2023",
    icon: <FileText className="w-6 h-6 text-tealAccent" />,
    category: "publication",
  },
  {
    id: 6,
    title: "Strategic Partnership with Leading Materials Manufacturer",
    description:
      "Formed key partnership to accelerate commercialization of our bio-based fluorinated materials.",
    date: "May 2023",
    icon: <Target className="w-6 h-6 text-tealAccent" />,
    category: "milestone",
  },
];

export const TimelineVisualization = ({
  achievements = sampleAchievements,
}: SuccessesSectionProps) => {
  return (
    <main>

    {/* Timeline visualization */}
     <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="relative mt-20 pt-10 border-t border-gray-200"
        >
          <h3 className="text-2xl font-semibold text-center mb-12 text-gray-800">
            Our Journey
          </h3>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-tealAccent via-mintAccent to-tealAccent/30"></div>

            {/* Timeline events */}
            <div className="space-y-20">
                {Object.entries(achievements.reduce((acc, achievement) => {
                  const year = achievement.date.split(' ')[1];
                  if (!acc[year]) acc[year] = [];
                  acc[year].push(achievement);
                  return acc;
                }, {} as Record<string, typeof achievements>))
                .reverse()
                .map(([year, yearAchievements], yearIndex) => (
                  <div key={year} className="relative">
                    {/* Year marker */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 -top-10">
                      <div className="bg-tealAccent text-white text-lg font-bold px-4 py-2 rounded-full">
                        {year}
                      </div>
                    </div>

                    {/* Year's achievements */}
                    <div className="space-y-12 relative">
                      {yearAchievements.map((achievement, index) => (
                        <motion.div
                          key={achievement.id}
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.5, delay: index * 0.1 }}
                          className={`flex ${
                            index % 2 === 0 ? "justify-end" : "justify-start"
                          } relative`}
                        >
                          {/* Timeline dot */}
                          <div className="absolute left-1/2 transform -translate-x-1/2 w-5 h-5 bg-white border-4 border-tealAccent rounded-full"></div>

                          {/* Content */}
                          <div
                            className={`w-5/12 ${
                              index % 2 === 0 ? "pr-12" : "pl-12"
                            }`}
                          >
                            <div className="bg-white/20 backdrop-blur-sm border border-tealAccent/20 rounded-xl p-6 hover:border-tealAccent/40 transition-all">
                              <div className="flex items-center mb-2">
                                <div className="w-8 h-8 rounded-full bg-tealAccent/10 flex items-center justify-center mr-3">
                                  {achievement.icon}
                                </div>
                                <span className="text-sm text-gray-500">
                                  {achievement.date}
                                </span>
                              </div>
                              <h4 className="text-lg font-semibold text-gray-800 mb-2">
                                {achievement.title}
                              </h4>
                              <p className="text-gray-600 text-sm">
                                {achievement.description}
                              </p>
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </motion.div>
    </main>
  );
};


export const SuccessesSection = ({
  className = "",
  achievements = sampleAchievements,
}: SuccessesSectionProps) => {
  // Group achievements by year for the timeline
  const achievementsByYear = achievements.reduce((acc, achievement) => {
    const year = achievement.date.split(" ")[1]; // Extract year from "Month Year" format
    if (!acc[year]) {
      acc[year] = [];
    }
    acc[year].push(achievement);
    return acc;
  }, {} as Record<string, Achievement[]>);

  // Get unique categories for filtering
  const categories = Array.from(new Set(achievements.map((a) => a.category)));

  const [activeFilter, setActiveFilter] = React.useState<string | null>(null);
  const filteredAchievements = activeFilter
    ? achievements.filter((a) => a.category === activeFilter)
    : achievements;

  return (
    <section className={`w-full py-24 ${className}`}>
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-tealAccent via-tealAccent/70 to-mintAccent bg-clip-text text-transparent">
            Our Successes & Milestones
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Celebrating our achievements and progress in developing sustainable
            alternatives to traditional fluorinated materials.
          </p>
        </motion.div>

        {/* Category filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <button
            onClick={() => setActiveFilter(null)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              activeFilter === null
                ? "bg-tealAccent text-white"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
          >
            All
          </button>
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium capitalize transition-colors ${
                activeFilter === category
                  ? "bg-tealAccent text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              {category}s
            </button>
          ))}
        </div>

        {/* Achievements grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {filteredAchievements.map((achievement) => (
            <motion.div
              key={achievement.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white/10 backdrop-blur-sm border border-tealAccent/20 rounded-xl p-6 hover:border-tealAccent/40 transition-all"
            >
              <div className="flex items-start mb-4">
                <div className="w-12 h-12 rounded-full bg-tealAccent/10 flex items-center justify-center mr-4 flex-shrink-0">
                  {achievement.icon}
                </div>
                <div>
                  <span className="text-sm text-gray-500">
                    {achievement.date}
                  </span>
                  <h3 className="text-xl font-semibold text-gray-800">
                    {achievement.title}
                  </h3>
                </div>
              </div>
              <p className="text-gray-600">{achievement.description}</p>
              <div className="mt-4">
                <span className="inline-block px-3 py-1 bg-tealAccent/10 text-tealAccent text-xs font-medium rounded-full capitalize">
                  {achievement.category}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        
       

        {/* Call to action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="hidden text-center mt-24 bg-gradient-to-br from-tealAccent/10 to-mintAccent/20 p-8 rounded-xl"
        >
          <h3 className="text-2xl font-semibold mb-4 text-gray-800">
            Join Us on Our Journey
          </h3>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-6">
            We're continuously advancing our technology and expanding our
            impact. Partner with us to be part of the sustainable materials
            revolution.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center justify-center px-6 py-3 bg-tealAccent text-white font-medium rounded-lg hover:bg-tealAccent/90 transition-colors"
          >
            Get in Touch
            <CheckCircle className="w-5 h-5 ml-2" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};
