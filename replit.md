# Rock City Home - Real Estate Marketing Website

## Project Overview
Rock City Home is a production-ready professional real estate marketing and networking website designed to connect property buyers, sellers, agents, and developers. The platform serves as a hub for real estate marketing solutions and professional networking with persistent data storage.

## Architecture
- **Frontend**: React with TypeScript, Wouter for routing
- **Backend**: Express.js with TypeScript
- **Database**: PostgreSQL with Drizzle ORM (Neon serverless)
- **Styling**: Tailwind CSS with Shadcn UI components
- **State Management**: TanStack Query for server state
- **Storage**: DatabaseStorage using PostgreSQL for persistent data

## Key Features
1. **Home Page**: Hero section, services overview, value proposition, testimonials, and stats
2. **About Us**: Company story, mission, values, team members, and vision
3. **Services**: Comprehensive list of 8 real estate services with detailed descriptions
4. **Contact**: Production-ready contact form with full validation and database persistence
5. **Responsive Design**: Mobile-first approach with professional gold/navy color scheme
6. **Data Security**: PII-protected storage with no public data exposure
7. **Scroll Animations**: Smooth fade-in animations triggered on scroll with IntersectionObserver
8. **Scroll-to-Top**: Fixed button that appears after scrolling 300px
9. **Enhanced Interactions**: Button hover/active effects, smooth transitions on all interactive elements
10. **Accessibility**: Gold focus rings, keyboard navigation support, prefers-reduced-motion support

## Database Schema
PostgreSQL database with the following table:

**contact_submissions**
- `id` (varchar, UUID primary key) - Auto-generated
- `name` (text, not null) - Minimum 2 characters
- `email` (text, not null) - Valid email format
- `phone` (text, not null) - Minimum 10 digits
- `service_interest` (text, not null) - Selected service category
- `message` (text, not null) - Minimum 10 characters
- `created_at` (timestamp, not null) - Auto-generated timestamp

## API Endpoints
- `POST /api/contact` - Submit contact form with validation
  - Returns 200 on success with submission ID
  - Returns 400 on validation errors with error details
  - Returns 500 on server errors

## Validation Rules
- **Client-side**: React Hook Form with Zod resolver
- **Server-side**: Zod schema validation before database insertion
- All fields validated on both frontend and backend for security
- Comprehensive error messages for user feedback

## Color Scheme
- **Primary**: Gold (#F5C842) - Used for CTAs and highlights
- **Secondary**: Navy Blue - Used for footer and professional accents
- **Background**: White with subtle gray accents

## Pages Structure
- `/` - Home page with hero, services, testimonials
- `/about` - About us with team and company info
- `/services` - All 8 services detailed
- `/contact` - Contact form and contact information

## Security Considerations
- Contact submissions stored securely in PostgreSQL
- No public endpoints exposing contact data (PII protection)
- Input validation on both client and server
- Proper HTTP status codes for different error types
- Database migrations managed via Drizzle Kit

## Design Enhancements (Latest Update)
**Scroll Animations:**
- AnimatedSection component using IntersectionObserver
- Fade-up, fade-in, fade-left, fade-right animation variants
- Staggered delays for card grids (100ms-300ms)
- Applied to all major sections on home page

**Visual Polish:**
- Smooth scroll behavior globally
- Scroll-to-top button (appears after 300px scroll)
- Enhanced button transitions (active:scale-95, hover:shadow-md)
- Improved focus states with visible gold rings
- Icon hover effects with scale transformations
- Transition-all duration-200 on inputs/textareas

**Accessibility:**
- Prefers-reduced-motion media query support
- Enhanced focus visibility for keyboard navigation
- ARIA labels on interactive components

**Assets:**
- Professional favicon with RC logo (gold on navy)
- Located at /public/favicon.png

## Production Readiness
✅ Database migrations applied successfully
✅ End-to-end testing passed
✅ Form validation working correctly
✅ Error handling implemented
✅ Security review completed
✅ No PII data exposure
✅ Design enhancements reviewed and approved
✅ Accessibility features implemented
✅ Ready for deployment

## Future Enhancements
- Add authenticated admin panel to view contact submissions
- Monitor production logs for validation patterns
- Implement email notifications for new submissions
- Run manual accessibility sweep (keyboard + screen reader testing)
