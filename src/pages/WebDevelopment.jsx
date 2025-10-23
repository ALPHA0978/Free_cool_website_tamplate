/**
 * Web Development Service Page
 * 
 * Dedicated page showcasing web development services and capabilities.
 * 
 * @author Manish Raj
 * @version 1.0.0
 */

import React from "react";
import { Link } from "react-router-dom";
import { Code, Globe, Smartphone, Zap, ArrowRight, CheckCircle } from "lucide-react";
import { Button } from "../components/ui/button";
import { Card, CardHeader, CardContent } from "../components/ui/card";
import AnimatedGroup from "../components/common/AnimatedGroup";
import { CallToAction } from "../components/ui/cta-3";
import { BentoCard, BentoGrid } from "../components/ui/bento-grid";

const WebDevelopment = () => {
  const features = [
    "Responsive Design", "SEO Optimization", "Performance Tuning", "Security Best Practices",
    "API Integration", "Database Design", "Cloud Deployment", "Maintenance & Support"
  ];

  return (
    <div className="min-h-screen bg-background pt-1">
      {/* Hero Section */}
      <section className="relative py-16 md:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <AnimatedGroup preset="blur-slide" className="text-center">
            <div className="bg-primary/10 rounded-full px-4 py-2 text-sm font-medium text-primary w-fit mx-auto mb-6">
              Web Development Excellence
            </div>
            <h1 className="text-6xl md:text-7xl font-bold mb-6">
              Web Development Services
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Create powerful, scalable web applications that drive business growth and deliver exceptional user experiences.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link to="/contact">Start Your Project <ArrowRight className="ml-2 size-4" /></Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/about">Learn More</Link>
              </Button>
            </div>
          </AnimatedGroup>
        </div>
      </section>

      {/* Featured Image */}
      <section className="py-16">
        <div className="mx-auto max-w-6xl px-6">
          <AnimatedGroup preset="slide">
            <div className="relative overflow-hidden rounded-2xl border shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop"
                alt="Web Development"
                className="w-full aspect-[16/9] object-cover"
              />
            </div>
          </AnimatedGroup>
        </div>
      </section>

      {/* Services Grid */}
      <section className="dark:bg-muted/25 bg-zinc-50 py-16 md:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <AnimatedGroup preset="slide" className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Our Web Development Services</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              From concept to deployment, we provide end-to-end web development solutions.
            </p>
          </AnimatedGroup>
          
          <AnimatedGroup preset="blur-slide">
            <BentoGrid className="lg:grid-rows-3">
              <BentoCard
                name="Frontend Development"
                className="lg:row-start-1 lg:row-end-3 lg:col-start-1 lg:col-end-2"
                background={
                  <img 
                    className="absolute -right-20 -top-20 opacity-60" 
                    src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=400&auto=format&fit=crop"
                    alt="Frontend development"
                  />
                }
                Icon={Code}
                description="Modern React, Vue.js, and Angular applications with responsive design and optimal performance."
                href="/contact"
                cta="Get started"
              />
              <BentoCard
                name="Backend Development"
                className="lg:col-start-2 lg:col-end-3 lg:row-start-1 lg:row-end-4"
                background={
                  <img 
                    className="absolute -right-20 -top-20 opacity-60" 
                    src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=400&auto=format&fit=crop"
                    alt="Backend development"
                  />
                }
                Icon={Globe}
                description="Robust server-side solutions with Node.js, Python, and cloud-native architectures. 99.9% Uptime Guarantee"
                href="/contact"
                cta="Learn more"
              />
              <BentoCard
                name="Progressive Web Apps"
                className="lg:col-start-1 lg:col-end-2 lg:row-start-3 lg:row-end-4"
                background={
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-400/20 to-pink-600/20" />
                }
                Icon={Smartphone}
                description="App-like experiences across all devices with offline capabilities."
                href="/contact"
                cta="Explore PWAs"
              />
              <BentoCard
                name="Performance Optimization"
                className="lg:col-start-3 lg:col-end-3 lg:row-start-1 lg:row-end-3"
                background={
                  <img 
                    className="absolute -right-20 -top-20 opacity-60" 
                    src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=400&auto=format&fit=crop"
                    alt="Performance optimization"
                  />
                }
                Icon={Zap}
                description="Lightning-fast loading times and optimal user experience through advanced optimization techniques."
                href="/contact"
                cta="Optimize now"
              />
              <BentoCard
                name="24/7 Support"
                className="lg:col-start-3 lg:col-end-3 lg:row-start-3 lg:row-end-4"
                background={
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 to-green-600/20" />
                }
                Icon={CheckCircle}
                description="Round-the-clock technical support and maintenance for your applications."
                href="/contact"
                cta="Get support"
              />
            </BentoGrid>
          </AnimatedGroup>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 md:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <AnimatedGroup preset="slide">
              <h2 className="text-4xl font-bold mb-6">Why Choose Our Web Development?</h2>
              <p className="text-muted-foreground text-lg mb-8">
                We combine cutting-edge technology with proven methodologies to deliver web solutions that exceed expectations.
              </p>
              <div className="grid gap-4">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="size-5 text-primary shrink-0" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </AnimatedGroup>
            
            <AnimatedGroup preset="blur-slide">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-2xl blur-3xl" />
                <img
                  src="https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=2940&auto=format&fit=crop"
                  alt="Development Process"
                  className="relative rounded-2xl shadow-2xl"
                />
              </div>
            </AnimatedGroup>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <CallToAction 
            title="Ready to Start Your Web Project?"
            description="Let's discuss your requirements and build something amazing together."
            primaryText="Start Your Project"
            primaryHref="/contact"
            secondaryText="View Portfolio"
            secondaryHref="/about"
          />
        </div>
      </section>
    </div>
  );
};

export default WebDevelopment;