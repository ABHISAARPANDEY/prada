# PRADA Financial Dashboard (2021–2023)

A modern, elegant, responsive web dashboard for PRADA Group Financial Analysis, built with Next.js, TypeScript, and Tailwind CSS.

## Features

- **Premium Design**: Luxury brand-inspired aesthetic with black, white, and gold color palette
- **Comprehensive Financial Analysis**: 
  - Overview with key KPIs
  - Income Statement analysis
  - Balance Sheet visualization
  - Financial Ratios
  - Cash Flow statements
  - Trend Analysis
  - Notes & Methodology
- **Interactive Charts**: Built with Recharts for beautiful data visualization
- **Responsive Design**: Mobile-first approach with collapsible sidebar
- **Smooth Animations**: Framer Motion for elegant transitions
- **Type-Safe**: Full TypeScript support

## Tech Stack

- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **Recharts** (Chart library)
- **Framer Motion** (Animations)
- **Lucide React** (Icons)

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Install dependencies:

```bash
npm install
```

2. Run the development server:

```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
├── app/
│   ├── layout.tsx          # Root layout with fonts
│   ├── page.tsx            # Main dashboard page
│   └── globals.css         # Global styles
├── components/
│   ├── BarChart.tsx        # Bar chart component
│   ├── KpiCard.tsx         # KPI card component
│   ├── LineChart.tsx       # Line chart component
│   ├── Navbar.tsx          # Top navigation bar
│   ├── SectionHeader.tsx   # Section header component
│   └── Sidebar.tsx         # Collapsible sidebar
├── data/
│   └── pradaFinancials.ts  # Financial data and utilities
└── lib/
    └── utils.ts            # Utility functions
```

## Data

The financial data is hardcoded in `data/pradaFinancials.ts` and includes:

- Net Revenues (2021-2023)
- EBIT and Net Income
- Balance Sheet items (Assets, Equity)
- Cash Flow estimates
- Calculated ratios and growth rates

## Customization

### Colors

Edit `tailwind.config.ts` to customize the color palette:

```typescript
colors: {
  prada: {
    black: "#0B0B0B",
    dark: "#111111",
    gold: "#D4AF37",
    // ...
  }
}
```

### Fonts

Fonts are configured in `app/layout.tsx`. Currently using:
- **Playfair Display** (serif) for headings
- **Inter** (sans-serif) for body text

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run format` - Format code with Prettier

## License

This project is for demonstration purposes.

