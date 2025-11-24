import { Link } from "react-router-dom";
import { Facebook, Instagram, Linkedin, Mail, Phone, MapPin, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const quickLinks = [
    { name: "STIHub", path: "https://stihub.cit.ac.in/", external: true },
    { name: "Cit Kokrajhar", path: "https://www.cit.ac.in", external: true },
    { name: "DST Govt. of India", path: "https://dst.gov.in/", external: true },
    { name: "BTR Government", path: "https://bodoland.gov.in/", external: true },
    {name : "e-Farmer Assist", path: "https://eagriassist.in/", external: true},
  ];

  return (
    <footer className="relative bg-gradient-to-br from-primary via-primary-dark to-primary text-primary-foreground overflow-hidden">
      {/* Decorative smoke gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/5 to-transparent opacity-50"></div>
      
      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* About Section */}
          <div className="col-span-1 lg:col-span-2 space-y-6">
            <div className="flex items-center gap-4">
              <img src="/Stihub-logo.png" alt="STIHUB" className="h-12 md:h-16 object-contain" />
            </div>
            <p className="text-white/90 leading-relaxed max-w-md text-lg">
              Science Technology and Innovation Hub (STIHUB) at CIT Kokrajhar empowers Scheduled Tribe communities through science, technology, and innovation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild className="bg-white text-primary hover:bg-white/90 shadow-lg group">
                <a href="https://forms.gle/AmVraoUQgufHcDJYA" target="_blank" rel="noopener noreferrer">
                  Register Now
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
              <div className="flex gap-3">
                <a href="#" title="Facebook" aria-label="Facebook" className="p-3 rounded-xl bg-white/10 backdrop-blur-sm hover:bg-white/20 border border-white/20 transition-all hover:scale-110 hover:shadow-lg">
                  <Facebook size={20} />
                </a>
                <a href="#" title="Instagram" aria-label="Instagram" className="p-3 rounded-xl bg-white/10 backdrop-blur-sm hover:bg-white/20 border border-white/20 transition-all hover:scale-110 hover:shadow-lg">
                  <Instagram size={20} />
                </a>
                <a href="https://www.linkedin.com/company/stihub-citk/" target="_blank" rel="noopener noreferrer" title="LinkedIn" aria-label="LinkedIn" className="p-3 rounded-xl bg-white/10 backdrop-blur-sm hover:bg-white/20 border border-white/20 transition-all hover:scale-110 hover:shadow-lg">
                  <Linkedin size={20} />
                </a>
              </div>
            </div>
          </div>

            {/* Useful Links */}
            <div>
            <h3 className="text-xl font-bold text-white mb-6 tracking-tight">Useful Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
              <li key={link.path}>
                <Link
                to={link.path}
                target={link.external ? "_blank" : "_self"}
                rel={link.external ? "noopener noreferrer" : undefined}
                className="text-white/90 hover:text-white transition-colors inline-flex items-center gap-2 group text-base"
                >
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                {link.name}
                </Link>
              </li>
              ))}
            </ul>
            </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold text-white mb-6 tracking-tight">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-white/90">
                <div className="p-2 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20">
                  <MapPin size={20} className="flex-shrink-0" />
                </div>
                <span className="text-base leading-relaxed">Central Institute of Technology, Kokrajhar, Assam</span>
              </li>
              <li className="flex items-center gap-3 text-white/90">
                <div className="p-2 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20">
                  <Mail size={20} className="flex-shrink-0" />
                </div>
                <a href="mailto:stihub@cit.ac.in" className="hover:text-white transition-colors text-base">
                  stihub@cit.ac.in
                </a>
              </li>
              <li className="flex items-center gap-3 text-white/90">
                <div className="p-2 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20">
                  <Phone size={20} className="flex-shrink-0" />
                </div>
                <span className="text-base">+91 7002571322</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-white/20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
            <p className="text-base text-white/90">
              © 2025 Science Technology and Innovation Hub (STIHUB), CIT Kokrajhar.
            </p>
            <p className="text-base text-white/90">
              Funded by <span className="font-semibold text-white">Department of Science & Technology, Government of India</span>
            </p>
          </div>
        </div>
      </div>

      {/* Bottom decorative gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>
    </footer>
  );
};

export default Footer;
