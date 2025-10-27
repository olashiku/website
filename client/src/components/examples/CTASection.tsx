import CTASection from '../CTASection';
import bgImage from '@assets/generated_images/City_skyline_sunset_panorama_a266ea56.png';

export default function CTASectionExample() {
  return (
    <CTASection
      title="Ready to Elevate Your Real Estate Business?"
      description="Join our network of successful agents and property developers today."
      ctaText="Get Started"
      ctaHref="/contact"
      backgroundImage={bgImage}
    />
  );
}
