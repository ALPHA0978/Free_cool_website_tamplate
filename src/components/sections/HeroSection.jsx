/**
 * HeroSection Component
 * 
 * Main landing section with animated hero content, call-to-action buttons,
 * and featured image. Includes trust badge and smooth scroll animations.
 * 
 * Features:
 * - Animated trust badge with hover effects
 * - Large hero headline with responsive typography
 * - Dual call-to-action buttons
 * - Featured image with gradient overlay
 * - Staggered animations with spring physics
 * - Mobile-first responsive design
 * 
 * @component
 * @example
 * <HeroSection />
 */

import { ArrowRight } from "lucide-react";
import { Button } from "../ui/button";
import AnimatedGroup from "../common/AnimatedGroup";

const transitionVariants = {
  item: {
    hidden: {
      opacity: 0,
      filter: "blur(12px)",
      y: 12,
    },
    visible: {
      opacity: 1,
      filter: "blur(0px)",
      y: 0,
      transition: {
        type: "spring",
        bounce: 0.3,
        duration: 1.5,
      },
    },
  },
};

const HeroSection = () => {
  return (
    <section className="relative pt-24 md:pt-36">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center sm:mx-auto lg:mr-auto lg:mt-0">
          <AnimatedGroup variants={transitionVariants}>
            <a
              href="#features"
              className="hover:bg-background dark:hover:border-t-border bg-muted group mx-auto flex w-fit items-center gap-4 rounded-full border p-1 pl-4 shadow-sm transition-all duration-300 dark:border-t-white/5"
            >
              <span className="text-foreground text-sm">Trusted by 500+ Companies</span>
              <span className="dark:border-background block h-4 w-0.5 border-l bg-white dark:bg-zinc-700"></span>
              <div className="bg-background group-hover:bg-muted size-6 overflow-hidden rounded-full duration-500">
                <div className="flex w-12 -translate-x-1/2 duration-500 ease-in-out group-hover:translate-x-0">
                  <span className="flex size-6">
                    <ArrowRight className="m-auto size-3" />
                  </span>
                  <span className="flex size-6">
                    <ArrowRight className="m-auto size-3" />
                  </span>
                </div>
              </div>
            </a>

            <h1 className="mt-8 max-w-4xl mx-auto text-balance text-6xl md:text-7xl lg:mt-16 xl:text-[5.25rem] font-bold">
              Transform Your Business with Custom Software
            </h1>
            <p className="mx-auto mt-8 max-w-2xl text-balance text-lg text-muted-foreground">
              We build scalable, secure, and innovative software solutions tailored to your business needs. From web applications to enterprise systems.
            </p>
          </AnimatedGroup>

          <AnimatedGroup
            variants={{
              container: {
                visible: {
                  transition: {
                    staggerChildren: 0.05,
                    delayChildren: 0.75,
                  },
                },
              },
              ...transitionVariants,
            }}
            className="mt-12 flex flex-col items-center justify-center gap-2 md:flex-row"
          >
            <div className="bg-foreground/10 rounded-[14px] border p-0.5">
              <Button asChild size="lg" className="rounded-xl px-5 text-base">
                <a href="#contact">
                  <span className="text-nowrap">Start Your Project</span>
                </a>
              </Button>
            </div>
            <Button asChild size="lg" variant="ghost" className="h-10.5 rounded-xl px-5">
              <a href="#pricing">
                <span className="text-nowrap">View Pricing</span>
              </a>
            </Button>
          </AnimatedGroup>
        </div>
      </div>

      <AnimatedGroup
        variants={{
          container: {
            visible: {
              transition: {
                staggerChildren: 0.05,
                delayChildren: 0.75,
              },
            },
          },
          ...transitionVariants,
        }}
      >
        <div className="relative -mr-56 mt-8 overflow-hidden px-2 sm:mr-0 sm:mt-12 md:mt-20">
          <div
            aria-hidden
            className="bg-gradient-to-b to-background absolute inset-0 z-10 from-transparent from-35%"
          />
          <div className="relative mx-auto max-w-6xl overflow-hidden rounded-2xl border p-4 shadow-lg shadow-zinc-950/15 ring-1 ring-background">
            <img
              className="bg-background aspect-[16/9] relative rounded-2xl"
              src="https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=2940&auto=format&fit=crop"
              alt="software development"
              width="2700"
              height="1440"
            />
          </div>
        </div>
      </AnimatedGroup>
    </section>
  );
};

export default HeroSection;