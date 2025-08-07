# ERSLabs - Professional Software Development Company Website

## Overview

ERSLabs is a professional website for ERS Labs Private Limited, a software development and consultancy company incorporated in 2015 and based in Hyderabad, India. The website showcases the company's software publishing, consultancy, and supply services with authentic company information, real client testimonials, and professional branding. The site features modern design, comprehensive service descriptions, leadership team profiles, and authentic testimonials from actual clients.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React with TypeScript for type safety and modern development practices
- **Routing**: Wouter for lightweight client-side routing
- **UI Components**: Radix UI primitives with Tailwind CSS for a consistent design system using shadcn/ui components
- **State Management**: TanStack Query (React Query) for server state management and caching
- **Forms**: React Hook Form with Zod validation for type-safe form handling
- **Styling**: Tailwind CSS with CSS variables for theming and responsive design

### Backend Architecture
- **Runtime**: Node.js with TypeScript and ESM modules
- **Framework**: Express.js for REST API endpoints
- **Database ORM**: Drizzle ORM with PostgreSQL dialect for type-safe database operations
- **Schema Validation**: Zod schemas shared between client and server for consistent data validation
- **Storage Layer**: Abstracted storage interface with in-memory implementation for development

### Website Architecture
- **Homepage**: Hero section, services showcase, statistics, and call-to-action sections
- **About Section**: Company history, incorporation details, and official company information
- **Services**: Software development, mobile apps, backend systems, and consultancy services
- **Team Section**: Leadership profiles with official Director Identification Numbers (DINs)
- **Testimonials**: Authentic client reviews from Rainbow Children's Hospital, TransGraph, PayAid, and others
- **Contact**: Official company address and contact information from corporate records

### Development Environment
- **Build System**: Vite for fast development and optimized production builds
- **Development Server**: Hot module replacement with Vite middleware integration
- **Code Organization**: Monorepo structure with shared schema and types between client/server
- **Database Migrations**: Drizzle Kit for schema management and database migrations

### Key Architectural Decisions

**Shared Schema Pattern**: A single schema definition in the `/shared` directory ensures type consistency between frontend and backend, reducing bugs and improving developer experience.

**Authentic Data Integration**: All company information is sourced from official corporate records (Ministry of Corporate Affairs, Zauba Corp) ensuring accuracy and credibility.

**Professional Design System**: Clean, modern SaaS-style design with blue color scheme suitable for a technology company, built with shadcn/ui components.

**Client-Focused Content**: Real testimonials from actual clients including healthcare (Rainbow Children's Hospital), fintech (PayAid), and international companies (Licence Ready Pty Ltd, Australia).

## Company Information

### ERS Labs Private Limited
- **Incorporation Date**: December 25, 2015
- **CIN**: U72200TG2015PTC099044
- **Registration**: Registrar of Companies, Hyderabad
- **Address**: 6Q3, 6th Floor, Cyber Towers, Hi-Tech City, Madhapur, Hyderabad, Telangana - 500081
- **Industry**: Software publishing, consultancy and supply (NIC Code: 722)
- **Status**: Active
- **Email**: info@erslabs.com

### Leadership Team
- **Mahipal Reddy Mettu** - Founder & Director (DIN: 07154329)
- **Neelima Boppana** - Director (DIN: 07152676)
- **Srinivas Reddy Annem** - Director (DIN: 00311516)
- **Saketh Ram Reddy Gangavaram** - Director (DIN: 08424437)

### Notable Clients
- Rainbow Children's Hospital
- TransGraph
- PayAid
- Infinite Blue
- Licence Ready Pty Ltd (Australia)
- Workstellar
- Pradakshana Fintech Private Limited

## External Dependencies

### Database & Infrastructure
- **Neon Database**: Serverless PostgreSQL database with `@neondatabase/serverless` driver
- **PostgreSQL**: Primary database with Drizzle ORM for type-safe queries

### UI & Styling
- **Radix UI**: Comprehensive primitive component library for accessibility and behavior
- **Tailwind CSS**: Utility-first CSS framework with custom design tokens
- **Lucide Icons**: Modern icon library for consistent iconography
- **shadcn/ui**: Pre-built component system built on Radix UI and Tailwind

### Development Tools
- **Vite**: Fast build tool with React plugin and development server
- **TypeScript**: Static type checking across the entire application
- **ESBuild**: Fast JavaScript bundler for production builds
- **PostCSS**: CSS processing with Tailwind CSS and Autoprefixer

### Data Management
- **TanStack Query**: Server state management with caching and synchronization
- **React Hook Form**: Performant form library with validation
- **Zod**: Schema validation for runtime type safety
- **date-fns**: Date utility library for formatting and manipulation

### Runtime & Server
- **Express.js**: Web application framework for REST API
- **tsx**: TypeScript execution for development server
- **connect-pg-simple**: PostgreSQL session store for Express sessions