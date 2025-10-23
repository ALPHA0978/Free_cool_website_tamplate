/**
 * PricingSection Component
 * 
 * Displays pricing plans in a clean card layout with feature comparisons.
 * Highlights the most popular plan and includes clear call-to-action buttons.
 * 
 * Features:
 * - Three-tier pricing structure (Starter, Professional, Enterprise)
 * - Popular plan highlighting with enhanced styling
 * - Feature lists with checkmark icons
 * - Responsive grid layout
 * - Clear pricing display with project-based billing
 * - Direct links to contact section
 * 
 * Pricing Tiers:
 * - Starter: $2,999 (Small projects & MVPs)
 * - Professional: $9,999 (Growing businesses) - Most Popular
 * - Enterprise: Custom (Large-scale applications)
 * 
 * @component
 * @example
 * <PricingSection />
 */

import { Check } from "lucide-react";
import { cn } from "../../lib/utils";
import { Button } from "../ui/button";
import { Card, CardHeader, CardContent } from "../ui/card";

const PricingSection = () => {
  const plans = [
    {
      name: "Starter",
      price: "$2,999",
      description: "Perfect for small projects and MVPs",
      features: [
        "Up to 3 pages/screens",
        "Responsive design",
        "Basic SEO optimization",
        "1 month support",
        "Source code delivery",
      ],
    },
    {
      name: "Professional",
      price: "$9,999",
      description: "Ideal for growing businesses",
      features: [
        "Up to 15 pages/screens",
        "Advanced features",
        "API integrations",
        "3 months support",
        "Performance optimization",
        "Analytics setup",
      ],
      popular: true,
    },
    {
      name: "Enterprise",
      price: "Custom",
      description: "For large-scale applications",
      features: [
        "Unlimited pages/screens",
        "Custom architecture",
        "Dedicated team",
        "12 months support",
        "DevOps & CI/CD",
        "Priority support",
      ],
    },
  ];

  return (
    <section id="pricing" className="py-16 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Simple, Transparent Pricing</h2>
          <p className="text-muted-foreground text-lg">Choose the plan that fits your needs</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <Card key={index} className={cn("relative", plan.popular && "border-primary shadow-lg")}>
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-medium">
                    Most Popular
                  </span>
                </div>
              )}
              <CardHeader>
                <h3 className="text-2xl font-bold">{plan.name}</h3>
                <p className="text-muted-foreground text-sm">{plan.description}</p>
                <div className="mt-4">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  {plan.price !== "Custom" && <span className="text-muted-foreground">/project</span>}
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <Check className="size-5 text-primary shrink-0 mt-0.5" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button className="w-full mt-6" variant={plan.popular ? "default" : "outline"}>
                  <a href="#contact">Get Started</a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;