# Next.js Full-Stack Application

A modern full-stack web application built with Next.js 15, featuring a clean separation between frontend and backend components.

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

The application will be available at `http://localhost:3000` (or the next available port).

## 📁 Project Structure

```
project11/
├── app/                          # Next.js App Router directory
│   ├── layout.tsx               # Root layout component
│   ├── page.tsx                 # Homepage (imports from frontend)
│   ├── favicon.ico              # Site favicon
│   │
│   ├── frontend/                # Frontend components and pages
│   │   ├── components/          # Reusable React components
│   │   │   ├── Header.tsx       # Navigation header component
│   │   │   └── Footer.tsx       # Footer component
│   │   ├── pages/               # Page components
│   │   │   └── HomePage.tsx     # Main homepage component
│   │   ├── styles/              # CSS and styling files
│   │   │   └── globals.css      # Global styles and Tailwind CSS
│   │   ├── utils/               # Frontend utility functions
│   │   │   └── api.ts           # API client for HTTP requests
│   │   └── types/               # TypeScript type definitions
│   │       └── index.ts         # Frontend-specific types
│   │
│   ├── backend/                 # Backend logic and utilities
│   │   ├── api/                 # API routes (Next.js App Router)
│   │   │   ├── users/           # User management endpoints
│   │   │   │   └── route.ts     # GET /api/users, POST /api/users
│   │   │   └── auth/            # Authentication endpoints
│   │   │       └── login/       # Login endpoint
│   │   │           └── route.ts # POST /api/auth/login
│   │   ├── lib/                 # Backend utilities
│   │   │   └── database.ts      # Database connection utilities
│   │   ├── middleware/          # Server middleware
│   │   │   └── auth.ts          # Authentication middleware
│   │   └── types/               # Backend type definitions
│   │       └── index.ts         # Server-specific types
│   │
│   └── api/                     # Next.js API routes (App Router)
│       ├── users/               # User API endpoints
│       │   └── route.ts         # User CRUD operations
│       └── auth/                # Authentication API endpoints
│           └── login/           # Login endpoint
│               └── route.ts     # User authentication
│
├── public/                      # Static assets
│   ├── next.svg                # Next.js logo
│   ├── vercel.svg              # Vercel logo
│   ├── file.svg                # File icon
│   ├── globe.svg               # Globe icon
│   └── window.svg              # Window icon
│
├── package.json                 # Project dependencies and scripts
├── package-lock.json           # Dependency lock file
├── next.config.ts              # Next.js configuration
├── tsconfig.json               # TypeScript configuration
├── postcss.config.mjs          # PostCSS configuration
└── README.md                   # This file
```

## 🏗️ Architecture Overview

### Frontend (`app/frontend/`)
The frontend is organized using a component-based architecture:

- **Components**: Reusable UI components like Header and Footer
- **Pages**: Page-level components that compose multiple smaller components
- **Utils**: Utility functions for API calls and other frontend logic
- **Types**: TypeScript interfaces and types for type safety
- **Styles**: Global CSS and styling configuration

### Backend (`app/backend/`)
The backend follows a layered architecture:

- **API Routes**: RESTful endpoints using Next.js App Router
- **Middleware**: Authentication and request processing logic
- **Lib**: Database connections and business logic utilities
- **Types**: Server-side type definitions

## 🔧 Available Scripts

```bash
# Development
npm run dev          # Start development server with Turbopack
npm run build        # Build for production with Turbopack
npm run start        # Start production server

# Type checking
npx tsc --noEmit     # Run TypeScript type checking
```

## 🌐 API Endpoints

### Authentication
- `POST /api/auth/login` - User login
  - Body: `{ email: string, password: string }`
  - Returns: `{ data: { token, user }, success: boolean, message: string }`

### Users
- `GET /api/users` - Get all users (requires authentication)
  - Headers: `x-user-id: string`
  - Returns: `{ data: User[], success: boolean, message: string }`

- `POST /api/users` - Create a new user (requires authentication)
  - Headers: `x-user-id: string`
  - Body: `{ name: string, email: string }`
  - Returns: `{ data: User, success: boolean, message: string }`

## 🎨 Frontend Components

### Header Component
```tsx
import Header from './frontend/components/Header';

<Header title="My App" />
```

### Footer Component
```tsx
import Footer from './frontend/components/Footer';

<Footer />
```

### API Client
```tsx
import { apiClient } from './frontend/utils/api';

// GET request
const users = await apiClient.get<User[]>('/users');

// POST request
const newUser = await apiClient.post<User>('/users', { name: 'John', email: 'john@example.com' });
```

## 🔐 Authentication

The application includes a mock authentication system:

- **Test Credentials**: 
  - Email: `admin@example.com`
  - Password: `password`

- **Authentication Headers**: Include `x-user-id` header for protected routes

## 🛠️ Development

### Adding New Components
1. Create component in `app/frontend/components/`
2. Export as default function
3. Import and use in pages

### Adding New API Routes
1. Create route file in `app/api/[endpoint]/route.ts`
2. Export HTTP method functions (GET, POST, PUT, DELETE)
3. Use middleware for authentication if needed

### Adding New Pages
1. Create page component in `app/frontend/pages/`
2. Import and use in `app/page.tsx` or create new route

## 📦 Dependencies

### Production
- **Next.js 15.5.4** - React framework with App Router
- **React 19.1.0** - UI library
- **TypeScript 5** - Type safety

### Development
- **Tailwind CSS 4** - Utility-first CSS framework
- **PostCSS** - CSS processing
- **Turbopack** - Fast bundler for development

## 🚀 Deployment

This application is ready for deployment on Vercel:

1. Push code to GitHub
2. Connect repository to Vercel
3. Deploy automatically

The app will be available at your Vercel domain.

## 🔄 Next Steps

To extend this application:

1. **Database Integration**: Replace mock data with real database queries
2. **Authentication**: Implement JWT tokens and session management
3. **State Management**: Add Redux or Zustand for complex state
4. **Testing**: Add Jest and React Testing Library
5. **Styling**: Customize Tailwind CSS theme
6. **API Documentation**: Add OpenAPI/Swagger documentation

## 📝 License

This project is open source and available under the [MIT License](LICENSE).
