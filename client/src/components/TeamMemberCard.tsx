import { Card, CardContent } from "@/components/ui/card";

interface TeamMemberCardProps {
  name: string;
  role: string;
  photo: string;
}

export default function TeamMemberCard({ name, role, photo }: TeamMemberCardProps) {
  return (
    <Card className="overflow-hidden group" data-testid={`card-team-${name.toLowerCase().replace(/\s+/g, '-')}`}>
      <div className="aspect-square overflow-hidden">
        <img
          src={photo}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
        />
      </div>
      <CardContent className="p-6 text-center">
        <h3 className="font-semibold text-lg mb-1" data-testid={`text-name-${name.toLowerCase().replace(/\s+/g, '-')}`}>{name}</h3>
        <p className="text-muted-foreground text-sm">{role}</p>
      </CardContent>
    </Card>
  );
}
