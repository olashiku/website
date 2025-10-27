import BlogCard from '../BlogCard';
import image from '@assets/generated_images/Modern_luxury_home_hero_1e61facd.png';

export default function BlogCardExample() {
  return (
    <div className="p-8 max-w-sm">
      <BlogCard
        image={image}
        title="5 Tips for Marketing Your Property Effectively"
        excerpt="Discover proven strategies to showcase your property and attract the right buyers in today's competitive market."
        category="Marketing Tips"
        date="Jan 15, 2025"
        readTime="5 min read"
      />
    </div>
  );
}
