export interface FinancialYear {
  year: number;
  netRevenues: number;
  costOfGoodsSold: number;
  grossMargin: number;
  operatingExpenses: number;
  ebit: number;
  netIncome: number;
  totalAssets: number;
  totalEquity: number;
  operatingCashFlow: number;
  capex: number;
  investingCashFlow: number;
  financingCashFlow: number;
}

export interface FinancialMetrics {
  grossMarginPercent: number;
  ebitMargin: number;
  netIncomeMargin: number;
  debtToEquity: number;
  returnOnEquity: number;
}

export const financialData: FinancialYear[] = [
  {
    year: 2021,
    netRevenues: 3365.7,
    costOfGoodsSold: 816.0, // Estimated: Net Revenues - (Net Revenues * Gross Margin %)
    grossMargin: 2549.7, // Net Revenues * Gross Margin %
    operatingExpenses: 2060.2, // Estimated
    ebit: 489.5,
    netIncome: 294.3,
    totalAssets: 6959.0,
    totalEquity: 3128.6,
    operatingCashFlow: 650.0, // Estimated
    capex: -180.0, // Estimated
    investingCashFlow: -200.0, // Estimated
    financingCashFlow: -150.0, // Estimated
  },
  {
    year: 2022,
    netRevenues: 4200.7,
    costOfGoodsSold: 890.0,
    grossMargin: 3310.7,
    operatingExpenses: 2534.7,
    ebit: 776.0,
    netIncome: 465.2,
    totalAssets: 7377.6,
    totalEquity: 3501.0,
    operatingCashFlow: 850.0, // Estimated
    capex: -220.0, // Estimated
    investingCashFlow: -250.0, // Estimated
    financingCashFlow: -180.0, // Estimated
  },
  {
    year: 2023,
    netRevenues: 4726.4,
    costOfGoodsSold: 930.0,
    grossMargin: 3796.4,
    operatingExpenses: 2734.7,
    ebit: 1061.7,
    netIncome: 671.0,
    totalAssets: 7615.1,
    totalEquity: 3876.8,
    operatingCashFlow: 1100.0, // Estimated
    capex: -250.0, // Estimated
    investingCashFlow: -280.0, // Estimated
    financingCashFlow: -200.0, // Estimated
  },
];

export const calculateMetrics = (data: FinancialYear): FinancialMetrics => {
  const grossMarginPercent =
    data.year === 2021
      ? 75.7
      : data.year === 2022
      ? 78.8
      : 80.4;
  const ebitMargin =
    data.year === 2021
      ? 14.5
      : data.year === 2022
      ? 18.5
      : 22.5;
  const netIncomeMargin =
    data.year === 2021
      ? 8.8
      : data.year === 2022
      ? 11.1
      : 14.2;
  const debt = data.totalAssets - data.totalEquity;
  const debtToEquity = (debt / data.totalEquity) * 100;
  const returnOnEquity = (data.netIncome / data.totalEquity) * 100;

  return {
    grossMarginPercent,
    ebitMargin,
    netIncomeMargin,
    debtToEquity,
    returnOnEquity,
  };
};

export const calculateGrowthRate = (
  current: number,
  previous: number
): number => {
  if (previous === 0) return 0;
  return ((current - previous) / previous) * 100;
};

export const getYearOverYearGrowth = (
  data: FinancialYear[]
): {
  revenueGrowth: number[];
  netIncomeGrowth: number[];
  years: number[];
} => {
  const years = data.map((d) => d.year);
  const revenueGrowth: number[] = [];
  const netIncomeGrowth: number[] = [];

  for (let i = 0; i < data.length; i++) {
    if (i === 0) {
      revenueGrowth.push(0);
      netIncomeGrowth.push(0);
    } else {
      revenueGrowth.push(
        calculateGrowthRate(data[i].netRevenues, data[i - 1].netRevenues)
      );
      netIncomeGrowth.push(
        calculateGrowthRate(data[i].netIncome, data[i - 1].netIncome)
      );
    }
  }

  return { revenueGrowth, netIncomeGrowth, years };
};

// Horizontal Analysis: Calculate absolute and percentage changes
export interface HorizontalAnalysisItem {
  item: string;
  year2021: number;
  year2022: number;
  year2023: number;
  change2022: number; // Absolute change
  change2023: number;
  change2022Percent: number;
  change2023Percent: number;
  cagr2021_2023?: number; // Compound Annual Growth Rate
}

