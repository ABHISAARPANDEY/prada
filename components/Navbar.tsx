"use client";

import { Menu, X } from "lucide-react";
import PradaLogo from "./PradaLogo";

interface NavbarProps {
  onMenuToggle: () => void;
  isMenuOpen: boolean;
}

export default function Navbar({ onMenuToggle, isMenuOpen }: NavbarProps) {
  return (
    <nav className="sticky top-0 z-50 luxury-gradient text-white border-b border-prada-gold/30 backdrop-blur-md shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center space-x-6">
            <button
              onClick={onMenuToggle}
              className="lg:hidden p-2 rounded-md text-white hover:bg-prada-gray/50 transition-colors"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
            <div className="flex items-center space-x-4">
              <PradaLogo size="lg" className="text-white" />
              <div className="hidden md:block h-8 w-px bg-prada-gold/40" />
              <div className="hidden md:block">
                <h1 className="text-lg font-serif font-bold tracking-wide">
                  Financial Dashboard
                </h1>
                <p className="text-xs text-gray-300 font-sans">
                  2021–2023 Comprehensive Analysis
                </p>
              </div>
            </div>
          </div>
          <div className="hidden lg:flex items-center space-x-4">
            <div className="h-8 w-px bg-prada-gold/30" />
            <div className="text-right">
              <p className="text-xs text-gray-300 font-sans">Luxury Financial Intelligence</p>
              <p className="text-xs text-prada-gold font-medium">PRADA Group</p>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

