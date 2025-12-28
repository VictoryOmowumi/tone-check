# ToneCheck - Scalable Architecture Documentation

## 📁 Recommended Folder Structure (Feature-Based)

This project follows a **feature-based** folder structure designed to scale for a SaaS product. Components, hooks, and utilities are organized by domain logic rather than just file type.

```
tone-check/
├── app/                          # Next.js 15 App Router
│   ├── (auth)/                   # Route group for authentication
│   │   ├── login/
│   │   │   └── page.tsx
│   │   └── signup/
│   │       └── page.tsx
│   │
│   ├── (dashboard)/              # Route group for authenticated views
│   │   ├── analysis/
│   │   │   ├── [id]/
│   │   │   │   └── page.tsx    # Individual analysis view
│   │   │   └── page.tsx         # Analysis list
│   │   ├── history/
│   │   │   └── page.tsx
│   │   └── settings/
│   │       └── page.tsx
│   │
│   ├── api/                      # API routes
│   │   ├── analyze/
│   │   │   └── route.ts         # POST /api/analyze
│   │   ├── rewrite/
│   │   │   └── route.ts         # POST /api/rewrite
│   │   └── history/
│   │       └── route.ts         # GET /api/history
│   │
│   ├── globals.css               # Global styles with Tailwind
│   ├── layout.tsx                # Root layout
│   └── page.tsx                  # Home/landing page
│
├── components/                   # Shared UI components
│   ├── layout/                   # Layout components
│   │   ├── main-layout.tsx      # Main app shell
│   │   ├── sidebar.tsx          # Navigation sidebar
│   │   └── header.tsx           # Header component (future)
│   │
│   ├── ui/                       # Reusable UI primitives
│   │   ├── button.tsx
│   │   ├── input.tsx
│   │   ├── textarea.tsx
│   │   ├── card.tsx
│   │   ├── badge.tsx
│   │   └── dialog.tsx
│   │
│   ├── analysis/                 # Analysis feature components
│   │   ├── tone-input.tsx       # Input area for text
│   │   ├── tone-result.tsx      # Display analysis results
│   │   ├── rewrite-options.tsx  # Rewrite suggestions
│   │   └── tone-badge.tsx       # Tone indicator badge
│   │
│   └── history/                  # History feature components
│       ├── history-list.tsx
│       ├── history-item.tsx
│       └── history-filters.tsx
│
├── features/                     # Feature-specific logic (future)
│   ├── analysis/
│   │   ├── hooks/
│   │   │   ├── useAnalyze.ts   # Custom hook for analysis
│   │   │   └── useRewrite.ts   # Custom hook for rewrite
│   │   ├── types.ts             # Analysis-specific types
│   │   └── utils.ts             # Analysis utilities
│   │
│   ├── history/
│   │   ├── hooks/
│   │   │   └── useHistory.ts
│   │   ├── types.ts
│   │   └── utils.ts
│   │
│   └── auth/
│       ├── hooks/
│       │   └── useAuth.ts
│       ├── types.ts
│       └── utils.ts
│
├── lib/                          # Shared utilities and configs
│   ├── utils.ts                  # Utility functions (cn, etc.)
│   ├── api-client.ts             # API client wrapper (future)
│   ├── constants.ts              # App constants (future)
│   └── validations.ts            # Validation schemas (future)
│
├── hooks/                        # Global custom hooks (future)
│   ├── useLocalStorage.ts
│   ├── useDebounce.ts
│   └── useMediaQuery.ts
│
├── types/                        # Global TypeScript types
│   ├── index.ts                  # Re-export all types
│   ├── api.ts                    # API request/response types
│   └── models.ts                 # Data models
│
├── public/                       # Static assets (future)
│   ├── icons/
│   └── images/
│
├── styles/                       # Additional styles (future)
│   └── themes.css
│
├── config/                       # Configuration files (future)
│   ├── site.ts                   # Site metadata
│   └── navigation.ts             # Navigation structure
│
├── types.ts                      # Shared TypeScript types
├── system-prompt.txt             # AI system prompt for tone analysis
├── README.md                     # Project documentation
├── ARCHITECTURE.md               # This file
├── next.config.js                # Next.js configuration (to be added)
├── tailwind.config.ts            # Tailwind configuration (to be added)
├── tsconfig.json                 # TypeScript configuration (to be added)
├── package.json                  # Dependencies (to be added)
└── .env.local                    # Environment variables (to be added)
```

