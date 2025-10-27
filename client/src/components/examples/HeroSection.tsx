import HeroSection from '../HeroSection';
import heroImage from '@assets/generated_images/Modern_luxury_home_hero_1e61facd.png';

export default function HeroSectionExample() {
  return (
    <HeroSection
      title="Your Trusted Partner in Real Estate Marketing"
      subtitle="Connecting Property Dreams with Perfect Solutions"
      primaryCta={{ text: "Request Consultation", href: "/contact" }}
      secondaryCta={{ text: "View Services", href: "/services" }}
      backgroundImage={heroImage}
      trustIndicator="Trusted by 500+ agents and developers"
    />
  );
}
