/**
 * Careers Page
 * 
 * Job opportunities and company culture information.
 * 
 * @author Manish Raj
 * @version 1.0.0
 */

import React from "react";
import { Link } from "react-router-dom";
import { MapPin, Clock, DollarSign, Users, ArrowRight, Heart, Coffee, Laptop } from "lucide-react";
import { Button } from "../components/ui/button";
import { Card, CardHeader, CardContent } from "../components/ui/card";
import AnimatedGroup from "../components/common/AnimatedGroup";
import { CallToAction } from "../components/ui/cta-3";
import DisplayCards from "../components/ui/display-cards";
import { BentoCard, BentoGrid } from "../components/ui/bento-grid";

const Careers = () => {
  const jobs = [
    {
      title: "Senior React Developer",
      location: "Remote",
      type: "Full-time",
      salary: "$80k - $120k",
      description: "Join our frontend team to build amazing user experiences with React and modern web technologies."
    },
    {
      title: "Backend Engineer",
      location: "San Francisco, CA",
      type: "Full-time", 
      salary: "$90k - $130k",
      description: "Build scalable backend systems using Node.js, Python, and cloud technologies."
    },
    {
      title: "DevOps Engineer",
      location: "Remote",
      type: "Full-time",
      salary: "$85k - $125k",
      description: "Manage our cloud infrastructure and implement CI/CD pipelines for seamless deployments."
    }
  ];

  const benefits = [
    {
      icon: Users,
      title: "Great Team",
      description: "Work with talented, passionate professionals who support each other's growth."
    },
    {
      icon: MapPin,
      title: "Remote Friendly",
      description: "Flexible work arrangements with options for remote work and flexible hours."
    },
    {
      icon: DollarSign,
      title: "Competitive Pay",
      description: "Competitive salaries, equity options, and comprehensive benefits package."
    },
    {
      icon: Clock,
      title: "Work-Life Balance",
      description: "Unlimited PTO, flexible schedules, and a culture that values personal time."
    },
    {
      icon: Heart,
      title: "Health & Wellness",
      description: "Comprehensive health insurance, mental health support, and wellness programs."
    },
    {
      icon: Coffee,
      title: "Great Perks",
      description: "Free meals, gym membership, learning budget, and team events."
    },
    {
      icon: Laptop,
      title: "Latest Tech",
      description: "Top-of-the-line equipment and access to the latest development tools."
    }
  ];

  return (
    <div className="min-h-screen bg-background pt-16">
      {/* Hero Section */}
      <section className="relative py-16 md:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <AnimatedGroup preset="blur-slide" className="text-center">
            <div className="bg-primary/10 rounded-full px-4 py-2 text-sm font-medium text-primary w-fit mx-auto mb-6">
              Join Our Team
            </div>
            <h1 className="text-6xl md:text-7xl font-bold mb-6">
              Build Your Career
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Be part of a dynamic team that's shaping the future of technology. We offer competitive benefits, 
              flexible work arrangements, and opportunities for professional growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link to="#jobs">View Open Positions <ArrowRight className="ml-2 size-4" /></Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/about">Learn About Us</Link>
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
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071&auto=format&fit=crop"
                alt="Team Collaboration"
                className="w-full aspect-[16/9] object-cover"
              />
            </div>
          </AnimatedGroup>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="dark:bg-muted/25 bg-zinc-50 py-16 md:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <AnimatedGroup preset="slide" className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Why Work With Us?</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              We believe in creating an environment where talented people can do their best work and grow their careers.
            </p>
          </AnimatedGroup>
          
          <AnimatedGroup preset="blur-slide">
            <BentoGrid className="lg:grid-rows-3">
              <BentoCard
                name="Great Team"
                className="lg:row-start-1 lg:row-end-4 lg:col-start-2 lg:col-end-3"
                background={
                  <img 
                    className="absolute -right-20 -top-20 opacity-60" 
                    src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=400&auto=format&fit=crop"
                    alt="Team collaboration"
                  />
                }
                Icon={Users}
                description="Work with talented, passionate professionals who support each other's growth. 4.9★ Employee Rating"
                href="/about"
                cta="Meet the team"
              />
              <BentoCard
                name="Remote Friendly"
                className="lg:col-start-1 lg:col-end-2 lg:row-start-1 lg:row-end-3"
                background={
                  <img 
                    className="absolute -right-20 -top-20 opacity-60" 
                    src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=400&auto=format&fit=crop"
                    alt="Remote work"
                  />
                }
                Icon={MapPin}
                description="Flexible work arrangements with remote options and flexible schedules."
                href="/careers"
                cta="Learn more"
              />
              <BentoCard
                name="Competitive Pay"
                className="lg:col-start-1 lg:col-end-2 lg:row-start-3 lg:row-end-4"
                background={
                  <div className="absolute inset-0 bg-gradient-to-br from-green-400/20 to-blue-600/20" />
                }
                Icon={DollarSign}
                description="$120k average salary plus comprehensive benefits and equity options."
                href="/careers"
                cta="View positions"
              />
              <BentoCard
                name="Work-Life Balance"
                className="lg:col-start-3 lg:col-end-3 lg:row-start-1 lg:row-end-2"
                background={
                  <img 
                    className="absolute -right-20 -top-20 opacity-60" 
                    src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=400&auto=format&fit=crop"
                    alt="Work life balance"
                  />
                }
                Icon={Clock}
                description="Unlimited PTO and flexible schedules that value personal time."
                href="/careers"
                cta="Learn more"
              />
              <BentoCard
                name="Health & Wellness"
                className="lg:col-start-3 lg:col-end-3 lg:row-start-2 lg:row-end-4"
                background={
                  <img 
                    className="absolute -right-20 -top-20 opacity-60" 
                    src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?q=80&w=400&auto=format&fit=crop"
                    alt="Health and wellness"
                  />
                }
                Icon={Heart}
                description="Comprehensive health insurance, mental health support, and wellness programs."
                href="/careers"
                cta="View benefits"
              />
            </BentoGrid>
          </AnimatedGroup>
        </div>
      </section>



    

      {/* Culture Section */}
      <section className="py-16 md:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <AnimatedGroup preset="slide" className="text-center mb-20">
            <h2 className="text-4xl font-bold mb-4">Our Culture</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              We foster a culture of innovation, collaboration, and continuous learning. Our team members are encouraged to take ownership, experiment with new ideas, and grow both personally and professionally.
            </p>
          </AnimatedGroup>
          
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <AnimatedGroup preset="slide">
              <div className="space-y-4">
                {benefits.slice(4, 7).map((benefit, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center shrink-0">
                      <benefit.icon className="size-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">{benefit.title}</h4>
                      <p className="text-muted-foreground text-sm">{benefit.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </AnimatedGroup>
            
            <AnimatedGroup preset="blur-slide" className="flex justify-center">
              <DisplayCards cards={[
                {
                  icon: <Heart className="size-4 text-red-300" />,
                  title: "Health & Wellness",
                  description: "Comprehensive health insurance",
                  date: "Full Coverage",
                  iconClassName: "text-red-500",
                  titleClassName: "text-red-500",
                  className: "[grid-area:stack] hover:-translate-y-10 before:absolute before:w-[100%] before:outline-1 before:rounded-xl before:outline-border before:h-[100%] before:content-[''] before:bg-blend-overlay before:bg-background/50 grayscale-[100%] hover:before:opacity-0 before:transition-opacity before:duration-700 hover:grayscale-0 before:left-0 before:top-0",
                },
                {
                  icon: <Coffee className="size-4 text-orange-300" />,
                  title: "Great Perks",
                  description: "Free meals & gym membership",
                  date: "All Included",
                  iconClassName: "text-orange-500",
                  titleClassName: "text-orange-500",
                  className: "[grid-area:stack] translate-x-16 translate-y-10 hover:-translate-y-1 before:absolute before:w-[100%] before:outline-1 before:rounded-xl before:outline-border before:h-[100%] before:content-[''] before:bg-blend-overlay before:bg-background/50 grayscale-[100%] hover:before:opacity-0 before:transition-opacity before:duration-700 hover:grayscale-0 before:left-0 before:top-0",
                },
                {
                  icon: <Laptop className="size-4 text-blue-300" />,
                  title: "Latest Tech",
                  description: "Top equipment & dev tools",
                  date: "Always Updated",
                  iconClassName: "text-blue-500",
                  titleClassName: "text-blue-500",
                  className: "[grid-area:stack] translate-x-32 translate-y-20 hover:translate-y-10",
                },
              ]} />
            </AnimatedGroup>
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section id="jobs" className="dark:bg-muted/25 bg-zinc-50 py-16 md:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <AnimatedGroup preset="slide" className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Open Positions</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Join our growing team and help us build the future of technology.
            </p>
          </AnimatedGroup>
          
          <AnimatedGroup preset="blur-slide" className="space-y-6">
            {jobs.map((job, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300">
                <CardContent className="p-8">
                  <div className="flex flex-col lg:flex-row lg:items-center justify-between">
                    <div className="flex-1">
                      <h3 className="text-2xl font-semibold mb-2 group-hover:text-primary transition-colors">{job.title}</h3>
                      <p className="text-muted-foreground mb-4">{job.description}</p>
                      <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-2">
                          <MapPin className="size-4" />
                          {job.location}
                        </div>
                        <div className="flex items-center gap-2">
                          <Clock className="size-4" />
                          {job.type}
                        </div>
                        <div className="flex items-center gap-2">
                          <DollarSign className="size-4" />
                          {job.salary}
                        </div>
                      </div>
                    </div>
                    <div className="mt-6 lg:mt-0 lg:ml-8">
                      <Button size="lg" className="w-full lg:w-auto">
                        Apply Now <ArrowRight className="ml-2 size-4" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </AnimatedGroup>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <CallToAction 
            title="Don't See Your Role?"
            description="We're always looking for talented individuals. Send us your resume and let's talk!"
            primaryText="Contact Us"
            primaryHref="/contact"
            secondaryText="Learn More"
            secondaryHref="/about"
          />
        </div>
      </section>
    </div>
  );
};

export default Careers;