# Rock City Home - Real Estate Marketing Website

## Project Overview
Rock City Home is a professional real estate marketing and networking website designed to connect property buyers, sellers, agents, and developers. The platform serves as a hub for real estate marketing solutions and professional networking.

## Architecture
- **Frontend**: React with TypeScript, Wouter for routing
- **Backend**: Express.js with TypeScript
- **Styling**: Tailwind CSS with Shadcn UI components
- **State Management**: TanStack Query for server state
- **Storage**: In-memory storage for contact form submissions

## Key Features
1. **Home Page**: Hero section, services overview, value proposition, testimonials, and stats
2. **About Us**: Company story, mission, values, team members, and vision
3. **Services**: Comprehensive list of 8 real estate services with detailed descriptions
4. **Contact**: Contact form with validation that stores submissions in memory
5. **Responsive Design**: Mobile-first approach with professional gold/navy color scheme

## Data Model
The application uses in-memory storage for contact form submissions with the following schema:
- Contact Submissions: name, email, phone, serviceInterest, message, createdAt

## API Endpoints
- `POST /api/contact` - Submit contact form
- `GET /api/contact` - Retrieve all contact submissions (admin)

## Color Scheme
- **Primary**: Gold (#F5C842) - Used for CTAs and highlights
- **Secondary**: Navy Blue - Used for footer and professional accents
- **Background**: White with subtle gray accents

## Pages Structure
- `/` - Home page with hero, services, testimonials
- `/about` - About us with team and company info
- `/services` - All 8 services detailed
- `/contact` - Contact form and contact information

## Recent Changes
- Removed Property Network and Blog pages from navigation
- Simplified home page to remove featured properties section
- Redesigned value proposition section for better visual hierarchy
- Fixed Link component nesting issues in Header and Footer
- Implemented functional contact form with backend API
