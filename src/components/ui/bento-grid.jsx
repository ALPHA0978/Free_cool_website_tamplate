/**
 * Bento Grid Components
 * 
 * Modern grid layout system for creating visually appealing card-based layouts.
 * Inspired by bento box design with flexible grid positioning.
 * 
 * Components:
 * - BentoGrid: Container with auto-sizing rows and responsive columns
 * - BentoCard: Interactive card with hover effects and call-to-action
 * 
 * Features:
 * - Auto-sizing grid rows (22rem default)
 * - Hover animations with transform effects
 * - Background image/gradient support
 * - Icon integration with scaling animations
 * - Call-to-action buttons with slide-up reveal
 * - Responsive design with mobile optimization
 * 
 * @component
 * @param {ReactNode} children - Grid items to display
 * @param {string} className - Additional CSS classes
 * @param {string} name - Card title
 * @param {ReactNode} background - Background element (image/gradient)
 * @param {Component} Icon - Lucide icon component
 * @param {string} description - Card description text
 * @param {string} href - Link destination
 * @param {string} cta - Call-to-action button text
 * 
 * @example
 * <BentoGrid>
 *   <BentoCard 
 *     name="Feature" 
 *     Icon={Star} 
 *     description="Amazing feature" 
 *     href="/feature" 
 *     cta="Learn more" 
 *   />
 * </BentoGrid>
 */

import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const BentoGrid = ({
  children,
  className,
}) => {
  return (
    <div
      className={cn(
        "grid w-full auto-rows-[22rem] grid-cols-3 gap-4",
        className,
      )}
    >
      {children}
    </div>
  );
};

const BentoCard = ({
  name,
  className,
  background,
  Icon,
  description,
  href,
  cta,
}) => (
  <div
    key={name}
    className={cn(
      "group relative col-span-3 flex flex-col justify-between overflow-hidden rounded-xl",
      "bg-background border shadow-lg hover:shadow-xl transition-all duration-300",
      className,
    )}
  >
    <div>{background}</div>
    <div className="pointer-events-none z-10 flex transform-gpu flex-col gap-1 p-6 transition-all duration-300 group-hover:-translate-y-10">
      <Icon className="h-12 w-12 origin-left transform-gpu text-foreground transition-all duration-300 ease-in-out group-hover:scale-75" />
      <h3 className="text-xl font-semibold text-foreground">
        {name}
      </h3>
      <p className="max-w-lg text-muted-foreground">{description}</p>
    </div>

    <div
      className={cn(
        "pointer-events-none absolute bottom-0 flex w-full translate-y-10 transform-gpu flex-row items-center p-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100",
      )}
    >
      <Button variant="ghost" asChild size="sm" className="pointer-events-auto">
        <a href={href}>
          {cta}
          <ArrowRight className="ml-2 h-4 w-4" />
        </a>
      </Button>
    </div>
    <div className="pointer-events-none absolute inset-0 transform-gpu transition-all duration-300 group-hover:bg-accent/10" />
  </div>
);

export { BentoCard, BentoGrid };