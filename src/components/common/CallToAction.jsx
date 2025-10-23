/**
 * CallToAction Component
 * 
 * Reusable CTA section with decorative borders and plus icons.
 * 
 * @author Manish Raj
 * @version 1.0.0
 */

import React from "react";
import { ArrowRight, Plus } from "lucide-react";
import { Button } from "../ui/button";

const CallToAction = ({ 
  title = "Ready to Get Started?", 
  description = "Let's discuss your project and build something amazing together.",
  primaryText = "Get Started",
  primaryHref = "/contact",
  secondaryText = "Learn More",
  secondaryHref = "/about"
}) => {
  return (
    <div className="relative mx-auto flex w-full max-w-3xl flex-col justify-between gap-y-6 border-y bg-[radial-gradient(35%_80%_at_25%_0%,hsl(var(--foreground)/.08),transparent)] px-4 py-8">
      {/* Corner Plus Icons */}
      <Plus
        className="absolute top-[-12.5px] left-[-11.5px] z-10 size-6 bg-background text-foreground"
        strokeWidth={1}
      />
      <Plus
        className="absolute top-[-12.5px] right-[-11.5px] z-10 size-6 bg-background text-foreground"
        strokeWidth={1}
      />
      <Plus
        className="absolute bottom-[-12.5px] left-[-11.5px] z-10 size-6 bg-background text-foreground"
        strokeWidth={1}
      />
      <Plus
        className="absolute right-[-11.5px] bottom-[-12.5px] z-10 size-6 bg-background text-foreground"
        strokeWidth={1}
      />

      {/* Side Borders */}
      <div className="-inset-y-6 pointer-events-none absolute left-0 w-px border-l" />
      <div className="-inset-y-6 pointer-events-none absolute right-0 w-px border-r" />

      {/* Center Dashed Line */}
      <div className="-z-10 absolute top-0 left-1/2 h-full border-l border-dashed opacity-30" />

      {/* Content */}
      <div className="space-y-1">
        <h2 className="text-center font-bold text-2xl">
          {title}
        </h2>
        <p className="text-center text-muted-foreground">
          {description}
        </p>
      </div>

      {/* Buttons */}
      <div className="flex items-center justify-center gap-2">
        <Button variant="outline" asChild>
          <a href={secondaryHref}>{secondaryText}</a>
        </Button>
        <Button asChild>
          <a href={primaryHref}>
            {primaryText} <ArrowRight className="size-4 ml-1" />
          </a>
        </Button>
      </div>
    </div>
  );
};

export default CallToAction;