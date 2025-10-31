import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import TeamMemberCard from "@/components/TeamMemberCard";
import CTASection from "@/components/CTASection";
import { Target, Users, Award, TrendingUp } from "lucide-react";
import heroImage from '@assets/generated_images/Team_collaboration_hero_background_b9958d28.png';
import team1 from '@assets/generated_images/Professional_man_headshot_portrait_c65913d1.png';
import team2 from '@assets/generated_images/Professional_woman_headshot_portrait_64c6baf6.png';
import team3 from '@assets/generated_images/Smiling_professional_woman_headshot_e4d46485.png';
import ctaBg from '@assets/generated_images/Residential_development_background_a86d33a0.png';

export default function About() {
  const values = [
    {
      icon: Target,
      title: "Quality",
      description: "Superior workmanship and materials in every project we undertake",
    },
    {
      icon: TrendingUp,
      title: "Innovation",
      description: "Embracing modern construction techniques and sustainable practices",
    },
    {
      icon: Award,
      title: "Excellence",
      description: "Committed to exceeding industry standards in all our services",
    },
    {
      icon: Users,
      title: "Reliability",
      description: "On-time delivery and transparent communication throughout every project",
    },
  ];

  const team = [
    { name: "Michael Chen", role: "CEO & Founder", photo: team1 },
    { name: "Sarah Johnson", role: "Director of Construction", photo: team2 },
    { name: "Emily Rodriguez", role: "Head of Estate Management", photo: team3 },
    { name: "David Thompson", role: "Chief Development Officer", photo: team1 },
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      <div className="pt-20">
        <HeroSection
          title="About Rock City Home"
          subtitle="Building Excellence in Construction & Property Development Since 2015"
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
                Founded in 2015, Rock City Home emerged from a simple vision: to provide comprehensive construction, development, and property management solutions with unwavering commitment to quality. What started as a small construction firm has grown into a full-service real estate development company.
              </p>
              <p className="text-lg leading-relaxed">
                Our journey began when our founder, Michael Chen, recognized the need for a company that could handle every aspect of property development—from land acquisition and documentation to construction and ongoing estate management. He assembled a team of experienced professionals passionate about building excellence.
              </p>
              <p className="text-lg leading-relaxed">
                Today, we're proud to have completed over 200 successful projects, managing a diverse portfolio of residential and commercial properties, and maintaining industry-leading standards in construction quality and environmental responsibility.
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
              To deliver superior construction, development, and property management services that exceed client expectations while maintaining the highest standards of quality, safety, and environmental responsibility.
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
              To be the leading construction and property development company recognized for transforming communities through quality building, sustainable practices, and comprehensive property solutions. We envision creating developments that stand the test of time and enhance the lives of those who inhabit them.
            </p>
          </div>
        </div>
      </section>

      <CTASection
        title="Start Your Project With Us"
        description="Experience the Rock City Home difference in construction and property development."
        ctaText="Get In Touch"
        ctaHref="/contact"
        backgroundImage={ctaBg}
      />

      <Footer />
    </div>
  );
}
