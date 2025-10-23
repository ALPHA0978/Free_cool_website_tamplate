/**
 * ContactSection Component
 * 
 * Contact form and company information section with dual-column layout.
 * Provides multiple ways for potential clients to get in touch.
 * 
 * Features:
 * - Two-column responsive layout
 * - Contact information with icons (email, phone, address)
 * - Interactive contact form with validation styling
 * - Form fields for name, email, and project details
 * - Accessible form labels and placeholders
 * - Focus states with primary color ring
 * 
 * Contact Methods:
 * - Email: manishraj@novonixsoft.com
 * - Phone: +91 (55) ******7
 * - Office: 123 X-Street, Up , India 282007
 * 
 * @component
 * @example
 * <ContactSection />
 */

import { Mail, Phone, MapPin } from "lucide-react";
import { Button } from "../ui/button";
import { Card, CardContent } from "../ui/card";

const ContactSection = () => {
  return (
    <section id="contact" className="dark:bg-muted/25 bg-zinc-50 py-16 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-4">Let's Build Something Amazing</h2>
            <p className="text-muted-foreground text-lg mb-8">
              Ready to transform your ideas into reality? Get in touch with us today.
            </p>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <Mail className="size-6 text-primary shrink-0 mt-1" />
                <div>
                  <p className="font-medium">Email</p>
                  <p className="text-muted-foreground">manishraj@novonixsoft.com</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Phone className="size-6 text-primary shrink-0 mt-1" />
                <div>
                  <p className="font-medium">Phone</p>
                  <p className="text-muted-foreground">+91 (55) ******7</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <MapPin className="size-6 text-primary shrink-0 mt-1" />
                <div>
                  <p className="font-medium">Office</p>
                  <p className="text-muted-foreground">123 X-Street, Up , India 282007</p>
                </div>
              </div>
            </div>
          </div>
          <Card>
            <CardContent className="p-6">
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 rounded-lg border bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <input
                    type="email"
                    className="w-full px-4 py-2 rounded-lg border bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Project Details</label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-2 rounded-lg border bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="Tell us about your project..."
                  />
                </div>
                <Button className="w-full">Send Message</Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;