import { useState, useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import BlogCard from "@/components/BlogCard";
import { updateMetaTags, seoConfigs } from "../lib/seo";
import { Button } from "@/components/ui/button";
import heroImage from '@assets/generated_images/City_skyline_sunset_panorama_a266ea56.png';
import blogImage1 from '@assets/generated_images/Modern_luxury_home_hero_1e61facd.png';
import blogImage2 from '@assets/generated_images/Business_handshake_partnership_scene_9c3b6742.png';
import blogImage3 from '@assets/generated_images/Real_estate_team_collaboration_87a0448f.png';

export default function Blog() {
  useEffect(() => {
    updateMetaTags(seoConfigs.blog);
  }, []);

  const [activeCategory, setActiveCategory] = useState("all");

  const categories = [
    "All",
    "Marketing Tips",
    "Market Trends",
    "Success Stories",
    "Industry News",
  ];

  const articles = [
    {
      image: blogImage1,
      title: "5 Tips for Marketing Your Property Effectively",
      excerpt: "Discover proven strategies to showcase your property and attract the right buyers in today's competitive real estate market.",
      category: "Marketing Tips",
      date: "Jan 15, 2025",
      readTime: "5 min read",
    },
    {
      image: blogImage2,
      title: "Understanding Real Estate Market Trends in 2025",
      excerpt: "Stay ahead of the curve with insights into the latest market dynamics, buyer behaviors, and investment opportunities.",
      category: "Market Trends",
      date: "Jan 12, 2025",
      readTime: "8 min read",
    },
    {
      image: blogImage3,
      title: "How to Choose the Right Real Estate Agent",
      excerpt: "A comprehensive guide to finding and working with an agent who understands your needs and delivers results.",
      category: "Marketing Tips",
      date: "Jan 10, 2025",
      readTime: "6 min read",
    },
    {
      image: blogImage1,
      title: "Success Story: From Listing to Sold in 30 Days",
      excerpt: "Read how strategic marketing and professional networking helped sell a luxury property in record time.",
      category: "Success Stories",
      date: "Jan 8, 2025",
      readTime: "4 min read",
    },
    {
      image: blogImage2,
      title: "The Impact of Digital Marketing on Real Estate",
      excerpt: "Explore how digital channels are transforming property marketing and what it means for buyers and sellers.",
      category: "Industry News",
      date: "Jan 5, 2025",
      readTime: "7 min read",
    },
    {
      image: blogImage3,
      title: "Building Strong Relationships in Real Estate",
      excerpt: "Why networking and relationship building are crucial for long-term success in the real estate industry.",
      category: "Marketing Tips",
      date: "Jan 3, 2025",
      readTime: "5 min read",
    },
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      <div className="pt-20">
        <HeroSection
          title="Insights & Resources"
          subtitle="Expert Advice and Industry Knowledge"
          description="Stay informed with the latest trends, tips, and success stories from the real estate world."
          backgroundImage={heroImage}
          compact
        />
      </div>

      {/* Category Filter */}
      <section className="py-8 bg-accent/50 border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) => (
              <Button
                key={category}
                variant={activeCategory === category.toLowerCase() ? "default" : "outline"}
                onClick={() => setActiveCategory(category.toLowerCase())}
                data-testid={`button-category-${category.toLowerCase().replace(/\s+/g, '-')}`}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Article */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center bg-accent/30 rounded-2xl overflow-hidden">
              <div className="aspect-video lg:aspect-auto lg:h-full">
                <img
                  src={blogImage1}
                  alt="Featured article"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-8 lg:p-12">
                <span className="text-primary font-semibold text-sm">FEATURED</span>
                <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">
                  5 Tips for Marketing Your Property Effectively
                </h2>
                <p className="text-muted-foreground mb-6">
                  Discover proven strategies to showcase your property and attract the right buyers in today's competitive real estate market.
                </p>
                <Button data-testid="button-read-featured">Read Article →</Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">Latest Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article) => (
              <BlogCard key={article.title} {...article} />
            ))}
          </div>
          
          {/* Pagination */}
          <div className="flex justify-center gap-2 mt-12">
            <Button variant="outline" disabled data-testid="button-prev-page">Previous</Button>
            <Button variant="outline" data-testid="button-page-1">1</Button>
            <Button variant="outline" data-testid="button-page-2">2</Button>
            <Button variant="outline" data-testid="button-page-3">3</Button>
            <Button variant="outline" data-testid="button-next-page">Next</Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
