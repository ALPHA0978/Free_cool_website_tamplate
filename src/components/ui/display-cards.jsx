/**
 * Display Cards Component
 * 
 * Interactive stacked card display with hover animations and visual effects.
 * Features skewed design, gradient overlays, and corner decorations.
 * 
 * Features:
 * - Stacked card layout with hover animations
 * - Skewed design with gradient overlays
 * - Corner decorative elements
 * - Customizable icons, titles, and descriptions
 * - Backdrop blur and border effects
 * - Responsive hover interactions
 * 
 * @component
 * @param {Array} cards - Array of card configuration objects
 * @param {string} className - Additional CSS classes
 * @param {ReactNode} icon - Icon component for the card
 * @param {string} title - Card title text
 * @param {string} description - Card description text
 * @param {string} date - Date or timestamp text
 * 
 * @example
 * <DisplayCards cards={[
 *   { title: "Featured", description: "Amazing content", date: "Just now" }
 * ]} />
 */

"use client";

import { cn } from "@/lib/utils";
import { Sparkles } from "lucide-react";

function DisplayCard({
  className,
  icon = <Sparkles className="size-4 text-blue-300" />,
  title = "Featured",
  description = "Discover amazing content",
  date = "Just now",
  iconClassName = "text-blue-500",
  titleClassName = "text-blue-500",
}) {
  return (
    <div
      className={cn(
        "relative flex h-36 w-[22rem] -skew-y-[8deg] select-none flex-col justify-between rounded-xl border-2 bg-muted/70 backdrop-blur-sm px-4 py-3 transition-all duration-700 after:absolute after:-right-1 after:top-[-5%] after:h-[110%] after:w-[20rem] after:bg-gradient-to-l after:from-background after:to-transparent after:content-[''] hover:border-white/20 hover:bg-muted [&>*]:flex [&>*]:items-center [&>*]:gap-2",
        "before:absolute before:inset-0 before:rounded-xl before:border before:border-border/50 before:bg-gradient-to-br before:from-background/10 before:to-transparent before:pointer-events-none",
        "after:absolute after:inset-0 after:rounded-xl after:bg-[radial-gradient(35%_80%_at_25%_0%,hsl(var(--foreground)/.05),transparent)] after:pointer-events-none",
        className
      )}
    >
      {/* Corner decorations */}
      <div className="absolute top-[-6px] left-[-6px] w-3 h-3 border-l-2 border-t-2 border-border rounded-tl-md" />
      <div className="absolute top-[-6px] right-[-6px] w-3 h-3 border-r-2 border-t-2 border-border rounded-tr-md" />
      <div className="absolute bottom-[-6px] left-[-6px] w-3 h-3 border-l-2 border-b-2 border-border rounded-bl-md" />
      <div className="absolute bottom-[-6px] right-[-6px] w-3 h-3 border-r-2 border-b-2 border-border rounded-br-md" />
      
      {/* Content */}
      <div className="relative z-10">
        <span className="relative inline-block rounded-full bg-primary/20 p-1 border border-border/30">
          {icon}
        </span>
        <p className={cn("text-lg font-medium", titleClassName)}>{title}</p>
      </div>
      <p className="relative z-10 whitespace-nowrap text-lg">{description}</p>
      <p className="relative z-10 text-muted-foreground">{date}</p>
    </div>
  );
}

export default function DisplayCards({ cards }) {
  const defaultCards = [
    {
      className: "[grid-area:stack] hover:-translate-y-10 before:absolute before:w-[100%] before:outline-1 before:rounded-xl before:outline-border before:h-[100%] before:content-[''] before:bg-blend-overlay before:bg-background/50 grayscale-[100%] hover:before:opacity-0 before:transition-opacity before:duration-700 hover:grayscale-0 before:left-0 before:top-0",
    },
    {
      className: "[grid-area:stack] translate-x-16 translate-y-10 hover:-translate-y-1 before:absolute before:w-[100%] before:outline-1 before:rounded-xl before:outline-border before:h-[100%] before:content-[''] before:bg-blend-overlay before:bg-background/50 grayscale-[100%] hover:before:opacity-0 before:transition-opacity before:duration-700 hover:grayscale-0 before:left-0 before:top-0",
    },
    {
      className: "[grid-area:stack] translate-x-32 translate-y-20 hover:translate-y-10",
    },
  ];

  const displayCards = cards || defaultCards;

  return (
    <div className="grid [grid-template-areas:'stack'] place-items-center opacity-100 animate-in fade-in-0 duration-700">
      {displayCards.map((cardProps, index) => (
        <DisplayCard key={index} {...cardProps} />
      ))}
    </div>
  );
}