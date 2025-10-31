import { Button } from "@/components/ui/button";
import { Link } from "wouter";

interface HeroSectionProps {
  title: string;
  subtitle: string;
  description?: string;
  primaryCta?: { text: string; href: string };
  secondaryCta?: { text: string; href: string };
  backgroundImage: string;
  trustIndicator?: string;
  compact?: boolean;
}

export default function HeroSection({
  title,
  subtitle,
  description,
  primaryCta,
  secondaryCta,
  backgroundImage,
  trustIndicator,
  compact = false,
}: HeroSectionProps) {
  return (
    <div className={`relative ${compact ? 'h-[400px]' : 'min-h-[600px]'} flex items-center justify-center overflow-hidden`}>
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src={backgroundImage}
          alt="Hero background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* Content */}
      <div className="relative container mx-auto px-4 z-10">
        <div className={`max-w-3xl ${compact ? 'text-left' : 'text-center mx-auto'}`}>
          <h1 className={`font-bold text-white mb-4 ${compact ? 'text-4xl md:text-5xl' : 'text-5xl md:text-7xl'} drop-shadow-lg`} data-testid="text-hero-title" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.8)' }}>
            {title}
          </h1>
          <p className={`text-white/95 mb-8 ${compact ? 'text-lg md:text-xl' : 'text-xl md:text-2xl'} drop-shadow-md`} data-testid="text-hero-subtitle" style={{ textShadow: '1px 1px 3px rgba(0,0,0,0.8)' }}>
            {subtitle}
          </p>
          {description && (
            <p className="text-lg text-white/90 mb-8 drop-shadow-md" data-testid="text-hero-description" style={{ textShadow: '1px 1px 3px rgba(0,0,0,0.8)' }}>
              {description}
            </p>
          )}
          
          {(primaryCta || secondaryCta) && (
            <div className={`flex flex-col sm:flex-row gap-4 mb-6 ${compact ? '' : 'justify-center'}`}>
              {primaryCta && (
                <Link href={primaryCta.href}>
                  <Button size="lg" className="text-lg px-8" data-testid="button-hero-primary">
                    {primaryCta.text}
                  </Button>
                </Link>
              )}
              {secondaryCta && (
                <Link href={secondaryCta.href}>
                  <Button size="lg" variant="outline" className="text-lg px-8 bg-white hover:bg-white/90" data-testid="button-hero-secondary">
                    {secondaryCta.text}
                  </Button>
                </Link>
              )}
            </div>
          )}

          {trustIndicator && (
            <p className="text-sm text-white/85 drop-shadow" data-testid="text-trust-indicator" style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.8)' }}>
              {trustIndicator}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
