/**
 * Showcase Section Component
 * 
 * Interactive service showcase with stacked display cards and company statistics.
 * Features animated card stack showing core services and achievement metrics.
 * 
 * Features:
 * - Interactive stacked display cards with hover animations
 * - Service categories (Web Development, Mobile Apps, Cloud Solutions)
 * - Color-coded service cards with custom icons
 * - Company statistics grid with achievement metrics
 * - Gradient background transitions
 * - Responsive design with mobile optimization
 * 
 * Services showcased:
 * - Web Development (React & Next.js)
 * - Mobile Apps (iOS & Android)
 * - Cloud Solutions (AWS, Azure, Google Cloud)
 * 
 * Statistics displayed:
 * - 500+ Happy Clients
 * - 1000+ Projects Delivered
 * - 99.9% Uptime Guarantee
 * 
 * @component
 * @example
 * <ShowcaseSection />
 */

import React from "react";
import { Code, Smartphone, Cloud, Users, Award, Zap } from "lucide-react";
import DisplayCards from "../ui/display-cards";
import AnimatedGroup from "../common/AnimatedGroup";

const ShowcaseSection = () => {
  const showcaseCards = [
    {
      icon: <Code className="size-4 text-blue-300" />,
      title: "Web Development",
      description: "Modern React & Next.js solutions",
      date: "Latest Projects",
      iconClassName: "text-blue-500",
      titleClassName: "text-blue-500",
      className: "[grid-area:stack] hover:-translate-y-10 before:absolute before:w-[100%] before:outline-1 before:rounded-xl before:outline-border before:h-[100%] before:content-[''] before:bg-blend-overlay before:bg-background/50 grayscale-[100%] hover:before:opacity-0 before:transition-opacity before:duration-700 hover:grayscale-0 before:left-0 before:top-0",
    },
    {
      icon: <Smartphone className="size-4 text-green-300" />,
      title: "Mobile Apps",
      description: "iOS & Android development",
      date: "Cross-platform",
      iconClassName: "text-green-500",
      titleClassName: "text-green-500",
      className: "[grid-area:stack] translate-x-16 translate-y-10 hover:-translate-y-1 before:absolute before:w-[100%] before:outline-1 before:rounded-xl before:outline-border before:h-[100%] before:content-[''] before:bg-blend-overlay before:bg-background/50 grayscale-[100%] hover:before:opacity-0 before:transition-opacity before:duration-700 hover:grayscale-0 before:left-0 before:top-0",
    },
    {
      icon: <Cloud className="size-4 text-purple-300" />,
      title: "Cloud Solutions",
      description: "AWS, Azure & Google Cloud",
      date: "Scalable Infrastructure",
      iconClassName: "text-purple-500",
      titleClassName: "text-purple-500",
      className: "[grid-area:stack] translate-x-32 translate-y-20 hover:translate-y-10",
    },
  ];

  return (
    <section className="py-16 md:py-32 bg-gradient-to-b from-muted/20 to-background">
      <div className="mx-auto max-w-7xl px-6">
        <AnimatedGroup preset="slide" className="text-center mb-16">
          <div className="bg-primary/10 rounded-full px-4 py-2 text-sm font-medium text-primary w-fit mx-auto mb-6">
            Our Services
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            What We Do Best
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Explore our comprehensive range of development services designed to bring your ideas to life.
          </p>
        </AnimatedGroup>

        <AnimatedGroup preset="blur-slide" className="flex justify-center mb-16">
          <DisplayCards cards={showcaseCards} />
        </AnimatedGroup>

        {/* Stats */}
        <AnimatedGroup preset="slide" className="grid md:grid-cols-3 gap-8 text-center">
          <div className="p-6">
            <div className="flex items-center justify-center mb-4">
              <Users className="size-12 text-primary" />
            </div>
            <div className="text-3xl font-bold mb-2">500+</div>
            <div className="text-muted-foreground">Happy Clients</div>
          </div>
          <div className="p-6">
            <div className="flex items-center justify-center mb-4">
              <Award className="size-12 text-primary" />
            </div>
            <div className="text-3xl font-bold mb-2">1000+</div>
            <div className="text-muted-foreground">Projects Delivered</div>
          </div>
          <div className="p-6">
            <div className="flex items-center justify-center mb-4">
              <Zap className="size-12 text-primary" />
            </div>
            <div className="text-3xl font-bold mb-2">99.9%</div>
            <div className="text-muted-foreground">Uptime Guarantee</div>
          </div>
        </AnimatedGroup>
      </div>
    </section>
  );
};

export default ShowcaseSection;