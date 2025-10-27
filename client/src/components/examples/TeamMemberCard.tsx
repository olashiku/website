import TeamMemberCard from '../TeamMemberCard';
import photo from '@assets/generated_images/Professional_man_headshot_portrait_c65913d1.png';

export default function TeamMemberCardExample() {
  return (
    <div className="p-8 max-w-xs">
      <TeamMemberCard
        name="Michael Chen"
        role="CEO & Founder"
        photo={photo}
      />
    </div>
  );
}
