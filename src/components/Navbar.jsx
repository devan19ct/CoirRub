import { useState } from "react";
import {
  Menu,
  X,
  Instagram,
  Facebook,
} from "lucide-react";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const links = [
    { name: "Home", href: "#home" },
    { name: "About US", href: "#about" },
    { name: "Contact US", href: "#contact" },
  ];

  return (
    <header className="w-full bg-gray-100 border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-4">

        <div className="flex justify-end items-center py-2 border-b border-border">
          <div className="flex gap-4">
            <a
              href="https://www.instagram.com/mat4u_official?igsh=aW5pcTA0bDBhOThq"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <Instagram size={16} />
            </a>
            <a
              href="#"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <Facebook size={16} />
            </a>
          </div>
        </div>

        {/* 🔹 Main header */}
        <div className="flex items-center justify-between py-6">
          {/* Logo */}
          <div className="flex items-center">
            <h1 className="text-2xl font-heading font-bold text-primary">
              MARARI COIR RUB
            </h1>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8 px-4 md:px-8 lg:px-12">
            {links.map((link, i) => (
              <a
                key={i}
                href={link.href}
                className="text-sm uppercase tracking-wide hover:text-primary transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-4">
            {/* Mobile menu toggle */}
            <button
              className="md:hidden p-2"
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* 🔹 Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-background border-t border-border">
          <div className="flex flex-col p-4 space-y-4">
            {links.map((link, i) => (
              <a
                key={i}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="text-sm uppercase tracking-wide hover:text-primary transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
