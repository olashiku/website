import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, Clock } from "lucide-react";

interface BlogCardProps {
  image: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
}

export default function BlogCard({ image, title, excerpt, category, date, readTime }: BlogCardProps) {
  return (
    <Card className="overflow-hidden group cursor-pointer h-full flex flex-col transition-all duration-300 hover:-translate-y-1 hover:shadow-lg" data-testid={`card-blog-${title.toLowerCase().replace(/\s+/g, '-')}`}>
      {/* Image */}
      <div className="relative aspect-video overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
        />
        <Badge className="absolute top-4 left-4 bg-primary">{category}</Badge>
      </div>

      {/* Content */}
      <CardHeader className="flex-grow">
        <h3 className="font-semibold text-xl mb-2 line-clamp-2" data-testid={`text-blog-title-${title.toLowerCase().replace(/\s+/g, '-')}`}>{title}</h3>
        <p className="text-muted-foreground text-sm line-clamp-3">{excerpt}</p>
      </CardHeader>

      <CardFooter className="flex items-center justify-between pt-0">
        <div className="flex items-center gap-4 text-xs text-muted-foreground">
          <div className="flex items-center gap-1">
            <Calendar size={14} />
            <span>{date}</span>
          </div>
          <div className="flex items-center gap-1">
            <Clock size={14} />
            <span>{readTime}</span>
          </div>
        </div>
        <Button variant="ghost" size="sm" className="text-primary hover:text-primary" data-testid={`button-read-blog-${title.toLowerCase().replace(/\s+/g, '-')}`}>
          Read More →
        </Button>
      </CardFooter>
    </Card>
  );
}
