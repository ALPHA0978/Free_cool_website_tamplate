/**
 * Cloud Solutions Service Page
 * 
 * Dedicated page showcasing cloud infrastructure and solutions.
 * 
 * @author Manish Raj
 * @version 1.0.0
 */

import React from "react";
import { Link } from "react-router-dom";
import { Cloud, Server, Shield, Zap, ArrowRight, CheckCircle, TrendingUp } from "lucide-react";
import { Button } from "../components/ui/button";
import { Card, CardHeader, CardContent } from "../components/ui/card";
import AnimatedGroup from "../components/common/AnimatedGroup";
import { CallToAction } from "../components/ui/cta-3";

const CloudSolutions = () => {
  const features = [
    "AWS & Azure Certified", "Infrastructure as Code", "Auto-scaling Solutions", "24/7 Monitoring",
    "Disaster Recovery", "Cost Optimization", "Security Compliance", "DevOps Integration"
  ];

  const stats = [
    { number: "99.9%", label: "Uptime SLA" },
    { number: "50%", label: "Cost Reduction" },
    { number: "10x", label: "Faster Deployment" },
    { number: "24/7", label: "Support Available" }
  ];

  return (
    <div className="min-h-screen bg-background pt-16">
      {/* Hero Section */}
      <section className="relative py-16 md:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <AnimatedGroup preset="blur-slide" className="text-center">
            <div className="bg-primary/10 rounded-full px-4 py-2 text-sm font-medium text-primary w-fit mx-auto mb-6">
              Cloud Infrastructure Excellence
            </div>
            <h1 className="text-6xl md:text-7xl font-bold mb-6">
              Cloud Solutions
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Scalable, secure, and cost-effective cloud infrastructure solutions that grow with your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link to="/contact">Discuss Your Needs <ArrowRight className="ml-2 size-4" /></Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/about">View Case Studies</Link>
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
                src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop"
                alt="Cloud Solutions"
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
            <h2 className="text-4xl font-bold mb-4">Cloud Infrastructure Services</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Transform your business with modern cloud solutions that scale automatically and reduce costs.
            </p>
          </AnimatedGroup>
          
          <AnimatedGroup preset="blur-slide" className="grid md:grid-cols-2 gap-8">
            <Card className="group hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <Cloud className="size-12 text-primary mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-2xl font-semibold">Cloud Migration</h3>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Seamless migration of your existing infrastructure to AWS, Azure, or Google Cloud.
                </p>
                <div className="flex flex-wrap gap-2">
                  {["AWS", "Azure", "Google Cloud", "Migration Tools"].map((tech) => (
                    <span key={tech} className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <Server className="size-12 text-primary mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-2xl font-semibold">Infrastructure as Code</h3>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Automated infrastructure deployment and management using Terraform and CloudFormation.
                </p>
                <div className="flex flex-wrap gap-2">
                  {["Terraform", "CloudFormation", "Ansible", "Kubernetes"].map((tech) => (
                    <span key={tech} className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <Shield className="size-12 text-primary mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-2xl font-semibold">Security & Compliance</h3>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Enterprise-grade security measures and compliance with industry standards.
                </p>
                <div className="flex flex-wrap gap-2">
                  {["SOC 2", "GDPR", "HIPAA", "ISO 27001"].map((tech) => (
                    <span key={tech} className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <Zap className="size-12 text-primary mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-2xl font-semibold">Performance Optimization</h3>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Optimize cloud resources for maximum performance and cost efficiency.
                </p>
                <div className="flex flex-wrap gap-2">
                  {["Auto Scaling", "Load Balancing", "CDN", "Monitoring"].map((tech) => (
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
            <AnimatedGroup preset="blur-slide">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-2xl blur-3xl" />
                <img
                  src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=2934&auto=format&fit=crop"
                  alt="Cloud Infrastructure"
                  className="relative rounded-2xl shadow-2xl"
                />
              </div>
            </AnimatedGroup>
            
            <AnimatedGroup preset="slide">
              <h2 className="text-4xl font-bold mb-6">Scale Your Infrastructure</h2>
              <p className="text-muted-foreground text-lg mb-8">
                Let us help you leverage the power of cloud computing with solutions that grow with your business needs.
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
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <CallToAction 
            title="Ready to Move to the Cloud?"
            description="Let's discuss your cloud strategy and build a scalable infrastructure for your business."
            primaryText="Get Cloud Consultation"
            primaryHref="/contact"
            secondaryText="View Case Studies"
            secondaryHref="/about"
          />
        </div>
      </section>
    </div>
  );
};

export default CloudSolutions;