import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Project Area", path: "/project-area" },
    { name: "Programs", path: "/programs" },
    { name: "Gallery", path: "/gallery" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
            <Link to="/" className="flex items-center gap-3 transition-opacity hover:opacity-80">
            <img src="/Stihub-logo.png" alt="STIHUB" className="h-16 object-contain" />
            </Link>

          {/* Desktop Navigation - Centered */}
          <nav className="hidden md:flex items-center justify-center flex-1 gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="text-lg font-semibold text-foreground transition-colors hover:text-primary"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Register Button - Right Side */}
          <div className="hidden md:block">
            <Button asChild variant="default" size="lg">
              <a href="https://forms.gle/AmVraoUQgufHcDJYA" target="_blank" rel="noopener noreferrer">
                Register Now
              </a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-foreground hover:text-primary"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 animate-fade-in">
            <nav className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="text-base font-semibold text-foreground transition-colors hover:text-primary py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <Button asChild variant="default" size="lg" className="w-full">
                <a href="https://forms.gle/AmVraoUQgufHcDJYA" target="_blank" rel="noopener noreferrer">
                  Register Now
                </a>
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
