"use client";

import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from "recharts";

const data = [
  {
    keyword: "#fashion",
    total: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    keyword: "#Voronezh",
    total: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    keyword: "#YoChats",
    total: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    keyword: "#Love",
    total: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    keyword: "#Obama",
    total: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    keyword: "#Bober",
    total: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    keyword: "#Moscow",
    total: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    keyword: "#football",
    total: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    keyword: "#ocean",
    total: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    keyword: "#vercel",
    total: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    keyword: "#covid",
    total: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    keyword: "#cats",
    total: Math.floor(Math.random() * 5000) + 1000,
  },
];

export const KeywordsBarChart = () => {
  return (
    <ResponsiveContainer width="100%" height={350}>
      <BarChart data={data}>
        <XAxis
          dataKey="keyword"
          stroke="#888888"
          fontSize={12}
          tickLine={false}
          axisLine={false}
        />
        <YAxis
          stroke="#888888"
          fontSize={12}
          tickLine={false}
          axisLine={false}
          label={{ value: "Mentions", angle: -90, position: "insideLeft" }}
          tickFormatter={(value) => `${value}`}
        />
        <Bar
          dataKey="total"
          fill="#f87315"
          radius={[4, 4, 0, 0]}
        />
      </BarChart>
    </ResponsiveContainer>
  );
};
