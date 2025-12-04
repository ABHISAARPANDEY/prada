"use client";

import { motion } from "framer-motion";
import { Building2, Globe, Award, Users } from "lucide-react";

export default function CompanyOverview() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="mb-20"
    >
      <div className="bg-gradient-to-br from-white via-prada-light/30 to-white rounded-2xl p-8 md:p-12 border border-prada-light/20 shadow-2xl">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center mb-8"
          >
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-prada-black mb-4">
              About PRADA Group
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-transparent via-prada-gold to-transparent mx-auto rounded-full" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="prose prose-lg max-w-none"
          >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                <div>
                  <p className="text-gray-700 leading-relaxed text-lg mb-6">
                    <strong className="text-prada-black">PRADA Group</strong> is one of the world's
                    leading luxury fashion companies, founded in Milan, Italy in 1913 by Mario
                    Prada. The company has evolved from a small leather goods shop into a global
                    luxury brand synonymous with elegance, innovation, and Italian craftsmanship.
                  </p>

                  <p className="text-gray-700 leading-relaxed text-lg mb-6">
                    Today, PRADA Group operates a portfolio of prestigious brands including{" "}
                    <strong>PRADA</strong>, <strong>Miu Miu</strong>, <strong>Church's</strong>, and{" "}
                    <strong>Car Shoe</strong>, with a presence in over 70 countries through a
                    network of directly operated stores and selected multi-brand stores.
                  </p>
                </div>

                <div className="bg-gradient-to-br from-prada-gold/10 to-prada-black/5 rounded-xl p-6 border border-prada-gold/20">
                  <h4 className="font-serif font-bold text-xl mb-4 text-prada-black">
                    Company Facts
                  </h4>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-prada-gold mr-2 font-bold">•</span>
                      <span>
                        <strong>Founded:</strong> 1913 in Milan, Italy
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-prada-gold mr-2 font-bold">•</span>
                      <span>
                        <strong>Headquarters:</strong> Milan, Italy
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-prada-gold mr-2 font-bold">•</span>
                      <span>
                        <strong>Stock Exchange:</strong> Hong Kong Stock Exchange (since 2011)
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-prada-gold mr-2 font-bold">•</span>
                      <span>
                        <strong>Employees:</strong> Over 13,000 worldwide
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-prada-gold mr-2 font-bold">•</span>
                      <span>
                        <strong>Stores:</strong> 600+ directly operated stores globally
                      </span>
                    </li>
                  </ul>
                </div>
              </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="bg-white/50 rounded-xl p-6 border border-prada-light/20"
              >
                <Building2 className="w-8 h-8 text-prada-gold mb-3" />
                <h3 className="font-serif font-bold text-xl mb-2">Global Presence</h3>
                <p className="text-gray-600">
                  Over 600 directly operated stores worldwide, with strong presence in Asia,
                  Europe, and the Americas.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                className="bg-white/50 rounded-xl p-6 border border-prada-light/20"
              >
                <Award className="w-8 h-8 text-prada-gold mb-3" />
                <h3 className="font-serif font-bold text-xl mb-2">Heritage & Innovation</h3>
                <p className="text-gray-600">
                  Over 110 years of Italian craftsmanship combined with modern design innovation
                  and sustainable practices.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="bg-white/50 rounded-xl p-6 border border-prada-light/20"
              >
                <Globe className="w-8 h-8 text-prada-gold mb-3" />
                <h3 className="font-serif font-bold text-xl mb-2">Product Portfolio</h3>
                <p className="text-gray-600">
                  Luxury leather goods, ready-to-wear, footwear, accessories, eyewear, and
                  fragrances across multiple brands.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.9 }}
                className="bg-white/50 rounded-xl p-6 border border-prada-light/20"
              >
                <Users className="w-8 h-8 text-prada-gold mb-3" />
                <h3 className="font-serif font-bold text-xl mb-2">Market Position</h3>
                <p className="text-gray-600">
                  Leading position in the luxury goods market with strong brand recognition and
                  customer loyalty worldwide.
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}

