"use client";

import {
  LineChart as RechartsLineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { motion } from "framer-motion";

interface LineChartProps {
  data: any[];
  dataKeys: { key: string; name: string; color: string }[];
  xAxisKey: string;
  yAxisLabel?: string;
  height?: number;
  delay?: number;
  isPercentage?: boolean;
}

export default function LineChart({
  data,
  dataKeys,
  xAxisKey,
  yAxisLabel,
  height = 400,
  delay = 0,
  isPercentage = false,
}: LineChartProps) {
  const formatYAxis = (value: number) => {
    if (isPercentage) {
      return `${value.toFixed(1)}%`;
    }
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
        <RechartsLineChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
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
            formatter={(value: number) =>
              isPercentage
                ? `${value.toFixed(1)}%`
                : `€${value.toFixed(1)}M`
            }
          />
          <Legend
            wrapperStyle={{ fontSize: "12px" }}
            iconType="line"
          />
          {dataKeys.map((item, index) => (
            <Line
              key={item.key}
              type="monotone"
              dataKey={item.key}
              name={item.name}
              stroke={item.color}
              strokeWidth={2}
              dot={{ fill: item.color, r: 4 }}
              activeDot={{ r: 6 }}
            />
          ))}
        </RechartsLineChart>
      </ResponsiveContainer>
    </motion.div>
  );
}

