/**
 * Mobile Apps Service Page
 * 
 * Dedicated page showcasing mobile app development services.
 * 
 * @author Manish Raj
 * @version 1.0.0
 */

import React from "react";
import { Link } from "react-router-dom";
import { Smartphone, Tablet, Watch, Gamepad2, ArrowRight, CheckCircle, Star } from "lucide-react";
import { Button } from "../components/ui/button";
import { Card, CardHeader, CardContent } from "../components/ui/card";
import AnimatedGroup from "../components/common/AnimatedGroup";
import { CallToAction } from "../components/ui/cta-3";

const MobileApps = () => {
  const features = [
    "Native iOS & Android Development", "Cross-Platform Solutions", "App Store Optimization", "Push Notifications",
    "Offline Functionality", "Real-time Synchronization", "In-App Purchases", "Analytics Integration"
  ];

  const stats = [
    { number: "50M+", label: "App Downloads" },
    { number: "4.8★", label: "Average Rating" },
    { number: "100+", label: "Apps Published" },
    { number: "99%", label: "Client Satisfaction" }
  ];

  return (
    <div className="min-h-screen bg-background pt-16">
      {/* Hero Section */}
      <section className="relative py-16 md:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <AnimatedGroup preset="blur-slide" className="text-center">
            <div className="bg-primary/10 rounded-full px-4 py-2 text-sm font-medium text-primary w-fit mx-auto mb-6">
              Mobile App Development
            </div>
            <h1 className="text-6xl md:text-7xl font-bold mb-6">
              Mobile App Development
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Build native and cross-platform mobile applications that engage users and drive business success.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link to="/contact">Start Development <ArrowRight className="ml-2 size-4" /></Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/about">View Portfolio</Link>
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
                src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=2070&auto=format&fit=crop"
                alt="Mobile App Development"
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
            <h2 className="text-4xl font-bold mb-4">Mobile Development Services</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              From native apps to cross-platform solutions, we deliver mobile experiences that users love.
            </p>
          </AnimatedGroup>
          
          <AnimatedGroup preset="blur-slide" className="grid md:grid-cols-2 gap-8">
            <Card className="group hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <Smartphone className="size-12 text-primary mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-2xl font-semibold">iOS Development</h3>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Native iOS apps with Swift and SwiftUI for optimal performance and user experience.
                </p>
                <div className="flex flex-wrap gap-2">
                  {["Swift", "SwiftUI", "UIKit", "Core Data"].map((tech) => (
                    <span key={tech} className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <Tablet className="size-12 text-primary mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-2xl font-semibold">Android Development</h3>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Native Android apps with Kotlin and Jetpack Compose for modern Android experiences.
                </p>
                <div className="flex flex-wrap gap-2">
                  {["Kotlin", "Jetpack Compose", "Android SDK", "Room"].map((tech) => (
                    <span key={tech} className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <Watch className="size-12 text-primary mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-2xl font-semibold">Cross-Platform</h3>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  React Native and Flutter apps that work seamlessly across iOS and Android.
Built for performance, designed for scalability.
                </p>
                <div className="flex flex-wrap gap-2">
                  {["React Native", "Flutter", "Dart", "Expo"].map((tech) => (
                    <span key={tech} className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <Gamepad2 className="size-12 text-primary mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-2xl font-semibold">App Store Optimization</h3>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Complete app store submission and optimization for maximum visibility and downloads.
                </p>
                <div className="flex flex-wrap gap-2">
                  {["ASO", "App Store", "Google Play", "Analytics"].map((tech) => (
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
                  src="https://images.unsplash.com/photo-1551650975-87deedd944c3?q=80&w=2074&auto=format&fit=crop"
                  alt="Mobile Development"
                  className="relative rounded-2xl shadow-2xl"
                />
              </div>
            </AnimatedGroup>
            
            <AnimatedGroup preset="slide">
              <h2 className="text-4xl font-bold mb-6">Why Choose Our Mobile Development?</h2>
              <p className="text-muted-foreground text-lg mb-8">
                We create mobile apps that not only look great but also perform exceptionally across all devices and platforms.
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
            title="Launch Your Mobile App"
            description="Transform your idea into a successful mobile application that users will love."
            primaryText="Start Development"
            primaryHref="/contact"
            secondaryText="View Portfolio"
            secondaryHref="/about"
          />
        </div>
      </section>
    </div>
  );
};

export default MobileApps;