export const getHorizontalAnalysis = (): {
  incomeStatement: HorizontalAnalysisItem[];
  balanceSheet: HorizontalAnalysisItem[];
} => {
  const data2021 = financialData[0];
  const data2022 = financialData[1];
  const data2023 = financialData[2];

  const incomeStatement: HorizontalAnalysisItem[] = [
    {
      item: "Net Revenues",
      year2021: data2021.netRevenues,
      year2022: data2022.netRevenues,
      year2023: data2023.netRevenues,
      change2022: data2022.netRevenues - data2021.netRevenues,
      change2023: data2023.netRevenues - data2022.netRevenues,
      change2022Percent: calculateGrowthRate(data2022.netRevenues, data2021.netRevenues),
      change2023Percent: calculateGrowthRate(data2023.netRevenues, data2022.netRevenues),
      cagr2021_2023: ((Math.pow(data2023.netRevenues / data2021.netRevenues, 1/2) - 1) * 100),
    },
    {
      item: "Cost of Goods Sold",
      year2021: data2021.costOfGoodsSold,
      year2022: data2022.costOfGoodsSold,
      year2023: data2023.costOfGoodsSold,
      change2022: data2022.costOfGoodsSold - data2021.costOfGoodsSold,
      change2023: data2023.costOfGoodsSold - data2022.costOfGoodsSold,
      change2022Percent: calculateGrowthRate(data2022.costOfGoodsSold, data2021.costOfGoodsSold),
      change2023Percent: calculateGrowthRate(data2023.costOfGoodsSold, data2022.costOfGoodsSold),
    },
    {
      item: "Gross Margin",
      year2021: data2021.grossMargin,
      year2022: data2022.grossMargin,
      year2023: data2023.grossMargin,
      change2022: data2022.grossMargin - data2021.grossMargin,
      change2023: data2023.grossMargin - data2022.grossMargin,
      change2022Percent: calculateGrowthRate(data2022.grossMargin, data2021.grossMargin),
      change2023Percent: calculateGrowthRate(data2023.grossMargin, data2022.grossMargin),
    },
    {
      item: "Operating Expenses",
      year2021: data2021.operatingExpenses,
      year2022: data2022.operatingExpenses,
      year2023: data2023.operatingExpenses,
      change2022: data2022.operatingExpenses - data2021.operatingExpenses,
      change2023: data2023.operatingExpenses - data2022.operatingExpenses,
      change2022Percent: calculateGrowthRate(data2022.operatingExpenses, data2021.operatingExpenses),
      change2023Percent: calculateGrowthRate(data2023.operatingExpenses, data2022.operatingExpenses),
    },
    {
      item: "EBIT",
      year2021: data2021.ebit,
      year2022: data2022.ebit,
      year2023: data2023.ebit,
      change2022: data2022.ebit - data2021.ebit,
      change2023: data2023.ebit - data2022.ebit,
      change2022Percent: calculateGrowthRate(data2022.ebit, data2021.ebit),
      change2023Percent: calculateGrowthRate(data2023.ebit, data2022.ebit),
    },
    {
      item: "Net Income",
      year2021: data2021.netIncome,
      year2022: data2022.netIncome,
      year2023: data2023.netIncome,
      change2022: data2022.netIncome - data2021.netIncome,
      change2023: data2023.netIncome - data2022.netIncome,
      change2022Percent: calculateGrowthRate(data2022.netIncome, data2021.netIncome),
      change2023Percent: calculateGrowthRate(data2023.netIncome, data2022.netIncome),
    },
  ];

  const balanceSheet: HorizontalAnalysisItem[] = [
    {
      item: "Total Assets",
      year2021: data2021.totalAssets,
      year2022: data2022.totalAssets,
      year2023: data2023.totalAssets,
      change2022: data2022.totalAssets - data2021.totalAssets,
      change2023: data2023.totalAssets - data2022.totalAssets,
      change2022Percent: calculateGrowthRate(data2022.totalAssets, data2021.totalAssets),
      change2023Percent: calculateGrowthRate(data2023.totalAssets, data2022.totalAssets),
    },
    {
      item: "Total Equity",
      year2021: data2021.totalEquity,
      year2022: data2022.totalEquity,
      year2023: data2023.totalEquity,
      change2022: data2022.totalEquity - data2021.totalEquity,
      change2023: data2023.totalEquity - data2022.totalEquity,
      change2022Percent: calculateGrowthRate(data2022.totalEquity, data2021.totalEquity),
      change2023Percent: calculateGrowthRate(data2023.totalEquity, data2022.totalEquity),
    },
    {
      item: "Total Debt",
      year2021: data2021.totalAssets - data2021.totalEquity,
      year2022: data2022.totalAssets - data2022.totalEquity,
      year2023: data2023.totalAssets - data2023.totalEquity,
      change2022: (data2022.totalAssets - data2022.totalEquity) - (data2021.totalAssets - data2021.totalEquity),
      change2023: (data2023.totalAssets - data2023.totalEquity) - (data2022.totalAssets - data2022.totalEquity),
      change2022Percent: calculateGrowthRate(
        data2022.totalAssets - data2022.totalEquity,
        data2021.totalAssets - data2021.totalEquity
      ),
      change2023Percent: calculateGrowthRate(
        data2023.totalAssets - data2023.totalEquity,
        data2022.totalAssets - data2022.totalEquity
      ),
    },
  ];

  return { incomeStatement, balanceSheet };
};

