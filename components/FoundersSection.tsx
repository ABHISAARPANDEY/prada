"use client";

import { motion } from "framer-motion";
import { Award, Calendar, MapPin, Briefcase } from "lucide-react";

interface Founder {
  name: string;
  role: string;
  period: string;
  description: string;
  achievements: string[];
  image: string; // Placeholder - in production, use actual images
}

const founders: Founder[] = [
  {
    name: "Mario Prada",
    role: "Founder",
    period: "1913-1958",
    description:
      "Mario Prada founded the luxury goods company in Milan in 1913, initially specializing in leather goods, trunks, and travel accessories. His vision was to create the finest quality products using traditional Italian craftsmanship.",
    achievements: [
      "Established PRADA as a luxury leather goods brand",
      "Opened the first PRADA store in Galleria Vittorio Emanuele II, Milan",
      "Built reputation for exceptional quality and craftsmanship",
      "Created iconic designs that became symbols of Italian luxury",
    ],
    image: "/api/placeholder/400/500",
  },
  {
    name: "Miuccia Prada",
    role: "Creative Director & Co-CEO",
    period: "1978-Present",
    description:
      "Miuccia Prada, granddaughter of Mario Prada, transformed the brand into a global fashion powerhouse. Under her creative direction, PRADA became known for intellectual, avant-garde designs that challenge conventional luxury fashion.",
    achievements: [
      "Revolutionized PRADA with intellectual, minimalist designs",
      "Introduced the iconic black nylon backpack in 1984",
      "Expanded into ready-to-wear, footwear, and accessories",
      "Founded Miu Miu as a secondary line in 1993",
      "Led PRADA to become a publicly traded company",
      "Multiple CFDA Awards and fashion industry recognition",
    ],
    image: "/api/placeholder/400/500",
  },
  {
    name: "Patrizio Bertelli",
    role: "CEO & Co-CEO",
    period: "1977-Present",
    description:
      "Patrizio Bertelli joined PRADA in 1977 and became CEO, bringing strategic business acumen and operational excellence. He transformed PRADA from a family business into a global luxury conglomerate with a strong financial foundation.",
    achievements: [
      "Led PRADA's global expansion strategy",
      "Oversaw the company's IPO in 2011",
      "Implemented direct retail network expansion",
      "Established PRADA as a leader in sustainable luxury",
      "Achieved record financial performance and profitability",
    ],
    image: "/api/placeholder/400/500",
  },
];

export default function FoundersSection() {
  return (
    <motion.section
      id="founders"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="mb-20"
    >
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-serif font-bold text-prada-black mb-4">
          The Visionaries Behind PRADA
        </h2>
        <p className="text-gray-600 text-lg max-w-3xl mx-auto">
          From a small Milanese leather goods shop to a global luxury empire - meet the founders
          and leaders who shaped PRADA's legacy
        </p>
        <div className="w-32 h-1 bg-gradient-to-r from-transparent via-prada-gold to-transparent mx-auto mt-6 rounded-full" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {founders.map((founder, index) => (
          <motion.div
            key={founder.name}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className="bg-gradient-to-br from-white via-prada-light/20 to-white rounded-2xl p-8 border border-prada-light/20 shadow-xl hover:shadow-2xl transition-all duration-300 group"
          >
            {/* Founder Image Placeholder */}
            <div className="relative mb-6 h-64 bg-gradient-to-br from-prada-black via-prada-dark to-prada-black rounded-xl overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-32 h-32 bg-prada-gold/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Award className="w-16 h-16 text-prada-gold" />
                  </div>
                  <p className="text-white font-serif text-xl font-bold">
                    {founder.name.split(" ")[0]}
                  </p>
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>

            <div className="space-y-4">
              <div>
                <h3 className="text-2xl font-serif font-bold text-prada-black mb-1">
                  {founder.name}
                </h3>
                <div className="flex items-center space-x-2 text-prada-gold mb-2">
                  <Briefcase className="w-4 h-4" />
                  <span className="text-sm font-medium">{founder.role}</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-600 text-sm">
                  <Calendar className="w-4 h-4" />
                  <span>{founder.period}</span>
                </div>
              </div>

              <p className="text-gray-700 leading-relaxed">{founder.description}</p>

              <div className="pt-4 border-t border-prada-light/30">
                <h4 className="font-serif font-bold text-prada-black mb-3 flex items-center">
                  <Award className="w-4 h-4 text-prada-gold mr-2" />
                  Key Achievements
                </h4>
                <ul className="space-y-2">
                  {founder.achievements.map((achievement, i) => (
                    <li key={i} className="flex items-start text-sm text-gray-600">
                      <span className="text-prada-gold mr-2 mt-1">•</span>
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Legacy Timeline */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="mt-16 bg-gradient-to-br from-prada-black via-prada-dark to-prada-black rounded-2xl p-8 md:p-12 text-white"
      >
        <h3 className="text-3xl font-serif font-bold mb-8 text-center">
          PRADA Legacy Timeline
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {[
            { year: "1913", event: "Mario Prada founds PRADA in Milan" },
            { year: "1978", event: "Miuccia Prada takes creative direction" },
            { year: "1984", event: "Iconic black nylon backpack launched" },
            { year: "1993", event: "Miu Miu brand established" },
            { year: "2011", event: "PRADA Group IPO on Hong Kong Stock Exchange" },
            { year: "2021-2023", event: "Record financial performance" },
          ].map((milestone, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
              className="text-center"
            >
              <div className="text-4xl font-serif font-bold text-prada-gold mb-2">
                {milestone.year}
              </div>
              <div className="w-16 h-0.5 bg-prada-gold mx-auto mb-3" />
              <p className="text-sm text-gray-300">{milestone.event}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.section>
  );
}

