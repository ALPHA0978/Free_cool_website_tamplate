/**
 * FeaturesSection Component
 * 
 * Showcase of key features in a modern grid layout with visual cards.
 * Highlights core service offerings with icons, descriptions, and images.
 * 
 * Features:
 * - Asymmetric grid layout for visual interest
 * - Feature cards with icons and descriptions
 * - High-quality images from Unsplash
 * - Gradient overlays and visual effects
 * - Performance metrics display
 * - Responsive design with mobile optimization
 * 
 * Services highlighted:
 * - Custom Development
 * - Scalable Architecture  
 * - Lightning Fast Performance
 * - Enterprise Security
 * 
 * @component
 * @example
 * <FeaturesSection />
 */

import { Code, Zap, Shield, Globe } from "lucide-react";
import { Card, CardHeader, CardContent } from "../ui/card";

const FeaturesSection = () => {
  return (
    <section id="features" className="dark:bg-muted/25 bg-zinc-50 py-16 md:py-32">
      <div className="mx-auto max-w-5xl px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Powerful Features</h2>
          <p className="text-muted-foreground text-lg">Everything you need to build exceptional software</p>
        </div>
        <div className="mx-auto grid gap-2 sm:grid-cols-5">
          <Card className="group overflow-hidden shadow-black/5 sm:col-span-3 sm:rounded-none sm:rounded-tl-xl">
            <CardHeader>
              <div className="md:p-6">
                <div className="flex items-center gap-2 mb-2">
                  <Code className="size-5 text-primary" />
                  <p className="font-medium">Custom Development</p>
                </div>
                <p className="text-muted-foreground mt-3 max-w-sm text-sm">
                  Tailored solutions built from the ground up to match your exact business requirements and workflows.
                </p>
              </div>
            </CardHeader>
            <div className="relative h-fit pl-6 md:pl-12">
              <div className="absolute -inset-6 [background:radial-gradient(75%_95%_at_50%_0%,transparent,hsl(var(--background))_100%)]"></div>
              <div className="bg-background overflow-hidden rounded-tl-lg border-l border-t pl-2 pt-2 dark:bg-zinc-950">
                <img
                  src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2940&auto=format&fit=crop"
                  className="rounded-tl-lg"
                  alt="custom development"
                  width={1207}
                  height={929}
                />
              </div>
            </div>
          </Card>

          <Card className="group overflow-hidden shadow-zinc-950/5 sm:col-span-2 sm:rounded-none sm:rounded-tr-xl">
            <p className="mx-auto my-6 max-w-md text-balance px-6 text-center text-lg font-semibold sm:text-2xl md:p-6">
              Scalable Architecture
            </p>
            <CardContent className="mt-auto h-fit">
              <div className="relative mb-6 sm:mb-0">
                <div className="absolute -inset-6 [background:radial-gradient(50%_75%_at_75%_50%,transparent,hsl(var(--background))_100%)]"></div>
                <div className="aspect-[4/3] overflow-hidden rounded-r-lg border">
                  <img
                    src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=2934&auto=format&fit=crop"
                    className="w-full h-full object-cover"
                    alt="scalable architecture"
                    width={1207}
                    height={929}
                  />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="group p-6 shadow-black/5 sm:col-span-2 sm:rounded-none sm:rounded-bl-xl md:p-12">
            <p className="mx-auto mb-12 max-w-md text-balance text-center text-lg font-semibold sm:text-2xl">
              Lightning Fast Performance
            </p>
            <div className="flex justify-center gap-6">
              <div className="relative flex aspect-square size-16 items-center rounded-[7px] border p-3 shadow-lg bg-muted/35">
                <span className="absolute right-2 top-1 block text-sm">⚡</span>
                <Zap className="mt-auto size-4" />
              </div>
              <div className="flex aspect-square size-16 items-center justify-center rounded-[7px] border p-3 shadow-lg bg-muted/35">
                <span className="text-2xl font-bold">99</span>
              </div>
            </div>
          </Card>

          <Card className="group relative shadow-black/5 sm:col-span-3 sm:rounded-none sm:rounded-br-xl">
            <CardHeader className="p-6 md:p-12">
              <div className="flex items-center gap-2 mb-2">
                <Shield className="size-5 text-primary" />
                <p className="font-medium">Enterprise Security</p>
              </div>
              <p className="text-muted-foreground mt-2 max-w-sm text-sm">
                Bank-level security with encryption, compliance, and regular audits.
              </p>
            </CardHeader>
            <CardContent className="relative h-fit px-6 pb-6 md:px-12 md:pb-12">
              <div className="grid grid-cols-4 gap-2 md:grid-cols-6">
                <div className="aspect-square border border-dashed rounded-lg"></div>
                <div className="bg-muted/50 flex aspect-square items-center justify-center border p-4 rounded-lg">
                  <Shield className="size-8" />
                </div>
                <div className="aspect-square border border-dashed rounded-lg"></div>
                <div className="bg-muted/50 flex aspect-square items-center justify-center border p-4 rounded-lg">
                  <Globe className="size-8" />
                </div>
                <div className="aspect-square border border-dashed rounded-lg"></div>
                <div className="bg-muted/50 flex aspect-square items-center justify-center border p-4 rounded-lg">
                  <Code className="size-8" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;