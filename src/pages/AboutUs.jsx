/**
 * About Us Page
 * 
 * Company information, mission, vision, and team details.
 * 
 * @author Manish Raj
 * @version 1.0.0
 */

import React from "react";
import { Link } from "react-router-dom";
import { Users, Award, Globe, Heart, ArrowRight, Target, Zap } from "lucide-react";
import { Button } from "../components/ui/button";
import { Card, CardHeader, CardContent } from "../components/ui/card";
import AnimatedGroup from "../components/common/AnimatedGroup";
import { CallToAction } from "../components/ui/cta-3";
import ValuesSection from "../components/sections/ValuesSection";

const AboutUs = () => {
  const stats = [
    { number: "500+", label: "Projects Completed" },
    { number: "50+", label: "Happy Clients" },
    { number: "5+", label: "Years Experience" },
    { number: "24/7", label: "Support Available" }
  ];

  return (
    <div className="min-h-screen bg-background pt-16">
      {/* Hero Section */}
      <section className="relative py-16 md:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <AnimatedGroup preset="blur-slide" className="text-center">
            <div className="bg-primary/10 rounded-full px-4 py-2 text-sm font-medium text-primary w-fit mx-auto mb-6">
              Our Story
            </div>
            <h1 className="text-6xl md:text-7xl font-bold mb-6">
              About Us
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              We are a passionate team of developers, designers, and innovators dedicated to creating exceptional digital experiences.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link to="/contact">Work With Us <ArrowRight className="ml-2 size-4" /></Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/careers">Join Our Team</Link>
              </Button>
            </div>
          </AnimatedGroup>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16">
        <div className="mx-auto max-w-6xl px-6">
          <AnimatedGroup preset="slide" className="grid md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <div key={index} className="p-6">
                <div className="text-4xl font-bold text-primary mb-2">{stat.number}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </AnimatedGroup>
        </div>
      </section>

      {/* Featured Image */}
      <section className="py-16">
        <div className="mx-auto max-w-6xl px-6">
          <AnimatedGroup preset="slide">
            <div className="relative overflow-hidden rounded-2xl border shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop"
                alt="Our Team"
                className="w-full aspect-[16/9] object-cover"
              />
            </div>
          </AnimatedGroup>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="dark:bg-muted/25 bg-zinc-50 py-16 md:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <AnimatedGroup preset="slide" className="grid md:grid-cols-2 gap-16">
            <Card className="group hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <Target className="size-12 text-primary mb-4 group-hover:scale-110 transition-transform" />
                <h2 className="text-3xl font-bold">Our Mission</h2>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  To empower businesses with cutting-edge technology solutions that drive growth, efficiency, and innovation. 
                  We believe in building software that not only meets today's needs but anticipates tomorrow's challenges.
                </p>
              </CardContent>
            </Card>
            
            <Card className="group hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <Zap className="size-12 text-primary mb-4 group-hover:scale-110 transition-transform" />
                <h2 className="text-3xl font-bold">Our Vision</h2>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  To be the leading technology partner for businesses worldwide, known for our expertise, reliability, 
                  and commitment to delivering transformative digital solutions that make a lasting impact.
                </p>
              </CardContent>
            </Card>
          </AnimatedGroup>
        </div>
      </section>

      {/* Values Section */}
      <ValuesSection />

      {/* Team Section */}
      <section className="dark:bg-muted/25 bg-zinc-50 py-16 md:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <AnimatedGroup preset="slide">
              <h2 className="text-4xl font-bold mb-6">Meet Our Team</h2>
              <p className="text-muted-foreground text-lg mb-8">
                Our diverse team of experts brings together years of experience in software development, 
                design, and digital strategy to deliver exceptional results for our clients.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <Users className="size-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Experienced Professionals</h4>
                    <p className="text-muted-foreground text-sm">Senior developers with 5+ years experience</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <Award className="size-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Certified Experts</h4>
                    <p className="text-muted-foreground text-sm">AWS, Azure, and Google Cloud certified</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <Globe className="size-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Global Perspective</h4>
                    <p className="text-muted-foreground text-sm">Diverse backgrounds and international experience</p>
                  </div>
                </div>
              </div>
            </AnimatedGroup>
            
            <AnimatedGroup preset="blur-slide">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-2xl blur-3xl" />
                <img
                  src="https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=2074&auto=format&fit=crop"
                  alt="Team Collaboration"
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
            title="Ready to Work Together?"
            description="Let's discuss how we can help transform your business with innovative technology solutions."
            primaryText="Start a Project"
            primaryHref="/contact"
            secondaryText="Join Our Team"
            secondaryHref="/careers"
          />
        </div>
      </section>
    </div>
  );
};

export default AboutUs;