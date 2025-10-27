import { Button } from "@/components/ui/button";
import { Link } from "wouter";

interface CTASectionProps {
  title: string;
  description: string;
  ctaText: string;
  ctaHref: string;
  backgroundImage?: string;
}

export default function CTASection({ title, description, ctaText, ctaHref, backgroundImage }: CTASectionProps) {
  return (
    <section className="relative py-24 overflow-hidden">
      {backgroundImage && (
        <>
          <div className="absolute inset-0">
            <img
              src={backgroundImage}
              alt="CTA background"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-secondary/90" />
          </div>
        </>
      )}
      {!backgroundImage && (
        <div className="absolute inset-0 bg-gradient-to-br from-secondary to-secondary/80" />
      )}
      
      <div className="relative container mx-auto px-4 text-center z-10">
        <h2 className="text-4xl md:text-5xl font-bold text-secondary-foreground mb-6" data-testid="text-cta-title">
          {title}
        </h2>
        <p className="text-xl text-secondary-foreground/90 mb-8 max-w-2xl mx-auto" data-testid="text-cta-description">
          {description}
        </p>
        <Link href={ctaHref}>
          <Button size="lg" className="text-lg px-10" data-testid="button-cta">
            {ctaText}
          </Button>
        </Link>
      </div>
    </section>
  );
}
