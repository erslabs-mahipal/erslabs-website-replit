# TrailMeals - Outdoor Adventure Meal Planning Application

## Overview

TrailMeals is a full-stack web application designed for outdoor enthusiasts to plan meals for camping, backpacking, and other adventure trips. The application enables users to create trip profiles, browse and select meals from a database, plan daily meal schedules, generate shopping lists, and track nutritional information. Built with a modern tech stack, it provides an intuitive interface for meal planning with considerations for weight, cooking equipment, dietary preferences, and group size.

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

### Database Design
- **Trips**: Store trip metadata (name, duration, group size, cooking equipment, dietary preferences)
- **Meals**: Comprehensive meal database with nutritional info, cooking requirements, and dietary tags
- **Trip Meals**: Junction table linking meals to specific days and meal types within trips
- **Shopping Lists**: Generated lists with categorized ingredients and purchase tracking
- **Schema**: Shared TypeScript types generated from Drizzle schema definitions

### Development Environment
- **Build System**: Vite for fast development and optimized production builds
- **Development Server**: Hot module replacement with Vite middleware integration
- **Code Organization**: Monorepo structure with shared schema and types between client/server
- **Database Migrations**: Drizzle Kit for schema management and database migrations

### Key Architectural Decisions

**Shared Schema Pattern**: A single schema definition in the `/shared` directory ensures type consistency between frontend and backend, reducing bugs and improving developer experience.

**Abstract Storage Interface**: The storage layer uses an interface pattern allowing easy swapping between in-memory development storage and production PostgreSQL, facilitating testing and development.

**Component-First UI**: Leveraging Radix UI primitives provides accessibility out-of-the-box while maintaining design system consistency through Tailwind CSS utilities.

**Query-Centric Data Flow**: TanStack Query manages all server state, providing automatic caching, background updates, and optimistic updates for a responsive user experience.

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