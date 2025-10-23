/**
 * Consulting Service Page
 * 
 * Dedicated page showcasing consulting and advisory services.
 * 
 * @author Manish Raj
 * @version 1.0.0
 */

import React from "react";
import { Link } from "react-router-dom";
import { Users, Target, TrendingUp, Lightbulb, ArrowRight, CheckCircle, Award } from "lucide-react";
import { Button } from "../components/ui/button";
import { Card, CardHeader, CardContent } from "../components/ui/card";
import AnimatedGroup from "../components/common/AnimatedGroup";
import { CallToAction } from "../components/ui/cta-3";

const Consulting = () => {
  const features = [
    "Digital Transformation Strategy", "Technology Assessment", "Process Optimization", "Team Training",
    "Architecture Review", "Performance Analysis", "Security Audit", "Innovation Workshops"
  ];

  const stats = [
    { number: "200+", label: "Projects Consulted" },
    { number: "95%", label: "Success Rate" },
    { number: "50+", label: "Enterprise Clients" },
    { number: "10+", label: "Years Experience" }
  ];

  return (
    <div className="min-h-screen bg-background pt-16">
      {/* Hero Section */}
      <section className="relative py-16 md:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <AnimatedGroup preset="blur-slide" className="text-center">
            <div className="bg-primary/10 rounded-full px-4 py-2 text-sm font-medium text-primary w-fit mx-auto mb-6">
              Strategic Technology Consulting
            </div>
            <h1 className="text-6xl md:text-7xl font-bold mb-6">
              Technology Consulting
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Strategic technology guidance to help your business make informed decisions and achieve digital transformation goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link to="/contact">Book Consultation <ArrowRight className="ml-2 size-4" /></Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/about">Our Expertise</Link>
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
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop"
                alt="Technology Consulting"
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
            <h2 className="text-4xl font-bold mb-4">Consulting Services</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Expert guidance to navigate complex technology decisions and accelerate your digital transformation.
            </p>
          </AnimatedGroup>
          
          <AnimatedGroup preset="blur-slide" className="grid md:grid-cols-2 gap-8">
            <Card className="group hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <Target className="size-12 text-primary mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-2xl font-semibold">Digital Strategy</h3>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Comprehensive digital transformation roadmaps aligned with your business objectives.
                </p>
                <div className="flex flex-wrap gap-2">
                  {["Strategy Planning", "Roadmapping", "ROI Analysis", "Risk Assessment"].map((tech) => (
                    <span key={tech} className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <Users className="size-12 text-primary mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-2xl font-semibold">Team Augmentation</h3>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Expert developers and consultants to strengthen your existing development teams.
                </p>
                <div className="flex flex-wrap gap-2">
                  {["Staff Augmentation", "Team Leadership", "Mentoring", "Knowledge Transfer"].map((tech) => (
                    <span key={tech} className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <TrendingUp className="size-12 text-primary mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-2xl font-semibold">Performance Audits</h3>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Comprehensive analysis of your current systems and recommendations for improvement.
                </p>
                <div className="flex flex-wrap gap-2">
                  {["System Analysis", "Performance Testing", "Security Review", "Optimization"].map((tech) => (
                    <span key={tech} className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <Lightbulb className="size-12 text-primary mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-2xl font-semibold">Innovation Workshops</h3>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Collaborative sessions to identify opportunities and develop innovative solutions.
                </p>
                <div className="flex flex-wrap gap-2">
                  {["Design Thinking", "Ideation", "Prototyping", "Innovation Strategy"].map((tech) => (
                    <span key={tech} className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          </AnimatedGroup>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 md:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <AnimatedGroup preset="slide">
              <h2 className="text-4xl font-bold mb-6">Get Expert Guidance</h2>
              <p className="text-muted-foreground text-lg mb-8">
                Our experienced consultants help you navigate complex technology decisions and accelerate your digital transformation journey.
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
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2070&auto=format&fit=crop"
                  alt="Consulting Process"
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
            title="Ready for Expert Guidance?"
            description="Schedule a consultation to discuss your technology challenges and opportunities."
            primaryText="Book Consultation"
            primaryHref="/contact"
            secondaryText="Learn About Us"
            secondaryHref="/about"
          />
        </div>
      </section>
    </div>
  );
};

export default Consulting;