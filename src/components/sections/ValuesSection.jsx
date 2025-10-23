/**
 * Values Section Component
 * 
 * Displays company core values with interactive cards, metrics, and visual elements.
 * Features animated cards, development process visualization, and statistics.
 * 
 * Features:
 * - Core values cards with icons and metrics
 * - Interactive hover animations with Framer Motion
 * - Development process visualization with DatabaseWithRestApi
 * - Statistics grid with company achievements
 * - Gradient background and responsive design
 * - Left border highlight on card hover
 * 
 * Values displayed:
 * - Collaboration (95% Client Satisfaction)
 * - Excellence (50+ Countries)
 * - Innovation (100+ Projects)
 * - Integrity (24/7 Support)
 * 
 * @component
 * @example
 * <ValuesSection />
 */

import React from "react";
import { motion } from "framer-motion";
import { Users, Award, Lightbulb, Shield, Globe, Heart } from "lucide-react";
import { Card, CardHeader, CardContent } from "../ui/card";
import AnimatedGroup from "../common/AnimatedGroup";
import DatabaseWithRestApi from "../ui/database-with-rest-api";

const ValuesSection = () => {
  const values = [
    {
      icon: Users,
      title: "Collaboration",
      description: "We work closely with our clients as partners, ensuring transparent communication and shared success.",
      metric: "95%",
      metricLabel: "Client Satisfaction",
      color: "text-foreground"
    },
    {
      icon: Award,
      title: "Excellence", 
      description: "We strive for perfection in every project, delivering high-quality solutions.",
      metric: "50+",
      metricLabel: "Countries",
      color: "text-foreground"
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "We embrace new technologies and methodologies to create forward-thinking solutions.",
      metric: "100+",
      metricLabel: "Projects",
      color: "text-foreground"
    },
    {
      icon: Shield,
      title: "Integrity",
      description: "Honest and transparent business practices built on trust and reliability.",
      metric: "24/7",
      metricLabel: "Support",
      color: "text-foreground"
    }
  ];

  return (
    <section className="py-16 md:py-32 bg-gradient-to-b from-background to-muted/20">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <AnimatedGroup preset="slide" className="text-center mb-16">
          <div className="bg-primary/10 rounded-full px-4 py-2 text-sm font-medium text-primary w-fit mx-auto mb-6">
            Our Values
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            The principles that guide everything we do
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our company culture is built on these core values that shape our decisions and drive our success.
          </p>
        </AnimatedGroup>

        {/* Values Grid with Interactive Component */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
          {/* Values Cards */}
          <AnimatedGroup preset="blur-slide" className="grid gap-6">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Card className="group hover:shadow-lg transition-all duration-300 border-l-4 border-l-transparent hover:border-l-primary">
                    <CardHeader className="pb-3">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className={`p-2 rounded-lg bg-primary/10 ${value.color}`}>
                            <Icon className="size-6" />
                          </div>
                          <h3 className="text-xl font-semibold">{value.title}</h3>
                        </div>
                        <div className="text-right">
                          <div className={`text-2xl font-bold ${value.color}`}>
                            {value.metric}
                          </div>
                          <div className="text-xs text-muted-foreground">
                            {value.metricLabel}
                          </div>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">{value.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </AnimatedGroup>

          {/* Interactive Database Component */}
          <AnimatedGroup preset="slide" className="flex justify-center">
            <DatabaseWithRestApi 
              title="Our Development Process"
              circleText="API"
              badgeTexts={{
                first: "PLAN",
                second: "BUILD", 
                third: "TEST",
                fourth: "DEPLOY"
              }}
              buttonTexts={{
                first: "TechCorp",
                second: "v3_release"
              }}
              lightColor="#3b82f6"
            />
          </AnimatedGroup>
        </div>

        {/* Bottom Stats */}
        <AnimatedGroup preset="blur-slide">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-16 border-t">
            <div className="text-center">
              <div className="flex items-center justify-center mb-3">
                <Globe className="size-8 text-foreground" />
              </div>
              <div className="text-3xl font-bold text-foreground mb-1">50+</div>
              <div className="text-sm text-muted-foreground">Countries Served</div>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center mb-3">
                <Users className="size-8 text-foreground" />
              </div>
              <div className="text-3xl font-bold text-foreground mb-1">95%</div>
              <div className="text-sm text-muted-foreground">Client Satisfaction</div>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center mb-3">
                <Award className="size-8 text-foreground" />
              </div>
              <div className="text-3xl font-bold text-foreground mb-1">100+</div>
              <div className="text-sm text-muted-foreground">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center mb-3">
                <Heart className="size-8 text-foreground" />
              </div>
              <div className="text-3xl font-bold text-foreground mb-1">24/7</div>
              <div className="text-sm text-muted-foreground">Support Available</div>
            </div>
          </div>
        </AnimatedGroup>
      </div>
    </section>
  );
};

export default ValuesSection;