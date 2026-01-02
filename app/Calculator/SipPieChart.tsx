"use client";

import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";

interface SipPieChartProps {
  investedAmount: number;
  returns: number;
}

const COLORS = ["#0b2b7f", "#4f9943"];

export default function SipPieChart({
  investedAmount,
  returns,
}: SipPieChartProps) {
  const data = [
    { name: "Invested", value: investedAmount },
    { name: "Returns", value: returns },
  ];

  const formatCurrency = (value: number) =>
    `₹ ${Math.round(value).toLocaleString("en-IN")}`;

  return (
    <div className="w-full h-72">
      <ResponsiveContainer>
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={70}
            outerRadius={100}
            paddingAngle={4}
            dataKey="value"
          >
            {data.map((_, index) => (
              <Cell key={index} fill={COLORS[index]} />
            ))}
          </Pie>

          <Tooltip
            formatter={(value) =>
              typeof value === "number" ? formatCurrency(value) : value
            }
          />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}
