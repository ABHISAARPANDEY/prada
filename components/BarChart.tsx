"use client";

import {
  BarChart as RechartsBarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { motion } from "framer-motion";

interface BarChartProps {
  data: any[];
  dataKeys: { key: string; name: string; color: string }[];
  xAxisKey: string;
  yAxisLabel?: string;
  height?: number;
  stacked?: boolean;
  delay?: number;
}

export default function BarChart({
  data,
  dataKeys,
  xAxisKey,
  yAxisLabel,
  height = 400,
  stacked = false,
  delay = 0,
}: BarChartProps) {
  const formatYAxis = (value: number) => {
    if (value >= 1000) {
      return `€${(value / 1000).toFixed(1)}B`;
    }
    return `€${value.toFixed(0)}M`;
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      className="w-full bg-white rounded-lg p-6 border border-prada-light/20"
    >
      <ResponsiveContainer width="100%" height={height}>
        <RechartsBarChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#E5E5E5" />
          <XAxis
            dataKey={xAxisKey}
            stroke="#666"
            style={{ fontSize: "12px" }}
          />
          <YAxis
            stroke="#666"
            style={{ fontSize: "12px" }}
            tickFormatter={formatYAxis}
            label={
              yAxisLabel
                ? {
                    value: yAxisLabel,
                    angle: -90,
                    position: "insideLeft",
                    style: { fontSize: "12px", fill: "#666" },
                  }
                : undefined
            }
          />
          <Tooltip
            contentStyle={{
              backgroundColor: "#0B0B0B",
              border: "1px solid #333",
              borderRadius: "8px",
              color: "#fff",
            }}
            formatter={(value: number) => `€${value.toFixed(1)}M`}
          />
          <Legend wrapperStyle={{ fontSize: "12px" }} />
          {dataKeys.map((item) => (
            <Bar
              key={item.key}
              dataKey={item.key}
              name={item.name}
              fill={item.color}
              radius={[4, 4, 0, 0]}
              stackId={stacked ? "stack" : undefined}
            />
          ))}
        </RechartsBarChart>
      </ResponsiveContainer>
    </motion.div>
  );
}

