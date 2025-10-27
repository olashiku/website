import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import TeamMemberCard from "@/components/TeamMemberCard";
import CTASection from "@/components/CTASection";
import { Target, Users, Award, TrendingUp } from "lucide-react";
import heroImage from '@assets/generated_images/Real_estate_team_collaboration_87a0448f.png';
import team1 from '@assets/generated_images/Professional_man_headshot_portrait_c65913d1.png';
import team2 from '@assets/generated_images/Professional_woman_headshot_portrait_64c6baf6.png';
import team3 from '@assets/generated_images/Smiling_professional_woman_headshot_e4d46485.png';
import ctaBg from '@assets/generated_images/City_skyline_sunset_panorama_a266ea56.png';

export default function About() {
  const values = [
    {
      icon: Target,
      title: "Integrity",
      description: "We operate with honesty and transparency in every interaction",
    },
    {
      icon: TrendingUp,
      title: "Innovation",
      description: "Constantly evolving our strategies to stay ahead of market trends",
    },
    {
      icon: Award,
      title: "Excellence",
      description: "Committed to delivering exceptional results for every client",
    },
    {
      icon: Users,
      title: "Client-Focused",
      description: "Your success is our priority in everything we do",
    },
  ];

  const team = [
    { name: "Michael Chen", role: "CEO & Founder", photo: team1 },
    { name: "Sarah Johnson", role: "Director of Marketing", photo: team2 },
    { name: "Emily Rodriguez", role: "Head of Agent Relations", photo: team3 },
    { name: "David Thompson", role: "Chief Strategy Officer", photo: team1 },
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      <div className="pt-20">
        <HeroSection
          title="About Rock City Home"
          subtitle="Revolutionizing Real Estate Marketing Since 2015"
          backgroundImage={heroImage}
          compact
        />
      </div>

      {/* Company Story */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center">Our Story</h2>
            <div className="prose prose-lg max-w-none text-muted-foreground space-y-6">
              <p className="text-lg leading-relaxed">
                Founded in 2015, Rock City Home emerged from a simple vision: to transform how real estate professionals connect, collaborate, and succeed. What started as a small networking initiative has grown into a comprehensive platform serving hundreds of agents, developers, and property owners.
              </p>
              <p className="text-lg leading-relaxed">
                Our journey began when our founder, Michael Chen, recognized the gap between traditional real estate marketing and the digital age. He assembled a team of industry experts passionate about bridging this divide and creating meaningful connections in the real estate world.
              </p>
              <p className="text-lg leading-relaxed">
                Today, we're proud to be a trusted partner for over 500 properties and 250+ agents, maintaining a 98% client satisfaction rate through our commitment to excellence and innovation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-24 bg-accent/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-8">Our Mission</h2>
            <p className="text-2xl text-muted-foreground leading-relaxed">
              To revolutionize real estate marketing by creating meaningful connections between buyers, sellers, agents, and developers through innovative strategies and exceptional service.
            </p>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Core Values</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value) => (
              <div key={value.title} className="text-center">
                <div className="w-16 h-16 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-6">
                  <value.icon className="text-primary" size={32} />
                </div>
                <h3 className="font-semibold text-xl mb-3">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 bg-accent/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Meet Our Team</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Experienced professionals dedicated to your success
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {team.map((member) => (
              <TeamMemberCard key={member.name} {...member} />
            ))}
          </div>
        </div>
      </section>

      {/* Vision Statement */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-8">Our Vision</h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              To be the premier platform where real estate professionals and property owners come together to create lasting value, transforming the industry one connection at a time. We envision a future where every property finds its perfect match through strategic marketing and genuine relationships.
            </p>
          </div>
        </div>
      </section>

      <CTASection
        title="Join Our Growing Network"
        description="Be part of a community that's reshaping real estate marketing."
        ctaText="Get In Touch"
        ctaHref="/contact"
        backgroundImage={ctaBg}
      />

      <Footer />
    </div>
  );
}
