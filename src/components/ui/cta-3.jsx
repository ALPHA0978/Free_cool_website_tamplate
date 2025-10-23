/**
 * Call To Action Component (CTA-3)
 * 
 * Modern call-to-action section with decorative elements and dual button layout.
 * Features gradient background, corner plus icons, and customizable content.
 * 
 * Features:
 * - Gradient radial background effect
 * - Corner plus icon decorations
 * - Vertical border lines and dashed center line
 * - Glowing circle effect in top-right corner
 * - Dual button layout (primary + secondary)
 * - Fully customizable text content
 * - Responsive design with proper spacing
 * 
 * @component
 * @param {string} title - Main heading text
 * @param {string} description - Supporting description text
 * @param {string} primaryText - Primary button text
 * @param {string} primaryHref - Primary button link destination
 * @param {string} secondaryText - Secondary button text
 * @param {string} secondaryHref - Secondary button link destination
 * 
 * @example
 * <CallToAction 
 *   title="Ready to get started?"
 *   description="Join thousands of satisfied customers today."
 *   primaryText="Sign Up Now"
 *   primaryHref="/signup"
 *   secondaryText="Learn More"
 *   secondaryHref="/about"
 * />
 */

import { ArrowRightIcon, PlusIcon } from "lucide-react";
import { Button } from "./button";

export function CallToAction({ 
  title = "Let your plans shape the future.", 
  description = "Start your free trial today. No credit card required.",
  primaryText = "Get Started",
  primaryHref = "/contact",
  secondaryText = "Contact Sales",
  secondaryHref = "/about"
}) {
  return (
    <div className="relative mx-auto flex w-full max-w-3xl flex-col justify-between gap-y-6 border-y bg-[radial-gradient(35%_80%_at_25%_0%,hsl(var(--foreground)/.08),transparent)] px-4 py-8">
      <PlusIcon
        className="absolute top-[-12.5px] left-[-11.5px] z-1 size-6"
        strokeWidth={1}
      />
      <PlusIcon
        className="absolute top-[-12.5px] right-[-11.5px] z-1 size-6"
        strokeWidth={1}
      />
      <PlusIcon
        className="absolute bottom-[-12.5px] left-[-11.5px] z-1 size-6"
        strokeWidth={1}
      />
      <PlusIcon
        className="absolute right-[-11.5px] bottom-[-12.5px] z-1 size-6"
        strokeWidth={1}
      />

      <div className="-inset-y-6 pointer-events-none absolute left-0 w-px border-l" />
      <div className="-inset-y-6 pointer-events-none absolute right-0 w-px border-r" />

      <div className="absolute top-0 left-1/2 h-full border-l border-dashed opacity-30 pointer-events-none" />
      
      {/* Half circle glow on top right */}
      <div className="absolute top-[-16px] right-[-16px] w-32 h-32 rounded-full bg-[radial-gradient(circle,hsl(var(--foreground)/.2)_0%,hsl(var(--foreground)/.1)_50%,transparent_80%)] pointer-events-none" />
      

      


      <div className="space-y-1">
        <h2 className="text-center font-bold text-2xl">
          {title}
        </h2>
        <p className="text-center text-muted-foreground">
          {description}
        </p>
      </div>

      <div className="flex items-center justify-center gap-2">
        <Button variant="outline" asChild>
          <a href={secondaryHref}>{secondaryText}</a>
        </Button>
        <Button asChild>
          <a href={primaryHref}>
            {primaryText} <ArrowRightIcon className="size-4 ml-1" />
          </a>
        </Button>
      </div>
    </div>
  );
}