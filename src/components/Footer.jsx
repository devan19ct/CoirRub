import { Instagram, Facebook, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="w-full bg-gray-400 text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-heading font-bold mb-4">Marari Coir Rubs</h3>
            <p className="text-sm opacity-90">
              Handwoven rugs and home decor crafted with care
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm opacity-90">
              <li><a href="#" className="hover:underline">Home</a></li>
              <li><a href="#about" className="hover:underline">About Us</a></li>
              <li><a href="#contact" className="hover:underline">Contact</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Connect</h4>
            <div className="flex gap-4 mb-4">
              {/* <a href="https://www.instagram.com/mat4u_official?igsh=aW5pcTA0bDBhOThq" target="_blank" rel="noopener noreferrer"className="hover:opacity-80 transition-opacity">
                <Instagram size={20} />
              </a> */}
              <a href="#home"  rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
                <Facebook size={20} />
              </a>
              <a href="https://www.linkedin.com/company/mat4u-official/" target="_blank" rel="noopener noreferrer"className="hover:opacity-80 transition-opacity">
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-sm opacity-80">
          <p>&copy; 2025 MARARI COIR RUBS. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
