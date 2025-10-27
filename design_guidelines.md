# Design Guidelines for RockCityHome.com

## Design Approach

**Reference-Based Approach**: Drawing inspiration from premium real estate platforms (Compass, Sotheby's International Realty) combined with modern SaaS clarity (Stripe, Linear). This creates a professional, credible aesthetic that balances visual richness with functional efficiency.

**Core Design Principles**:
- **Elevated Professionalism**: Visual sophistication that communicates expertise and trustworthiness
- **Strategic Whitespace**: Generous breathing room that creates premium feel without emptiness
- **Visual Hierarchy**: Clear content organization that guides users naturally through information
- **Purposeful Imagery**: High-quality real estate visuals that inspire and establish credibility

## Typography System

**Font Selection**: Use Google Fonts
- **Primary (Headings)**: Inter or DM Sans - weight: 600-700 for H1-H2, 500-600 for H3-H6
- **Secondary (Body)**: Inter or Open Sans - weight: 400 for body text, 500 for emphasis
- **Accent (Optional)**: Playfair Display or Lora for hero headlines to add sophistication

**Type Scale**:
- Hero Headlines: text-5xl to text-7xl (desktop), text-4xl to text-5xl (mobile)
- Page Titles: text-4xl to text-5xl (desktop), text-3xl to text-4xl (mobile)
- Section Headings: text-3xl to text-4xl (desktop), text-2xl to text-3xl (mobile)
- Subsection Headings: text-2xl (desktop), text-xl (mobile)
- Body Text: text-base to text-lg, with max-w-prose for optimal readability
- Small Text: text-sm for metadata, captions

## Layout System

**Spacing Primitives**: Tailwind units of 4, 6, 8, 12, 16, 20, 24, 32
- Component internal padding: p-6, p-8
- Section vertical spacing: py-16 to py-24 (desktop), py-12 to py-16 (mobile)
- Content gaps: gap-6, gap-8, gap-12
- Container max-widths: max-w-7xl for full sections, max-w-6xl for content, max-w-prose for text

**Grid Systems**:
- Services Grid: grid-cols-1 md:grid-cols-2 lg:grid-cols-3 or lg:grid-cols-4
- Property Cards: grid-cols-1 md:grid-cols-2 lg:grid-cols-3
- Blog Grid: grid-cols-1 md:grid-cols-2 lg:grid-cols-3
- Team Section: grid-cols-1 md:grid-cols-2 lg:grid-cols-4

## Component Library

### Navigation
**Header**: Fixed top navigation with logo left, centered menu items, and CTA button right. Use subtle backdrop-blur on scroll for elevation. Height: h-20 to h-24. Mobile: Hamburger menu with slide-in drawer.

### Hero Sections
**Home Hero**: Full-width section with large hero image background (h-screen or min-h-[600px]). Overlay with subtle gradient for text readability. Centered content with large headline (text-5xl to text-7xl), supporting text (text-lg to text-xl), and dual CTA buttons (primary + secondary). Include trust indicator below CTAs (e.g., "Trusted by 500+ agents and developers").

### Service Cards
**Layout**: Elevated cards with icon at top, heading, description text, and subtle "Learn More" link. Use rounded corners (rounded-lg to rounded-xl), subtle shadow (shadow-md to shadow-lg), and hover lift effect (translate-y). Padding: p-8. Icon size: 48px to 64px.

### Property Cards
**Structure**: Vertical card with featured image (aspect-ratio-[4/3]), overlay gradient on hover, property details section (location, price, beds/baths), and "View Details" button. Include bookmark/save icon in top-right corner.

### Testimonials
**Design**: Card-based layout with quote text, author photo (rounded-full, w-12 to w-16), name, and role. Use quotation marks as decorative element. Grid: 2-3 columns on desktop, single column on mobile.

### Contact Forms
**Structure**: Clean form with generous spacing (space-y-6). Input fields with labels above, rounded borders (rounded-lg), focus states with border emphasis. Multi-column layout for Name/Email on desktop (grid-cols-2). Large submit button at bottom.

### Footer
**Layout**: Multi-column footer (4 columns on desktop, stack on mobile). Sections: Company Info, Quick Links, Services, Contact. Bottom bar with copyright and social icons. Padding: py-16 to py-20.

## Page-Specific Layouts

### Home Page (6-7 Sections)
1. **Hero**: Full-width with background image, centered headline, dual CTAs, trust indicator
2. **Services Preview**: 4-card grid showcasing key services with icons
3. **Value Proposition**: Two-column layout (image + text) explaining company benefits
4. **Featured Properties/Network**: 3-card grid with "View All" CTA
5. **Testimonials**: 3-card testimonial grid
6. **Stats Section**: 4-column metrics (properties marketed, agents in network, satisfaction rate)
7. **Final CTA**: Centered section with bold headline and contact button

### About Us Page
1. **Hero**: Image + overlay with company mission statement
2. **Story Section**: Two-column (text + image), alternating layout
3. **Values Grid**: 4-column grid with icons
4. **Team Section**: 4-column grid of team member cards (photo, name, role)
5. **Vision Statement**: Full-width centered text section

### Services Page
1. **Hero**: Text-focused with compelling headline
2. **Services Grid**: 8 service cards in 3-4 column grid
3. **How It Works**: Step-by-step timeline or numbered process
4. **CTA Section**: Centered "Request Consultation" with supporting text

### Property Network Page
1. **Hero with Filters**: Compact hero with filter bar (property type, location, price)
2. **Property Grid**: 3-column masonry-style grid
3. **Partner Logos**: Logo cloud section
4. **Join Network CTA**: Full-width section for agents/developers

### Contact Page
1. **Split Layout**: 60/40 split - form on left, contact info + map on right (desktop)
2. **Contact Info Cards**: Phone, email, address with icons
3. **Social Links**: Icon row below contact details

### Blog Page
1. **Featured Post**: Large hero card with featured article
2. **Category Filters**: Horizontal pill navigation
3. **Article Grid**: 3-column grid with image, title, excerpt, read time
4. **Pagination**: Centered at bottom

## Image Strategy

**Hero Images**: Large, professional real estate photography
- Home: Modern luxury property exterior or city skyline
- About: Team collaboration or professional office setting
- Services: Handshake or consultation scene
- Property Network: Property showcase or aerial neighborhood view

**Supporting Images**: 
- Service sections: Professional agents, property details, technology in use
- Testimonial photos: Headshots of satisfied clients
- Property cards: High-quality property photography
- Team photos: Professional headshots with consistent style
- Blog: Relevant property or industry imagery

**Image Treatment**: Use aspect-ratio utilities for consistency. Implement subtle grayscale or overlay effects on hover. Ensure all images have proper contrast for overlaid text.

## Interactive Elements

**Buttons**: Two styles - Primary (filled) and Secondary (outline). Rounded corners (rounded-lg), generous padding (px-6 py-3 to px-8 py-4). Implement hover states with subtle lift or color shift. On hero images, use backdrop-blur-sm for button backgrounds.

**Cards**: Implement subtle hover lift (hover:-translate-y-1) and shadow enhancement (hover:shadow-xl). Transition duration: 200-300ms.

**Animations**: Minimal and purposeful. Subtle fade-in on scroll for section reveals. Smooth transitions for interactive elements. No distracting or excessive motion.

This design creates a sophisticated, trustworthy real estate platform that balances visual appeal with functional clarity, establishing credibility while maintaining user-friendly navigation and clear conversion paths.