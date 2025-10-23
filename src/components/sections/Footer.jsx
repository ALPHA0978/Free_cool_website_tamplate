/**
 * Footer Component
 * 
 * Website footer with company information, navigation links, and copyright.
 * Organized in a four-column grid layout with comprehensive site navigation.
 * 
 * Features:
 * - Four-column responsive grid layout
 * - Company logo and description
 * - Organized link categories (Services, Company, Legal)
 * - Hover effects on navigation links
 * - Copyright notice with current year
 * - Mobile-responsive design
 * 
 * Link Categories:
 * - Services: Web Development, Mobile Apps, Cloud Solutions, Consulting
 * - Company: About Us, Careers, Blog, Contact
 * - Legal: Privacy Policy, Terms of Service, Cookie Policy
 * 
 * @component
 * @example
 * <Footer />
 */

import { Link } from "react-router-dom";
import Logo from "../common/Logo";

const Footer = () => {
  return (
    <footer className="border-t py-12">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <Logo className="mb-4" />
            <p className="text-sm text-muted-foreground">
              Building exceptional software solutions for businesses worldwide.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link to="/web-development" className="hover:text-foreground">Web Development</Link></li>
              <li><Link to="/mobile-apps" className="hover:text-foreground">Mobile Apps</Link></li>
              <li><Link to="/cloud-solutions" className="hover:text-foreground">Cloud Solutions</Link></li>
              <li><Link to="/consulting" className="hover:text-foreground">Consulting</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link to="/about" className="hover:text-foreground">About Us</Link></li>
              <li><Link to="/careers" className="hover:text-foreground">Careers</Link></li>
              <li><Link to="/blog" className="hover:text-foreground">Blog</Link></li>
              <li><Link to="/contact" className="hover:text-foreground">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link to="/privacy" className="hover:text-foreground">Privacy Policy</Link></li>
              <li><Link to="/terms" className="hover:text-foreground">Terms of Service</Link></li>
              <li><Link to="/cookies" className="hover:text-foreground">Cookie Policy</Link></li>
            </ul>
          </div>
        </div>
        <div className="border-t pt-8 text-center text-sm text-muted-foreground">
          <p>&copy;2025 Manish Raj. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;