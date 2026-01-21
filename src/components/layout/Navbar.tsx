import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import logo from "@/assets/logo.jpg";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "Who We Are" },
  { href: "/services", label: "Services" },
  { href: "/clients", label: "Clients" },
  { href: "/contact", label: "Contact" },
  
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-card/95 backdrop-blur-md shadow-raked-md py-2"
          : "bg-transparent py-4"
      )}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img
              src={logo}
              alt="Raked Intl - Bringing the World to You"
              className="h-12 md:h-14 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={cn(
                  "font-heading font-medium text-sm transition-colors duration-200 relative",
                  isScrolled
                    ? "text-foreground hover:text-primary"
                    : "text-primary-foreground hover:text-accent",
                  location.pathname === link.href &&
                    "after:absolute after:bottom-[-4px] after:left-0 after:right-0 after:h-0.5 after:bg-accent"
                )}
              >
                {link.label}
              </Link>
            ))}
            {/*<Button variant={isScrolled ? "navy" : "hero"} size="lg" asChild>
              <Link to="/contact">Get In Touch</Link>
            </Button>*/}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={cn(
              "lg:hidden p-2 rounded-md transition-colors",
              isScrolled ? "text-foreground" : "text-primary-foreground"
            )}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={cn(
            "lg:hidden overflow-hidden transition-all duration-300",
            isOpen ? "max-h-96 opacity-100 mt-4" : "max-h-0 opacity-0"
          )}
        >
          <div className="bg-card rounded-lg shadow-raked-lg p-4 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={cn(
                  "block py-3 px-4 rounded-md font-heading font-medium text-sm transition-colors",
                  location.pathname === link.href
                    ? "bg-primary/10 text-primary"
                    : "text-foreground hover:bg-muted"
                )}
              >
                {link.label}
              </Link>
            ))}
            
          </div>
        </div>
      </div>
    </nav>
  );
}
