import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";

interface TestimonialCardProps {
  quote: string;
  author: string;
  role: string;
  avatar: string;
}

export default function TestimonialCard({ quote, author, role, avatar }: TestimonialCardProps) {
  return (
    <Card className="h-full" data-testid={`card-testimonial-${author.toLowerCase().replace(/\s+/g, '-')}`}>
      <CardContent className="p-8">
        <Quote className="text-primary mb-4" size={32} />
        <p className="text-muted-foreground mb-6 italic">"{quote}"</p>
        <div className="flex items-center gap-4">
          <img
            src={avatar}
            alt={author}
            className="w-14 h-14 rounded-full object-cover"
          />
          <div>
            <p className="font-semibold" data-testid={`text-author-${author.toLowerCase().replace(/\s+/g, '-')}`}>{author}</p>
            <p className="text-sm text-muted-foreground">{role}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
