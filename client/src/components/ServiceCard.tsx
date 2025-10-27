import { LucideIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  ctaText?: string;
  ctaHref?: string;
}

export default function ServiceCard({ icon: Icon, title, description, ctaText, ctaHref }: ServiceCardProps) {
  return (
    <Card className="h-full transition-all duration-300 hover:-translate-y-1 hover:shadow-lg" data-testid={`card-service-${title.toLowerCase().replace(/\s+/g, '-')}`}>
      <CardHeader>
        <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
          <Icon size={28} className="text-primary" />
        </div>
        <CardTitle className="text-xl">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-base">{description}</CardDescription>
      </CardContent>
      {ctaText && ctaHref && (
        <CardFooter>
          <a href={ctaHref} className="text-primary hover:underline font-medium" data-testid={`link-service-${title.toLowerCase().replace(/\s+/g, '-')}`}>
            {ctaText} →
          </a>
        </CardFooter>
      )}
    </Card>
  );
}
