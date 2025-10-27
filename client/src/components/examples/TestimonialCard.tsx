import TestimonialCard from '../TestimonialCard';
import avatar from '@assets/generated_images/Professional_woman_headshot_portrait_64c6baf6.png';

export default function TestimonialCardExample() {
  return (
    <div className="p-8 max-w-md">
      <TestimonialCard
        quote="Rock City Home helped us sell our property in record time. Their marketing expertise and professional network made all the difference."
        author="Sarah Johnson"
        role="Property Owner"
        avatar={avatar}
      />
    </div>
  );
}
