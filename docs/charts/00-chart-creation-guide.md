# Chart Creation Guide - Complete Documentation

## Overview

This document provides a comprehensive guide on how all charts in the PRADA Financial Dashboard were created, including detailed parameters, data structures, and methodology. This is essential for MBA students to understand the technical aspects of financial data visualization.

## Table of Contents

1. [Chart Creation Methodology](#chart-creation-methodology)
2. [Chart 1: Revenue, EBIT, and Net Income Line Chart](#chart-1-revenue-ebit-and-net-income-line-chart)
3. [Chart 2: Income Statement Bar Chart](#chart-2-income-statement-bar-chart)
4. [Chart 3: Balance Sheet Bar Chart](#chart-3-balance-sheet-bar-chart)
5. [Chart 4: Profitability Ratios Line Chart](#chart-4-profitability-ratios-line-chart)
6. [Chart 5: Leverage and ROE Line Chart](#chart-5-leverage-and-roe-line-chart)
7. [Chart 6: Cash Flow Bar Chart](#chart-6-cash-flow-bar-chart)
8. [Chart 7: Growth Trends Line Chart](#chart-7-growth-trends-line-chart)
9. [Common Questions About Chart Creation](#common-questions-about-chart-creation)

---

## Chart Creation Methodology

### Step 1: Data Preparation
1. **Data Source**: PRADA Group Annual Reports (2021, 2022, 2023)
2. **Data Extraction**: Financial figures extracted and organized in Excel
3. **Data Structure**: Created TypeScript data file (`pradaFinancials.ts`) with structured data
4. **Data Validation**: Cross-checked all figures against annual reports

### Step 2: Data Processing
1. **Calculations**: Performed in Excel and TypeScript
   - Growth rates: `((Current - Previous) / Previous) × 100`
   - Ratios: `(Numerator / Denominator) × 100`
   - Margins: `(Profit / Revenue) × 100`
2. **Data Transformation**: Converted raw data into chart-ready format
3. **Data Aggregation**: Grouped related metrics for comparison

### Step 3: Chart Selection
- **Line Charts**: For trends over time (revenue, profit, ratios)
- **Bar Charts**: For comparing categories (income statement items, cash flows)
- **Multi-series Charts**: For comparing multiple metrics simultaneously

### Step 4: Visualization
- **Library**: Recharts (React charting library)
- **Styling**: Custom colors matching PRADA brand (black, gold, gray)
- **Interactivity**: Hover tooltips, responsive design
- **Accessibility**: Proper labels, legends, and color contrast

---

## Chart 1: Revenue, EBIT, and Net Income Line Chart

### Location
Financial Overview Section

### Purpose
Show the main financial performance metrics (Revenue, EBIT, Net Income) over 3 years to visualize growth trends.

### Data Structure
```typescript
const chartData = [
  { year: 2021, "Net Revenues": 3365.7, "EBIT": 489.5, "Net Income": 294.3 },
  { year: 2022, "Net Revenues": 4200.7, "EBIT": 776.0, "Net Income": 465.2 },
  { year: 2023, "Net Revenues": 4726.4, "EBIT": 1061.7, "Net Income": 671.0 }
];
```

### Chart Parameters

#### Chart Type
- **Type**: Multi-line chart
- **Library**: Recharts LineChart component
- **Dimensions**: Full width, height: 400px (default)

#### X-Axis Configuration
- **Data Key**: `"year"`
- **Type**: Category (discrete years)
- **Label**: "Year"
- **Tick Format**: Shows 2021, 2022, 2023
- **Domain**: Automatic (based on data)

#### Y-Axis Configuration
- **Type**: Number (continuous scale)
- **Label**: "EUR (Million)"
- **Domain**: Automatic (0 to max value + padding)
- **Tick Format**: Formatted as currency (€3,000M, €4,000M, etc.)
- **Unit**: EUR Millions

#### Data Series Configuration

**Series 1: Net Revenues**
- **Data Key**: `"Net Revenues"`
- **Name**: "Net Revenues"
- **Color**: `#0B0B0B` (Prada Black)
- **Stroke Width**: 3px
- **Dot**: Enabled, radius 5px
- **Animation**: Fade-in with delay

**Series 2: EBIT**
- **Data Key**: `"EBIT"`
- **Name**: "EBIT"
- **Color**: `#D4AF37` (Prada Gold)
- **Stroke Width**: 3px
- **Dot**: Enabled, radius 5px, gold color
- **Animation**: Fade-in with delay

**Series 3: Net Income**
- **Data Key**: `"Net Income"`
- **Name**: "Net Income"
- **Color**: `#666666` (Gray)
- **Stroke Width**: 3px
- **Dot**: Enabled, radius 5px
- **Animation**: Fade-in with delay

#### Tooltip Configuration
- **Format**: Shows all three values on hover
- **Label Formatter**: Shows year
- **Value Formatter**: Currency format (€X,XXX.XM)
- **Background**: White with shadow
- **Border**: Gold accent

#### Legend Configuration
- **Position**: Top-right
- **Icon Type**: Line
- **Layout**: Horizontal
- **Style**: Custom Prada styling

### Calculations Performed

1. **Data Extraction**: From `financialData` array
2. **No Transformations**: Direct mapping from data
3. **Formatting**: Currency formatting applied in tooltip

### Visual Design Choices

- **Color Hierarchy**: Black (revenue - most important), Gold (EBIT - key metric), Gray (net income)
- **Line Thickness**: 3px for visibility
- **Dot Size**: 5px radius for interactivity
- **Spacing**: Adequate padding for readability

### Questions That Can Be Asked

1. **"How was this chart created?"**
   - Data extracted from annual reports → Organized in TypeScript → Mapped to Recharts LineChart → Styled with Prada colors

2. **"What parameters control the chart appearance?"**
   - Chart type (LineChart), data keys, colors, stroke width, dot radius, axis labels, tooltip format

3. **"How do you add a new year to this chart?"**
   - Add new data point to `financialData` array with year, revenues, EBIT, net income → Chart automatically updates

4. **"What if I want to change the colors?"**
   - Modify the `color` property in the `dataKeys` array passed to LineChart component

5. **"How is the Y-axis scale determined?"**
   - Recharts automatically calculates based on data range, with padding for readability

6. **"Can I add more metrics to this chart?"**
   - Yes, add new data key to chartData and new series configuration to dataKeys array

7. **"What format is the data in?"**
   - Array of objects, each with `year` and metric values in EUR millions

---

## Chart 2: Income Statement Bar Chart

### Location
Income Statement Section

### Purpose
Compare different income statement items (Revenue, COGS, Gross Margin, Expenses, EBIT, Net Income) across 3 years using grouped bars.

### Data Structure
```typescript
const chartData = [
  {
    year: 2021,
    "Net Revenues": 3365.7,
    "Cost of Goods Sold": 816.0,
    "Gross Margin": 2549.7,
    "Operating Expenses": 2060.2,
    "EBIT": 489.5,
    "Net Income": 294.3
  },
  // ... 2022, 2023
];
```

### Chart Parameters

#### Chart Type
- **Type**: Grouped bar chart
- **Library**: Recharts BarChart component
- **Dimensions**: Full width, height: 400px

#### X-Axis Configuration
- **Data Key**: `"year"`
- **Type**: Category
- **Label**: "Year"
- **Tick Format**: 2021, 2022, 2023
- **Bar Category Gap**: 20% (space between year groups)

#### Y-Axis Configuration
- **Type**: Number
- **Label**: "EUR (Million)"
- **Domain**: [0, 'dataMax + 10%'] (auto with padding)
- **Tick Format**: Currency format
- **Unit**: EUR Millions

#### Data Series Configuration

**Series 1: Net Revenues**
- **Data Key**: `"Net Revenues"`
- **Name**: "Net Revenues"
- **Color**: `#0B0B0B` (Black)
- **Bar Width**: Automatic
- **StackId**: None (grouped)

**Series 2: Cost of Goods Sold**
- **Data Key**: `"Cost of Goods Sold"`
- **Name**: "Cost of Goods Sold"
- **Color**: `#666666` (Gray)
- **Bar Width**: Automatic

**Series 3: Gross Margin**
- **Data Key**: `"Gross Margin"`
- **Name**: "Gross Margin"
- **Color**: `#D4AF37` (Gold)
- **Bar Width**: Automatic

**Series 4: Operating Expenses**
- **Data Key**: `"Operating Expenses"`
- **Name**: "Operating Expenses"
- **Color**: `#999999` (Light Gray)
- **Bar Width**: Automatic

**Series 5: EBIT**
- **Data Key**: `"EBIT"`
- **Name**: "EBIT"
- **Color**: `#D4AF37` (Gold)
- **Bar Width**: Automatic

**Series 6: Net Income**
- **Data Key**: `"Net Income"`
- **Name**: "Net Income"
- **Color**: `#0B0B0B` (Black)
- **Bar Width**: Automatic

#### Bar Configuration
- **Bar Category Gap**: 20% (space between year groups)
- **Bar Size**: Automatic (responsive)
- **Radius**: 4px (rounded corners)
- **Animation**: Fade-in with stagger delay

#### Tooltip Configuration
- **Format**: Shows all values for hovered year
- **Label**: Year
- **Value Format**: Currency (€X,XXX.XM)
- **Background**: White with gold border

### Calculations Performed

1. **Gross Margin**: `Revenue - COGS = Gross Margin`
2. **EBIT**: `Gross Margin - Operating Expenses = EBIT`
3. **Net Income**: From annual reports (after interest, taxes)

### Visual Design Choices

- **Grouped Layout**: All bars for same year grouped together
- **Color Coding**: Different colors for different item types
- **Bar Order**: Revenue (tallest) to Net Income (shortest) shows profit waterfall
- **Spacing**: Adequate gap between year groups for clarity

### Questions That Can Be Asked

1. **"How are the bars grouped?"**
   - Bars are grouped by year. All 6 bars (Revenue, COGS, Gross Margin, Expenses, EBIT, Net Income) appear together for each year.

2. **"What determines bar height?"**
   - The value of each metric in EUR millions. Taller bar = larger value.

3. **"How do you change bar colors?"**
   - Modify the `color` property in each series configuration in the `dataKeys` array.

4. **"Can I make this a stacked bar chart instead?"**
   - Yes, add `stackId: "stack1"` to all series. This would show cumulative values.

5. **"What's the difference between grouped and stacked?"**
   - **Grouped**: Bars side-by-side (current) - good for comparing individual items
   - **Stacked**: Bars on top of each other - good for showing totals

6. **"How is the Y-axis maximum determined?"**
   - Automatically by Recharts based on the highest value in the data, with 10% padding.

7. **"What if I want to add another income statement item?"**
   - Add the data to chartData array and add new series configuration to dataKeys.

---

## Chart 3: Balance Sheet Bar Chart

### Location
Balance Sheet Section

### Purpose
Compare Assets, Equity, and Debt across 3 years to show financial position and capital structure.

### Data Structure
```typescript
const chartData = [
  {
    year: 2021,
    "Total Assets": 6959.0,
    "Total Equity": 3128.6,
    "Debt": 3830.4  // Calculated as Assets - Equity
  },
  // ... 2022, 2023
];
```

### Chart Parameters

#### Chart Type
- **Type**: Grouped bar chart
- **Library**: Recharts BarChart component
- **Dimensions**: Full width, height: 400px

#### X-Axis Configuration
- **Data Key**: `"year"`
- **Type**: Category
- **Label**: "Year"
- **Bar Category Gap**: 20%

#### Y-Axis Configuration
- **Type**: Number
- **Label**: "EUR (Million)"
- **Domain**: [0, 'dataMax + 10%']
- **Format**: Currency

#### Data Series Configuration

**Series 1: Total Assets**
- **Data Key**: `"Total Assets"`
- **Name**: "Total Assets"
- **Color**: `#0B0B0B` (Black)
- **Bar Width**: Automatic

**Series 2: Total Equity**
- **Data Key**: `"Total Equity"`
- **Name**: "Total Equity"
- **Color**: `#D4AF37` (Gold)
- **Bar Width**: Automatic

**Series 3: Debt**
- **Data Key**: `"Debt"`
- **Name**: "Debt"
- **Color**: `#666666` (Gray)
- **Bar Width**: Automatic

### Calculations Performed

1. **Debt Calculation**: `Debt = Total Assets - Total Equity`
2. **Validation**: Ensured `Assets = Equity + Debt` (accounting equation)

### Visual Design Choices

- **Color Coding**: Black (assets - total), Gold (equity - owners), Gray (debt)
- **Bar Relationship**: Assets bar should equal Equity + Debt bars combined
- **Grouped Layout**: Easy comparison across years

### Questions That Can Be Asked

1. **"How is Debt calculated?"**
   - Debt = Total Assets - Total Equity. This uses the fundamental accounting equation.

2. **"Why do Assets bars equal Equity + Debt?"**
   - Because of the accounting equation: Assets = Equity + Debt. This must always balance.

3. **"What if Assets don't equal Equity + Debt?"**
   - That would be an error! The equation must always balance. Our calculation ensures this.

4. **"How do you verify the data is correct?"**
   - Check that Assets = Equity + Debt for each year. Also cross-reference with annual reports.

5. **"Can I show this as a stacked chart?"**
   - Yes, but it would show Equity + Debt stacked, which equals Assets. Grouped is clearer for comparison.

---

## Chart 4: Profitability Ratios Line Chart

### Location
Ratios Section

### Purpose
Show profitability margins (Gross, EBIT, Net) as percentages over time to visualize margin expansion.

### Data Structure
```typescript
const chartData = [
  {
    year: 2021,
    "Gross Margin %": 75.7,
    "EBIT Margin %": 14.5,
    "Net Margin %": 8.8
  },
  // ... 2022, 2023
];
```

### Chart Parameters

#### Chart Type
- **Type**: Multi-line chart
- **Library**: Recharts LineChart component
- **Dimensions**: Full width, height: 350px
- **Special**: Percentage values

#### X-Axis Configuration
- **Data Key**: `"year"`
- **Type**: Category
- **Label**: "Year"

#### Y-Axis Configuration
- **Type**: Number
- **Label**: "%"
- **Domain**: [0, 100] (percentages)
- **Tick Format**: Shows 0%, 20%, 40%, 60%, 80%, 100%
- **Unit**: Percentage

#### Data Series Configuration

**Series 1: Gross Margin %**
- **Data Key**: `"Gross Margin %"`
- **Name**: "Gross Margin %"
- **Color**: `#0B0B0B` (Black)
- **Stroke Width**: 3px

**Series 2: EBIT Margin %**
- **Data Key**: `"EBIT Margin %"`
- **Name**: "EBIT Margin %"
- **Color**: `#D4AF37` (Gold)
- **Stroke Width**: 3px

**Series 3: Net Margin %**
- **Data Key**: `"Net Margin %"`
- **Name**: "Net Margin %"
- **Color**: `#666666` (Gray)
- **Stroke Width**: 3px

### Calculations Performed

1. **Gross Margin %**: `(Gross Margin / Net Revenues) × 100`
2. **EBIT Margin %**: `(EBIT / Net Revenues) × 100`
3. **Net Margin %**: `(Net Income / Net Revenues) × 100`

### Special Configuration

- **isPercentage**: true (special formatting flag)
- **Y-axis Domain**: Fixed at [0, 100] for percentage scale
- **Tooltip Format**: Shows "%" suffix

### Questions That Can Be Asked

1. **"How are percentages calculated?"**
   - Each margin = (Profit Item / Revenue) × 100. For example, EBIT Margin = (EBIT / Revenue) × 100.

2. **"Why is the Y-axis 0-100%?"**
   - Because margins are percentages. 100% would mean all revenue becomes profit (impossible, but shows scale).

3. **"What does it mean if lines are close together?"**
   - It means expenses are low relative to revenue. The gap between Gross and Net margin shows total expenses.

4. **"How do you add a new margin ratio?"**
   - Calculate the ratio, add to chartData, add new series to dataKeys array.

5. **"Why are all lines going up?"**
   - Excellent! It means all margins are improving - PRADA is becoming more profitable.

---

## Chart 5: Leverage and ROE Line Chart

### Location
Ratios Section

### Purpose
Show financial leverage (Debt-to-Equity) and capital efficiency (ROE) over time.

### Data Structure
```typescript
const chartData = [
  {
    year: 2021,
    "Debt-to-Equity %": 122.5,  // (Debt / Equity) × 100
    "ROE %": 9.4  // (Net Income / Equity) × 100
  },
  // ... 2022, 2023
];
```

### Chart Parameters

#### Chart Type
- **Type**: Multi-line chart
- **Library**: Recharts LineChart component
- **Dimensions**: Full width, height: 350px

#### X-Axis Configuration
- **Data Key**: `"year"`
- **Type**: Category

#### Y-Axis Configuration
- **Type**: Number
- **Label**: "%"
- **Domain**: Automatic (different scales for each metric)
- **Format**: Percentage

#### Data Series Configuration

**Series 1: Debt-to-Equity %**
- **Data Key**: `"Debt-to-Equity %"`
- **Name**: "Debt-to-Equity %"
- **Color**: `#0B0B0B` (Black)
- **Stroke Width**: 3px

**Series 2: ROE %**
- **Data Key**: `"ROE %"`
- **Name**: "Return on Equity %"
- **Color**: `#D4AF37` (Gold)
- **Stroke Width**: 3px

### Calculations Performed

1. **Debt-to-Equity %**: `(Total Debt / Total Equity) × 100`
2. **ROE %**: `(Net Income / Total Equity) × 100`

### Questions That Can Be Asked

1. **"How is Debt-to-Equity calculated?"**
   - (Total Debt / Total Equity) × 100. Shows how much debt relative to equity.

2. **"How is ROE calculated?"**
   - (Net Income / Total Equity) × 100. Shows return on shareholders' investment.

3. **"Why are these two metrics on the same chart?"**
   - They both measure financial health: Debt-to-Equity shows risk, ROE shows efficiency.

4. **"What's a good Debt-to-Equity ratio?"**
   - Depends on industry. For luxury fashion, below 150% is generally healthy. PRADA is in good range.

5. **"What's a good ROE?"**
   - 15%+ is excellent, 10-15% is good. PRADA's is improving toward these levels.

---

## Chart 6: Cash Flow Bar Chart

### Location
Cash Flows Section

### Purpose
Compare three types of cash flow (Operating, Investing, Financing) across 3 years.

### Data Structure
```typescript
const chartData = [
  {
    year: 2021,
    "Operating CF": 650.0,
    "Investing CF": -200.0,  // Negative = cash outflow
    "Financing CF": -150.0
  },
  // ... 2022, 2023
];
```

### Chart Parameters

#### Chart Type
- **Type**: Grouped bar chart
- **Library**: Recharts BarChart component
- **Dimensions**: Full width, height: 400px

#### X-Axis Configuration
- **Data Key**: `"year"`
- **Type**: Category

#### Y-Axis Configuration
- **Type**: Number
- **Label**: "EUR (Million)"
- **Domain**: Automatic (includes negative values)
- **Format**: Currency (can show negative)

#### Data Series Configuration

**Series 1: Operating Cash Flow**
- **Data Key**: `"Operating CF"`
- **Name**: "Operating Cash Flow"
- **Color**: `#0B0B0B` (Black) - positive
- **Bar Width**: Automatic

**Series 2: Investing Cash Flow**
- **Data Key**: `"Investing CF"`
- **Name**: "Investing Cash Flow"
- **Color**: `#666666` (Gray) - usually negative
- **Bar Width**: Automatic

**Series 3: Financing Cash Flow**
- **Data Key**: `"Financing CF"`
- **Name**: "Financing Cash Flow"
- **Color**: `#D4AF37` (Gold)
- **Bar Width**: Automatic

### Special Considerations

- **Negative Values**: Bars below zero axis (investing, financing usually negative)
- **Color Coding**: Different colors help distinguish cash flow types
- **Zero Line**: Important reference point shown

### Questions That Can Be Asked

1. **"Why are some bars below zero?"**
   - Negative values (cash outflows) are shown below the zero line. This is normal for investing and financing cash flows.

2. **"How do you show negative values?"**
   - Recharts automatically handles negative values by extending bars below the zero axis.

3. **"What does positive Operating Cash Flow mean?"**
   - Excellent! It means PRADA is generating cash from operations - the core business is making money.

4. **"Why is Investing Cash Flow negative?"**
   - Normal! It means PRADA is spending money on assets (stores, equipment) - investing in growth.

5. **"How do you calculate cash flow?"**
   - From cash flow statements in annual reports. Operating = cash from business, Investing = cash for assets, Financing = cash from/for loans.

---

## Chart 7: Growth Trends Line Chart

### Location
Trends Section

### Purpose
Show year-over-year growth rates for Revenue and Net Income to visualize growth momentum.

### Data Structure
```typescript
const chartData = [
  {
    year: 2021,
    "Revenue Growth %": 0,  // No previous year to compare
    "Net Income Growth %": 0
  },
  {
    year: 2022,
    "Revenue Growth %": 24.8,  // ((4200.7 - 3365.7) / 3365.7) × 100
    "Net Income Growth %": 58.1
  },
  {
    year: 2023,
    "Revenue Growth %": 12.5,
    "Net Income Growth %": 44.2
  }
];
```

### Chart Parameters

#### Chart Type
- **Type**: Multi-line chart
- **Library**: Recharts LineChart component
- **Dimensions**: Full width, height: 400px

#### X-Axis Configuration
- **Data Key**: `"year"`
- **Type**: Category

#### Y-Axis Configuration
- **Type**: Number
- **Label**: "Growth %"
- **Domain**: [-10, 'dataMax + 10%'] (allows for negative growth)
- **Format**: Percentage with "%" suffix
- **Zero Line**: Shown as reference

#### Data Series Configuration

**Series 1: Revenue Growth %**
- **Data Key**: `"Revenue Growth %"`
- **Name**: "Revenue Growth %"
- **Color**: `#0B0B0B` (Black)
- **Stroke Width**: 3px

**Series 2: Net Income Growth %**
- **Data Key**: `"Net Income Growth %"`
- **Name**: "Net Income Growth %"
- **Color**: `#D4AF37` (Gold)
- **Stroke Width**: 3px

### Calculations Performed

1. **Revenue Growth %**: `((Current Year Revenue - Previous Year Revenue) / Previous Year Revenue) × 100`
2. **Net Income Growth %**: `((Current Year Net Income - Previous Year Net Income) / Previous Year Net Income) × 100`
3. **2021 Values**: Set to 0 (no previous year for comparison)

### Questions That Can Be Asked

1. **"How is growth rate calculated?"**
   - ((Current Value - Previous Value) / Previous Value) × 100. This gives percentage change.

2. **"Why is 2021 growth 0%?"**
   - Because 2021 is the baseline year - there's no previous year to compare to. Growth calculations start from 2022.

3. **"What does 24.8% growth mean?"**
   - Revenue grew by 24.8% from 2021 to 2022. That means 2022 revenue is 24.8% larger than 2021.

4. **"Why is Net Income growth higher than Revenue growth?"**
   - Excellent sign! It means PRADA is becoming more efficient - profit is growing faster than sales, showing improved profitability.

5. **"What if growth is negative?"**
   - That would mean decline. The chart would show bars/lines below zero. PRADA shows all positive growth ✅

6. **"How do you add CAGR (Compound Annual Growth Rate)?"**
   - Calculate: `((Final Value / Initial Value)^(1/Years) - 1) × 100`. For 2021-2023: ((4726.4/3365.7)^(1/2) - 1) × 100 = ~18.5%

---

## Common Questions About Chart Creation

### General Questions

1. **"What software/tools were used to create these charts?"**
   - **Primary**: Recharts library (React-based)
   - **Data Preparation**: Microsoft Excel
   - **Development**: TypeScript/React
   - **Styling**: Tailwind CSS

2. **"How long did it take to create all charts?"**
   - Data collection: 2-3 hours
   - Data processing: 1-2 hours
   - Chart implementation: 3-4 hours
   - Styling and refinement: 2-3 hours
   - **Total**: ~8-12 hours

3. **"What data format is required?"**
   - Array of objects, each representing a time period (year)
   - Each object contains metric names as keys and values as numbers
   - Example: `[{year: 2021, revenue: 3365.7, ebit: 489.5}, ...]`

4. **"How do you ensure chart accuracy?"**
   - Cross-reference all data with annual reports
   - Verify calculations manually
   - Check that relationships hold (e.g., Assets = Equity + Debt)
   - Test with known values

5. **"Can charts be exported?"**
   - Yes, Recharts supports export to PNG/SVG
   - Can be added with export functionality
   - Currently charts are interactive web visualizations

6. **"How are colors chosen?"**
   - Based on PRADA brand colors:
   - Black (#0B0B0B): Primary, important metrics
   - Gold (#D4AF37): Key metrics, highlights
   - Gray (#666666): Secondary metrics

7. **"What makes a good financial chart?"**
   - **Clarity**: Easy to understand
   - **Accuracy**: Correct data and calculations
   - **Relevance**: Shows important metrics
   - **Visual Appeal**: Professional, branded design
   - **Interactivity**: Hover tooltips, responsive

8. **"How do you handle missing data?"**
   - All data points are available for 2021-2023
   - If data missing, would show as null/undefined
   - Chart would handle gracefully (skip point or show gap)

9. **"Can you add more years?"**
   - Yes! Add new data points to the array
   - Charts automatically update
   - Ensure data structure matches existing format

10. **"What's the difference between line and bar charts?"**
    - **Line Charts**: Best for trends over time, continuous data
    - **Bar Charts**: Best for comparing categories, discrete data
    - **Choice depends on**: What story you want to tell

### Technical Questions

11. **"What are the Recharts component props?"**
    - `data`: Array of data objects
    - `dataKeys`: Array of series configurations
    - `xAxisKey`: Key for X-axis data
    - `yAxisLabel`: Y-axis label text
    - `height`: Chart height in pixels
    - `isPercentage`: Boolean for percentage formatting

12. **"How do you customize tooltips?"**
    - Use Recharts `Tooltip` component
    - Custom `formatter` function for value formatting
    - Custom `labelFormatter` for label formatting
    - Styling via `contentStyle` prop

13. **"How do you add animations?"**
    - Recharts has built-in animations
    - Can control via `animationBegin`, `animationDuration`
    - Framer Motion used for component-level animations

14. **"How is responsiveness handled?"**
    - Charts are wrapped in responsive containers
    - Recharts automatically adjusts to container size
    - Breakpoints handled via Tailwind CSS

15. **"What if I want to change chart type?"**
    - Modify the component (LineChart → BarChart or vice versa)
    - Adjust data structure if needed
    - Update styling accordingly

### Data Questions

16. **"Where does the data come from?"**
    - PRADA Group Annual Reports (2021, 2022, 2023)
    - Official investor relations website
    - Audited financial statements

17. **"How do you verify data accuracy?"**
    - Cross-check with original annual reports
    - Verify calculations manually
    - Ensure relationships hold (accounting equations)
    - Check for rounding errors

18. **"What if annual report data changes?"**
    - Update the `pradaFinancials.ts` file
    - Recalculate all derived metrics
    - Charts automatically reflect changes

19. **"How are estimated values handled?"**
    - Some values (like operating expenses) are estimated
    - Clearly marked in code comments
    - Based on available data and industry norms
    - Disclosed in Notes & Methodology section

20. **"Can you add forecast/projection data?"**
    - Yes, add future years to data array
    - Use different styling (dashed lines, different colors)
    - Clearly label as projections
    - Include assumptions and methodology

### Design Questions

21. **"How do you choose chart colors?"**
    - Match PRADA brand identity
    - Ensure accessibility (contrast ratios)
    - Use consistent color scheme across all charts
    - Gold for key metrics, black for primary, gray for secondary

22. **"What font is used?"**
    - Headings: Playfair Display (serif, luxury feel)
    - Body: Inter (sans-serif, readability)
    - Chart labels use system fonts for clarity

23. **"How do you ensure charts are accessible?"**
    - Proper color contrast
    - Clear labels and legends
    - Tooltip information
    - Responsive design for all devices

24. **"Can charts be printed?"**
    - Yes, charts render correctly when printing
    - Colors may vary in grayscale printing
    - Consider print-specific styling

---

## Chart Creation Checklist

When creating a new chart:

- [ ] Data extracted and verified
- [ ] Data structure defined (TypeScript interface)
- [ ] Calculations performed and verified
- [ ] Chart type selected (line vs. bar)
- [ ] Colors assigned (Prada brand colors)
- [ ] Axes configured (labels, formats, domains)
- [ ] Tooltips configured (formats, styling)
- [ ] Legend added (if multiple series)
- [ ] Responsive design tested
- [ ] Accessibility checked
- [ ] Documentation updated

---

## Best Practices

1. **Data First**: Always verify data accuracy before visualization
2. **Clarity Over Complexity**: Simple charts are often better
3. **Consistent Styling**: Use same colors, fonts, styles across charts
4. **Proper Labels**: Always label axes and include units
5. **Tooltips**: Provide detailed information on hover
6. **Responsive**: Ensure charts work on all screen sizes
7. **Accessible**: Consider colorblind users, provide text alternatives
8. **Documented**: Explain data sources and calculations

---

## Conclusion

This guide provides comprehensive documentation on chart creation for the PRADA Financial Dashboard. All charts follow consistent methodology: data extraction → processing → visualization → styling. Understanding these parameters helps MBA students appreciate both the financial analysis and the technical implementation of data visualization.

For questions about specific charts, refer to the individual chart documentation files in the `docs/charts/` directory.

