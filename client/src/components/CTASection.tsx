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
            <div className="absolute inset-0 bg-black/65" />
          </div>
        </>
      )}
      {!backgroundImage && (
        <div className="absolute inset-0 bg-gradient-to-br from-secondary to-secondary/80" />
      )}
      
      <div className="relative container mx-auto px-4 text-center z-10">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 drop-shadow-lg" data-testid="text-cta-title" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.9)' }}>
          {title}
        </h2>
        <p className="text-xl text-white/95 mb-8 max-w-2xl mx-auto drop-shadow-md" data-testid="text-cta-description" style={{ textShadow: '1px 1px 3px rgba(0,0,0,0.8)' }}>
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