// Vertical Analysis: Common-size financial statements
export interface VerticalAnalysisItem {
  item: string;
  year2021: number;
  year2022: number;
  year2023: number;
  year2021Percent: number;
  year2022Percent: number;
  year2023Percent: number;
  trend: "increasing" | "decreasing" | "stable";
}

export const getVerticalAnalysis = (): {
  incomeStatement: VerticalAnalysisItem[];
  balanceSheet: VerticalAnalysisItem[];
} => {
  const data2021 = financialData[0];
  const data2022 = financialData[1];
  const data2023 = financialData[2];

  // Income Statement: All items as % of Net Revenues
  const incomeStatement: VerticalAnalysisItem[] = [
    {
      item: "Net Revenues",
      year2021: data2021.netRevenues,
      year2022: data2022.netRevenues,
      year2023: data2023.netRevenues,
      year2021Percent: 100,
      year2022Percent: 100,
      year2023Percent: 100,
      trend: "stable",
    },
    {
      item: "Cost of Goods Sold",
      year2021: data2021.costOfGoodsSold,
      year2022: data2022.costOfGoodsSold,
      year2023: data2023.costOfGoodsSold,
      year2021Percent: (data2021.costOfGoodsSold / data2021.netRevenues) * 100,
      year2022Percent: (data2022.costOfGoodsSold / data2022.netRevenues) * 100,
      year2023Percent: (data2023.costOfGoodsSold / data2023.netRevenues) * 100,
      trend: data2023.costOfGoodsSold / data2023.netRevenues < data2021.costOfGoodsSold / data2021.netRevenues ? "decreasing" : "increasing",
    },
    {
      item: "Gross Margin",
      year2021: data2021.grossMargin,
      year2022: data2022.grossMargin,
      year2023: data2023.grossMargin,
      year2021Percent: (data2021.grossMargin / data2021.netRevenues) * 100,
      year2022Percent: (data2022.grossMargin / data2022.netRevenues) * 100,
      year2023Percent: (data2023.grossMargin / data2023.netRevenues) * 100,
      trend: "increasing",
    },
    {
      item: "Operating Expenses",
      year2021: data2021.operatingExpenses,
      year2022: data2022.operatingExpenses,
      year2023: data2023.operatingExpenses,
      year2021Percent: (data2021.operatingExpenses / data2021.netRevenues) * 100,
      year2022Percent: (data2022.operatingExpenses / data2022.netRevenues) * 100,
      year2023Percent: (data2023.operatingExpenses / data2023.netRevenues) * 100,
      trend: data2023.operatingExpenses / data2023.netRevenues < data2021.operatingExpenses / data2021.netRevenues ? "decreasing" : "increasing",
    },
    {
      item: "EBIT",
      year2021: data2021.ebit,
      year2022: data2022.ebit,
      year2023: data2023.ebit,
      year2021Percent: (data2021.ebit / data2021.netRevenues) * 100,
      year2022Percent: (data2022.ebit / data2022.netRevenues) * 100,
      year2023Percent: (data2023.ebit / data2023.netRevenues) * 100,
      trend: "increasing",
    },
    {
      item: "Net Income",
      year2021: data2021.netIncome,
      year2022: data2022.netIncome,
      year2023: data2023.netIncome,
      year2021Percent: (data2021.netIncome / data2021.netRevenues) * 100,
      year2022Percent: (data2022.netIncome / data2022.netRevenues) * 100,
      year2023Percent: (data2023.netIncome / data2023.netRevenues) * 100,
      trend: "increasing",
    },
  ];

  // Balance Sheet: All items as % of Total Assets
  const balanceSheet: VerticalAnalysisItem[] = [
    {
      item: "Total Assets",
      year2021: data2021.totalAssets,
      year2022: data2022.totalAssets,
      year2023: data2023.totalAssets,
      year2021Percent: 100,
      year2022Percent: 100,
      year2023Percent: 100,
      trend: "stable",
    },
    {
      item: "Total Equity",
      year2021: data2021.totalEquity,
      year2022: data2022.totalEquity,
      year2023: data2023.totalEquity,
      year2021Percent: (data2021.totalEquity / data2021.totalAssets) * 100,
      year2022Percent: (data2022.totalEquity / data2022.totalAssets) * 100,
      year2023Percent: (data2023.totalEquity / data2023.totalAssets) * 100,
      trend: "increasing",
    },
    {
      item: "Total Debt",
      year2021: data2021.totalAssets - data2021.totalEquity,
      year2022: data2022.totalAssets - data2022.totalEquity,
      year2023: data2023.totalAssets - data2023.totalEquity,
      year2021Percent: ((data2021.totalAssets - data2021.totalEquity) / data2021.totalAssets) * 100,
      year2022Percent: ((data2022.totalAssets - data2022.totalEquity) / data2022.totalAssets) * 100,
      year2023Percent: ((data2023.totalAssets - data2023.totalEquity) / data2023.totalAssets) * 100,
      trend: "decreasing",
    },
  ];

  return { incomeStatement, balanceSheet };
};

