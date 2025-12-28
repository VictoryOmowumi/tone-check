# ToneCheck 🎯

**Analyze and rewrite your tone with clarity and confidence.**

A Next.js 15 application that helps you check the tone of your messages and provides professional rewrites. Built with a Gemini-inspired dark mode interface.

![Version](https://img.shields.io/badge/version-0.1.0-blue)
![Next.js](https://img.shields.io/badge/Next.js-15-black)
![TypeScript](https://img.shields.io/badge/TypeScript-5.7-blue)
![Tailwind](https://img.shields.io/badge/Tailwind-3.4-38bdf8)

---

## ✨ Features

- 🎨 **Gemini-Inspired UI** - Dark mode interface (#131314) with elegant surfaces and subtle borders
- 📱 **Fully Responsive** - Collapsible sidebar that adapts to mobile, tablet, and desktop
- ⚡ **Built with Next.js 15** - Leveraging the latest App Router and React 19
- 🎯 **Feature-Based Architecture** - Scalable folder structure designed for SaaS growth
- ♿ **Accessibility First** - Semantic HTML with proper ARIA labels
- 🎭 **Tone Analysis** - AI-powered tone detection and rewriting suggestions

---

## 🚀 Quick Start

### Prerequisites

- Node.js 18.17 or later
- npm 9.0 or later

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/VictoryOmowumi/tone-check.git
cd tone-check
```

2. **Install dependencies**
```bash
npm install
```

3. **Set up environment variables**
```bash
cp .env.example .env.local
# Edit .env.local with your configuration
```

4. **Run the development server**
```bash
npm run dev
```

5. **Open your browser**
Navigate to [http://localhost:3000](http://localhost:3000)

---

## 📁 Project Structure

See [ARCHITECTURE.md](./ARCHITECTURE.md) for detailed documentation on the folder structure and scalability considerations.

```
tone-check/
├── app/                     # Next.js App Router
│   ├── globals.css         # Global styles with Tailwind
│   ├── layout.tsx          # Root layout
│   └── page.tsx            # Home page with input area
├── components/             # Shared UI components
│   └── layout/             # Layout components
│       ├── main-layout.tsx # Main app shell
│       └── sidebar.tsx     # Navigation sidebar
├── lib/                    # Shared utilities
│   └── utils.ts            # Helper functions (cn, etc.)
├── types.ts                # TypeScript type definitions
└── system-prompt.txt       # AI system prompt for analysis
```

---

## 🛠️ Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org/) with App Router
- **Language**: [TypeScript](https://www.typescriptlang.org/) (strict mode)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) 3.4
- **Icons**: [Lucide React](https://lucide.dev/)
- **Class Management**: [clsx](https://github.com/lukeed/clsx) + [tailwind-merge](https://github.com/dcastil/tailwind-merge)

---

## 📜 Available Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
npm run type-check   # Run TypeScript type checking
```

---

## 🎨 Design System

### Color Palette (Dark Mode)
```css
Background:    #131314  /* Deep black background */
Surface:       #1E1F20  /* Slightly lighter surfaces */
Border:        rgba(255,255,255,0.1)  /* Subtle borders */
Text Primary:  #E2E8F0  /* Slate 200 */
Text Secondary:#94A3B8  /* Slate 400 */
Accent:        #FFFFFF  /* White for CTAs */
```

### Component Features
- **Sidebar**: Collapsible navigation with "New Analysis" button, history list, and settings
- **Main Content**: Centered greeting, large textarea input, and action buttons
- **Responsive**: Sidebar slides out/hides on mobile with overlay

---

## 📝 Development Guidelines

### Code Style
- Use TypeScript strict mode
- Follow the feature-based folder structure
- Keep components small and focused
- Use semantic HTML elements
- Include proper accessibility attributes

### Naming Conventions
- **Files**: kebab-case (e.g., `tone-input.tsx`)
- **Components**: PascalCase (e.g., `ToneInput`)
- **Hooks**: camelCase with `use` prefix (e.g., `useAnalyze`)
- **Types**: PascalCase (e.g., `ToneAnalysisResult`)

---

## 🔧 Configuration Files

- `package.json` - Dependencies and scripts
- `tsconfig.json` - TypeScript configuration
- `tailwind.config.ts` - Tailwind CSS configuration
- `next.config.js` - Next.js configuration
- `postcss.config.js` - PostCSS configuration
- `.eslintrc.json` - ESLint rules

---

## 📚 Documentation

- **[ARCHITECTURE.md](./ARCHITECTURE.md)** - Detailed folder structure and scalability guide
- **[types.ts](./types.ts)** - TypeScript type definitions for tone analysis
- **[system-prompt.txt](./system-prompt.txt)** - AI system prompt for tone analysis

---

## 🚧 Roadmap

- [ ] Integrate AI API for tone analysis
- [ ] Add user authentication
- [ ] Implement history persistence (database)
- [ ] Add export functionality (PDF, Markdown)
- [ ] Real-time collaboration features
- [ ] Multi-language support
- [ ] Progressive Web App (PWA)
- [ ] Analytics and usage tracking

---

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

## 👤 Author

**Victory Omowumi Balogun**

- GitHub: [@VictoryOmowumi](https://github.com/VictoryOmowumi)

---

## 🙏 Acknowledgments

- Inspired by [Google Gemini](https://gemini.google.com/) interface
- Built with [Next.js](https://nextjs.org/)
- Icons by [Lucide](https://lucide.dev/)

---

**Ready to check your tone?** 🚀
