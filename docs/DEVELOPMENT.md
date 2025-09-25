# Development Guide

## 🚀 Quick Start

### Prerequisites

- Node.js 20+
- npm 10+
- Git

### Setup

1. Clone the repository
2. Install dependencies: `npm install`
3. Copy environment variables: `cp .env.example .env.local`
4. Start development server: `npm run dev`

## 🏗️ Development Workflow

### 1. Feature Development

1. Create a feature branch: `git checkout -b feature/your-feature-name`
2. Make your changes
3. Run tests: `npm run test`
4. Run linting: `npm run lint`
5. Commit changes: `git commit -m "feat: add your feature"`
6. Push and create PR

### 2. Code Quality

- All code must pass ESLint checks
- All code must be formatted with Prettier
- All tests must pass
- TypeScript types must be properly defined

### 3. Git Hooks

- Pre-commit hook runs linting and formatting
- Pre-push hook runs tests
- Commit messages must follow conventional commits

## 📁 Adding New Features

### Components

```typescript
// src/components/YourComponent.tsx
import { cn } from '@/lib/utils';

interface YourComponentProps {
  className?: string;
  children: React.ReactNode;
}

export function YourComponent({ className, children }: YourComponentProps) {
  return (
    <div className={cn('base-styles', className)}>
      {children}
    </div>
  );
}
```

### API Routes

```typescript
// src/app/api/your-endpoint/route.ts
import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  try {
    // Your logic here
    return NextResponse.json({ data: 'success' });
  } catch (error) {
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    );
  }
}
```

### Hooks

```typescript
// src/hooks/useYourHook.ts
import { useState, useEffect } from 'react';

export function useYourHook() {
  const [state, setState] = useState(null);

  useEffect(() => {
    // Your logic here
  }, []);

  return { state, setState };
}
```

## 🧪 Testing

### Unit Tests

```typescript
// tests/components/YourComponent.test.tsx
import { render, screen } from '@testing-library/react';
import { YourComponent } from '@/components/YourComponent';

describe('YourComponent', () => {
  it('renders correctly', () => {
    render(<YourComponent>Test content</YourComponent>);
    expect(screen.getByText('Test content')).toBeInTheDocument();
  });
});
```

### API Tests

```typescript
// tests/api/your-endpoint.test.ts
import { GET } from '@/app/api/your-endpoint/route';

describe('/api/your-endpoint', () => {
  it('returns success', async () => {
    const response = await GET(
      new Request('http://localhost:3000/api/your-endpoint')
    );
    const data = await response.json();
    expect(data.data).toBe('success');
  });
});
```

## 🔧 Configuration

### Environment Variables

Add new environment variables to:

1. `.env.example` - Template for other developers
2. `.env.local` - Your local development values
3. `next.config.ts` - If needed for build time

### TypeScript

- Add new types to `src/types/`
- Use strict TypeScript configuration
- Enable all strict mode options

### ESLint

- Add new rules to `.eslintrc.json`
- Use TypeScript-aware rules
- Enable accessibility rules

## 📦 Dependencies

### Adding Dependencies

```bash
# Production dependency
npm install package-name

# Development dependency
npm install -D package-name
```

### Updating Dependencies

```bash
# Check for updates
npm outdated

# Update all dependencies
npm update

# Update specific dependency
npm install package-name@latest
```

## 🐛 Debugging

### VS Code Debugging

1. Set breakpoints in your code
2. Press F5 to start debugging
3. Use the debug console to inspect variables

### Browser DevTools

- Use React DevTools extension
- Use Next.js DevTools
- Check Network tab for API calls

### Logging

```typescript
// Use structured logging
console.log('User action:', { userId, action, timestamp: new Date() });
```

## 🚀 Performance

### Bundle Analysis

```bash
npm run analyze
```

### Performance Monitoring

- Use React DevTools Profiler
- Monitor Core Web Vitals
- Use Lighthouse for audits

## 🔒 Security

### Input Validation

```typescript
import { z } from 'zod';

const schema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
});

const validatedData = schema.parse(inputData);
```

### Environment Variables

- Never commit `.env` files
- Use strong, unique secrets
- Rotate secrets regularly

## 📚 Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://react.dev)
- [TypeScript Documentation](https://www.typescriptlang.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Testing Library Documentation](https://testing-library.com/docs)
