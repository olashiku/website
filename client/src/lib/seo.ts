// SEO utility functions for dynamic meta tags
export interface SEOConfig {
  title: string;
  description: string;
  keywords: string;
  canonical?: string;
  ogImage?: string;
}

export const updateMetaTags = (config: SEOConfig) => {
  // Update page title
  document.title = config.title;
  
  // Update meta description
  const metaDescription = document.querySelector('meta[name="description"]');
  if (metaDescription) {
    metaDescription.setAttribute('content', config.description);
  }
  
  // Update meta keywords
  const metaKeywords = document.querySelector('meta[name="keywords"]');
  if (metaKeywords) {
    metaKeywords.setAttribute('content', config.keywords);
  }
  
  // Update Open Graph tags
  const ogTitle = document.querySelector('meta[property="og:title"]');
  if (ogTitle) {
    ogTitle.setAttribute('content', config.title);
  }
  
  const ogDescription = document.querySelector('meta[property="og:description"]');
  if (ogDescription) {
    ogDescription.setAttribute('content', config.description);
  }
  
  // Update Twitter tags
  const twitterTitle = document.querySelector('meta[property="twitter:title"]');
  if (twitterTitle) {
    twitterTitle.setAttribute('content', config.title);
  }
  
  const twitterDescription = document.querySelector('meta[property="twitter:description"]');
  if (twitterDescription) {
    twitterDescription.setAttribute('content', config.description);
  }
  
  // Add canonical URL if provided
  if (config.canonical) {
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute('href', config.canonical);
  }
};

// Page-specific SEO configurations
export const seoConfigs = {
  home: {
    title: "Rock City Home - Construction & Property Development Services Lagos Nigeria",
    description: "Leading construction company in Lagos offering building development, renovation, estate management & land documentation services. Professional property development since 2015 in Sangotedo, Lekki, Ajah.",
    keywords: "construction company Nigeria, real estate development Lagos, building contractors Nigeria, property development Sangotedo, estate management services, land documentation Nigeria, construction services Lagos, property management Nigeria, residential construction Nigeria, commercial building contractors, renovation services Lagos, land surveying Nigeria, building contractors Lekki, Rock City Home",
    canonical: "https://rockcityhome.com/"
  },
  about: {
    title: "About Rock City Home - Lagos Construction & Property Development Company Since 2015",
    description: "Learn about Rock City Home, Lagos premier construction and property development company founded by Abari Ajibola in 2015. 200+ successful projects, expert team, quality workmanship across Nigeria.",
    keywords: "about Rock City Home, Abari Ajibola construction, Lagos construction company history, property development Nigeria, building company Lagos since 2015, construction team Nigeria, quality construction Lagos, Rock City Home founder",
    canonical: "https://rockcityhome.com/about"
  },
  services: {
    title: "Construction & Property Development Services Lagos Nigeria - Rock City Home",
    description: "Comprehensive construction services: building development, renovation, estate management, land documentation, surveying & environmental services in Lagos Nigeria. Professional contractors since 2015.",
    keywords: "construction services Lagos, building development Nigeria, renovation services Lagos, estate management Nigeria, land documentation services, property development Lagos, land surveying Nigeria, environmental management, commercial construction Lagos, residential building Nigeria",
    canonical: "https://rockcityhome.com/services"
  },
  network: {
    title: "Property Network Lagos - Real Estate Listings & Developer Partnerships Nigeria",
    description: "Browse premium property listings and connect with top real estate agents in Lagos Nigeria. Join Rock City Home's professional network of developers, contractors and property investors.",
    keywords: "property network Lagos, real estate listings Nigeria, property developers Lagos, real estate agents Nigeria, property investment Lagos, real estate partnerships Nigeria, property listings Lekki, Lagos property network, real estate professionals Nigeria",
    canonical: "https://rockcityhome.com/network"
  },
  contact: {
    title: "Contact Rock City Home - Construction Company Lagos Nigeria | Get Quote",
    description: "Contact Rock City Home for construction, property development and estate management services in Lagos Nigeria. Located in Sangotedo, Lekki. Call 07014668925 or email info@rockcityhome.com",
    keywords: "contact Rock City Home, construction company Lagos contact, property development quote Nigeria, building contractors Lagos phone, Rock City Home address Sangotedo, Lagos construction services contact, estate management contact Nigeria",
    canonical: "https://rockcityhome.com/contact"
  },
  blog: {
    title: "Construction & Property Development Blog Lagos Nigeria - Rock City Home Insights",
    description: "Expert insights on construction, property development, real estate trends and building tips in Lagos Nigeria. Industry expertise from Rock City Home's professional team.",
    keywords: "construction blog Nigeria, property development tips Lagos, real estate insights Nigeria, building advice Lagos, construction industry Nigeria, property investment tips, Lagos real estate trends, construction expert advice Nigeria",
    canonical: "https://rockcityhome.com/blog"
  }
};