## 🎨 Design System

### Color Palette (Gemini-Inspired Dark Mode)
```css
--background: #131314       /* Deep black background */
--surface: #1E1F20         /* Slightly lighter surfaces */
--border: rgba(255,255,255,0.1)  /* Subtle borders */
--text-primary: #E2E8F0    /* Primary text (slate-200) */
--text-secondary: #94A3B8  /* Secondary text (slate-400) */
--text-muted: #64748B      /* Muted text (slate-500) */
--accent: #FFFFFF          /* White accent for CTAs */
```

### Component Architecture Principles

1. **Separation of Concerns**: Layout components are separated from feature components
2. **Composition over Configuration**: Build complex UIs from simple, reusable pieces
3. **Accessibility First**: All interactive elements include proper ARIA labels and semantic HTML
4. **Type Safety**: Full TypeScript coverage with strict mode
5. **Performance**: Use React Server Components by default, client components only when needed

## 🏗️ Technical Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript (strict mode)
- **Styling**: Tailwind CSS 3.x
- **Icons**: Lucide React
- **State Management**: React hooks + Context API (for global state)
- **Class Management**: clsx + tailwind-merge
- **API**: Next.js API Routes
- **Deployment**: Vercel (recommended)

## 📦 Scalability Considerations

### Why Feature-Based Structure?

1. **Co-location**: Related code lives together, making it easier to understand and maintain
2. **Bounded Contexts**: Each feature is a mini-application with its own logic, components, and tests
3. **Team Scalability**: Multiple teams can work on different features without conflicts
4. **Code Splitting**: Natural boundaries for code splitting and lazy loading
5. **Easier Refactoring**: Changes to one feature rarely affect others

### Growth Path

As the application grows:
1. Move feature logic from `components/` to `features/`
2. Add `__tests__/` folders alongside feature code
3. Extract shared UI patterns into `components/ui/`
4. Create feature-specific API routes under `app/api/`
5. Add middleware for auth, analytics, etc.

## 🔐 Security & Best Practices

- Environment variables for API keys (never commit `.env.local`)
- Input sanitization for user-generated content
- Rate limiting on API routes
- Proper error handling and logging
- TypeScript strict mode enabled
- ESLint and Prettier for code quality

## 🚀 Future Enhancements

- User authentication (NextAuth.js)
- Database integration (Prisma + PostgreSQL)
- Real-time updates (Server-Sent Events or WebSockets)
- Analytics and usage tracking
- A/B testing infrastructure
- Multi-language support (i18n)
- Progressive Web App (PWA) features
- API versioning

## 📝 Naming Conventions

- **Files**: kebab-case (e.g., `tone-input.tsx`)
- **Components**: PascalCase (e.g., `ToneInput`)
- **Hooks**: camelCase with `use` prefix (e.g., `useAnalyze`)
- **Types/Interfaces**: PascalCase (e.g., `ToneAnalysisResult`)
- **Constants**: UPPER_SNAKE_CASE (e.g., `MAX_INPUT_LENGTH`)
- **CSS Classes**: Tailwind utility classes

## 🧪 Testing Strategy (Future)

```
tone-check/
├── features/
│   └── analysis/
│       ├── __tests__/
│       │   ├── useAnalyze.test.ts
│       │   └── utils.test.ts
│       └── components/
│           └── __tests__/
│               └── ToneInput.test.tsx
```

- **Unit Tests**: Jest + React Testing Library
- **Integration Tests**: Playwright or Cypress
- **E2E Tests**: Playwright
- **API Tests**: Supertest or native fetch

---

**Last Updated**: December 2025
**Version**: 1.0.0
